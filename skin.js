// Garden Gnome Software - Skin
// Pano2VR 7.1.11/21010
// Filename: Skin_GUAP.ggsk
// Generated 2025-11-23T17:58:11

function pano2vrSkin(player,base) {
	var me=this;
	var skin=this;
	var flag=false;
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._button_01=document.createElement('div');
		els=me._button_01__img=document.createElement('img');
		els.className='ggskin ggskin_button_01';
		hs=basePath + 'images/button_01.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_01__o.png';
		me._button_01__img.ggOverSrc=hs;
		el.ggId="Button   01";
		el.ggDx=-360;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) - 360px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_01.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_01.onclick=function (e) {
			player.startAutorotate(0.25);
			me._button_01.style.transition='none';
			me._button_01.style.opacity='0';
			me._button_01.style.visibility='hidden';
			me._button_02.style.transition='none';
			me._button_02.style.opacity='1';
			me._button_02.style.visibility=me._button_02.ggVisible?'inherit':'hidden';
		}
		me._button_01.onmouseenter=function (e) {
			me._button_01__img.src=me._button_01__img.ggOverSrc;
			me.elementMouseOver['button_01']=true;
		}
		me._button_01.onmouseleave=function (e) {
			me._button_01__img.src=me._button_01__img.ggNormalSrc;
			me.elementMouseOver['button_01']=false;
		}
		me._button_01.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_01);
		el=me._button_3=document.createElement('div');
		els=me._button_3__img=document.createElement('img');
		els.className='ggskin ggskin_button_3';
		hs=basePath + 'images/button_3.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_3__o.png';
		me._button_3__img.ggOverSrc=hs;
		el.ggId="Button   3";
		el.ggDx=-250;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) - 250px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_3.onclick=function (e) {
			player.changeFovLog(-2,true);
		}
		me._button_3.onmouseenter=function (e) {
			me._button_3__img.src=me._button_3__img.ggOverSrc;
			me.elementMouseOver['button_3']=true;
		}
		me._button_3.onmouseleave=function (e) {
			me._button_3__img.src=me._button_3__img.ggNormalSrc;
			me.elementMouseOver['button_3']=false;
		}
		me._button_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_3);
		el=me._button_9=document.createElement('div');
		els=me._button_9__img=document.createElement('img');
		els.className='ggskin ggskin_button_9';
		hs=basePath + 'images/button_9.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_9__o.png';
		me._button_9__img.ggOverSrc=hs;
		el.ggId="Button   9";
		el.ggDx=-140;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) - 140px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_9.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_9.onclick=function (e) {
			player.changeFovLog(2,true);
		}
		me._button_9.onmouseenter=function (e) {
			me._button_9__img.src=me._button_9__img.ggOverSrc;
			me.elementMouseOver['button_9']=true;
		}
		me._button_9.onmouseleave=function (e) {
			me._button_9__img.src=me._button_9__img.ggNormalSrc;
			me.elementMouseOver['button_9']=false;
		}
		me._button_9.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_9);
		el=me._button_8=document.createElement('div');
		els=me._button_8__img=document.createElement('img');
		els.className='ggskin ggskin_button_8';
		hs=basePath + 'images/button_8.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_8__o.png';
		me._button_8__img.ggOverSrc=hs;
		el.ggId="Button   8";
		el.ggDx=-30;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) - 30px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_8.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_8.onclick=function (e) {
			player.changePanLog(5,true);
		}
		me._button_8.onmouseenter=function (e) {
			me._button_8__img.src=me._button_8__img.ggOverSrc;
			me.elementMouseOver['button_8']=true;
		}
		me._button_8.onmouseleave=function (e) {
			me._button_8__img.src=me._button_8__img.ggNormalSrc;
			me.elementMouseOver['button_8']=false;
		}
		me._button_8.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_8);
		el=me._button_7=document.createElement('div');
		els=me._button_7__img=document.createElement('img');
		els.className='ggskin ggskin_button_7';
		hs=basePath + 'images/button_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_7__o.png';
		me._button_7__img.ggOverSrc=hs;
		el.ggId="Button   7";
		el.ggDx=81;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) + 81px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_7.onclick=function (e) {
			player.changePanLog(-5,true);
		}
		me._button_7.onmouseenter=function (e) {
			me._button_7__img.src=me._button_7__img.ggOverSrc;
			me.elementMouseOver['button_7']=true;
		}
		me._button_7.onmouseleave=function (e) {
			me._button_7__img.src=me._button_7__img.ggNormalSrc;
			me.elementMouseOver['button_7']=false;
		}
		me._button_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_7);
		el=me._button_6=document.createElement('div');
		els=me._button_6__img=document.createElement('img');
		els.className='ggskin ggskin_button_6';
		hs=basePath + 'images/button_6.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_6__o.png';
		me._button_6__img.ggOverSrc=hs;
		el.ggId="Button   6";
		el.ggDx=191;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) + 191px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_6.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_6.onclick=function (e) {
			player.changeTiltLog(5,true);
		}
		me._button_6.onmouseenter=function (e) {
			me._button_6__img.src=me._button_6__img.ggOverSrc;
			me.elementMouseOver['button_6']=true;
		}
		me._button_6.onmouseleave=function (e) {
			me._button_6__img.src=me._button_6__img.ggNormalSrc;
			me.elementMouseOver['button_6']=false;
		}
		me._button_6.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_6);
		el=me._button_5=document.createElement('div');
		els=me._button_5__img=document.createElement('img');
		els.className='ggskin ggskin_button_5';
		hs=basePath + 'images/button_5.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_5__o.png';
		me._button_5__img.ggOverSrc=hs;
		el.ggId="Button   5";
		el.ggDx=301;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) + 301px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_5.onclick=function (e) {
			player.changeTiltLog(-5,true);
		}
		me._button_5.onmouseenter=function (e) {
			me._button_5__img.src=me._button_5__img.ggOverSrc;
			me.elementMouseOver['button_5']=true;
		}
		me._button_5.onmouseleave=function (e) {
			me._button_5__img.src=me._button_5__img.ggNormalSrc;
			me.elementMouseOver['button_5']=false;
		}
		me._button_5.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_5);
		el=me._nodeimage_12=document.createElement('div');
		els=me._nodeimage_12__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_12.png');
		el.ggNodeId='node6';
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 135px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 173px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', '2');
		el.style.transformOrigin='50% 50%';
		me._nodeimage_12.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_12.onclick=function (e) {
			player.openNext("{node6}","$(cur)");
			if (player.transitionsDisabled) {
				me._button_01.style.transition='none';
			} else {
				me._button_01.style.transition='all 1000ms ease 0ms';
			}
			me._button_01.ggParameter.rx=0;me._button_01.ggParameter.ry=22;
			me._button_01.style.transform=parameterToTransform(me._button_01.ggParameter);
			if (player.transitionsDisabled) {
				me._button_02.style.transition='none';
			} else {
				me._button_02.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._button_02.ggParameter.rx=0;me._button_02.ggParameter.ry=22;
			me._button_02.style.transform=parameterToTransform(me._button_02.ggParameter);
			if (player.transitionsDisabled) {
				me._button_3.style.transition='none';
			} else {
				me._button_3.style.transition='all 1000ms ease 0ms';
			}
			me._button_3.ggParameter.rx=0;me._button_3.ggParameter.ry=22;
			me._button_3.style.transform=parameterToTransform(me._button_3.ggParameter);
			if (player.transitionsDisabled) {
				me._button_4.style.transition='none';
			} else {
				me._button_4.style.transition='all 1000ms ease 0ms';
			}
			me._button_4.ggParameter.rx=0;me._button_4.ggParameter.ry=74;
			me._button_4.style.transform=parameterToTransform(me._button_4.ggParameter);
			if (player.transitionsDisabled) {
				me._button_5.style.transition='none';
			} else {
				me._button_5.style.transition='all 1000ms ease 0ms';
			}
			me._button_5.ggParameter.rx=0;me._button_5.ggParameter.ry=22;
			me._button_5.style.transform=parameterToTransform(me._button_5.ggParameter);
			if (player.transitionsDisabled) {
				me._button_6.style.transition='none';
			} else {
				me._button_6.style.transition='all 1000ms ease 0ms';
			}
			me._button_6.ggParameter.rx=0;me._button_6.ggParameter.ry=22;
			me._button_6.style.transform=parameterToTransform(me._button_6.ggParameter);
			if (player.transitionsDisabled) {
				me._button_7.style.transition='none';
			} else {
				me._button_7.style.transition='all 1000ms ease 0ms';
			}
			me._button_7.ggParameter.rx=0;me._button_7.ggParameter.ry=22;
			me._button_7.style.transform=parameterToTransform(me._button_7.ggParameter);
			if (player.transitionsDisabled) {
				me._button_8.style.transition='none';
			} else {
				me._button_8.style.transition='all 1000ms ease 0ms';
			}
			me._button_8.ggParameter.rx=0;me._button_8.ggParameter.ry=22;
			me._button_8.style.transform=parameterToTransform(me._button_8.ggParameter);
			if (player.transitionsDisabled) {
				me._button_9.style.transition='none';
			} else {
				me._button_9.style.transition='all 1000ms ease 0ms';
			}
			me._button_9.ggParameter.rx=0;me._button_9.ggParameter.ry=22;
			me._button_9.style.transform=parameterToTransform(me._button_9.ggParameter);
		}
		me._nodeimage_12.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._nodeimage_12);
		el=me._nodeimage_11=document.createElement('div');
		els=me._nodeimage_11__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_11.png');
		el.ggNodeId='node8';
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 135px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 473px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', '4');
		el.style.transformOrigin='50% 50%';
		me._nodeimage_11.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_11.onclick=function (e) {
			player.openNext("{node8}","$(cur)");
			if (player.transitionsDisabled) {
				me._button_01.style.transition='none';
			} else {
				me._button_01.style.transition='all 1000ms ease 0ms';
			}
			me._button_01.ggParameter.rx=0;me._button_01.ggParameter.ry=-46;
			me._button_01.style.transform=parameterToTransform(me._button_01.ggParameter);
			if (player.transitionsDisabled) {
				me._button_02.style.transition='none';
			} else {
				me._button_02.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._button_02.ggParameter.rx=0;me._button_02.ggParameter.ry=-46;
			me._button_02.style.transform=parameterToTransform(me._button_02.ggParameter);
			if (player.transitionsDisabled) {
				me._button_3.style.transition='none';
			} else {
				me._button_3.style.transition='all 1000ms ease 0ms';
			}
			me._button_3.ggParameter.rx=0;me._button_3.ggParameter.ry=-46;
			me._button_3.style.transform=parameterToTransform(me._button_3.ggParameter);
			if (player.transitionsDisabled) {
				me._button_4.style.transition='none';
			} else {
				me._button_4.style.transition='all 1000ms ease 0ms';
			}
			me._button_4.ggParameter.rx=0;me._button_4.ggParameter.ry=-74;
			me._button_4.style.transform=parameterToTransform(me._button_4.ggParameter);
			if (player.transitionsDisabled) {
				me._button_5.style.transition='none';
			} else {
				me._button_5.style.transition='all 1000ms ease 0ms';
			}
			me._button_5.ggParameter.rx=0;me._button_5.ggParameter.ry=-46;
			me._button_5.style.transform=parameterToTransform(me._button_5.ggParameter);
			if (player.transitionsDisabled) {
				me._button_6.style.transition='none';
			} else {
				me._button_6.style.transition='all 1000ms ease 0ms';
			}
			me._button_6.ggParameter.rx=0;me._button_6.ggParameter.ry=-46;
			me._button_6.style.transform=parameterToTransform(me._button_6.ggParameter);
			if (player.transitionsDisabled) {
				me._button_7.style.transition='none';
			} else {
				me._button_7.style.transition='all 1000ms ease 0ms';
			}
			me._button_7.ggParameter.rx=0;me._button_7.ggParameter.ry=-46;
			me._button_7.style.transform=parameterToTransform(me._button_7.ggParameter);
			if (player.transitionsDisabled) {
				me._button_8.style.transition='none';
			} else {
				me._button_8.style.transition='all 1000ms ease 0ms';
			}
			me._button_8.ggParameter.rx=0;me._button_8.ggParameter.ry=-46;
			me._button_8.style.transform=parameterToTransform(me._button_8.ggParameter);
			if (player.transitionsDisabled) {
				me._button_9.style.transition='none';
			} else {
				me._button_9.style.transition='all 1000ms ease 0ms';
			}
			me._button_9.ggParameter.rx=0;me._button_9.ggParameter.ry=-46;
			me._button_9.style.transform=parameterToTransform(me._button_9.ggParameter);
		}
		me._nodeimage_11.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._nodeimage_11);
		el=me._nodeimage_10=document.createElement('div');
		els=me._nodeimage_10__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_10.png');
		el.ggNodeId='node7';
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 135px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 322px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', '3');
		el.style.transformOrigin='50% 50%';
		me._nodeimage_10.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_10.onclick=function (e) {
			player.openNext("{node7}","$(cur)");
			if (player.transitionsDisabled) {
				me._button_01.style.transition='none';
			} else {
				me._button_01.style.transition='all 1000ms ease 0ms';
			}
			me._button_01.ggParameter.rx=0;me._button_01.ggParameter.ry=22;
			me._button_01.style.transform=parameterToTransform(me._button_01.ggParameter);
			if (player.transitionsDisabled) {
				me._button_02.style.transition='none';
			} else {
				me._button_02.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._button_02.ggParameter.rx=0;me._button_02.ggParameter.ry=22;
			me._button_02.style.transform=parameterToTransform(me._button_02.ggParameter);
			if (player.transitionsDisabled) {
				me._button_3.style.transition='none';
			} else {
				me._button_3.style.transition='all 1000ms ease 0ms';
			}
			me._button_3.ggParameter.rx=0;me._button_3.ggParameter.ry=22;
			me._button_3.style.transform=parameterToTransform(me._button_3.ggParameter);
			if (player.transitionsDisabled) {
				me._button_4.style.transition='none';
			} else {
				me._button_4.style.transition='all 1000ms ease 0ms';
			}
			me._button_4.ggParameter.rx=0;me._button_4.ggParameter.ry=74;
			me._button_4.style.transform=parameterToTransform(me._button_4.ggParameter);
			if (player.transitionsDisabled) {
				me._button_5.style.transition='none';
			} else {
				me._button_5.style.transition='all 1000ms ease 0ms';
			}
			me._button_5.ggParameter.rx=0;me._button_5.ggParameter.ry=22;
			me._button_5.style.transform=parameterToTransform(me._button_5.ggParameter);
			if (player.transitionsDisabled) {
				me._button_6.style.transition='none';
			} else {
				me._button_6.style.transition='all 1000ms ease 0ms';
			}
			me._button_6.ggParameter.rx=0;me._button_6.ggParameter.ry=22;
			me._button_6.style.transform=parameterToTransform(me._button_6.ggParameter);
			if (player.transitionsDisabled) {
				me._button_7.style.transition='none';
			} else {
				me._button_7.style.transition='all 1000ms ease 0ms';
			}
			me._button_7.ggParameter.rx=0;me._button_7.ggParameter.ry=22;
			me._button_7.style.transform=parameterToTransform(me._button_7.ggParameter);
			if (player.transitionsDisabled) {
				me._button_8.style.transition='none';
			} else {
				me._button_8.style.transition='all 1000ms ease 0ms';
			}
			me._button_8.ggParameter.rx=0;me._button_8.ggParameter.ry=22;
			me._button_8.style.transform=parameterToTransform(me._button_8.ggParameter);
			if (player.transitionsDisabled) {
				me._button_9.style.transition='none';
			} else {
				me._button_9.style.transition='all 1000ms ease 0ms';
			}
			me._button_9.ggParameter.rx=0;me._button_9.ggParameter.ry=22;
			me._button_9.style.transform=parameterToTransform(me._button_9.ggParameter);
		}
		me._nodeimage_10.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._nodeimage_10);
		el=me._nodeimage_1=document.createElement('div');
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + 'images/nodeimage_1.png');
		el.ggNodeId='node5';
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 135px;';
		hs+='position : absolute;';
		hs+='right : 24px;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 215px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.setAttribute('aria-keyshortcuts', '1');
		el.style.transformOrigin='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.onclick=function (e) {
			player.openNext("{node5}","$(cur)");
			if (player.transitionsDisabled) {
				me._button_01.style.transition='none';
			} else {
				me._button_01.style.transition='all 1000ms ease 0ms';
			}
			me._button_01.ggParameter.rx=0;me._button_01.ggParameter.ry=22;
			me._button_01.style.transform=parameterToTransform(me._button_01.ggParameter);
			if (player.transitionsDisabled) {
				me._button_02.style.transition='none';
			} else {
				me._button_02.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._button_02.ggParameter.rx=0;me._button_02.ggParameter.ry=22;
			me._button_02.style.transform=parameterToTransform(me._button_02.ggParameter);
			if (player.transitionsDisabled) {
				me._button_3.style.transition='none';
			} else {
				me._button_3.style.transition='all 1000ms ease 0ms';
			}
			me._button_3.ggParameter.rx=0;me._button_3.ggParameter.ry=22;
			me._button_3.style.transform=parameterToTransform(me._button_3.ggParameter);
			if (player.transitionsDisabled) {
				me._button_4.style.transition='none';
			} else {
				me._button_4.style.transition='all 1000ms ease 0ms';
			}
			me._button_4.ggParameter.rx=0;me._button_4.ggParameter.ry=74;
			me._button_4.style.transform=parameterToTransform(me._button_4.ggParameter);
			if (player.transitionsDisabled) {
				me._button_5.style.transition='none';
			} else {
				me._button_5.style.transition='all 1000ms ease 0ms';
			}
			me._button_5.ggParameter.rx=0;me._button_5.ggParameter.ry=22;
			me._button_5.style.transform=parameterToTransform(me._button_5.ggParameter);
			if (player.transitionsDisabled) {
				me._button_6.style.transition='none';
			} else {
				me._button_6.style.transition='all 1000ms ease 0ms';
			}
			me._button_6.ggParameter.rx=0;me._button_6.ggParameter.ry=22;
			me._button_6.style.transform=parameterToTransform(me._button_6.ggParameter);
			if (player.transitionsDisabled) {
				me._button_7.style.transition='none';
			} else {
				me._button_7.style.transition='all 1000ms ease 0ms';
			}
			me._button_7.ggParameter.rx=0;me._button_7.ggParameter.ry=22;
			me._button_7.style.transform=parameterToTransform(me._button_7.ggParameter);
			if (player.transitionsDisabled) {
				me._button_8.style.transition='none';
			} else {
				me._button_8.style.transition='all 1000ms ease 0ms';
			}
			me._button_8.ggParameter.rx=0;me._button_8.ggParameter.ry=22;
			me._button_8.style.transform=parameterToTransform(me._button_8.ggParameter);
			if (player.transitionsDisabled) {
				me._button_9.style.transition='none';
			} else {
				me._button_9.style.transition='all 1000ms ease 0ms';
			}
			me._button_9.ggParameter.rx=0;me._button_9.ggParameter.ry=22;
			me._button_9.style.transform=parameterToTransform(me._button_9.ggParameter);
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._nodeimage_1);
		el=me._map_1=document.createElement('div');
		el.ggFilter = '';
		el.ggFilteredIds = [];
		el.ggMapLayers = [];
		el.ggMapNotLoaded = true;
		el.ggMapId = 'FloorPlan01';
		el.ggId="Map   1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_map ";
		el.ggType='map';
		hs ='';
		hs+='border : 1px solid #000000;';
		hs+='height : 521px;';
		hs+='left : 24px;';
		hs+='overflow : hidden;';
		hs+='position : absolute;';
		hs+='top : 24px;';
		hs+='visibility : inherit;';
		hs+='width : 268px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._map_1.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._map_1.onclick=function (e) {
			if (player.transitionsDisabled) {
				me._button_01.style.transition='none';
			} else {
				me._button_01.style.transition='all 1000ms ease 0ms';
			}
			me._button_01.ggParameter.rx=0;me._button_01.ggParameter.ry=-46;
			me._button_01.style.transform=parameterToTransform(me._button_01.ggParameter);
			if (player.transitionsDisabled) {
				me._button_02.style.transition='none';
			} else {
				me._button_02.style.transition='all 1000ms ease-in-out 0ms';
			}
			me._button_02.ggParameter.rx=0;me._button_02.ggParameter.ry=-46;
			me._button_02.style.transform=parameterToTransform(me._button_02.ggParameter);
			if (player.transitionsDisabled) {
				me._button_3.style.transition='none';
			} else {
				me._button_3.style.transition='all 1000ms ease 0ms';
			}
			me._button_3.ggParameter.rx=0;me._button_3.ggParameter.ry=-46;
			me._button_3.style.transform=parameterToTransform(me._button_3.ggParameter);
			if (player.transitionsDisabled) {
				me._button_4.style.transition='none';
			} else {
				me._button_4.style.transition='all 1000ms ease 0ms';
			}
			me._button_4.ggParameter.rx=0;me._button_4.ggParameter.ry=-74;
			me._button_4.style.transform=parameterToTransform(me._button_4.ggParameter);
			if (player.transitionsDisabled) {
				me._button_5.style.transition='none';
			} else {
				me._button_5.style.transition='all 1000ms ease 0ms';
			}
			me._button_5.ggParameter.rx=0;me._button_5.ggParameter.ry=-46;
			me._button_5.style.transform=parameterToTransform(me._button_5.ggParameter);
			if (player.transitionsDisabled) {
				me._button_6.style.transition='none';
			} else {
				me._button_6.style.transition='all 1000ms ease 0ms';
			}
			me._button_6.ggParameter.rx=0;me._button_6.ggParameter.ry=-46;
			me._button_6.style.transform=parameterToTransform(me._button_6.ggParameter);
			if (player.transitionsDisabled) {
				me._button_7.style.transition='none';
			} else {
				me._button_7.style.transition='all 1000ms ease 0ms';
			}
			me._button_7.ggParameter.rx=0;me._button_7.ggParameter.ry=-46;
			me._button_7.style.transform=parameterToTransform(me._button_7.ggParameter);
			if (player.transitionsDisabled) {
				me._button_8.style.transition='none';
			} else {
				me._button_8.style.transition='all 1000ms ease 0ms';
			}
			me._button_8.ggParameter.rx=0;me._button_8.ggParameter.ry=-46;
			me._button_8.style.transform=parameterToTransform(me._button_8.ggParameter);
			if (player.transitionsDisabled) {
				me._button_9.style.transition='none';
			} else {
				me._button_9.style.transition='all 1000ms ease 0ms';
			}
			me._button_9.ggParameter.rx=0;me._button_9.ggParameter.ry=-46;
			me._button_9.style.transform=parameterToTransform(me._button_9.ggParameter);
		}
		me._map_1.ggUpdateConditionResize=function () {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
		}
		me._map_1.ggUpdatePosition=function (useTransition) {
			me._map_1.ggUpdateConditionResize();
		}
		me.divSkin.appendChild(me._map_1);
		el=me._button_02=document.createElement('div');
		els=me._button_02__img=document.createElement('img');
		els.className='ggskin ggskin_button_02';
		hs=basePath + 'images/button_02.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/button_02__o.png';
		me._button_02__img.ggOverSrc=hs;
		el.ggId="Button   02";
		el.ggDx=-360;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='bottom : 46px;';
		hs+='cursor : pointer;';
		hs+='height : 97px;';
		hs+='left : calc(50% - ((97px + 0px) / 2) - 360px);';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 97px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_02.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_02.onclick=function (e) {
			player.stopAutorotate();
			me._button_02.style.transition='none';
			me._button_02.style.opacity='0';
			me._button_02.style.visibility='hidden';
			me._button_01.style.transition='none';
			me._button_01.style.opacity='1';
			me._button_01.style.visibility=me._button_01.ggVisible?'inherit':'hidden';
		}
		me._button_02.onmouseenter=function (e) {
			me._button_02__img.src=me._button_02__img.ggOverSrc;
			me.elementMouseOver['button_02']=true;
		}
		me._button_02.onmouseleave=function (e) {
			me._button_02__img.src=me._button_02__img.ggNormalSrc;
			me.elementMouseOver['button_02']=false;
		}
		me._button_02.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._button_02);
		el=me._button_4=document.createElement('div');
		me._button_4__playhead=document.createElement('div');
		me._button_4.mediaEl = null;
		me._button_4.fromBufferSource = false;
		me._button_4.ggMediaId = '_videopanorama';
		el.ggId="Button   4";
		el.ggDx=4;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_seekbar ";
		el.ggType='seekbar';
		hs ='';
		hs+='bottom : -50px;';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((1864px + 2px) / 2) + 4px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 1864px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_4.mouseTouchHandling = function(e) {
			if (e.buttons == 1 || (e.buttons == null && e.which == 1) || e.type=='touchstart') {
				if (me._button_4.mediaEl != null) {
					if (e.target == me._button_4) {
						let mouseX;
						if (e.type=='touchstart') {
							let rect = e.target.getBoundingClientRect();
							mouseX = e.targetTouches[0].pageX - rect.left;
						} else {
							mouseX = e.offsetX;
						}
						if (me._button_4.fromBufferSource) {
							let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.bufferSoundDuration();
							me._button_4.mediaEl.bufferSoundSetDragTime(seekpos);
						} else {
							let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.duration;
							if(!isNaN(seekpos)) me._button_4.mediaEl.currentTime = seekpos;
						}
					}
					if (e.target == me._button_4 || e.target == me._button_4__playhead) {
						document.onmousemove = document.ontouchmove = function(e) {
							let mouseX = e.pageX - me._button_4.getBoundingClientRect().x;
							if (me._button_4.fromBufferSource) {
								let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.bufferSoundDuration();
								me._button_4.mediaEl.bufferSoundSetDragTime(seekpos);
							} else {
								let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.duration;
								if(!isNaN(seekpos)) me._button_4.mediaEl.currentTime = seekpos;
							}
						}
						document.onmouseup = document.ontouchend = function(e) {
							let mouseX = e.pageX - me._button_4.getBoundingClientRect().x;
							if (me._button_4.fromBufferSource) {
								let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.bufferSoundDuration();
								me._button_4.mediaEl.bufferSoundSetTime(seekpos);
							} else {
								let seekpos = (mouseX / me._button_4.clientWidth) * me._button_4.mediaEl.duration;
								if(!isNaN(seekpos)) me._button_4.mediaEl.currentTime = seekpos;
							}
							document.onmousemove = document.ontouchmove = null;
							document.onmouseup = document.ontouchend = null;
						}
					}
				}
			}
		}
		me._button_4.onmousedown = me._button_4.ontouchstart = me._button_4.mouseTouchHandling;
		me._button_4.ggConnectToMediaEl = function() {
			var disableSeekbar = function() {
				me._button_4__playhead.style.visibility = 'hidden';
				me._button_4.style.background = '#ffffff';
				me._button_4.ggConnected = false;
			}
			if (me._button_4.mediaEl != null) {
				if (me._button_4.fromBufferSource) {
					player.removeEventListener('bufferSoundTimeupdate', me._button_4.updatePlayback);
					if (me._button_4.ggActivate) {
						player.removeEventListener('bufferSoundPlay', me._button_4.bufferSoundActivate);
					}
					if (me._button_4.ggDeactivate) {
						player.removeEventListener('bufferSoundPause', me._button_4.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundStop', me._button_4.bufferSoundDeactivate);
						player.removeEventListener('bufferSoundEnded', me._button_4.bufferSoundDeactivate);
					}
					if (me._button_4.ggMediaEnded) {
						player.removeEventListener('bufferSoundEnded', me._button_4.bufferSoundMediaEnded);
					}
				} else {
					me._button_4.mediaEl.removeEventListener('progress', me._button_4.updatePlayback);
					me._button_4.mediaEl.removeEventListener('canplay', me._button_4.updatePlayback);
					me._button_4.mediaEl.removeEventListener('timeupdate', me._button_4.updatePlayback);
					if (me._button_4.ggActivate) {
						me._button_4.mediaEl.removeEventListener('play', me._button_4.ggActivate);
					}
					if (me._button_4.ggDeactivate) {
						me._button_4.mediaEl.removeEventListener('ended', me._button_4.ggDeactivate);
						me._button_4.mediaEl.removeEventListener('pause', me._button_4.ggDeactivate);
					}
					if (me._button_4.ggMediaEnded) {
						me._button_4.mediaEl.removeEventListener('ended', me._button_4.ggMediaEnded);
					}
				}
			}
			me._button_4.mediaEl = player.getMediaObject(me._button_4.ggMediaId);
			if (me._button_4.mediaEl) {
				me._button_4.fromBufferSource = false;
			} else {
				me._button_4.mediaEl = player.getMediaBufferSourceObject('_videopanorama');
				me._button_4.fromBufferSource = true;
			}
			if (me._button_4.mediaEl != null) {
				me._button_4__playhead.style.visibility = 'inherit';
				me._button_4__playhead.style.left = '-17px';
				if (me._button_4.fromBufferSource) {
					player.addListener('bufferSoundTimeupdate', me._button_4.updatePlayback);
					if (me._button_4.ggActivate) {
						me._button_4.bufferSoundActivate = function(args) { if (args['id'] == me._button_4.mediaEl.id) me._button_4.ggActivate(); };
						player.addListener('bufferSoundPlay', me._button_4.bufferSoundActivate);
					}
					if (me._button_4.ggDeactivate) {
						me._button_4.bufferSoundDeactivate = function(args) { if (args['id'] == me._button_4.mediaEl.id) me._button_4.ggDeactivate(); };
						player.addListener('bufferSoundPause', me._button_4.bufferSoundDeactivate);
						player.addListener('bufferSoundStop', me._button_4.bufferSoundDeactivate);
						player.addListener('bufferSoundEnded', me._button_4.bufferSoundDeactivate);
					}
					if (me._button_4.ggMediaEnded) {
						me._button_4.bufferSoundMediaEnded = function(args) { if (args['id'] == me._button_4.mediaEl.id) me._button_4.ggMediaEnded(); };
						player.addListener('bufferSoundEnded', me._button_4.bufferSoundMediaEnded);
					}
				} else {
					me._button_4.mediaEl.addEventListener('progress', me._button_4.updatePlayback);
					me._button_4.mediaEl.addEventListener('canplay', me._button_4.updatePlayback);
					me._button_4.mediaEl.addEventListener('timeupdate', me._button_4.updatePlayback);
					if (me._button_4.ggActivate) {
						me._button_4.mediaEl.addEventListener('play', me._button_4.ggActivate);
					}
					if (me._button_4.ggDeactivate) {
						me._button_4.mediaEl.addEventListener('ended', me._button_4.ggDeactivate);
						me._button_4.mediaEl.addEventListener('pause', me._button_4.ggDeactivate);
					}
					if (me._button_4.ggMediaEnded) {
						me._button_4.mediaEl.addEventListener('ended', me._button_4.ggMediaEnded);
					}
				}
				me._button_4.ggConnected = true;
			} else {
				disableSeekbar();
			}
			var videoEl = me.findElements(me._button_4.ggMediaId);
			if (videoEl.length > 0 && !videoEl[0].hasChildNodes()) {
				disableSeekbar();
			}
		}
		me._button_4.updatePlayback = function(args) {
			if (!me._button_4.ggConnected) return;
			if (me._button_4.mediaEl != null) {
				if (me._button_4.mediaEl.readyState || (me._button_4.fromBufferSource && args && args['id'] == me._button_4.mediaEl.id)) {
					if (me._button_4.fromBufferSource) {
						var percent = me._button_4.mediaEl.bufferSoundCurrentTime() / me._button_4.mediaEl.bufferSoundDuration();
					} else {
						var percent = me._button_4.mediaEl.currentTime / me._button_4.mediaEl.duration;
					}
					percent = Math.min(percent, 1.0);
					var playheadpos = Math.round((me._button_4.clientWidth - 2 * 3 + 1) * percent);
					playheadpos += -17;
					me._button_4__playhead.style.left = playheadpos.toString() + 'px';
					var offsetPercent = Math.round(100.0 * (3 / me._button_4.clientWidth));
					var currPos = offsetPercent + Math.round(percent * (100 - 2 * offsetPercent));
					var gradientString ='linear-gradient(90deg, rgba(0,170,255,1) 0%, rgba(0,170,255,1) ' + currPos + '%';
					if (me._button_4.fromBufferSource) {
						gradientString += ', rgba(170,56,145,1) ' + currPos +'%, rgba(170,56,145,1) 100%';
					} else {
						for (var i = 0; i < me._button_4.mediaEl.buffered.length; i++) {
							var rangeStart = Math.round((me._button_4.mediaEl.buffered.start(i) / me._button_4.mediaEl.duration) * 100.0);
							var rangeEnd = Math.ceil((me._button_4.mediaEl.buffered.end(i) / me._button_4.mediaEl.duration) * 100.0);
							if (rangeEnd > currPos) {
								if (rangeStart < currPos) {
									gradientString += ', rgba(170,56,145,1) ' + currPos + '%';
								} else {
									gradientString += ', rgba(255,255,255,1) ' + currPos + '%, rgba(255,255,255,1) ' + rangeStart + '%';
									gradientString += ', rgba(170,56,145,1) ' + rangeStart + '%';
								}
									gradientString += ', rgba(170,56,145,1) ' + rangeEnd + '%';
								currPos = rangeEnd;
							}
						}
						if (currPos < 100) {
							gradientString += ', rgba(255,255,255,1) ' + currPos + '%';
						}
					}
					gradientString += ')';
					me._button_4.style.background = gradientString;
				}
			}
		}
		me._button_4.appendChild(me._button_4__playhead);
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='border-radius : 3px;';
		var hs_playhead = 'height: 40px;';
		hs_playhead += 'width: 40px;';
		hs_playhead += 'border: 0px;';
		hs_playhead += 'position: absolute;';
		hs_playhead += 'left: -17px;';
		hs_playhead += 'top: -4px;';
		hs_playhead += 'border-radius: 20px;';
		hs_playhead += cssPrefix + 'border-radius: 20px;';
		hs_playhead += 'background-color: rgba(255,255,255,1);';
		me._button_4.setAttribute('style', hs);
		me._button_4__playhead.setAttribute('style', hs_playhead);
		me._button_4.ggIsActive=function() {
			if (me._button_4.mediaEl != null) {
				return (me._button_4.mediaEl.paused == false && me._button_4.mediaEl.ended == false);
			} else {
				return false;
			}
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._button_4.ggUpdatePosition=function (useTransition) {
			me._button_4.updatePlayback();
		}
		me.divSkin.appendChild(me._button_4);
		me.elementMouseOver['button_01']=false;
		me.elementMouseOver['button_3']=false;
		me.elementMouseOver['button_9']=false;
		me.elementMouseOver['button_8']=false;
		me.elementMouseOver['button_7']=false;
		me.elementMouseOver['button_6']=false;
		me.elementMouseOver['button_5']=false;
		me._map_1.ggMarkerInstances=[];
		me._map_1.ggLastNodeId=null;
		me._map_1.ggSimpleFloorplanMarkerArray=[];
		me._map_1.ggFloorplanWidth=0;
		me._map_1.ggFloorplanHeight=0;
		me._map_1__mapdiv=document.createElement('div');
		me._map_1__mapdiv.className='ggskin ggskin_map';
		me._map_1.appendChild(me._map_1__mapdiv);
		me._map_1__img=document.createElement('img');
		me._map_1__img.className='ggskin ggskin_map';
		me._map_1__mapdiv.appendChild(me._map_1__img);
		me._map_1.ggRadar={ lastFov : -1, lastPan : -1, xPos : -1, yPos : -1, radarElement : null }
		me._map_1.ggRadar.update=function() {
			var radar=me._map_1.ggRadar;
			var d2r = Math.PI/180 ;
			var fov = player.getFov();
			var pan = player.getPanNorth();
			pan -= me._map_1.ggFloorplanNorth;
			var filterpassed = true;
			var currentId = player.getCurrentNode();
			if (me._map_1.ggFilteredIds.length > 0 && me._map_1.ggFilteredIds.indexOf(currentId) == -1) filterpassed = false;
			if ((me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(currentId)) && filterpassed) {
				var activeMarker = me._map_1.ggSimpleFloorplanMarkerArray[currentId];
				if ((radar.radarElement) && (fov==radar.lastFov) && (pan==radar.lastPan) && (activeMarker.radarXPos==radar.xPos) && (activeMarker.radarYPos==radar.yPos)) return; 
				radar.lastPan=pan; radar.lastFov=fov;
				radar.xPos=activeMarker.radarXPos; radar.yPos=activeMarker.radarYPos;
				if (radar.radarElement) me._map_1__mapdiv.removeChild(radar.radarElement);
				radar.radarElement = document.createElementNS('http://www.w3.org/2000/svg','svg');
				radar.radarElement.setAttributeNS(null,'width',500);
				radar.radarElement.setAttributeNS(null,'height',500);
				radar.radarElement.setAttributeNS(null,'viewBox','0 0 500 500');
				var radarPath = document.createElementNS('http://www.w3.org/2000/svg','path');
				radarPath.setAttributeNS(null,'id','radarPath');
				pan = -90 - pan;
				var arcX1 = 250 * Math.cos((pan - fov / 2) * d2r);
				var arcY1 = 250 * Math.sin((pan - fov / 2) * d2r);
				var arcX2 = 250 * Math.cos((pan + fov / 2) * d2r);
				var arcY2 = 250 * Math.sin((pan + fov / 2) * d2r);
				arcX1 += 250;
				arcY1 += 250;
				arcX2 += 250;
				arcY2 += 250;
				var radarPathString = 'M250,250 L' + arcX1 + ',' + arcY1 + ' A 250 250 0 0 1 ' + arcX2 + ' ' + arcY2 +' Z';
				radarPath.setAttributeNS(null,'d', radarPathString);
				radarPath.setAttributeNS(null,'fill', '#ff0000');
				radarPath.setAttributeNS(null,'fill-opacity', 0.35);
				radarPath.setAttributeNS(null,'stroke', '#ff0000');
				radarPath.setAttributeNS(null,'stroke-opacity', 0.8);
				radarPath.setAttributeNS(null,'stroke-width', 1);
				radarPath.setAttributeNS(null,'stroke-linejoin', 'miter');
				radar.radarElement.appendChild(radarPath);
				me._map_1__mapdiv.appendChild(radar.radarElement);
				var radarXPos = activeMarker.radarXPos - 250;
				var radarYPos = activeMarker.radarYPos - 250;
				radar.radarElement.style['position'] = 'absolute';
				radar.radarElement.style['left'] = '' + radarXPos + 'px';
				radar.radarElement.style['top'] = '' + radarYPos + 'px';
				radar.radarElement.style['z-index'] = me._map_1.style['z-index'] + 1;
			} else {
				if (radar.radarElement) {
					me._map_1__mapdiv.removeChild(radar.radarElement);
					radar.radarElement = null;
				}
			}
		}
		me._map_1.ggShowSimpleFloorplan=function(mapDetails) {
			var mapWidth = me._map_1.clientWidth;
			var mapHeight = me._map_1.clientHeight;
			var tmpWidth = mapDetails['width'];
			var tmpHeight = mapDetails['height'];
			var levelLimit = 1000;
			var levels = 1;
			while (levelLimit < mapDetails['width'] || levelLimit < mapDetails['height']) {
				tmpWidth /= 2;
				tmpHeight /= 2;
				levelLimit *= 2;
				levels++;
			}
			var level = 1;
			while (levels > level && ((mapWidth * window.devicePixelRatio) >= 2*tmpWidth || (mapHeight * window.devicePixelRatio) >= 2*tmpHeight)) {
				tmpWidth *= 2;
				tmpHeight *= 2;
				levelLimit *= 2;
				level++;
			}
			var imageFilename = basePath + 'images/maptiles/' + me._map_1.ggMapId + '_' + level + '.' + mapDetails['tileformat'];
			me._map_1__img.setAttribute('src', imageFilename);
			me._map_1__img.setAttribute('loading', 'lazy');
		me._map_1__mapdiv.setAttribute('style','position: absolute; left: 0px; top: 0px;width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;overflow:hidden;;');
		var image_rendering_prop = (player.getBrowser() == 2 || player.getBrowser() == 3) ? 'crisp-edges' : 'pixelated';
		me._map_1__img.setAttribute('style','width:' + me._map_1.ggFloorplanWidth + 'px;height:' + me._map_1.ggFloorplanHeight + 'px;-webkit-user-drag:none;pointer-events:none;image-rendering:' + (mapDetails['crispedges'] ? image_rendering_prop : 'auto') + ';');
		}
		me._map_1.ggCalculateFloorplanSize=function(mapDetails) {
			var floorplanWidth = mapDetails['width'];
			var floorplanHeight = mapDetails['height'];
			var frameAR = me._map_1.clientWidth / me._map_1.clientHeight;
			var floorplanAR = floorplanWidth / floorplanHeight;
			if (frameAR > floorplanAR) {
				me._map_1.ggFloorplanHeight = me._map_1.clientHeight;
				me._map_1.ggFloorplanWidth = me._map_1.ggFloorplanHeight * floorplanAR;
			} else {
				me._map_1.ggFloorplanWidth = me._map_1.clientWidth;
				me._map_1.ggFloorplanHeight = me._map_1.ggFloorplanWidth / floorplanAR;
			}
		}
		me._map_1.ggInitMap=function() {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (Object.keys(mapDetails).length === 0) return;
			me._map_1.style.backgroundColor = mapDetails['bgcolor'];
			if (mapDetails.hasOwnProperty('transparent') && mapDetails['transparent']) {
				me._map_1.ggPermeableMap = true;
			} else {
				me._map_1.ggPermeableMap = false;
			}
			me._map_1.ggCalculateFloorplanSize(mapDetails);
			me._map_1.ggShowSimpleFloorplan(mapDetails);
			me._map_1.ggFloorplanNorth = mapDetails['floorplannorth'];
			me._map_1.ggMapNotLoaded = false;
		}
		me._map_1.ggClearMap=function() {
			me._map_1.ggClearMapMarkers();
			me._map_1.ggMapNotLoaded = true;
		}
		me._map_1.ggChangeMap=function(mapId) {
			var newMapType = player.getMapType(mapId)
			if (newMapType == 'web') {
				return;
			}
			me._map_1.ggMapId = mapId;
			if (!me._map_1.ggMapNotLoaded) {
				me._map_1.ggClearMap();
				me._map_1.ggInitMap();
				me._map_1.ggInitMapMarkers();
			}
		}
		me._map_1.ggPlaceMarkersOnSimpleFloorplan=function() {
			var markers=me._map_1.ggSimpleFloorplanMarkerArray;
			for (id in markers) {
				if (markers.hasOwnProperty(id)) {
					marker=markers[id];
					var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
					var xPos = (me._map_1.ggFloorplanWidth * coords[0]) / 100.0;
					var yPos = (me._map_1.ggFloorplanHeight * coords[1]) / 100.0;
					marker.radarXPos = xPos;
					marker.radarYPos = yPos;
					xPos -= me._map_1.ggHMarkerAnchorOffset;
					yPos -= me._map_1.ggVMarkerAnchorOffset;
					marker.style['position'] = 'absolute';
					marker.style['left'] = xPos + 'px';
					marker.style['top'] = yPos + 'px';
					marker.style['z-index'] = me._map_1.style['z-index'] + 2;
				}
			}
		}
		me._map_1.ggInitMapMarkers=function() {
			me._map_1.ggClearMapMarkers();
			var ids=player.getNodeIds();
			me._map_1.ggFilteredIds = [];
			if (me._map_1.ggFilter != '') {
				var filter = me._map_1.ggFilter.split(',');
				for (i=0; i < ids.length; i++) {
					var nodeId = ids[i];
					var nodeData = player.getNodeUserdata(nodeId);
					for (var j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j].trim()) != -1) me._map_1.ggFilteredIds.push(nodeId);
					}
				}
				if (me._map_1.ggFilteredIds.length > 0) ids = me._map_1.ggFilteredIds;
			}
			for(var i=0; i < ids.length; i++) {
				var id = ids[i];
				var coords = player.getNodeMapCoordsInPercent(id, me._map_1.ggMapId);
				if (coords.length>=2) {
					me._map_1.ggHMarkerAnchorOffset = 20;
					me._map_1.ggVMarkerAnchorOffset = 40;
					var marker = document.createElement('img');
					marker.setAttribute('src', basePath + 'images/_ggMapPin.png');
					marker.setAttribute('title', player.getNodeTitle(id));
					marker.style['width'] = '40px';
					marker.style['width'] = '40px';
					marker.style['cursor'] = 'pointer';
					marker.ggId = id;
					marker.onclick = function() {
						player.openNext('{' + this.ggId + '}');
					}
					me._map_1.ggSimpleFloorplanMarkerArray[id] = marker;
					me._map_1__mapdiv.appendChild(marker);
				}
			}
			me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			skin.updateSize(me._map_1);
		}
		me._map_1.ggClearMapMarkers=function() {
			for (id in me._map_1.ggSimpleFloorplanMarkerArray) {
				if (me._map_1.ggSimpleFloorplanMarkerArray.hasOwnProperty(id)) {
					me._map_1__mapdiv.removeChild(me._map_1.ggSimpleFloorplanMarkerArray[id]);
				}
			}
			me._map_1.ggMarkerInstances=[];
			me._map_1.ggSimpleFloorplanMarkerArray=[];
		}
		me.elementMouseOver['button_02']=false;
		player.addListener('changenode', function(event) {
			var mapDetails = player.getMapDetails(me._map_1.ggMapId);
			if (mapDetails.hasOwnProperty('title')) {
				me._map_1.ggCalculateFloorplanSize(mapDetails);
				me._map_1.ggShowSimpleFloorplan(mapDetails);
				me._map_1.ggPlaceMarkersOnSimpleFloorplan();
			}
			if (me._map_1.ggRadar) me._map_1.ggRadar.update();
			if (me._map_1.ggLastNodeId) {
				var lastActiveMarker = me._map_1.ggSimpleFloorplanMarkerArray[me._map_1.ggLastNodeId];
				if (lastActiveMarker && lastActiveMarker.ggDeactivate) lastActiveMarker.ggDeactivate();
			}
			var id = player.getCurrentNode();
			var marker = me._map_1.ggSimpleFloorplanMarkerArray[id];
			if (marker) {
				if (marker.ggActivate) marker.ggActivate();
			}
			if (player.getMapType(me._map_1.ggMapId) == 'file') {
				var coords = player.getNodeMapCoords(id, me._map_1.ggMapId);
				if (coords.length < 2) {
					var mapId = player.getMapContainingNode(id);
					if (mapId != '') {
							me._map_1.ggChangeMap(mapId);
					}
				}
			}
			me._map_1.ggLastNodeId = id;
			me._map_1.ggRadar.update();
			me._button_4.ggConnectToMediaEl();
		});
		player.addListener('configloaded', function(event) {
			me._map_1.ggClearMap();
			me._map_1.ggInitMap(false);
			me._map_1.ggInitMapMarkers(true);
		});
		player.addListener('positionchanged', function(event) {
			me._map_1.ggRadar.update();
		});
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keydown', function(e) {
		var keyText = e.key;
		var keyCode = e.which || e.keyCode;
		if (!player.getLockedKeyboard()) {
			switch(keyText) {
				case '1':
					me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
me._nodeimage_1.onclick.call(me._nodeimage_1);
					break;
				case '2':
					me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
me._nodeimage_12.onclick.call(me._nodeimage_12);
					break;
				case '3':
					me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
me._nodeimage_10.onclick.call(me._nodeimage_10);
					break;
				case '4':
					me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
me._nodeimage_11.onclick.call(me._nodeimage_11);
					break;
			}
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
};