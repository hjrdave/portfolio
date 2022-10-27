import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Scrollspy from 'react-scrollspy';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { lineNav, listGroupFlush, lineNavActive, listGroupItem, lineNavDot } from './lineNav.module.scss';

interface Props {
  navItems: any[];
}
export default function LineNav({ navItems }: Props) {

  const buildSections = navItems.map((item, index) => {
    return `section-${index + 1}`
  });

  return (
    <>
      <div className={lineNav}>
        <ListGroup variant="flush" className={listGroupFlush}>
          <Scrollspy items={buildSections} currentClassName={lineNavActive}>
            {
              navItems.map((item, index) => {
                return (
                  <ListGroup.Item className={`pt-0 ${listGroupItem}`} key={index}>
                    <div onClick={() => scrollTo(`#section-${index + 1}`)}><div className={`rounded-circle ${lineNavDot}`}></div><small>{item}</small></div>
                  </ListGroup.Item>
                )
              })
            }
          </Scrollspy>
        </ListGroup>
      </div>
    </>
  )
}