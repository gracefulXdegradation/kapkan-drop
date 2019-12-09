import anime from 'animejs'
import gsap, {Linear} from 'gsap';
import './images/drop.svg';
import './images/kapkan.svg';
import './images/kyiv.svg';
import './images/2020.svg';
import './styles/index.scss'

let isPaused = false;
const drop1Tl = gsap.timeline()// { repeat: -1 })
const kapkan1Tl = gsap.timeline()
const twtw1Tl = gsap.timeline()
const drop2Tl = gsap.timeline()
const kapkan2Tl = gsap.timeline()
const twtw2Tl = gsap.timeline()
const twtw3Tl = gsap.timeline()

const drop1 = document.getElementById('drop-1')
const drop2 = document.getElementById('drop-2')
const kapkan1 = document.getElementById('kapkan-1')
const kapkan2 = document.getElementById('kapkan-2')
const twtw1 = document.getElementById('twentytwenty-1')
const twtw2 = document.getElementById('twentytwenty-2')
const twtw3 = document.getElementById('twentytwenty-3')

const timelines = [drop1Tl, drop2Tl, kapkan1Tl, kapkan2Tl, twtw1Tl, twtw2Tl, twtw3Tl];

twtw1Tl
	.to(twtw1, {duration: 0.2, scaleX: 0.75, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw1, {duration: 0.3, scaleX: 1.15, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw1, {duration: 0.2, scaleX: 0.5, x: '235px', transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw1, {duration: 0.3, scaleY: 3, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw1, {duration: 0.3, x: '165px', transformOrigin: 'left top', ease: Linear.easeNone}, '+=0.21')
	.to(twtw1, {duration: 0.2, x: '235px', scaleX: 0.3, transformOrigin: 'left top', ease: Linear.easeNone}, '+=0.1')

drop1Tl
	.to(drop1, {duration: 0.2, scaleX: 0.8, transformOrigin: 'right top', ease: Linear.easeNone})
	.to(drop1, {duration: 0.3, scaleX: 0.4, transformOrigin: 'right top', ease: Linear.easeNone})
	.to(drop1, {duration: 0.5, scaleY: 4.44, transformOrigin: 'right top', ease: Linear.easeNone}, '-=0.1')
	.to(drop1, {duration: 0.3, scaleX: 0.6, transformOrigin: 'right top', ease: Linear.easeNone}, '+=0.3')

kapkan1Tl
	.to(kapkan1, {duration: 0.3, scaleX: 0.73, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(kapkan1, {duration: 0.5, scaleX: 0.4, scaleY: 3, x: 0, y: 0, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(kapkan1, {duration: 0.3, scaleX: 0.27, transformOrigin: 'left top', ease: Linear.easeNone}, '+=0.45')
	.to(kapkan1, {duration: 0.15, scaleX: 0.4, transformOrigin: 'left top', ease: Linear.easeNone}, '+=0.1')

kapkan2Tl
	.to(kapkan2, {duration: 0.3, scaleX: 0.757, transformOrigin: 'right top', ease: Linear.easeNone})
	.to(kapkan2, {duration: 0.2, scaleX: 0.82, scaleY: 3.8, y: '272px', transformOrigin: 'right top', ease: Linear.easeNone})
	.to(kapkan2, {duration: 0.3, scaleX: 1.045, scaleY: 3.8, y: '272px', transformOrigin: 'right top', ease: Linear.easeNone}, '+=0.4')

drop2Tl
	.to(drop2, {duration: 0.3, scaleX: 0.4, scaleY: 5, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(drop2, {duration: 0.2, scaleX: 0.3, scaleY: 5, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(drop2, {duration: 0.5, scaleX: 0.3, scaleY: 1, y: '510px', transformOrigin: 'left top', ease: Linear.easeNone})
	.to(drop2, {duration: 0, transformOrigin: 'left bottom', ease: Linear.easeNone})
	.to(drop2, {duration: 0.5, scaleX: 1.3, transformOrigin: 'left bottom', ease: Linear.easeNone}, '+=0.2')

twtw2Tl
	.to(twtw2, {duration: 0.3, scaleX: 1.18, transformOrigin: 'right top', ease: Linear.easeNone})
	.to(twtw2, {duration: 0.2, scaleX: 1.28, scaleY: 1, transformOrigin: 'right top', ease: Linear.easeNone})
	.to(twtw2, {duration: 0.3, scaleX: 0.8, scaleY: 1, x: '53px', transformOrigin: 'right top', ease: Linear.easeNone})
	.to(twtw2, {duration: 0.3, scaleX: 1.15, x: '53px', transformOrigin: 'right top', ease: Linear.easeNone})
	.to(twtw2, {duration: 0, x: 0, transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw2, {duration: 0.2, scaleX: 0.96, transformOrigin: 'left top', ease: Linear.easeNone}, '+=0.2')

twtw3Tl
	.to(twtw3, {duration: 0.3, scaleX: 0.4, scaleY: 1, y: '510px', transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw3, {duration: 0.3, scaleX: 1.3, scaleY: 1, x: '120px', transformOrigin: 'left top', ease: Linear.easeNone})
	.to(twtw3, {duration: 0, x: '225px', transformOrigin: 'right bottom', ease: Linear.easeNone})
	.to(twtw3, {duration: 0.7, scaleX: 0.28, transformOrigin: 'right bottom', ease: Linear.easeNone}, '+=0.2')

document.body.addEventListener('keypress', ({ keyCode }) => {
	if (keyCode === 32) {
		if (isPaused) {
			isPaused = false;
			timelines.forEach(t => t.play())
		} else {
			isPaused = true;
			timelines.forEach(t => t.pause())
		}
	}
})
