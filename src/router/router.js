import intro from 'components/content/intro/intro';
import video from 'components/content/video/video';
import hot from 'components/content/hot/hot';
import society from 'components/content/society/society';
import entertainment from 'components/content/entertainment/entertainment';
import military from 'components/content/military/military';
import tech from 'components/content/tech/tech';

const routes = [
  {
    path: '/intro',
    component: intro,
    meta: {
      title: '推荐内容'
    }
  },
  {
    path: '/video',
    component: video,
    meta: {
      title: '视频内容'
    }
  },
  {
    path: '/hot',
    component: hot,
    meta: {
      title: '热点新闻'
    }
  },
  {
    path: '/society',
    component: society,
    meta: {
      title: '社会动态'
    }
  },
  {
    path: '/entertainment',
    component: entertainment,
    meta: {
      title: '娱乐新闻'
    }
  },
  {
    path: '/military',
    component: military,
    meta: {
      title: '军事战略'
    }
  },
  {
    path: '/tech',
    component: tech,
    meta: {
      title: '科技生活'
    }
  },
  {
    path: '/',
    component: intro
  }
];

export default routes;

