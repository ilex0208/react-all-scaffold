import React, {PropTypes} from 'react';
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import QueueAnim from 'rc-queue-anim';
import AbilityItem from './AbilityItem';

const Ability = props => {
  let {abilitys} = props;
  return (
    <ScrollOverPack
      scrollName='ability' className="content-wrapper page"
      playScale={1} replay
      hideProps={{ image: { reverse: true } }}
    >
      <QueueAnim className="text-wrapper" delay={300} key="text" duration={550} leaveReverse>
        {
          abilitys.map(item => <AbilityItem {...item} key={item.key} />)
        }
      </QueueAnim>
    </ScrollOverPack>
  );
};

Ability.propTypes = {
  abilitys:PropTypes.array
};

export default Ability;
