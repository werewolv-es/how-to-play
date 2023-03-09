import React from 'react';
import PropTypes from 'prop-types';
import { Timeline as TrivialTimeline, Event as Event } from 'react-trivial-timeline';

export default function TimelineComponent({ children }: { children: Event }) {
  return(
    <TrivialTimeline lineColor="#337ab7">
      {children}
    </TrivialTimeline>
  )
}

TimelineComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.instanceOf(Event)), 
    PropTypes.instanceOf(Event).isRequired
  ])
}
