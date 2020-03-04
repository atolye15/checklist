import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { CategoryDetailQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import TagList from '../components/TagList';
import { getDescription } from '../utils/category';
// import Categories from '../components/Categories/Categories';
import Icon from '../components/Icon';
import LinkLightAsAnchor from '../components/links/LinkLight/LinkLightAsAnchor';

import './o-checklists-heading.scss';
import './o-suggest-a-checklist.scss';
import Categories from '../components/Categories/Categories';

interface CategoryTemplateContext {
  category: string;
}

interface Props {
  data: CategoryDetailQuery;
  pageContext: CategoryTemplateContext;
}

const CategoryTemplate: FC<Props> = ({ data, pageContext }) => {
  const { checklists, categories } = data;

  const title = pageContext.category;
  const checklistCount = checklists.totalCount;

  const sortedTags = checklists.tags.sort((t1, t2) => t2.totalCount - t1.totalCount);

  return (
    <Layout>
      <div className="u-padding-ends-xlarge">
        <div className="o-checklists-heading">
          <h2 className="u-margin-bottom-0">
            {title} ({checklistCount})
          </h2>
          <LinkLightAsAnchor
            className="o-suggest-a-checklist"
            href="https://github.com/atolye15/checklist/blob/master/CONTRIBUTING.md"
          >
            Suggest a Checklist{' '}
            <Icon className="o-suggest-a-checklist__icon" name="external-link" ariaHidden />
          </LinkLightAsAnchor>
        </div>
        <div className="row">
          <div className="col col--lg-6 u-text-style-large-body">{getDescription(title)}</div>
        </div>
        <TagList className="u-margin-ends" tags={sortedTags.map(t => t.tag || '')} />
        <Checklists items={checklists.nodes} />
      </div>
      <hr className="u-margin-ends-0 u-color-primary-900" />
      <section className="u-padding-ends-2xlarge">
        <h2 className="u-margin-bottom">Checklist Categories</h2>
        <Categories categories={categories} current={title} />
      </section>
    </Layout>
  );
};

export const pageQuery = graphql`
  query CategoryDetail($category: String!) {
    checklists: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      nodes {
        ...Checklist
      }

      tags: group(field: frontmatter___tags) {
        tag: fieldValue
        totalCount
      }
    }

    categories: allMarkdownRemark(limit: 1000) {
      ...CategoryList
    }
  }
`;

export default CategoryTemplate;
