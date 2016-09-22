import React, {Component, PropTypes} from 'react';
import HomeLink from './HomeLink';

import ShowItem from './introduce/ShowItem';
import Subject from './Subject';
import Ability from './introduce/Ability';
import './home.scss';

const shows = [
  {key:'shows-1',title: '标题1', description: '标题1描述', btnValue: '了解更多1', scrollName:'show1',showItemUrl:'1'},
  {key:'shows-2',title: '标题2', description: '标题2描述', btnValue: '了解更多2', scrollName:'show2',showItemUrl:'2'},
  {key:'shows-3',title: '标题3', description: '标题3描述', btnValue: '了解更多3', scrollName:'show3',showItemUrl:'3'}
];

const abilitys = [
  {key:'abilitys-1',imgPath:'src/assets/logo/logo.png', title:'功能1', infos:['描述1','描述2','描述3','描述4']},
  {key:'abilitys-2',imgPath:'src/assets/logo/logo.png', title:'功能2', infos:['描述1','描述2','描述3','描述4']}
];


/**
 * 系统home
 */
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="home">
        <HomeLink />
        <Subject />
        <Ability abilitys={abilitys} />
        {
          shows.map(
            show=><ShowItem {...show} key={show.key} />
          )
        }
      </div>
    );
  }
}

Home.propTypes = {

};

Home.defaultProps = {

};

export default Home;
