import cx from 'classnames'
import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
// import G6 from '@antv/g6'

import store from '@/stores'

// const antVData = {
//   id: '200000004',
//   tooltip: 'Thing',
//   label: '组织架构',
//   description: null,
//   descriptionZh: null,
//   depth: 3,
//   subTypeCount: 9,
//   status: 0,
//   children: [
//     {
//       id: '500000061',
//       tooltip: 'Person',
//       label: '老板/老板娘',
//       description: null,
//       descriptionZh: null,
//       depth: 1,
//       subTypeCount: 1,
//       status: 0,
//       children: [
//         {
//           id: '707000085',
//           tooltip: 'FilmPerson',
//           label: '老板',
//           description: null,
//           descriptionZh: null,
//           depth: 5,
//           subTypeCount: 3,
//           status: 1,
//           children: [
//             {
//               id: '707000090',
//               tooltip: 'FilmDirector',
//               label: `老餐饮人，开面馆出身，
//               白手起家。扮猪吃老⻁式企业家，
//               看似大智若愚实则有些东⻄，
//               餐饮圈人脉极广，常年混迹于各大餐饮圈宴会、沙⻰`,
//               description: null,
//               descriptionZh: null,
//               depth: 0,
//               subTypeCount: 0,
//               status: 1,
//               children: [],
//             },
//             {
//               id: '707000091',
//               tooltip: 'FilmWriter',
//               label: '把握品牌大方向，具有核心决策权',
//               description: null,
//               descriptionZh: null,
//               depth: 4,
//               subTypeCount: 0,
//               status: 1,
//               children: [],
//             },
//           ],
//         },
//         {
//           id: '707000086',
//           tooltip: 'MusicPerson',
//           label: '老板娘',
//           description: null,
//           descriptionZh: null,
//           depth: 17,
//           subTypeCount: 2,
//           status: 1,
//           children: [
//             {
//               id: '7070000919',
//               tooltip: 'FilmWriter',
//               label: `精明干练，主要企业文化与企业管理方面的事务，
//               同时是财务流程的最终审批人`,
//               description: null,
//               descriptionZh: null,
//               depth: 4,
//               subTypeCount: 0,
//               status: 1,
//               children: [],
//             },
//           ],
//         },
//       ],
//     },
//     {
//       id: '707000128',
//       tooltip: 'Film',
//       label: '分门店店长',
//       description: null,
//       descriptionZh: null,
//       depth: 4,
//       subTypeCount: 0,
//       status: 1,
//       children: [
//         {
//           id: '7070032328',
//           tooltip: 'Comedy',
//           label: `每家分店各有一名主要负责的店⻓，
//           有比较高的自治权，可以调动⻔店资源、申请款项。
//           涉及单⻔店营销基本店⻓确定拍板，就能走流程开搞。`,
//           description: null,
//           descriptionZh: null,
//           depth: 4,
//           operation: 'C',
//           subTypeCount: 0,
//           status: 1,
//           children: [],
//         },
//       ],
//     }
//   ],
// };

const minWidth = 60

const BaseConfig = {
  nameFontSize: 12,
  childCountWidth: 22,
  countMarginLeft: 0,
  itemPadding: 16,
  nameMarginLeft: 4,
  rootPadding: 18,
}
interface CaseDetailProps {
  onGoBack(): void
}

