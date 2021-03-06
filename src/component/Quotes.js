import React from 'react';
import clsx from 'clsx';
import IconRefresh from '../assets/desktop/icon-refresh.svg';

export default function Quotes({ isActive, isStaticData }) {
  const quotesContainerClasses = clsx('quotes-container', { 'hide': isActive });
  return (
    <div className={quotesContainerClasses}>
      <div className="quotes">
        <p className="quotes__body t-quotes">“The science of operations, as derived from mathematics more especially, is a science of itself, and has its own abstract truth and value.”</p>
        <p className="quotes__author t-quotes-author">Ada Lovelace</p>
      </div>
      <button className="btn btn--refresh">
        <span className="sr-only">Refresh button</span>
        <img src={IconRefresh} alt="refresh icon"/>
      </button>
    </div>
  )
}