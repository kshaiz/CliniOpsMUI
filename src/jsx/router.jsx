const $PUBLIC_URL= '/cliniopsmui/?';

const RouterLink = ({
  home: {
    _0: `${$PUBLIC_URL}/`,
  },
  product: {
    _0: `${$PUBLIC_URL}/products/`,
    _1: `${$PUBLIC_URL}/products/#cliniops-connect`,
    _2: `${$PUBLIC_URL}/products/#cliniops-edge`,
    _3: `${$PUBLIC_URL}/products/#cliniops-conduct`,
  },
  service: {
    _0: `${$PUBLIC_URL}/services/`,
    _1: `${$PUBLIC_URL}/services/study-setup/`,
    _2: `${$PUBLIC_URL}/services/clinical-data-management/`,
    _3: `${$PUBLIC_URL}/services/biostatistics-programming/`,
  },
  about: {
    // _0: ${$PUBLIC_URL}`/about/`,
    _1: `${$PUBLIC_URL}/about/mission/`,
    _2: `${$PUBLIC_URL}/about/leadership-team/`,
    _3: `${$PUBLIC_URL}/about/careers/`,
    _3_1: `${$PUBLIC_URL}/about/careers/project-manager/`
  },
  media: {
    _0: `${$PUBLIC_URL}/media/`,
    _1: `${$PUBLIC_URL}/media/newsroom/`,
    _2: `${$PUBLIC_URL}/media/blogs/`,
    _2_1: `${$PUBLIC_URL}/media/blog/diversity-in-clinical-research`
  },
  contact: {
    _0: `${$PUBLIC_URL}/contact/`,
    _1: `${$PUBLIC_URL}/contact/request-quote`,
    _2: `${$PUBLIC_URL}/contact/request-demo/`
    // mailto:info@cliniops.com
  }
});

export default RouterLink;