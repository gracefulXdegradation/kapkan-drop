import anime from 'animejs'
import gsap, {Linear} from 'gsap';
import './images/drop.svg';
import './images/kapkan.svg';
import './images/new.svg';
import './images/044.svg';
import './styles/index.scss'

let isPaused = false;
const t = gsap.timeline({ repeat: -1 })

t.to("#word-1", {duration: 0.5, scaleX: 1.6574585635359116, transformOrigin: 'left top', ease: Linear.easeNone})
	.to("#word-1", {duration: 0, scaleX: 1.6574585635359116, x: '238px', transformOrigin: 'right top', ease: Linear.easeNone})
	.to("#word-1", {duration: 0.5, scaleX: 1, x: '238px', transformOrigin: 'right top', ease: Linear.easeNone})
	
	.to("#word-1", {duration: 0.75, scaleX: 1, scaleY: 4, x: '238px', y: '60px', transformOrigin: 'right top', ease: Linear.easeNone}, "+=0.25")
	.to("#word-1", {duration: 0, scaleX: 1, scaleY: 4, x: '238px', y: '60px', transformOrigin: 'left top', ease: Linear.easeNone})
	
	.to("#word-1", {duration: 0.9, scaleX: 0.5, scaleY: 4, x: 0, y: '60px', transformOrigin: 'left top', ease: Linear.easeNone})

	.to("#word-1", {duration: 0.62, scaleX: 0.5, scaleY: 1, x: 0, y: 0, transformOrigin: 'left top', ease: Linear.easeNone}, "+=0.1")
	.to("#word-1", {duration: 0.38, scaleX: 1, scaleY: 1, x: 0, y: 0, transformOrigin: 'left top', ease: Linear.easeNone})

document.body.addEventListener('keypress', ({ keyCode }) => {
	if (keyCode === 32) {
		if (isPaused) {
			isPaused = false;
			t.play();
		} else {
			isPaused = true;
			t.pause();
		}
	}
})
