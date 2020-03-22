import React, { FC } from 'react';
import { graphql } from 'gatsby';

import { CategoryDetailQuery } from '../../graphql-types';

import Layout from '../components/Layout';
import Checklists from '../components/Checklists';
import TagList from '../components/TagList';
import { getDescription } from '../utils/category';
import Icon from '../components/Icon';
import LinkLightAsAnchor from '../components/links/LinkLight/LinkLightAsAnchor';
import Categories from '../components/Categories/Categories';
import SEO from '../containers/SEO';

import './o-checklists-heading.scss';
import './o-suggest-a-checklist.scss';
import './o-category-detail-section.scss';
import '../containers/TagList/o-page-taglist.scss';
import './o-checklist-categories-section.scss';

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
  const description = getDescription(title);
  const checklistCount = checklists.totalCount;

  const sortedTags = checklists.tags.sort((t1, t2) => t2.totalCount - t1.totalCount);

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div className="o-category-detail-section">
        <div className="o-checklists-heading">
          <h2 className="u-margin-bottom-0">
            {title} ({checklistCount})
          </h2>
          <LinkLightAsAnchor
            className="o-suggest-a-checklist"
            href="https://git.io/JvDaH"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suggest a Checklist{' '}
            <Icon className="o-suggest-a-checklist__icon" name="external-link" ariaHidden />
          </LinkLightAsAnchor>
        </div>
        <div className="row u-margin-top-xsmall">
          <div className="col col--md-6 col--xl-5 u-text-style-large-body">{description}</div>
        </div>
        <TagList
          className="o-page-taglist u-margin-top u-margin-bottom-medium@md-up u-margin-bottom@sm-down"
          tags={sortedTags.map(t => t.tag || '')}
        />
        <Checklists items={checklists.nodes} />
      </div>
      <hr className="u-margin-ends-0 u-color-primary-900" />
      <section className="o-checklist-categories-section">
        <h2 className="u-margin-bottom-medium">Checklist Categories</h2>
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
