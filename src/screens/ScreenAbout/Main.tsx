'use client'
import React, {Fragment} from 'react';
import HooksAbout from '@/hooks/HooksAbout/Main'
import { Dictionary } from '@/app/[lang]/about/locales/dictionaries';

interface Props {
  dict: Dictionary
}

const ScreenAbout  = ({ dict }: Props) => {
const {state, setState} = HooksAbout()
  return (
    <Fragment>
      <div>{dict?.title}</div>
      {/* Your component code goes here */}
    </Fragment>
  );
};

export default ScreenAbout ;


