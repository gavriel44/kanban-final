/* eslint-disable no-param-reassign */
import { removeAllChildNodes } from '../helpF/help'

export default function startLoadAnimation(div) {
  const height = window.getComputedStyle(div).getPropertyValue('height')

  removeAllChildNodes(div)

  div.style.height = height

  const barDiv = document.createElement('div')
  barDiv.classList.add('bar', 'loader')

  const circleDiv = document.createElement('div')
  circleDiv.classList.add('circle')

  const p = document.createElement('p')
  p.innerHTML = 'Loading'
  p.classList.add('loading-p')

  barDiv.append(circleDiv, p)
  div.append(barDiv)
}
