import React, { FC, useContext, useMemo } from 'react';
import { graphql } from 'gatsby';
import RehypeReact from 'rehype-react';

import { ChecklistDetailQuery } from '../../graphql-types';
import { categoryTheme, Category } from '../utils/category';

import ListItem from '../components/ListItem';
import Layout from '../components/Layout';
import TagList from '../components/TagList';
import Checklist from '../components/Checklist';
import Button from '../components/Button';
import LinkCategory from '../components/links/LinkCategory';
import ButtonAsAnchor from '../components/Button/ButtonAsAnchor';
import Checklists from '../components/Checklists';
import activeChecklistContext from '../context/activeChecklist';

const renderAst = new RehypeReact({
  createElement: React.createElement,
  components: {
    ul: Checklist,
    li: ListItem,
  },
}).Compiler;

interface Props {
  data: ChecklistDetailQuery;
  pageContext: { slug: string };
}

const ChecklistTemplate: FC<Props> = ({ data, pageContext }) => {
  const { setActiveChecklist } = useContext(activeChecklistContext);
  const { markdownRemark, relatedChecklists } = data;

  useMemo(() => {
    if (pageContext.slug) {
      setActiveChecklist(pageContext.slug);
    }
  }, [pageContext.slug, setActiveChecklist]);

  const frontmatter = markdownRemark?.frontmatter;
  const fields = markdownRemark?.fields;

  if (!frontmatter || !frontmatter.title || !frontmatter.tags || !frontmatter.description) {
    return null;
  }

  if (!fields || !fields.categorySlug) {
    return null;
  }

  const html = renderAst(markdownRemark?.htmlAst);

  return (
    <Layout>
      <div className="row u-justify-content-center u-padding-top-xlarge u-padding-bottom-2xlarge">
        <div className="col col--lg-8">
          <LinkCategory category={fields.categorySlug} size="medium">
            {frontmatter.category}
          </LinkCategory>

          <h1 className="u-margin-ends-small">{frontmatter.title}</h1>
          <TagList
            tags={frontmatter.tags as string[]}
            size="small"
            theme={categoryTheme[fields.categorySlug as Category]}
          />
          <p className="u-margin-top u-text-style-large-body u-color-secondary">
            {frontmatter.description}
          </p>

          <div className="u-padding-ends-xlarge">{html}</div>
          <div className="u-display-flex">
            <Button>Reset</Button>
            <ButtonAsAnchor
              theme="secondary"
              href="https://github.com/atolye15/checklist/blob/master/CONTRIBUTING.md"
              className="u-margin-left-small"
              target="_blank"
              rel="noopener noreferrer"
            >
              Improve this Checklist
            </ButtonAsAnchor>
          </div>
        </div>
      </div>
      {relatedChecklists.nodes.length > 0 && (
        <>
          <hr className="u-margin-ends-0 u-color-primary-900" />
          <div className="u-padding-ends-2xlarge">
            <h2 className="u-margin-bottom-medium">Related Checklists</h2>
            <Checklists items={relatedChecklists.nodes} />
          </div>
        </>
      )}
    </Layout>
  );
};

export const pageQuery = graphql`
  query ChecklistDetail($slug: String!, $categorySlug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        tags
        category
        description
      }
      fields {
        categorySlug
      }
    }

    relatedChecklists: allMarkdownRemark(
      limit: 3
      filter: { fields: { slug: { ne: $slug }, categorySlug: { eq: $categorySlug } } }
      sort: { fields: [frontmatter___date], order: [DESC] }
    ) {
      nodes {
        ...Checklist
      }
    }
  }
`;

export default ChecklistTemplate;
