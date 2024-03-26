'use client'
import React, {Fragment} from 'react';
import HooksLanding from '@/hooks/HooksLanding/Main'
import { Dictionary } from '@/app/[lang]/landing/locales/dictionaries';

interface Props {
  dict: Dictionary
}

const ScreenLanding  = ({ dict }: Props) => {
const {state, setState} = HooksLanding()
  return (
    <Fragment>
      <div>{dict?.title}</div>
      {/* Your component code goes here */}
    </Fragment>
  );
};

export default ScreenLanding ;


