import { Component } from '@angular/core';
import * as $ from 'jquery'

declare var Tone: any;
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	

		
	fun(){	
		$(document).ready(function(){
			$('.aa').ripples({
	dropRadius: 20,
	perturbance: 0.04,
			
	});
	
	}); 
		let arr = [	

		new Tone.Synth().toMaster(),
		new Tone.AMSynth().toMaster(),
		];
		let q = Math.floor(Math.random() * 2)
		let a = Math.floor(Math.random() * 5 +4);
		function makeid(length) {
var result = '';
var characters       = 'ABCDEFG';
var charactersLength = characters.length;
for ( var i = 0; i < length; i++) {
  result += characters.charAt(Math.floor(Math.random() * charactersLength));
}
return result;
}
let b = makeid(1);
		
	let ar = b+a;
		let c = Math.floor(Math.random() * 8+4);

	arr[q].triggerAttackRelease(ar, c+'n')
	console.log(a)


	}

}