const CaseDetail: React.FC<CaseDetailProps> = props => {
  const { onGoBack } = props
  const ref = React.useRef(null)
  // let graph = null;

  // useEffect(() => {
  //   if (!graph) {
  //     graph = new G6.TreeGraph({
  //       container: ReactDOM.findDOMNode(ref.current),
  //       // width: ref.current.width,
  //       width: 1200,
  //       height: 300,
  //       modes: {
  //         default: [
  //           {
  //             type: 'collapse-expand',
  //           },
  //           'drag-canvas',
  //           'zoom-canvas',
  //         ],
  //       },
  //       defaultNode: {
  //         type: 'treeNode',
  //         anchorPoints: [
  //           [0, 0.5],
  //           [1, 0.5],
  //         ],
  //       },
  //       defaultEdge: {
  //         type: 'smooth',
  //       },
  //       layout: {
  //         type: 'compactBox',
  //         direction: 'LR',
  //         getId: function getId(d) {
  //           return d.id;
  //         },
  //         getHeight: function getHeight() {
  //           return 16;
  //         },
  //         getWidth: function getWidth(d) {
  //           const labelWidth = G6.Util.getTextSize(d.label, BaseConfig.nameFontSize)[0];
  //           const width =
  //             BaseConfig.itemPadding +
  //             BaseConfig.nameMarginLeft +
  //             labelWidth +
  //             BaseConfig.rootPadding +
  //             BaseConfig.childCountWidth;
  //           return width;
  //         },
  //         getVGap: function getVGap() {
  //           return 15;
  //         },
  //         getHGap: function getHGap() {
  //           return 30;
  //         },
  //       },
  //     });

  //     graph.data(antVData);
  //     graph.render();
  //     graph.fitView();
  //   }
  // }, [])

  return (
    <div className='case-detail'>
      <div className='card business-card'>
        <div className='img-business'>
          <img
            className='img'
            src='https://joeschmoe.io/api/v1/random'
            alt=''
          />
          <div className='business-info'>
            <h1 className='business-name'>
              {store.dataS?.currentCase?.name || '门店'}
            </h1>
            <div className='description'>
              {store.dataS?.currentCase?.description || '门店描述'}
            </div>
          </div>
        </div>
        <div className='bread-crumb'>
          <a
            style={{ marginRight: 5 }}
            className='action-btn'
            onClick={onGoBack}
          >
            返回
          </a>
        </div>
      </div>

      <h2>案例背景</h2>
      <div className='card' ref={ref}>
        <h3>1:门店背景</h3>
        <p>位置：双流1号线华府大道往前走一百多米蓝润四楼</p>
        <p>面积：大概有30张桌子左右 室内100平左右 室外250平左右</p>
        <p>
          营销：合作再惠会员系统2年，合作前有做过一些抖音 笔记
          小红书的推广，在和再惠合作之前点评运营是请的独立个人运营。
        </p>

        <h3>2:老板架构</h3>
        <p>
          张城（城哥/外貌瘦瘦高高的/主要负责营销板块） 周杰灵
          （周哥/外貌微胖/西昌人）
        </p>

        <h3>3:品牌背景</h3>
        <p>
          城哥和周哥之前都是仁和小院的股东，从仁和小院出来开的这家门店，因为周哥是西昌人，所以就一起做了这家西昌烧烤。
        </p>

        <h3>4:合作时间</h3>
        <p>3月份低接手运营</p>
      </div>

      <h2>案例内容</h2>
      <div className='card'>
        <h3>1:热门榜</h3>

        <h4>①流量</h4>
        <p>
          打破平台遗忘消费者遗忘的状态—接手即做页面更新 提报平台活动等唤醒动作
          做榜单提升即自然流量提升 提升ROS分
        </p>
        <h4>②销量</h4>
        <p>
          通过周边数据以及门店数据，消费者反馈等。修改团购—后期通过线上数据分析进行不定时及时修改（保持良好的线上数据）
          团购图修改（打环境以及消费场景）
        </p>
        <h4>③新增评论</h4>
        <p>
          设置收藏打卡，锦鲤活动，线下话术培训，线上数据盯盘以及反馈
          免费试活动—活动报名/话术培训以及店长沟通/注意事项触达/数据反馈—30天新增48条精选评论，无差评产生。
        </p>

        <h3>2：营销点提炼（为了提升门店点击率转化率）</h3>
        <h4>①入口图</h4>
        <p>
          3月合作前原本使用羊肉汤，点击率8.81→合作后第一版图：有烟火的100%原碳烤，点击率↑8.92→第二版图：小龙虾，点击率↑9.76
          →第三版图：天台烧烤，点击率↑10.53→第四版图：绝美天台，点击率↑10.87
        </p>

        <h4>②商户通5图</h4>

        <p>
          3月合作前原本使用天台夜景→合作后第一版：100%原碳烤看得见的烟与火→第二版：天台风景图→第三版：绝美天台
          （曝光不断增加，购买转化保持在2.8左右，但购买人数从刚开始的单月69人提升到单月450人左右）
        </p>
      </div>
    </div>
  )
}

export default observer(CaseDetail)
