/// <reference path="../react-slidez.d.ts"/>
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
const StyledSpan = styled.span`
  width:${props => props.item.skillpoints}%;
  background : hsl(${props => props.item.skillpoints},100%,50%);;
  -moz-animation: ${keyframes`
    0%   { width: 0px; }
    100% { width: ${props => props.item.skillpoints}%; }
  `} 2s ease;
  -webkit-animation: ${keyframes`
    0%   { width: 0px; }
    100% { width: ${props => props.item.skillpoints}%; }
  `} 2s ease;
`;
export default class SkillSlide extends Component {
    constructor() {
        super();
        this.state={

        }
    }
    render(){
        let resumeData = this.props.resumeData;
        return (
            <div className="nine columns main-col">

            <p>
              {resumeData.skillsDescription}
            </p>

            <div className="bars">

              <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return (
                      <li>
                        <StyledSpan className={`bar-expand`} item={item} />
                        <em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

              </ul>

            </div>

          </div>
        )
    }
}
