(()=>{var rl=Object.defineProperty,sl=Object.assign,ms=(a,b)=>()=>(b||(b={exports:{}},a(b.exports,b)),b.exports),ns=a=>rl(a,"__esModule",{value:!0}),os=(a,b)=>{ns(a);for(var c in b)rl(a,c,{get:b[c],enumerable:!0})};var kl=ms(e=>{os(e,{Main:()=>c});class c{static getInstance(){return c.instance||new c()}constructor(){c.instance=this,this._model=new ll(),this._sceneManager=new db()}get scene(){return this._sceneManager}get model(){return this._model}}const d=c.getInstance()});Number.EPSILON===void 0&&(Number.EPSILON=Math.pow(2,-52));Number.isInteger===void 0&&(Number.isInteger=function(a){return typeof a==="number"&&isFinite(a)&&Math.floor(a)===a});Math.sign===void 0&&(Math.sign=function(a){return a<0?-1:a>0?1:+a});"name"in Function.prototype===!1&&Object.defineProperty(Function.prototype,"name",{get:function(){return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1]}});Object.assign===void 0&&(Object.assign=function(a){if(a===void 0||a===null)throw new TypeError("Cannot convert undefined or null to object");const b=Object(a);for(let c=1;c<arguments.length;c++){const d=arguments[c];if(d!==void 0&&d!==null)for(const e in d)Object.prototype.hasOwnProperty.call(d,e)&&(b[e]=d[e])}return b});const fe="118",Ug=0,Li=1,yl=2,Mi=1,zl=2,ge=3,Oc=0,fb=1,nf=2,Ni=1,tc=0,he=1,Oi=2,Pi=3,Qi=4,Al=5,hd=100,Bl=101,Cl=102,Ri=103,Si=104,Dl=200,El=201,Fl=202,Gl=203,Ti=204,Ui=205,Hl=206,Il=207,Jl=208,Kl=209,Ll=210,Ml=0,Nl=1,Ol=2,Vg=3,Pl=4,Ql=5,Rl=6,Sl=7,of=0,Tl=1,Ul=2,id=0,Vl=1,Wl=2,Xl=3,Yl=4,Zl=5,Wg=300,Xg=301,Yg=302,Vi=303,Zg=304,ie=306,_g=307,pf=1e3,tb=1001,qf=1002,gb=1003,$g=1004,ah=1005,lb=1006,Wi=1007,rf=1008,je=1009,_l=1010,$l=1011,sf=1012,am=1013,tf=1014,uc=1015,uf=1016,bm=1017,cm=1018,dm=1019,ke=1020,em=1021,Pc=1022,Nb=1023,fm=1024,gm=1025,hm=Nb,jd=1026,le=1027,im=1028,jm=1029,km=1030,lm=1031,mm=1032,nm=1033,Xi=33776,Yi=33777,Zi=33778,_i=33779,$i=35840,aj=35841,bj=35842,cj=35843,om=36196,dj=37492,ej=37496,pm=37808,qm=37809,rm=37810,sm=37811,tm=37812,um=37813,vm=37814,wm=37815,xm=37816,ym=37817,zm=37818,Am=37819,Bm=37820,Cm=37821,Dm=36492,Em=37840,Fm=37841,Gm=37842,Hm=37843,Im=37844,Jm=37845,Km=37846,Lm=37847,Mm=37848,Nm=37849,Om=37850,Pm=37851,Qm=37852,Rm=37853,Sm=2200,Tm=2201,Um=2202,vf=2300,wf=2301,bh=2302,kd=2400,ld=2401,xf=2402,ch=2500,fj=2501,Vm=0,ub=3e3,yf=3001,me=3007,dh=3002,Wm=3003,gj=3004,hj=3005,ij=3006,Xm=3200,Ym=3201,md=0,Zm=1,eh=7680,_m=519,zf=35044,ne=35048;function ec(){}Object.assign(ec.prototype,{addEventListener:function(a,b){this._listeners===void 0&&(this._listeners={});const c=this._listeners;c[a]===void 0&&(c[a]=[]),c[a].indexOf(b)===-1&&c[a].push(b)},hasEventListener:function(a,b){if(this._listeners===void 0)return!1;const c=this._listeners;return c[a]!==void 0&&c[a].indexOf(b)!==-1},removeEventListener:function(a,b){if(this._listeners===void 0)return;const c=this._listeners,d=c[a];if(d!==void 0){const e=d.indexOf(b);e!==-1&&d.splice(e,1)}},dispatchEvent:function(a){if(this._listeners===void 0)return;const b=this._listeners,c=b[a.type];if(c!==void 0){a.target=this;const d=c.slice(0);for(let e=0,f=d.length;e<f;e++)d[e].call(this,a)}}});const jb=[];for(let a=0;a<256;a++)jb[a]=(a<16?"0":"")+a.toString(16);const va={DEG2RAD:Math.PI/180,RAD2DEG:180/Math.PI,generateUUID:function(){const a=Math.random()*4294967295|0,b=Math.random()*4294967295|0,c=Math.random()*4294967295|0,d=Math.random()*4294967295|0,e=jb[a&255]+jb[a>>8&255]+jb[a>>16&255]+jb[a>>24&255]+"-"+jb[b&255]+jb[b>>8&255]+"-"+jb[b>>16&15|64]+jb[b>>24&255]+"-"+jb[c&63|128]+jb[c>>8&255]+"-"+jb[c>>16&255]+jb[c>>24&255]+jb[d&255]+jb[d>>8&255]+jb[d>>16&255]+jb[d>>24&255];return e.toUpperCase()},clamp:function(a,b,c){return Math.max(b,Math.min(c,a))},euclideanModulo:function(a,b){return(a%b+b)%b},mapLinear:function(a,b,c,d,e){return d+(a-b)*(e-d)/(c-b)},lerp:function(a,b,c){return(1-c)*a+c*b},smoothstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*(3-2*a))},smootherstep:function(a,b,c){return a<=b?0:a>=c?1:(a=(a-b)/(c-b),a*a*a*(a*(a*6-15)+10))},randInt:function(a,b){return a+Math.floor(Math.random()*(b-a+1))},randFloat:function(a,b){return a+Math.random()*(b-a)},randFloatSpread:function(a){return a*(.5-Math.random())},degToRad:function(a){return a*va.DEG2RAD},radToDeg:function(a){return a*va.RAD2DEG},isPowerOfTwo:function(a){return(a&a-1)===0&&a!==0},ceilPowerOfTwo:function(a){return Math.pow(2,Math.ceil(Math.log(a)/Math.LN2))},floorPowerOfTwo:function(a){return Math.pow(2,Math.floor(Math.log(a)/Math.LN2))},setQuaternionFromProperEuler:function(a,b,c,d,e){const f=Math.cos,g=Math.sin,h=f(c/2),i=g(c/2),j=f((b+d)/2),l=g((b+d)/2),k=f((b-d)/2),n=g((b-d)/2),m=f((d-b)/2),o=g((d-b)/2);switch(e){case"XYX":a.set(h*l,i*k,i*n,h*j);break;case"YZY":a.set(i*n,h*l,i*k,h*j);break;case"ZXZ":a.set(i*k,i*n,h*l,h*j);break;case"XZX":a.set(h*l,i*o,i*m,h*j);break;case"YXY":a.set(i*m,h*l,i*o,h*j);break;case"ZYZ":a.set(i*o,i*m,h*l,h*j);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+e)}}};function N(a=0,b=0){this.x=a,this.y=b}Object.defineProperties(N.prototype,{width:{get:function(){return this.x},set:function(a){this.x=a}},height:{get:function(){return this.y},set:function(a){this.y=a}}});Object.assign(N.prototype,{isVector2:!0,set:function(a,b){return this.x=a,this.y=b,this},setScalar:function(a){return this.x=a,this.y=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y)},copy:function(a){return this.x=a.x,this.y=a.y,this},add:function(a,b){return b!==void 0?(console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this)},addScalar:function(a){return this.x+=a,this.y+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this},sub:function(a,b){return b!==void 0?(console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this)},subScalar:function(a){return this.x-=a,this.y-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this},multiply:function(a){return this.x*=a.x,this.y*=a.y,this},multiplyScalar:function(a){return this.x*=a,this.y*=a,this},divide:function(a){return this.x/=a.x,this.y/=a.y,this},divideScalar:function(a){return this.multiplyScalar(1/a)},applyMatrix3:function(a){const b=this.x,c=this.y,d=a.elements;return this.x=d[0]*b+d[3]*c+d[6],this.y=d[1]*b+d[4]*c+d[7],this},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this},clampScalar:function(a,b){return this.x=Math.max(a,Math.min(b,this.x)),this.y=Math.max(a,Math.min(b,this.y)),this},clampLength:function(a,b){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this},negate:function(){return this.x=-this.x,this.y=-this.y,this},dot:function(a){return this.x*a.x+this.y*a.y},cross:function(a){return this.x*a.y-this.y*a.x},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)},normalize:function(){return this.divideScalar(this.length()||1)},angle:function(){const a=Math.atan2(-this.y,-this.x)+Math.PI;return a},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){const b=this.x-a.x,c=this.y-a.y;return b*b+c*c},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this},lerpVectors:function(a,b,c){return this.x=a.x+(b.x-a.x)*c,this.y=a.y+(b.y-a.y)*c,this},equals:function(a){return a.x===this.x&&a.y===this.y},fromArray:function(a,b){return b===void 0&&(b=0),this.x=a[b],this.y=a[b+1],this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this.x,a[b+1]=this.y,a},fromBufferAttribute:function(a,b,c){return c!==void 0&&console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this},rotateAround:function(a,b){const c=Math.cos(b),d=Math.sin(b),e=this.x-a.x,f=this.y-a.y;return this.x=e*c-f*d+a.x,this.y=e*d+f*c+a.y,this},random:function(){return this.x=Math.random(),this.y=Math.random(),this}});function ob(){this.elements=[1,0,0,0,1,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.")}Object.assign(ob.prototype,{isMatrix3:!0,set:function(a,b,c,d,e,f,g,h,i){const j=this.elements;return j[0]=a,j[1]=d,j[2]=g,j[3]=b,j[4]=e,j[5]=h,j[6]=c,j[7]=f,j[8]=i,this},identity:function(){return this.set(1,0,0,0,1,0,0,0,1),this},clone:function(){return new this.constructor().fromArray(this.elements)},copy:function(a){const b=this.elements,c=a.elements;return b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3],b[4]=c[4],b[5]=c[5],b[6]=c[6],b[7]=c[7],b[8]=c[8],this},extractBasis:function(a,b,c){return a.setFromMatrix3Column(this,0),b.setFromMatrix3Column(this,1),c.setFromMatrix3Column(this,2),this},setFromMatrix4:function(a){const b=a.elements;return this.set(b[0],b[4],b[8],b[1],b[5],b[9],b[2],b[6],b[10]),this},multiply:function(a){return this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){const c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[3],h=c[6],i=c[1],j=c[4],l=c[7],k=c[2],n=c[5],m=c[8],o=d[0],s=d[3],r=d[6],p=d[1],q=d[4],u=d[7],t=d[2],w=d[5],A=d[8];return e[0]=f*o+g*p+h*t,e[3]=f*s+g*q+h*w,e[6]=f*r+g*u+h*A,e[1]=i*o+j*p+l*t,e[4]=i*s+j*q+l*w,e[7]=i*r+j*u+l*A,e[2]=k*o+n*p+m*t,e[5]=k*s+n*q+m*w,e[8]=k*r+n*u+m*A,this},multiplyScalar:function(a){const b=this.elements;return b[0]*=a,b[3]*=a,b[6]*=a,b[1]*=a,b[4]*=a,b[7]*=a,b[2]*=a,b[5]*=a,b[8]*=a,this},determinant:function(){const a=this.elements,b=a[0],c=a[1],d=a[2],e=a[3],f=a[4],g=a[5],h=a[6],i=a[7],j=a[8];return b*f*j-b*g*i-c*e*j+c*g*h+d*e*i-d*f*h},getInverse:function(a,b){b!==void 0&&console.warn("THREE.Matrix3: .getInverse() can no longer be configured to throw on degenerate.");const c=a.elements,d=this.elements,e=c[0],f=c[1],g=c[2],h=c[3],i=c[4],j=c[5],l=c[6],k=c[7],n=c[8],m=n*i-j*k,o=j*l-n*h,s=k*h-i*l,r=e*m+f*o+g*s;if(r===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/r;return d[0]=m*p,d[1]=(g*k-n*f)*p,d[2]=(j*f-g*i)*p,d[3]=o*p,d[4]=(n*e-g*l)*p,d[5]=(g*h-j*e)*p,d[6]=s*p,d[7]=(f*l-k*e)*p,d[8]=(i*e-f*h)*p,this},transpose:function(){let a;const b=this.elements;return a=b[1],b[1]=b[3],b[3]=a,a=b[2],b[2]=b[6],b[6]=a,a=b[5],b[5]=b[7],b[7]=a,this},getNormalMatrix:function(a){return this.setFromMatrix4(a).getInverse(this).transpose()},transposeIntoArray:function(a){const b=this.elements;return a[0]=b[0],a[1]=b[3],a[2]=b[6],a[3]=b[1],a[4]=b[4],a[5]=b[7],a[6]=b[2],a[7]=b[5],a[8]=b[8],this},setUvTransform:function(a,b,c,d,e,f,g){const h=Math.cos(e),i=Math.sin(e);this.set(c*h,c*i,-c*(h*f+i*g)+f+a,-d*i,d*h,-d*(-i*f+h*g)+g+b,0,0,1)},scale:function(a,b){const c=this.elements;return c[0]*=a,c[3]*=a,c[6]*=a,c[1]*=b,c[4]*=b,c[7]*=b,this},rotate:function(a){const b=Math.cos(a),c=Math.sin(a),d=this.elements,e=d[0],f=d[3],g=d[6],h=d[1],i=d[4],j=d[7];return d[0]=b*e+c*h,d[3]=b*f+c*i,d[6]=b*g+c*j,d[1]=-c*e+b*h,d[4]=-c*f+b*i,d[7]=-c*g+b*j,this},translate:function(a,b){const c=this.elements;return c[0]+=a*c[2],c[3]+=a*c[5],c[6]+=a*c[8],c[1]+=b*c[2],c[4]+=b*c[5],c[7]+=b*c[8],this},equals:function(a){const b=this.elements,c=a.elements;for(let d=0;d<9;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a,b){b===void 0&&(b=0);for(let c=0;c<9;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){a===void 0&&(a=[]),b===void 0&&(b=0);const c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a}});let nd;const Qc={getDataURL:function(a){if(/^data:/i.test(a.src))return a.src;if(typeof HTMLCanvasElement=="undefined")return a.src;let b;if(a instanceof HTMLCanvasElement)b=a;else{nd===void 0&&(nd=document.createElementNS("http://www.w3.org/1999/xhtml","canvas")),nd.width=a.width,nd.height=a.height;const c=nd.getContext("2d");a instanceof ImageData?c.putImageData(a,0,0):c.drawImage(a,0,0,a.width,a.height),b=nd}return b.width>2048||b.height>2048?b.toDataURL("image/jpeg",.6):b.toDataURL("image/png")}};let $m=0;function La(a,b,c,d,e,f,g,h,i,j){Object.defineProperty(this,"id",{value:$m++}),this.uuid=va.generateUUID(),this.name="",this.image=a!==void 0?a:La.DEFAULT_IMAGE,this.mipmaps=[],this.mapping=b!==void 0?b:La.DEFAULT_MAPPING,this.wrapS=c!==void 0?c:tb,this.wrapT=d!==void 0?d:tb,this.magFilter=e!==void 0?e:lb,this.minFilter=f!==void 0?f:rf,this.anisotropy=i!==void 0?i:1,this.format=g!==void 0?g:Nb,this.internalFormat=null,this.type=h!==void 0?h:je,this.offset=new N(0,0),this.repeat=new N(1,1),this.center=new N(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ob(),this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=j!==void 0?j:ub,this.version=0,this.onUpdate=null}La.DEFAULT_IMAGE=void 0;La.DEFAULT_MAPPING=Wg;La.prototype=Object.assign(Object.create(ec.prototype),{constructor:La,isTexture:!0,updateMatrix:function(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.name=a.name,this.image=a.image,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.encoding=a.encoding,this},toJSON:function(a){const b=a===void 0||typeof a==="string";if(!b&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];const c={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};if(this.image!==void 0){const d=this.image;d.uuid===void 0&&(d.uuid=va.generateUUID());if(!b&&a.images[d.uuid]===void 0){let e;if(Array.isArray(d)){e=[];for(let f=0,g=d.length;f<g;f++)e.push(Qc.getDataURL(d[f]))}else e=Qc.getDataURL(d);a.images[d.uuid]={uuid:d.uuid,url:e}}c.image=d.uuid}return b||(a.textures[this.uuid]=c),c},dispose:function(){this.dispatchEvent({type:"dispose"})},transformUv:function(a){if(this.mapping!==Wg)return a;a.applyMatrix3(this.matrix);if(a.x<0||a.x>1)switch(this.wrapS){case pf:a.x=a.x-Math.floor(a.x);break;case tb:a.x=a.x<0?0:1;break;case qf:Math.abs(Math.floor(a.x)%2)===1?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case pf:a.y=a.y-Math.floor(a.y);break;case tb:a.y=a.y<0?0:1;break;case qf:Math.abs(Math.floor(a.y)%2)===1?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y);break}return this.flipY&&(a.y=1-a.y),a}});Object.defineProperty(La.prototype,"needsUpdate",{set:function(a){a===!0&&this.version++}});function Ia(a=0,b=0,c=0,d=1){this.x=a,this.y=b,this.z=c,this.w=d}Object.defineProperties(Ia.prototype,{width:{get:function(){return this.z},set:function(a){this.z=a}},height:{get:function(){return this.w},set:function(a){this.w=a}}});Object.assign(Ia.prototype,{isVector4:!0,set:function(a,b,c,d){return this.x=a,this.y=b,this.z=c,this.w=d,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this.w=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setW:function(a){return this.w=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;case 3:this.w=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z,this.w)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this},add:function(a,b){return b!==void 0?(console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this.w=a.w+b.w,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this.w+=a.w*b,this},sub:function(a,b){return b!==void 0?(console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this.w=a.w-b.w,this},multiplyScalar:function(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this},applyMatrix4:function(a){const b=this.x,c=this.y,d=this.z,e=this.w,f=a.elements;return this.x=f[0]*b+f[4]*c+f[8]*d+f[12]*e,this.y=f[1]*b+f[5]*c+f[9]*d+f[13]*e,this.z=f[2]*b+f[6]*c+f[10]*d+f[14]*e,this.w=f[3]*b+f[7]*c+f[11]*d+f[15]*e,this},divideScalar:function(a){return this.multiplyScalar(1/a)},setAxisAngleFromQuaternion:function(a){this.w=2*Math.acos(a.w);const b=Math.sqrt(1-a.w*a.w);return b<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/b,this.y=a.y/b,this.z=a.z/b),this},setAxisAngleFromRotationMatrix:function(a){let b,c,d,e;const f=.01,g=.1,h=a.elements,i=h[0],j=h[4],l=h[8],k=h[1],n=h[5],m=h[9],o=h[2],s=h[6],r=h[10];if(Math.abs(j-k)<f&&Math.abs(l-o)<f&&Math.abs(m-s)<f){if(Math.abs(j+k)<g&&Math.abs(l+o)<g&&Math.abs(m+s)<g&&Math.abs(i+n+r-3)<g)return this.set(1,0,0,0),this;b=Math.PI;const q=(i+1)/2,u=(n+1)/2,t=(r+1)/2,w=(j+k)/4,A=(l+o)/4,B=(m+s)/4;return q>u&&q>t?q<f?(c=0,d=.707106781,e=.707106781):(c=Math.sqrt(q),d=w/c,e=A/c):u>t?u<f?(c=.707106781,d=0,e=.707106781):(d=Math.sqrt(u),c=w/d,e=B/d):t<f?(c=.707106781,d=.707106781,e=0):(e=Math.sqrt(t),c=A/e,d=B/e),this.set(c,d,e,b),this}let p=Math.sqrt((s-m)*(s-m)+(l-o)*(l-o)+(k-j)*(k-j));return Math.abs(p)<.001&&(p=1),this.x=(s-m)/p,this.y=(l-o)/p,this.z=(k-j)/p,this.w=Math.acos((i+n+r-1)/2),this},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this.w=Math.max(a.w,Math.min(b.w,this.w)),this},clampScalar:function(a,b){return this.x=Math.max(a,Math.min(b,this.x)),this.y=Math.max(a,Math.min(b,this.y)),this.z=Math.max(a,Math.min(b,this.z)),this.w=Math.max(a,Math.min(b,this.w)),this},clampLength:function(a,b){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this.w+=(a.w-this.w)*b,this},lerpVectors:function(a,b,c){return this.x=a.x+(b.x-a.x)*c,this.y=a.y+(b.y-a.y)*c,this.z=a.z+(b.z-a.z)*c,this.w=a.w+(b.w-a.w)*c,this},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w},fromArray:function(a,b){return b===void 0&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this.w=a[b+3],this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a[b+3]=this.w,a},fromBufferAttribute:function(a,b,c){return c!==void 0&&console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this.z=a.getZ(b),this.w=a.getW(b),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}});function Hb(a,b,c){this.width=a,this.height=b,this.scissor=new Ia(0,0,a,b),this.scissorTest=!1,this.viewport=new Ia(0,0,a,b),c=c||{},this.texture=new La(void 0,c.mapping,c.wrapS,c.wrapT,c.magFilter,c.minFilter,c.format,c.type,c.anisotropy,c.encoding),this.texture.image={},this.texture.image.width=a,this.texture.image.height=b,this.texture.generateMipmaps=c.generateMipmaps!==void 0?c.generateMipmaps:!1,this.texture.minFilter=c.minFilter!==void 0?c.minFilter:lb,this.depthBuffer=c.depthBuffer!==void 0?c.depthBuffer:!0,this.stencilBuffer=c.stencilBuffer!==void 0?c.stencilBuffer:!0,this.depthTexture=c.depthTexture!==void 0?c.depthTexture:null}Hb.prototype=Object.assign(Object.create(ec.prototype),{constructor:Hb,isWebGLRenderTarget:!0,setSize:function(a,b){(this.width!==a||this.height!==b)&&(this.width=a,this.height=b,this.texture.image.width=a,this.texture.image.height=b,this.dispose()),this.viewport.set(0,0,a,b),this.scissor.set(0,0,a,b)},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.width=a.width,this.height=a.height,this.viewport.copy(a.viewport),this.texture=a.texture.clone(),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.depthTexture=a.depthTexture,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});function jj(a,b,c){Hb.call(this,a,b,c),this.samples=4}jj.prototype=Object.assign(Object.create(Hb.prototype),{constructor:jj,isWebGLMultisampleRenderTarget:!0,copy:function(a){return Hb.prototype.copy.call(this,a),this.samples=a.samples,this}});function hb(a=0,b=0,c=0,d=1){this._x=a,this._y=b,this._z=c,this._w=d}Object.assign(hb,{slerp:function(a,b,c,d){return c.copy(a).slerp(b,d)},slerpFlat:function(a,b,c,d,e,f,g){let h=c[d+0],i=c[d+1],j=c[d+2],l=c[d+3];const k=e[f+0],n=e[f+1],m=e[f+2],o=e[f+3];if(l!==o||h!==k||i!==n||j!==m){let s=1-g,r=h*k+i*n+j*m+l*o,p=r>=0?1:-1,q=1-r*r;if(q>Number.EPSILON){const t=Math.sqrt(q),w=Math.atan2(t,r*p);s=Math.sin(s*w)/t,g=Math.sin(g*w)/t}const u=g*p;h=h*s+k*u,i=i*s+n*u,j=j*s+m*u,l=l*s+o*u;if(s===1-g){const t=1/Math.sqrt(h*h+i*i+j*j+l*l);h*=t,i*=t,j*=t,l*=t}}a[b]=h,a[b+1]=i,a[b+2]=j,a[b+3]=l},multiplyQuaternionsFlat:function(a,b,c,d,e,f){const g=c[d],h=c[d+1],i=c[d+2],j=c[d+3],l=e[f],k=e[f+1],n=e[f+2],m=e[f+3];return a[b]=g*m+j*l+h*n-i*k,a[b+1]=h*m+j*k+i*l-g*n,a[b+2]=i*m+j*n+g*k-h*l,a[b+3]=j*m-g*l-h*k-i*n,a}});Object.defineProperties(hb.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a,this._onChangeCallback()}},w:{get:function(){return this._w},set:function(a){this._w=a,this._onChangeCallback()}}});Object.assign(hb.prototype,{isQuaternion:!0,set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._w=d,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._w)},copy:function(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this},setFromEuler:function(a,b){if(!(a&&a.isEuler))throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");const c=a._x,d=a._y,e=a._z,f=a.order,g=Math.cos,h=Math.sin,i=g(c/2),j=g(d/2),l=g(e/2),k=h(c/2),n=h(d/2),m=h(e/2);switch(f){case"XYZ":this._x=k*j*l+i*n*m,this._y=i*n*l-k*j*m,this._z=i*j*m+k*n*l,this._w=i*j*l-k*n*m;break;case"YXZ":this._x=k*j*l+i*n*m,this._y=i*n*l-k*j*m,this._z=i*j*m-k*n*l,this._w=i*j*l+k*n*m;break;case"ZXY":this._x=k*j*l-i*n*m,this._y=i*n*l+k*j*m,this._z=i*j*m+k*n*l,this._w=i*j*l-k*n*m;break;case"ZYX":this._x=k*j*l-i*n*m,this._y=i*n*l+k*j*m,this._z=i*j*m-k*n*l,this._w=i*j*l+k*n*m;break;case"YZX":this._x=k*j*l+i*n*m,this._y=i*n*l+k*j*m,this._z=i*j*m-k*n*l,this._w=i*j*l-k*n*m;break;case"XZY":this._x=k*j*l-i*n*m,this._y=i*n*l-k*j*m,this._z=i*j*m+k*n*l,this._w=i*j*l+k*n*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return b!==!1&&this._onChangeCallback(),this},setFromAxisAngle:function(a,b){const c=b/2,d=Math.sin(c);return this._x=a.x*d,this._y=a.y*d,this._z=a.z*d,this._w=Math.cos(c),this._onChangeCallback(),this},setFromRotationMatrix:function(a){const b=a.elements,c=b[0],d=b[4],e=b[8],f=b[1],g=b[5],h=b[9],i=b[2],j=b[6],l=b[10],k=c+g+l;if(k>0){const n=.5/Math.sqrt(k+1);this._w=.25/n,this._x=(j-h)*n,this._y=(e-i)*n,this._z=(f-d)*n}else if(c>g&&c>l){const n=2*Math.sqrt(1+c-g-l);this._w=(j-h)/n,this._x=.25*n,this._y=(d+f)/n,this._z=(e+i)/n}else if(g>l){const n=2*Math.sqrt(1+g-c-l);this._w=(e-i)/n,this._x=(d+f)/n,this._y=.25*n,this._z=(h+j)/n}else{const n=2*Math.sqrt(1+l-c-g);this._w=(f-d)/n,this._x=(e+i)/n,this._y=(h+j)/n,this._z=.25*n}return this._onChangeCallback(),this},setFromUnitVectors:function(a,b){const c=1e-6;let d=a.dot(b)+1;return d<c?(d=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0,this._w=d):(this._x=0,this._y=-a.z,this._z=a.y,this._w=d)):(this._x=a.y*b.z-a.z*b.y,this._y=a.z*b.x-a.x*b.z,this._z=a.x*b.y-a.y*b.x,this._w=d),this.normalize()},angleTo:function(a){return 2*Math.acos(Math.abs(va.clamp(this.dot(a),-1,1)))},rotateTowards:function(a,b){const c=this.angleTo(a);if(c===0)return this;const d=Math.min(1,b/c);return this.slerp(a,d),this},inverse:function(){return this.conjugate()},conjugate:function(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this},dot:function(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w},lengthSq:function(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w},length:function(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)},normalize:function(){let a=this.length();return a===0?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this._onChangeCallback(),this},multiply:function(a,b){return b!==void 0?(console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."),this.multiplyQuaternions(a,b)):this.multiplyQuaternions(this,a)},premultiply:function(a){return this.multiplyQuaternions(a,this)},multiplyQuaternions:function(a,b){const c=a._x,d=a._y,e=a._z,f=a._w,g=b._x,h=b._y,i=b._z,j=b._w;return this._x=c*j+f*g+d*i-e*h,this._y=d*j+f*h+e*g-c*i,this._z=e*j+f*i+c*h-d*g,this._w=f*j-c*g-d*h-e*i,this._onChangeCallback(),this},slerp:function(a,b){if(b===0)return this;if(b===1)return this.copy(a);const c=this._x,d=this._y,e=this._z,f=this._w;let g=f*a._w+c*a._x+d*a._y+e*a._z;g<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,g=-g):this.copy(a);if(g>=1)return this._w=f,this._x=c,this._y=d,this._z=e,this;const h=1-g*g;if(h<=Number.EPSILON){const n=1-b;return this._w=n*f+b*this._w,this._x=n*c+b*this._x,this._y=n*d+b*this._y,this._z=n*e+b*this._z,this.normalize(),this._onChangeCallback(),this}const i=Math.sqrt(h),j=Math.atan2(i,g),l=Math.sin((1-b)*j)/i,k=Math.sin(b*j)/i;return this._w=f*l+this._w*k,this._x=c*l+this._x*k,this._y=d*l+this._y*k,this._z=e*l+this._z*k,this._onChangeCallback(),this},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w},fromArray:function(a,b){return b===void 0&&(b=0),this._x=a[b],this._y=a[b+1],this._z=a[b+2],this._w=a[b+3],this._onChangeCallback(),this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._w,a},fromBufferAttribute:function(a,b){return this._x=a.getX(b),this._y=a.getY(b),this._z=a.getZ(b),this._w=a.getW(b),this},_onChange:function(a){return this._onChangeCallback=a,this},_onChangeCallback:function(){}});const fh=new v(),kj=new hb();function v(a=0,b=0,c=0){this.x=a,this.y=b,this.z=c}Object.assign(v.prototype,{isVector3:!0,set:function(a,b,c){return this.x=a,this.y=b,this.z=c,this},setScalar:function(a){return this.x=a,this.y=a,this.z=a,this},setX:function(a){return this.x=a,this},setY:function(a){return this.y=a,this},setZ:function(a){return this.z=a,this},setComponent:function(a,b){switch(a){case 0:this.x=b;break;case 1:this.y=b;break;case 2:this.z=b;break;default:throw new Error("index is out of range: "+a)}return this},getComponent:function(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}},clone:function(){return new this.constructor(this.x,this.y,this.z)},copy:function(a){return this.x=a.x,this.y=a.y,this.z=a.z,this},add:function(a,b){return b!==void 0?(console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."),this.addVectors(a,b)):(this.x+=a.x,this.y+=a.y,this.z+=a.z,this)},addScalar:function(a){return this.x+=a,this.y+=a,this.z+=a,this},addVectors:function(a,b){return this.x=a.x+b.x,this.y=a.y+b.y,this.z=a.z+b.z,this},addScaledVector:function(a,b){return this.x+=a.x*b,this.y+=a.y*b,this.z+=a.z*b,this},sub:function(a,b){return b!==void 0?(console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."),this.subVectors(a,b)):(this.x-=a.x,this.y-=a.y,this.z-=a.z,this)},subScalar:function(a){return this.x-=a,this.y-=a,this.z-=a,this},subVectors:function(a,b){return this.x=a.x-b.x,this.y=a.y-b.y,this.z=a.z-b.z,this},multiply:function(a,b){return b!==void 0?(console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."),this.multiplyVectors(a,b)):(this.x*=a.x,this.y*=a.y,this.z*=a.z,this)},multiplyScalar:function(a){return this.x*=a,this.y*=a,this.z*=a,this},multiplyVectors:function(a,b){return this.x=a.x*b.x,this.y=a.y*b.y,this.z=a.z*b.z,this},applyEuler:function(a){return a&&a.isEuler||console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."),this.applyQuaternion(kj.setFromEuler(a))},applyAxisAngle:function(a,b){return this.applyQuaternion(kj.setFromAxisAngle(a,b))},applyMatrix3:function(a){const b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[3]*c+e[6]*d,this.y=e[1]*b+e[4]*c+e[7]*d,this.z=e[2]*b+e[5]*c+e[8]*d,this},applyNormalMatrix:function(a){return this.applyMatrix3(a).normalize()},applyMatrix4:function(a){const b=this.x,c=this.y,d=this.z,e=a.elements,f=1/(e[3]*b+e[7]*c+e[11]*d+e[15]);return this.x=(e[0]*b+e[4]*c+e[8]*d+e[12])*f,this.y=(e[1]*b+e[5]*c+e[9]*d+e[13])*f,this.z=(e[2]*b+e[6]*c+e[10]*d+e[14])*f,this},applyQuaternion:function(a){const b=this.x,c=this.y,d=this.z,e=a.x,f=a.y,g=a.z,h=a.w,i=h*b+f*d-g*c,j=h*c+g*b-e*d,l=h*d+e*c-f*b,k=-e*b-f*c-g*d;return this.x=i*h+k*-e+j*-g-l*-f,this.y=j*h+k*-f+l*-e-i*-g,this.z=l*h+k*-g+i*-f-j*-e,this},project:function(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)},unproject:function(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)},transformDirection:function(a){const b=this.x,c=this.y,d=this.z,e=a.elements;return this.x=e[0]*b+e[4]*c+e[8]*d,this.y=e[1]*b+e[5]*c+e[9]*d,this.z=e[2]*b+e[6]*c+e[10]*d,this.normalize()},divide:function(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this},divideScalar:function(a){return this.multiplyScalar(1/a)},min:function(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this},max:function(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this},clamp:function(a,b){return this.x=Math.max(a.x,Math.min(b.x,this.x)),this.y=Math.max(a.y,Math.min(b.y,this.y)),this.z=Math.max(a.z,Math.min(b.z,this.z)),this},clampScalar:function(a,b){return this.x=Math.max(a,Math.min(b,this.x)),this.y=Math.max(a,Math.min(b,this.y)),this.z=Math.max(a,Math.min(b,this.z)),this},clampLength:function(a,b){const c=this.length();return this.divideScalar(c||1).multiplyScalar(Math.max(a,Math.min(b,c)))},floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this},ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this},round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this},roundToZero:function(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this},negate:function(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)},manhattanLength:function(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)},normalize:function(){return this.divideScalar(this.length()||1)},setLength:function(a){return this.normalize().multiplyScalar(a)},lerp:function(a,b){return this.x+=(a.x-this.x)*b,this.y+=(a.y-this.y)*b,this.z+=(a.z-this.z)*b,this},lerpVectors:function(a,b,c){return this.x=a.x+(b.x-a.x)*c,this.y=a.y+(b.y-a.y)*c,this.z=a.z+(b.z-a.z)*c,this},cross:function(a,b){return b!==void 0?(console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."),this.crossVectors(a,b)):this.crossVectors(this,a)},crossVectors:function(a,b){const c=a.x,d=a.y,e=a.z,f=b.x,g=b.y,h=b.z;return this.x=d*h-e*g,this.y=e*f-c*h,this.z=c*g-d*f,this},projectOnVector:function(a){const b=a.lengthSq();if(b===0)return this.set(0,0,0);const c=a.dot(this)/b;return this.copy(a).multiplyScalar(c)},projectOnPlane:function(a){return fh.copy(this).projectOnVector(a),this.sub(fh)},reflect:function(a){return this.sub(fh.copy(a).multiplyScalar(2*this.dot(a)))},angleTo:function(a){const b=Math.sqrt(this.lengthSq()*a.lengthSq());if(b===0)return Math.PI/2;const c=this.dot(a)/b;return Math.acos(va.clamp(c,-1,1))},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){const b=this.x-a.x,c=this.y-a.y,d=this.z-a.z;return b*b+c*c+d*d},manhattanDistanceTo:function(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)},setFromSpherical:function(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)},setFromSphericalCoords:function(a,b,c){const d=Math.sin(b)*a;return this.x=d*Math.sin(c),this.y=Math.cos(b)*a,this.z=d*Math.cos(c),this},setFromCylindrical:function(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)},setFromCylindricalCoords:function(a,b,c){return this.x=a*Math.sin(b),this.y=c,this.z=a*Math.cos(b),this},setFromMatrixPosition:function(a){const b=a.elements;return this.x=b[12],this.y=b[13],this.z=b[14],this},setFromMatrixScale:function(a){const b=this.setFromMatrixColumn(a,0).length(),c=this.setFromMatrixColumn(a,1).length(),d=this.setFromMatrixColumn(a,2).length();return this.x=b,this.y=c,this.z=d,this},setFromMatrixColumn:function(a,b){return this.fromArray(a.elements,b*4)},setFromMatrix3Column:function(a,b){return this.fromArray(a.elements,b*3)},equals:function(a){return a.x===this.x&&a.y===this.y&&a.z===this.z},fromArray:function(a,b){return b===void 0&&(b=0),this.x=a[b],this.y=a[b+1],this.z=a[b+2],this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this.x,a[b+1]=this.y,a[b+2]=this.z,a},fromBufferAttribute:function(a,b,c){return c!==void 0&&console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute()."),this.x=a.getX(b),this.y=a.getY(b),this.z=a.getZ(b),this},random:function(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}});const od=new v(),Ob=new za(),an=new v(0,0,0),bn=new v(1,1,1),vc=new v(),Af=new v(),zb=new v();function za(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],arguments.length>0&&console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.")}Object.assign(za.prototype,{isMatrix4:!0,set:function(a,b,c,d,e,f,g,h,i,j,l,k,n,m,o,s){const r=this.elements;return r[0]=a,r[4]=b,r[8]=c,r[12]=d,r[1]=e,r[5]=f,r[9]=g,r[13]=h,r[2]=i,r[6]=j,r[10]=l,r[14]=k,r[3]=n,r[7]=m,r[11]=o,r[15]=s,this},identity:function(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this},clone:function(){return new za().fromArray(this.elements)},copy:function(a){const b=this.elements,c=a.elements;return b[0]=c[0],b[1]=c[1],b[2]=c[2],b[3]=c[3],b[4]=c[4],b[5]=c[5],b[6]=c[6],b[7]=c[7],b[8]=c[8],b[9]=c[9],b[10]=c[10],b[11]=c[11],b[12]=c[12],b[13]=c[13],b[14]=c[14],b[15]=c[15],this},copyPosition:function(a){const b=this.elements,c=a.elements;return b[12]=c[12],b[13]=c[13],b[14]=c[14],this},extractBasis:function(a,b,c){return a.setFromMatrixColumn(this,0),b.setFromMatrixColumn(this,1),c.setFromMatrixColumn(this,2),this},makeBasis:function(a,b,c){return this.set(a.x,b.x,c.x,0,a.y,b.y,c.y,0,a.z,b.z,c.z,0,0,0,0,1),this},extractRotation:function(a){const b=this.elements,c=a.elements,d=1/od.setFromMatrixColumn(a,0).length(),e=1/od.setFromMatrixColumn(a,1).length(),f=1/od.setFromMatrixColumn(a,2).length();return b[0]=c[0]*d,b[1]=c[1]*d,b[2]=c[2]*d,b[3]=0,b[4]=c[4]*e,b[5]=c[5]*e,b[6]=c[6]*e,b[7]=0,b[8]=c[8]*f,b[9]=c[9]*f,b[10]=c[10]*f,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},makeRotationFromEuler:function(a){a&&a.isEuler||console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");const b=this.elements,c=a.x,d=a.y,e=a.z,f=Math.cos(c),g=Math.sin(c),h=Math.cos(d),i=Math.sin(d),j=Math.cos(e),l=Math.sin(e);if(a.order==="XYZ"){const k=f*j,n=f*l,m=g*j,o=g*l;b[0]=h*j,b[4]=-h*l,b[8]=i,b[1]=n+m*i,b[5]=k-o*i,b[9]=-g*h,b[2]=o-k*i,b[6]=m+n*i,b[10]=f*h}else if(a.order==="YXZ"){const k=h*j,n=h*l,m=i*j,o=i*l;b[0]=k+o*g,b[4]=m*g-n,b[8]=f*i,b[1]=f*l,b[5]=f*j,b[9]=-g,b[2]=n*g-m,b[6]=o+k*g,b[10]=f*h}else if(a.order==="ZXY"){const k=h*j,n=h*l,m=i*j,o=i*l;b[0]=k-o*g,b[4]=-f*l,b[8]=m+n*g,b[1]=n+m*g,b[5]=f*j,b[9]=o-k*g,b[2]=-f*i,b[6]=g,b[10]=f*h}else if(a.order==="ZYX"){const k=f*j,n=f*l,m=g*j,o=g*l;b[0]=h*j,b[4]=m*i-n,b[8]=k*i+o,b[1]=h*l,b[5]=o*i+k,b[9]=n*i-m,b[2]=-i,b[6]=g*h,b[10]=f*h}else if(a.order==="YZX"){const k=f*h,n=f*i,m=g*h,o=g*i;b[0]=h*j,b[4]=o-k*l,b[8]=m*l+n,b[1]=l,b[5]=f*j,b[9]=-g*j,b[2]=-i*j,b[6]=n*l+m,b[10]=k-o*l}else if(a.order==="XZY"){const k=f*h,n=f*i,m=g*h,o=g*i;b[0]=h*j,b[4]=-l,b[8]=i*j,b[1]=k*l+o,b[5]=f*j,b[9]=n*l-m,b[2]=m*l-n,b[6]=g*j,b[10]=o*l+k}return b[3]=0,b[7]=0,b[11]=0,b[12]=0,b[13]=0,b[14]=0,b[15]=1,this},makeRotationFromQuaternion:function(a){return this.compose(an,a,bn)},lookAt:function(a,b,c){const d=this.elements;return zb.subVectors(a,b),zb.lengthSq()===0&&(zb.z=1),zb.normalize(),vc.crossVectors(c,zb),vc.lengthSq()===0&&(Math.abs(c.z)===1?zb.x+=1e-4:zb.z+=1e-4,zb.normalize(),vc.crossVectors(c,zb)),vc.normalize(),Af.crossVectors(zb,vc),d[0]=vc.x,d[4]=Af.x,d[8]=zb.x,d[1]=vc.y,d[5]=Af.y,d[9]=zb.y,d[2]=vc.z,d[6]=Af.z,d[10]=zb.z,this},multiply:function(a,b){return b!==void 0?(console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."),this.multiplyMatrices(a,b)):this.multiplyMatrices(this,a)},premultiply:function(a){return this.multiplyMatrices(a,this)},multiplyMatrices:function(a,b){const c=a.elements,d=b.elements,e=this.elements,f=c[0],g=c[4],h=c[8],i=c[12],j=c[1],l=c[5],k=c[9],n=c[13],m=c[2],o=c[6],s=c[10],r=c[14],p=c[3],q=c[7],u=c[11],t=c[15],w=d[0],A=d[4],B=d[8],L=d[12],C=d[1],U=d[5],I=d[9],J=d[13],H=d[2],D=d[6],F=d[10],M=d[14],S=d[3],T=d[7],ea=d[11],ka=d[15];return e[0]=f*w+g*C+h*H+i*S,e[4]=f*A+g*U+h*D+i*T,e[8]=f*B+g*I+h*F+i*ea,e[12]=f*L+g*J+h*M+i*ka,e[1]=j*w+l*C+k*H+n*S,e[5]=j*A+l*U+k*D+n*T,e[9]=j*B+l*I+k*F+n*ea,e[13]=j*L+l*J+k*M+n*ka,e[2]=m*w+o*C+s*H+r*S,e[6]=m*A+o*U+s*D+r*T,e[10]=m*B+o*I+s*F+r*ea,e[14]=m*L+o*J+s*M+r*ka,e[3]=p*w+q*C+u*H+t*S,e[7]=p*A+q*U+u*D+t*T,e[11]=p*B+q*I+u*F+t*ea,e[15]=p*L+q*J+u*M+t*ka,this},multiplyScalar:function(a){const b=this.elements;return b[0]*=a,b[4]*=a,b[8]*=a,b[12]*=a,b[1]*=a,b[5]*=a,b[9]*=a,b[13]*=a,b[2]*=a,b[6]*=a,b[10]*=a,b[14]*=a,b[3]*=a,b[7]*=a,b[11]*=a,b[15]*=a,this},determinant:function(){const a=this.elements,b=a[0],c=a[4],d=a[8],e=a[12],f=a[1],g=a[5],h=a[9],i=a[13],j=a[2],l=a[6],k=a[10],n=a[14],m=a[3],o=a[7],s=a[11],r=a[15];return m*(+e*h*l-d*i*l-e*g*k+c*i*k+d*g*n-c*h*n)+o*(+b*h*n-b*i*k+e*f*k-d*f*n+d*i*j-e*h*j)+s*(+b*i*l-b*g*n-e*f*l+c*f*n+e*g*j-c*i*j)+r*(-d*g*j-b*h*l+b*g*k+d*f*l-c*f*k+c*h*j)},transpose:function(){const a=this.elements;let b;return b=a[1],a[1]=a[4],a[4]=b,b=a[2],a[2]=a[8],a[8]=b,b=a[6],a[6]=a[9],a[9]=b,b=a[3],a[3]=a[12],a[12]=b,b=a[7],a[7]=a[13],a[13]=b,b=a[11],a[11]=a[14],a[14]=b,this},setPosition:function(a,b,c){const d=this.elements;return a.isVector3?(d[12]=a.x,d[13]=a.y,d[14]=a.z):(d[12]=a,d[13]=b,d[14]=c),this},getInverse:function(a,b){b!==void 0&&console.warn("THREE.Matrix4: .getInverse() can no longer be configured to throw on degenerate.");const c=this.elements,d=a.elements,e=d[0],f=d[1],g=d[2],h=d[3],i=d[4],j=d[5],l=d[6],k=d[7],n=d[8],m=d[9],o=d[10],s=d[11],r=d[12],p=d[13],q=d[14],u=d[15],t=m*q*k-p*o*k+p*l*s-j*q*s-m*l*u+j*o*u,w=r*o*k-n*q*k-r*l*s+i*q*s+n*l*u-i*o*u,A=n*p*k-r*m*k+r*j*s-i*p*s-n*j*u+i*m*u,B=r*m*l-n*p*l-r*j*o+i*p*o+n*j*q-i*m*q,L=e*t+f*w+g*A+h*B;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/L;return c[0]=t*C,c[1]=(p*o*h-m*q*h-p*g*s+f*q*s+m*g*u-f*o*u)*C,c[2]=(j*q*h-p*l*h+p*g*k-f*q*k-j*g*u+f*l*u)*C,c[3]=(m*l*h-j*o*h-m*g*k+f*o*k+j*g*s-f*l*s)*C,c[4]=w*C,c[5]=(n*q*h-r*o*h+r*g*s-e*q*s-n*g*u+e*o*u)*C,c[6]=(r*l*h-i*q*h-r*g*k+e*q*k+i*g*u-e*l*u)*C,c[7]=(i*o*h-n*l*h+n*g*k-e*o*k-i*g*s+e*l*s)*C,c[8]=A*C,c[9]=(r*m*h-n*p*h-r*f*s+e*p*s+n*f*u-e*m*u)*C,c[10]=(i*p*h-r*j*h+r*f*k-e*p*k-i*f*u+e*j*u)*C,c[11]=(n*j*h-i*m*h-n*f*k+e*m*k+i*f*s-e*j*s)*C,c[12]=B*C,c[13]=(n*p*g-r*m*g+r*f*o-e*p*o-n*f*q+e*m*q)*C,c[14]=(r*j*g-i*p*g-r*f*l+e*p*l+i*f*q-e*j*q)*C,c[15]=(i*m*g-n*j*g+n*f*l-e*m*l-i*f*o+e*j*o)*C,this},scale:function(a){const b=this.elements,c=a.x,d=a.y,e=a.z;return b[0]*=c,b[4]*=d,b[8]*=e,b[1]*=c,b[5]*=d,b[9]*=e,b[2]*=c,b[6]*=d,b[10]*=e,b[3]*=c,b[7]*=d,b[11]*=e,this},getMaxScaleOnAxis:function(){const a=this.elements,b=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],c=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],d=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(b,c,d))},makeTranslation:function(a,b,c){return this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1),this},makeRotationX:function(a){const b=Math.cos(a),c=Math.sin(a);return this.set(1,0,0,0,0,b,-c,0,0,c,b,0,0,0,0,1),this},makeRotationY:function(a){const b=Math.cos(a),c=Math.sin(a);return this.set(b,0,c,0,0,1,0,0,-c,0,b,0,0,0,0,1),this},makeRotationZ:function(a){const b=Math.cos(a),c=Math.sin(a);return this.set(b,-c,0,0,c,b,0,0,0,0,1,0,0,0,0,1),this},makeRotationAxis:function(a,b){const c=Math.cos(b),d=Math.sin(b),e=1-c,f=a.x,g=a.y,h=a.z,i=e*f,j=e*g;return this.set(i*f+c,i*g-d*h,i*h+d*g,0,i*g+d*h,j*g+c,j*h-d*f,0,i*h-d*g,j*h+d*f,e*h*h+c,0,0,0,0,1),this},makeScale:function(a,b,c){return this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1),this},makeShear:function(a,b,c){return this.set(1,b,c,0,a,1,c,0,a,b,1,0,0,0,0,1),this},compose:function(a,b,c){const d=this.elements,e=b._x,f=b._y,g=b._z,h=b._w,i=e+e,j=f+f,l=g+g,k=e*i,n=e*j,m=e*l,o=f*j,s=f*l,r=g*l,p=h*i,q=h*j,u=h*l,t=c.x,w=c.y,A=c.z;return d[0]=(1-(o+r))*t,d[1]=(n+u)*t,d[2]=(m-q)*t,d[3]=0,d[4]=(n-u)*w,d[5]=(1-(k+r))*w,d[6]=(s+p)*w,d[7]=0,d[8]=(m+q)*A,d[9]=(s-p)*A,d[10]=(1-(k+o))*A,d[11]=0,d[12]=a.x,d[13]=a.y,d[14]=a.z,d[15]=1,this},decompose:function(a,b,c){const d=this.elements;let e=od.set(d[0],d[1],d[2]).length(),f=od.set(d[4],d[5],d[6]).length(),g=od.set(d[8],d[9],d[10]).length();const h=this.determinant();h<0&&(e=-e),a.x=d[12],a.y=d[13],a.z=d[14],Ob.copy(this);const i=1/e,j=1/f,l=1/g;return Ob.elements[0]*=i,Ob.elements[1]*=i,Ob.elements[2]*=i,Ob.elements[4]*=j,Ob.elements[5]*=j,Ob.elements[6]*=j,Ob.elements[8]*=l,Ob.elements[9]*=l,Ob.elements[10]*=l,b.setFromRotationMatrix(Ob),c.x=e,c.y=f,c.z=g,this},makePerspective:function(a,b,c,d,e,f){f===void 0&&console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");const g=this.elements,h=2*e/(b-a),i=2*e/(c-d),j=(b+a)/(b-a),l=(c+d)/(c-d),k=-(f+e)/(f-e),n=-2*f*e/(f-e);return g[0]=h,g[4]=0,g[8]=j,g[12]=0,g[1]=0,g[5]=i,g[9]=l,g[13]=0,g[2]=0,g[6]=0,g[10]=k,g[14]=n,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this},makeOrthographic:function(a,b,c,d,e,f){const g=this.elements,h=1/(b-a),i=1/(c-d),j=1/(f-e),l=(b+a)*h,k=(c+d)*i,n=(f+e)*j;return g[0]=2*h,g[4]=0,g[8]=0,g[12]=-l,g[1]=0,g[5]=2*i,g[9]=0,g[13]=-k,g[2]=0,g[6]=0,g[10]=-2*j,g[14]=-n,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this},equals:function(a){const b=this.elements,c=a.elements;for(let d=0;d<16;d++)if(b[d]!==c[d])return!1;return!0},fromArray:function(a,b){b===void 0&&(b=0);for(let c=0;c<16;c++)this.elements[c]=a[c+b];return this},toArray:function(a,b){a===void 0&&(a=[]),b===void 0&&(b=0);const c=this.elements;return a[b]=c[0],a[b+1]=c[1],a[b+2]=c[2],a[b+3]=c[3],a[b+4]=c[4],a[b+5]=c[5],a[b+6]=c[6],a[b+7]=c[7],a[b+8]=c[8],a[b+9]=c[9],a[b+10]=c[10],a[b+11]=c[11],a[b+12]=c[12],a[b+13]=c[13],a[b+14]=c[14],a[b+15]=c[15],a}});const lj=new za(),mj=new hb();function pd(a=0,b=0,c=0,d=pd.DefaultOrder){this._x=a,this._y=b,this._z=c,this._order=d}pd.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];pd.DefaultOrder="XYZ";Object.defineProperties(pd.prototype,{x:{get:function(){return this._x},set:function(a){this._x=a,this._onChangeCallback()}},y:{get:function(){return this._y},set:function(a){this._y=a,this._onChangeCallback()}},z:{get:function(){return this._z},set:function(a){this._z=a,this._onChangeCallback()}},order:{get:function(){return this._order},set:function(a){this._order=a,this._onChangeCallback()}}});Object.assign(pd.prototype,{isEuler:!0,set:function(a,b,c,d){return this._x=a,this._y=b,this._z=c,this._order=d||this._order,this._onChangeCallback(),this},clone:function(){return new this.constructor(this._x,this._y,this._z,this._order)},copy:function(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this},setFromRotationMatrix:function(a,b,c){const d=va.clamp,e=a.elements,f=e[0],g=e[4],h=e[8],i=e[1],j=e[5],l=e[9],k=e[2],n=e[6],m=e[10];b=b||this._order;switch(b){case"XYZ":this._y=Math.asin(d(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-g,f)):(this._x=Math.atan2(n,j),this._z=0);break;case"YXZ":this._x=Math.asin(-d(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(h,m),this._z=Math.atan2(i,j)):(this._y=Math.atan2(-k,f),this._z=0);break;case"ZXY":this._x=Math.asin(d(n,-1,1)),Math.abs(n)<.9999999?(this._y=Math.atan2(-k,m),this._z=Math.atan2(-g,j)):(this._y=0,this._z=Math.atan2(i,f));break;case"ZYX":this._y=Math.asin(-d(k,-1,1)),Math.abs(k)<.9999999?(this._x=Math.atan2(n,m),this._z=Math.atan2(i,f)):(this._x=0,this._z=Math.atan2(-g,j));break;case"YZX":this._z=Math.asin(d(i,-1,1)),Math.abs(i)<.9999999?(this._x=Math.atan2(-l,j),this._y=Math.atan2(-k,f)):(this._x=0,this._y=Math.atan2(h,m));break;case"XZY":this._z=Math.asin(-d(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(n,j),this._y=Math.atan2(h,f)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+b)}return this._order=b,c!==!1&&this._onChangeCallback(),this},setFromQuaternion:function(a,b,c){return lj.makeRotationFromQuaternion(a),this.setFromRotationMatrix(lj,b,c)},setFromVector3:function(a,b){return this.set(a.x,a.y,a.z,b||this._order)},reorder:function(a){return mj.setFromEuler(this),this.setFromQuaternion(mj,a)},equals:function(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order},fromArray:function(a){return this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0&&(this._order=a[3]),this._onChangeCallback(),this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this._x,a[b+1]=this._y,a[b+2]=this._z,a[b+3]=this._order,a},toVector3:function(a){return a?a.set(this._x,this._y,this._z):new v(this._x,this._y,this._z)},_onChange:function(a){return this._onChangeCallback=a,this},_onChangeCallback:function(){}});function gh(){this.mask=1|0}Object.assign(gh.prototype,{set:function(a){this.mask=1<<a|0},enable:function(a){this.mask|=1<<a|0},enableAll:function(){this.mask=4294967295|0},toggle:function(a){this.mask^=1<<a|0},disable:function(a){this.mask&=~(1<<a|0)},disableAll:function(){this.mask=0},test:function(a){return(this.mask&a.mask)!==0}});let cn=0;const nj=new v(),qd=new hb(),fc=new za(),Bf=new v(),oe=new v(),dn=new v(),en=new hb(),oj=new v(1,0,0),pj=new v(0,1,0),qj=new v(0,0,1),fn={type:"added"},gn={type:"removed"};function $(){Object.defineProperty(this,"id",{value:cn++}),this.uuid=va.generateUUID(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$.DefaultUp.clone();const a=new v(),b=new pd(),c=new hb(),d=new v(1,1,1);function e(){c.setFromEuler(b,!1)}function f(){b.setFromQuaternion(c,void 0,!1)}b._onChange(e),c._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:b},quaternion:{configurable:!0,enumerable:!0,value:c},scale:{configurable:!0,enumerable:!0,value:d},modelViewMatrix:{value:new za()},normalMatrix:{value:new ob()}}),this.matrix=new za(),this.matrixWorld=new za(),this.matrixAutoUpdate=$.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.layers=new gh(),this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.userData={}}$.DefaultUp=new v(0,1,0);$.DefaultMatrixAutoUpdate=!0;$.prototype=Object.assign(Object.create(ec.prototype),{constructor:$,isObject3D:!0,onBeforeRender:function(){},onAfterRender:function(){},applyMatrix4:function(a){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)},applyQuaternion:function(a){return this.quaternion.premultiply(a),this},setRotationFromAxisAngle:function(a,b){this.quaternion.setFromAxisAngle(a,b)},setRotationFromEuler:function(a){this.quaternion.setFromEuler(a,!0)},setRotationFromMatrix:function(a){this.quaternion.setFromRotationMatrix(a)},setRotationFromQuaternion:function(a){this.quaternion.copy(a)},rotateOnAxis:function(a,b){return qd.setFromAxisAngle(a,b),this.quaternion.multiply(qd),this},rotateOnWorldAxis:function(a,b){return qd.setFromAxisAngle(a,b),this.quaternion.premultiply(qd),this},rotateX:function(a){return this.rotateOnAxis(oj,a)},rotateY:function(a){return this.rotateOnAxis(pj,a)},rotateZ:function(a){return this.rotateOnAxis(qj,a)},translateOnAxis:function(a,b){return nj.copy(a).applyQuaternion(this.quaternion),this.position.add(nj.multiplyScalar(b)),this},translateX:function(a){return this.translateOnAxis(oj,a)},translateY:function(a){return this.translateOnAxis(pj,a)},translateZ:function(a){return this.translateOnAxis(qj,a)},localToWorld:function(a){return a.applyMatrix4(this.matrixWorld)},worldToLocal:function(a){return a.applyMatrix4(fc.getInverse(this.matrixWorld))},lookAt:function(a,b,c){a.isVector3?Bf.copy(a):Bf.set(a,b,c);const d=this.parent;this.updateWorldMatrix(!0,!1),oe.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fc.lookAt(oe,Bf,this.up):fc.lookAt(Bf,oe,this.up),this.quaternion.setFromRotationMatrix(fc),d&&(fc.extractRotation(d.matrixWorld),qd.setFromRotationMatrix(fc),this.quaternion.premultiply(qd.inverse()))},add:function(a){if(arguments.length>1){for(let b=0;b<arguments.length;b++)this.add(arguments[b]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a&&a.isObject3D?(a.parent!==null&&a.parent.remove(a),a.parent=this,this.children.push(a),a.dispatchEvent(fn)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)},remove:function(a){if(arguments.length>1){for(let c=0;c<arguments.length;c++)this.remove(arguments[c]);return this}const b=this.children.indexOf(a);return b!==-1&&(a.parent=null,this.children.splice(b,1),a.dispatchEvent(gn)),this},attach:function(a){return this.updateWorldMatrix(!0,!1),fc.getInverse(this.matrixWorld),a.parent!==null&&(a.parent.updateWorldMatrix(!0,!1),fc.multiply(a.parent.matrixWorld)),a.applyMatrix4(fc),a.updateWorldMatrix(!1,!1),this.add(a),this},getObjectById:function(a){return this.getObjectByProperty("id",a)},getObjectByName:function(a){return this.getObjectByProperty("name",a)},getObjectByProperty:function(a,b){if(this[a]===b)return this;for(let c=0,d=this.children.length;c<d;c++){const e=this.children[c],f=e.getObjectByProperty(a,b);if(f!==void 0)return f}return},getWorldPosition:function(a){return a===void 0&&(console.warn("THREE.Object3D: .getWorldPosition() target is now required"),a=new v()),this.updateMatrixWorld(!0),a.setFromMatrixPosition(this.matrixWorld)},getWorldQuaternion:function(a){return a===void 0&&(console.warn("THREE.Object3D: .getWorldQuaternion() target is now required"),a=new hb()),this.updateMatrixWorld(!0),this.matrixWorld.decompose(oe,a,dn),a},getWorldScale:function(a){return a===void 0&&(console.warn("THREE.Object3D: .getWorldScale() target is now required"),a=new v()),this.updateMatrixWorld(!0),this.matrixWorld.decompose(oe,en,a),a},getWorldDirection:function(a){a===void 0&&(console.warn("THREE.Object3D: .getWorldDirection() target is now required"),a=new v()),this.updateMatrixWorld(!0);const b=this.matrixWorld.elements;return a.set(b[8],b[9],b[10]).normalize()},raycast:function(){},traverse:function(a){a(this);const b=this.children;for(let c=0,d=b.length;c<d;c++)b[c].traverse(a)},traverseVisible:function(a){if(this.visible===!1)return;a(this);const b=this.children;for(let c=0,d=b.length;c<d;c++)b[c].traverseVisible(a)},traverseAncestors:function(a){const b=this.parent;b!==null&&(a(b),b.traverseAncestors(a))},updateMatrix:function(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);const b=this.children;for(let c=0,d=b.length;c<d;c++)b[c].updateMatrixWorld(a)},updateWorldMatrix:function(a,b){const c=this.parent;a===!0&&c!==null&&c.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix);if(b===!0){const d=this.children;for(let e=0,f=d.length;e<f;e++)d[e].updateWorldMatrix(!1,!0)}},toJSON:function(a){const b=a===void 0||typeof a==="string",c={};b&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{}},c.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const d={};d.uuid=this.uuid,d.type=this.type,this.name!==""&&(d.name=this.name),this.castShadow===!0&&(d.castShadow=!0),this.receiveShadow===!0&&(d.receiveShadow=!0),this.visible===!1&&(d.visible=!1),this.frustumCulled===!1&&(d.frustumCulled=!1),this.renderOrder!==0&&(d.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(d.userData=this.userData),d.layers=this.layers.mask,d.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(d.matrixAutoUpdate=!1),this.isInstancedMesh&&(d.type="InstancedMesh",d.count=this.count,d.instanceMatrix=this.instanceMatrix.toJSON());function e(g,h){return g[h.uuid]===void 0&&(g[h.uuid]=h.toJSON(a)),h.uuid}if(this.isMesh||this.isLine||this.isPoints){d.geometry=e(a.geometries,this.geometry);const g=this.geometry.parameters;if(g!==void 0&&g.shapes!==void 0){const h=g.shapes;if(Array.isArray(h))for(let i=0,j=h.length;i<j;i++){const l=h[i];e(a.shapes,l)}else e(a.shapes,h)}}if(this.material!==void 0)if(Array.isArray(this.material)){const g=[];for(let h=0,i=this.material.length;h<i;h++)g.push(e(a.materials,this.material[h]));d.material=g}else d.material=e(a.materials,this.material);if(this.children.length>0){d.children=[];for(let g=0;g<this.children.length;g++)d.children.push(this.children[g].toJSON(a).object)}if(b){const g=f(a.geometries),h=f(a.materials),i=f(a.textures),j=f(a.images),l=f(a.shapes);g.length>0&&(c.geometries=g),h.length>0&&(c.materials=h),i.length>0&&(c.textures=i),j.length>0&&(c.images=j),l.length>0&&(c.shapes=l)}return c.object=d,c;function f(g){const h=[];for(const i in g){const j=g[i];delete j.metadata,h.push(j)}return h}},clone:function(a){return new this.constructor().copy(this,a)},copy:function(a,b){b===void 0&&(b=!0),this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.userData=JSON.parse(JSON.stringify(a.userData));if(b===!0)for(let c=0;c<a.children.length;c++){const d=a.children[c];this.add(d.clone())}return this}});function rd(){$.call(this),this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.overrideMaterial=null,this.autoUpdate=!0,typeof __THREE_DEVTOOLS__!=="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}rd.prototype=Object.assign(Object.create($.prototype),{constructor:rd,isScene:!0,copy:function(a,b){return $.prototype.copy.call(this,a,b),a.background!==null&&(this.background=a.background.clone()),a.environment!==null&&(this.environment=a.environment.clone()),a.fog!==null&&(this.fog=a.fog.clone()),a.overrideMaterial!==null&&(this.overrideMaterial=a.overrideMaterial.clone()),this.autoUpdate=a.autoUpdate,this.matrixAutoUpdate=a.matrixAutoUpdate,this},toJSON:function(a){const b=$.prototype.toJSON.call(this,a);return this.background!==null&&(b.object.background=this.background.toJSON(a)),this.environment!==null&&(b.object.environment=this.environment.toJSON(a)),this.fog!==null&&(b.object.fog=this.fog.toJSON()),b},dispose:function(){this.dispatchEvent({type:"dispose"})}});const gc=[new v(),new v(),new v(),new v(),new v(),new v(),new v(),new v()],pe=new v(),hh=new Ib(),sd=new v(),td=new v(),ud=new v(),wc=new v(),xc=new v(),Rc=new v(),qe=new v(),Cf=new v(),Df=new v(),Sc=new v();function Ib(a,b){this.min=a!==void 0?a:new v(Infinity,Infinity,Infinity),this.max=b!==void 0?b:new v(-Infinity,-Infinity,-Infinity)}Object.assign(Ib.prototype,{isBox3:!0,set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromArray:function(a){let b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity;for(let h=0,i=a.length;h<i;h+=3){const j=a[h],l=a[h+1],k=a[h+2];j<b&&(b=j),l<c&&(c=l),k<d&&(d=k),j>e&&(e=j),l>f&&(f=l),k>g&&(g=k)}return this.min.set(b,c,d),this.max.set(e,f,g),this},setFromBufferAttribute:function(a){let b=Infinity,c=Infinity,d=Infinity,e=-Infinity,f=-Infinity,g=-Infinity;for(let h=0,i=a.count;h<i;h++){const j=a.getX(h),l=a.getY(h),k=a.getZ(h);j<b&&(b=j),l<c&&(c=l),k<d&&(d=k),j>e&&(e=j),l>f&&(f=l),k>g&&(g=k)}return this.min.set(b,c,d),this.max.set(e,f,g),this},setFromPoints:function(a){this.makeEmpty();for(let b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){const c=pe.copy(b).multiplyScalar(.5);return this.min.copy(a).sub(c),this.max.copy(a).add(c),this},setFromObject:function(a){return this.makeEmpty(),this.expandByObject(a)},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z},getCenter:function(a){return a===void 0&&(console.warn("THREE.Box3: .getCenter() target is now required"),a=new v()),this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){return a===void 0&&(console.warn("THREE.Box3: .getSize() target is now required"),a=new v()),this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},expandByObject:function(a){a.updateWorldMatrix(!1,!1);const b=a.geometry;b!==void 0&&(b.boundingBox===null&&b.computeBoundingBox(),hh.copy(b.boundingBox),hh.applyMatrix4(a.matrixWorld),this.union(hh));const c=a.children;for(let d=0,e=c.length;d<e;d++)this.expandByObject(c[d]);return this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z},getParameter:function(a,b){return b===void 0&&(console.warn("THREE.Box3: .getParameter() target is now required"),b=new v()),b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z?!1:!0},intersectsSphere:function(a){return this.clampPoint(a.center,pe),pe.distanceToSquared(a.center)<=a.radius*a.radius},intersectsPlane:function(a){let b,c;return a.normal.x>0?(b=a.normal.x*this.min.x,c=a.normal.x*this.max.x):(b=a.normal.x*this.max.x,c=a.normal.x*this.min.x),a.normal.y>0?(b+=a.normal.y*this.min.y,c+=a.normal.y*this.max.y):(b+=a.normal.y*this.max.y,c+=a.normal.y*this.min.y),a.normal.z>0?(b+=a.normal.z*this.min.z,c+=a.normal.z*this.max.z):(b+=a.normal.z*this.max.z,c+=a.normal.z*this.min.z),b<=-a.constant&&c>=-a.constant},intersectsTriangle:function(a){if(this.isEmpty())return!1;this.getCenter(qe),Cf.subVectors(this.max,qe),sd.subVectors(a.a,qe),td.subVectors(a.b,qe),ud.subVectors(a.c,qe),wc.subVectors(td,sd),xc.subVectors(ud,td),Rc.subVectors(sd,ud);let b=[0,-wc.z,wc.y,0,-xc.z,xc.y,0,-Rc.z,Rc.y,wc.z,0,-wc.x,xc.z,0,-xc.x,Rc.z,0,-Rc.x,-wc.y,wc.x,0,-xc.y,xc.x,0,-Rc.y,Rc.x,0];return ih(b,sd,td,ud,Cf)?(b=[1,0,0,0,1,0,0,0,1],ih(b,sd,td,ud,Cf)?(Df.crossVectors(wc,xc),b=[Df.x,Df.y,Df.z],ih(b,sd,td,ud,Cf)):!1):!1},clampPoint:function(a,b){return b===void 0&&(console.warn("THREE.Box3: .clampPoint() target is now required"),b=new v()),b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){const b=pe.copy(a).clamp(this.min,this.max);return b.sub(a).length()},getBoundingSphere:function(a){return a===void 0&&console.error("THREE.Box3: .getBoundingSphere() target is now required"),this.getCenter(a.center),a.radius=this.getSize(pe).length()*.5,a},intersect:function(a){return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},applyMatrix4:function(a){return this.isEmpty()?this:(gc[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),gc[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),gc[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),gc[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),gc[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),gc[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),gc[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),gc[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(gc),this)},translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});function ih(a,b,c,d,e){for(let f=0,g=a.length-3;f<=g;f+=3){Sc.fromArray(a,f);const h=e.x*Math.abs(Sc.x)+e.y*Math.abs(Sc.y)+e.z*Math.abs(Sc.z),i=b.dot(Sc),j=c.dot(Sc),l=d.dot(Sc);if(Math.max(-Math.max(i,j,l),Math.min(i,j,l))>h)return!1}return!0}const hn=new Ib();function hc(a,b){this.center=a!==void 0?a:new v(),this.radius=b!==void 0?b:-1}Object.assign(hc.prototype,{set:function(a,b){return this.center.copy(a),this.radius=b,this},setFromPoints:function(a,b){const c=this.center;b!==void 0?c.copy(b):hn.setFromPoints(a).getCenter(c);let d=0;for(let e=0,f=a.length;e<f;e++)d=Math.max(d,c.distanceToSquared(a[e]));return this.radius=Math.sqrt(d),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.center.copy(a.center),this.radius=a.radius,this},isEmpty:function(){return this.radius<0},makeEmpty:function(){return this.center.set(0,0,0),this.radius=-1,this},containsPoint:function(a){return a.distanceToSquared(this.center)<=this.radius*this.radius},distanceToPoint:function(a){return a.distanceTo(this.center)-this.radius},intersectsSphere:function(a){const b=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=b*b},intersectsBox:function(a){return a.intersectsSphere(this)},intersectsPlane:function(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius},clampPoint:function(a,b){const c=this.center.distanceToSquared(a);return b===void 0&&(console.warn("THREE.Sphere: .clampPoint() target is now required"),b=new v()),b.copy(a),c>this.radius*this.radius&&(b.sub(this.center).normalize(),b.multiplyScalar(this.radius).add(this.center)),b},getBoundingBox:function(a){return a===void 0&&(console.warn("THREE.Sphere: .getBoundingBox() target is now required"),a=new Ib()),this.isEmpty()?(a.makeEmpty(),a):(a.set(this.center,this.center),a.expandByScalar(this.radius),a)},applyMatrix4:function(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this},translate:function(a){return this.center.add(a),this},equals:function(a){return a.center.equals(this.center)&&a.radius===this.radius}});const ic=new v(),jh=new v(),Ef=new v(),yc=new v(),kh=new v(),Ff=new v(),lh=new v();function vd(a,b){this.origin=a!==void 0?a:new v(),this.direction=b!==void 0?b:new v(0,0,-1)}Object.assign(vd.prototype,{set:function(a,b){return this.origin.copy(a),this.direction.copy(b),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this},at:function(a,b){return b===void 0&&(console.warn("THREE.Ray: .at() target is now required"),b=new v()),b.copy(this.direction).multiplyScalar(a).add(this.origin)},lookAt:function(a){return this.direction.copy(a).sub(this.origin).normalize(),this},recast:function(a){return this.origin.copy(this.at(a,ic)),this},closestPointToPoint:function(a,b){b===void 0&&(console.warn("THREE.Ray: .closestPointToPoint() target is now required"),b=new v()),b.subVectors(a,this.origin);const c=b.dot(this.direction);return c<0?b.copy(this.origin):b.copy(this.direction).multiplyScalar(c).add(this.origin)},distanceToPoint:function(a){return Math.sqrt(this.distanceSqToPoint(a))},distanceSqToPoint:function(a){const b=ic.subVectors(a,this.origin).dot(this.direction);return b<0?this.origin.distanceToSquared(a):(ic.copy(this.direction).multiplyScalar(b).add(this.origin),ic.distanceToSquared(a))},distanceSqToSegment:function(a,b,c,d){jh.copy(a).add(b).multiplyScalar(.5),Ef.copy(b).sub(a).normalize(),yc.copy(this.origin).sub(jh);const e=a.distanceTo(b)*.5,f=-this.direction.dot(Ef),g=yc.dot(this.direction),h=-yc.dot(Ef),i=yc.lengthSq(),j=Math.abs(1-f*f);let l,k,n,m;if(j>0){l=f*h-g,k=f*g-h,m=e*j;if(l>=0)if(k>=-m)if(k<=m){const o=1/j;l*=o,k*=o,n=l*(l+f*k+2*g)+k*(f*l+k+2*h)+i}else k=e,l=Math.max(0,-(f*k+g)),n=-l*l+k*(k+2*h)+i;else k=-e,l=Math.max(0,-(f*k+g)),n=-l*l+k*(k+2*h)+i;else k<=-m?(l=Math.max(0,-(-f*e+g)),k=l>0?-e:Math.min(Math.max(-e,-h),e),n=-l*l+k*(k+2*h)+i):k<=m?(l=0,k=Math.min(Math.max(-e,-h),e),n=k*(k+2*h)+i):(l=Math.max(0,-(f*e+g)),k=l>0?e:Math.min(Math.max(-e,-h),e),n=-l*l+k*(k+2*h)+i)}else k=f>0?-e:e,l=Math.max(0,-(f*k+g)),n=-l*l+k*(k+2*h)+i;return c&&c.copy(this.direction).multiplyScalar(l).add(this.origin),d&&d.copy(Ef).multiplyScalar(k).add(jh),n},intersectSphere:function(a,b){ic.subVectors(a.center,this.origin);const c=ic.dot(this.direction),d=ic.dot(ic)-c*c,e=a.radius*a.radius;if(d>e)return null;const f=Math.sqrt(e-d),g=c-f,h=c+f;return g<0&&h<0?null:g<0?this.at(h,b):this.at(g,b)},intersectsSphere:function(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius},distanceToPlane:function(a){const b=a.normal.dot(this.direction);if(b===0)return a.distanceToPoint(this.origin)===0?0:null;const c=-(this.origin.dot(a.normal)+a.constant)/b;return c>=0?c:null},intersectPlane:function(a,b){const c=this.distanceToPlane(a);return c===null?null:this.at(c,b)},intersectsPlane:function(a){const b=a.distanceToPoint(this.origin);if(b===0)return!0;const c=a.normal.dot(this.direction);return c*b<0?!0:!1},intersectBox:function(a,b){let c,d,e,f,g,h;const i=1/this.direction.x,j=1/this.direction.y,l=1/this.direction.z,k=this.origin;return i>=0?(c=(a.min.x-k.x)*i,d=(a.max.x-k.x)*i):(c=(a.max.x-k.x)*i,d=(a.min.x-k.x)*i),j>=0?(e=(a.min.y-k.y)*j,f=(a.max.y-k.y)*j):(e=(a.max.y-k.y)*j,f=(a.min.y-k.y)*j),c>f||e>d?null:((e>c||c!==c)&&(c=e),(f<d||d!==d)&&(d=f),l>=0?(g=(a.min.z-k.z)*l,h=(a.max.z-k.z)*l):(g=(a.max.z-k.z)*l,h=(a.min.z-k.z)*l),c>h||g>d?null:((g>c||c!==c)&&(c=g),(h<d||d!==d)&&(d=h),d<0?null:this.at(c>=0?c:d,b)))},intersectsBox:function(a){return this.intersectBox(a,ic)!==null},intersectTriangle:function(a,b,c,d,e){kh.subVectors(b,a),Ff.subVectors(c,a),lh.crossVectors(kh,Ff);let f=this.direction.dot(lh),g;if(f>0){if(d)return null;g=1}else if(f<0)g=-1,f=-f;else return null;yc.subVectors(this.origin,a);const h=g*this.direction.dot(Ff.crossVectors(yc,Ff));if(h<0)return null;const i=g*this.direction.dot(kh.cross(yc));if(i<0)return null;if(h+i>f)return null;const j=-g*yc.dot(lh);return j<0?null:this.at(j/f,e)},applyMatrix4:function(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this},equals:function(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}});const mh=new v(),jn=new v(),kn=new ob();function Vb(a,b){this.normal=a!==void 0?a:new v(1,0,0),this.constant=b!==void 0?b:0}Object.assign(Vb.prototype,{isPlane:!0,set:function(a,b){return this.normal.copy(a),this.constant=b,this},setComponents:function(a,b,c,d){return this.normal.set(a,b,c),this.constant=d,this},setFromNormalAndCoplanarPoint:function(a,b){return this.normal.copy(a),this.constant=-b.dot(this.normal),this},setFromCoplanarPoints:function(a,b,c){const d=mh.subVectors(c,b).cross(jn.subVectors(a,b)).normalize();return this.setFromNormalAndCoplanarPoint(d,a),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.normal.copy(a.normal),this.constant=a.constant,this},normalize:function(){const a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this},negate:function(){return this.constant*=-1,this.normal.negate(),this},distanceToPoint:function(a){return this.normal.dot(a)+this.constant},distanceToSphere:function(a){return this.distanceToPoint(a.center)-a.radius},projectPoint:function(a,b){return b===void 0&&(console.warn("THREE.Plane: .projectPoint() target is now required"),b=new v()),b.copy(this.normal).multiplyScalar(-this.distanceToPoint(a)).add(a)},intersectLine:function(a,b){b===void 0&&(console.warn("THREE.Plane: .intersectLine() target is now required"),b=new v());const c=a.delta(mh),d=this.normal.dot(c);if(d===0)return this.distanceToPoint(a.start)===0?b.copy(a.start):void 0;const e=-(a.start.dot(this.normal)+this.constant)/d;return e<0||e>1?void 0:b.copy(c).multiplyScalar(e).add(a.start)},intersectsLine:function(a){const b=this.distanceToPoint(a.start),c=this.distanceToPoint(a.end);return b<0&&c>0||c<0&&b>0},intersectsBox:function(a){return a.intersectsPlane(this)},intersectsSphere:function(a){return a.intersectsPlane(this)},coplanarPoint:function(a){return a===void 0&&(console.warn("THREE.Plane: .coplanarPoint() target is now required"),a=new v()),a.copy(this.normal).multiplyScalar(-this.constant)},applyMatrix4:function(a,b){const c=b||kn.getNormalMatrix(a),d=this.coplanarPoint(mh).applyMatrix4(a),e=this.normal.applyMatrix3(c).normalize();return this.constant=-d.dot(e),this},translate:function(a){return this.constant-=a.dot(this.normal),this},equals:function(a){return a.normal.equals(this.normal)&&a.constant===this.constant}});const Pb=new v(),jc=new v(),nh=new v(),kc=new v(),wd=new v(),xd=new v(),rj=new v(),oh=new v(),ph=new v(),qh=new v();function kb(a,b,c){this.a=a!==void 0?a:new v(),this.b=b!==void 0?b:new v(),this.c=c!==void 0?c:new v()}Object.assign(kb,{getNormal:function(a,b,c,d){d===void 0&&(console.warn("THREE.Triangle: .getNormal() target is now required"),d=new v()),d.subVectors(c,b),Pb.subVectors(a,b),d.cross(Pb);const e=d.lengthSq();return e>0?d.multiplyScalar(1/Math.sqrt(e)):d.set(0,0,0)},getBarycoord:function(a,b,c,d,e){Pb.subVectors(d,b),jc.subVectors(c,b),nh.subVectors(a,b);const f=Pb.dot(Pb),g=Pb.dot(jc),h=Pb.dot(nh),i=jc.dot(jc),j=jc.dot(nh),l=f*i-g*g;e===void 0&&(console.warn("THREE.Triangle: .getBarycoord() target is now required"),e=new v());if(l===0)return e.set(-2,-1,-1);const k=1/l,n=(i*h-g*j)*k,m=(f*j-g*h)*k;return e.set(1-n-m,m,n)},containsPoint:function(a,b,c,d){return kb.getBarycoord(a,b,c,d,kc),kc.x>=0&&kc.y>=0&&kc.x+kc.y<=1},getUV:function(a,b,c,d,e,f,g,h){return this.getBarycoord(a,b,c,d,kc),h.set(0,0),h.addScaledVector(e,kc.x),h.addScaledVector(f,kc.y),h.addScaledVector(g,kc.z),h},isFrontFacing:function(a,b,c,d){return Pb.subVectors(c,b),jc.subVectors(a,b),Pb.cross(jc).dot(d)<0?!0:!1}});Object.assign(kb.prototype,{set:function(a,b,c){return this.a.copy(a),this.b.copy(b),this.c.copy(c),this},setFromPointsAndIndices:function(a,b,c,d){return this.a.copy(a[b]),this.b.copy(a[c]),this.c.copy(a[d]),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this},getArea:function(){return Pb.subVectors(this.c,this.b),jc.subVectors(this.a,this.b),Pb.cross(jc).length()*.5},getMidpoint:function(a){return a===void 0&&(console.warn("THREE.Triangle: .getMidpoint() target is now required"),a=new v()),a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)},getNormal:function(a){return kb.getNormal(this.a,this.b,this.c,a)},getPlane:function(a){return a===void 0&&(console.warn("THREE.Triangle: .getPlane() target is now required"),a=new Vb()),a.setFromCoplanarPoints(this.a,this.b,this.c)},getBarycoord:function(a,b){return kb.getBarycoord(a,this.a,this.b,this.c,b)},getUV:function(a,b,c,d,e){return kb.getUV(a,this.a,this.b,this.c,b,c,d,e)},containsPoint:function(a){return kb.containsPoint(a,this.a,this.b,this.c)},isFrontFacing:function(a){return kb.isFrontFacing(this.a,this.b,this.c,a)},intersectsBox:function(a){return a.intersectsTriangle(this)},closestPointToPoint:function(a,b){b===void 0&&(console.warn("THREE.Triangle: .closestPointToPoint() target is now required"),b=new v());const c=this.a,d=this.b,e=this.c;let f,g;wd.subVectors(d,c),xd.subVectors(e,c),oh.subVectors(a,c);const h=wd.dot(oh),i=xd.dot(oh);if(h<=0&&i<=0)return b.copy(c);ph.subVectors(a,d);const j=wd.dot(ph),l=xd.dot(ph);if(j>=0&&l<=j)return b.copy(d);const k=h*l-j*i;if(k<=0&&h>=0&&j<=0)return f=h/(h-j),b.copy(c).addScaledVector(wd,f);qh.subVectors(a,e);const n=wd.dot(qh),m=xd.dot(qh);if(m>=0&&n<=m)return b.copy(e);const o=n*i-h*m;if(o<=0&&i>=0&&m<=0)return g=i/(i-m),b.copy(c).addScaledVector(xd,g);const s=j*m-n*l;if(s<=0&&l-j>=0&&n-m>=0)return rj.subVectors(e,d),g=(l-j)/(l-j+(n-m)),b.copy(d).addScaledVector(rj,g);const r=1/(s+o+k);return f=o*r,g=k*r,b.copy(c).addScaledVector(wd,f).addScaledVector(xd,g)},equals:function(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}});const sj={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qb={h:0,s:0,l:0},Gf={h:0,s:0,l:0};function da(a,b,c){return b===void 0&&c===void 0?this.set(a):this.setRGB(a,b,c)}function rh(a,b,c){return c<0&&(c+=1),c>1&&(c-=1),c<1/6?a+(b-a)*6*c:c<1/2?b:c<2/3?a+(b-a)*6*(2/3-c):a}function sh(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function th(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}Object.assign(da.prototype,{isColor:!0,r:1,g:1,b:1,set:function(a){return a&&a.isColor?this.copy(a):typeof a==="number"?this.setHex(a):typeof a==="string"&&this.setStyle(a),this},setScalar:function(a){return this.r=a,this.g=a,this.b=a,this},setHex:function(a){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,this},setRGB:function(a,b,c){return this.r=a,this.g=b,this.b=c,this},setHSL:function(a,b,c){a=va.euclideanModulo(a,1),b=va.clamp(b,0,1),c=va.clamp(c,0,1);if(b===0)this.r=this.g=this.b=c;else{const d=c<=.5?c*(1+b):c+b-c*b,e=2*c-d;this.r=rh(e,d,a+1/3),this.g=rh(e,d,a),this.b=rh(e,d,a-1/3)}return this},setStyle:function(a){function b(d){if(d===void 0)return;parseFloat(d)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let c;if(c=/^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(a)){let d;const e=c[1],f=c[2];switch(e){case"rgb":case"rgba":if(d=/^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))return this.r=Math.min(255,parseInt(d[1],10))/255,this.g=Math.min(255,parseInt(d[2],10))/255,this.b=Math.min(255,parseInt(d[3],10))/255,b(d[5]),this;if(d=/^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f))return this.r=Math.min(100,parseInt(d[1],10))/100,this.g=Math.min(100,parseInt(d[2],10))/100,this.b=Math.min(100,parseInt(d[3],10))/100,b(d[5]),this;break;case"hsl":case"hsla":if(d=/^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(f)){const g=parseFloat(d[1])/360,h=parseInt(d[2],10)/100,i=parseInt(d[3],10)/100;return b(d[5]),this.setHSL(g,h,i)}break}}else if(c=/^\#([A-Fa-f0-9]+)$/.exec(a)){const d=c[1],e=d.length;if(e===3)return this.r=parseInt(d.charAt(0)+d.charAt(0),16)/255,this.g=parseInt(d.charAt(1)+d.charAt(1),16)/255,this.b=parseInt(d.charAt(2)+d.charAt(2),16)/255,this;if(e===6)return this.r=parseInt(d.charAt(0)+d.charAt(1),16)/255,this.g=parseInt(d.charAt(2)+d.charAt(3),16)/255,this.b=parseInt(d.charAt(4)+d.charAt(5),16)/255,this}return a&&a.length>0?this.setColorName(a):this},setColorName:function(a){const b=sj[a];return b!==void 0?this.setHex(b):console.warn("THREE.Color: Unknown color "+a),this},clone:function(){return new this.constructor(this.r,this.g,this.b)},copy:function(a){return this.r=a.r,this.g=a.g,this.b=a.b,this},copyGammaToLinear:function(a,b){return b===void 0&&(b=2),this.r=Math.pow(a.r,b),this.g=Math.pow(a.g,b),this.b=Math.pow(a.b,b),this},copyLinearToGamma:function(a,b){b===void 0&&(b=2);const c=b>0?1/b:1;return this.r=Math.pow(a.r,c),this.g=Math.pow(a.g,c),this.b=Math.pow(a.b,c),this},convertGammaToLinear:function(a){return this.copyGammaToLinear(this,a),this},convertLinearToGamma:function(a){return this.copyLinearToGamma(this,a),this},copySRGBToLinear:function(a){return this.r=sh(a.r),this.g=sh(a.g),this.b=sh(a.b),this},copyLinearToSRGB:function(a){return this.r=th(a.r),this.g=th(a.g),this.b=th(a.b),this},convertSRGBToLinear:function(){return this.copySRGBToLinear(this),this},convertLinearToSRGB:function(){return this.copyLinearToSRGB(this),this},getHex:function(){return this.r*255<<16^this.g*255<<8^this.b*255<<0},getHexString:function(){return("000000"+this.getHex().toString(16)).slice(-6)},getHSL:function(a){a===void 0&&(console.warn("THREE.Color: .getHSL() target is now required"),a={h:0,s:0,l:0});const b=this.r,c=this.g,d=this.b,e=Math.max(b,c,d),f=Math.min(b,c,d);let g,h;const i=(f+e)/2;if(f===e)g=0,h=0;else{const j=e-f;h=i<=.5?j/(e+f):j/(2-e-f);switch(e){case b:g=(c-d)/j+(c<d?6:0);break;case c:g=(d-b)/j+2;break;case d:g=(b-c)/j+4;break}g/=6}return a.h=g,a.s=h,a.l=i,a},getStyle:function(){return"rgb("+(this.r*255|0)+","+(this.g*255|0)+","+(this.b*255|0)+")"},offsetHSL:function(a,b,c){return this.getHSL(Qb),Qb.h+=a,Qb.s+=b,Qb.l+=c,this.setHSL(Qb.h,Qb.s,Qb.l),this},add:function(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this},addColors:function(a,b){return this.r=a.r+b.r,this.g=a.g+b.g,this.b=a.b+b.b,this},addScalar:function(a){return this.r+=a,this.g+=a,this.b+=a,this},sub:function(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this},multiply:function(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this},multiplyScalar:function(a){return this.r*=a,this.g*=a,this.b*=a,this},lerp:function(a,b){return this.r+=(a.r-this.r)*b,this.g+=(a.g-this.g)*b,this.b+=(a.b-this.b)*b,this},lerpHSL:function(a,b){this.getHSL(Qb),a.getHSL(Gf);const c=va.lerp(Qb.h,Gf.h,b),d=va.lerp(Qb.s,Gf.s,b),e=va.lerp(Qb.l,Gf.l,b);return this.setHSL(c,d,e),this},equals:function(a){return a.r===this.r&&a.g===this.g&&a.b===this.b},fromArray:function(a,b){return b===void 0&&(b=0),this.r=a[b],this.g=a[b+1],this.b=a[b+2],this},toArray:function(a,b){return a===void 0&&(a=[]),b===void 0&&(b=0),a[b]=this.r,a[b+1]=this.g,a[b+2]=this.b,a},fromBufferAttribute:function(a,b){return this.r=a.getX(b),this.g=a.getY(b),this.b=a.getZ(b),a.normalized===!0&&(this.r/=255,this.g/=255,this.b/=255),this},toJSON:function(){return this.getHex()}});da.NAMES=sj;function Hf(a,b,c,d,e,f){this.a=a,this.b=b,this.c=c,this.normal=d&&d.isVector3?d:new v(),this.vertexNormals=Array.isArray(d)?d:[],this.color=e&&e.isColor?e:new da(),this.vertexColors=Array.isArray(e)?e:[],this.materialIndex=f!==void 0?f:0}Object.assign(Hf.prototype,{clone:function(){return new this.constructor().copy(this)},copy:function(a){this.a=a.a,this.b=a.b,this.c=a.c,this.normal.copy(a.normal),this.color.copy(a.color),this.materialIndex=a.materialIndex;for(let b=0,c=a.vertexNormals.length;b<c;b++)this.vertexNormals[b]=a.vertexNormals[b].clone();for(let b=0,c=a.vertexColors.length;b<c;b++)this.vertexColors[b]=a.vertexColors[b].clone();return this}});let ln=0;function pa(){Object.defineProperty(this,"id",{value:ln++}),this.uuid=va.generateUUID(),this.name="",this.type="Material",this.fog=!0,this.blending=he,this.side=Oc,this.flatShading=!1,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Ti,this.blendDst=Ui,this.blendEquation=hd,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vg,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_m,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eh,this.stencilZFail=eh,this.stencilZPass=eh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaTest=0,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0}pa.prototype=Object.assign(Object.create(ec.prototype),{constructor:pa,isMaterial:!0,onBeforeCompile:function(){},customProgramCacheKey:function(){return this.onBeforeCompile.toString()},setValues:function(a){if(a===void 0)return;for(const b in a){const c=a[b];if(c===void 0){console.warn("THREE.Material: '"+b+"' parameter is undefined.");continue}if(b==="shading"){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=c===Ni?!0:!1;continue}const d=this[b];if(d===void 0){console.warn("THREE."+this.type+": '"+b+"' is not a property of this material.");continue}d&&d.isColor?d.set(c):d&&d.isVector3&&(c&&c.isVector3)?d.copy(c):this[b]=c}},toJSON:function(a){const b=a===void 0||typeof a==="string";b&&(a={textures:{},images:{}});const c={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};c.uuid=this.uuid,c.type=this.type,this.name!==""&&(c.name=this.name),this.color&&this.color.isColor&&(c.color=this.color.getHex()),this.roughness!==void 0&&(c.roughness=this.roughness),this.metalness!==void 0&&(c.metalness=this.metalness),this.sheen&&this.sheen.isColor&&(c.sheen=this.sheen.getHex()),this.emissive&&this.emissive.isColor&&(c.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(c.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(c.specular=this.specular.getHex()),this.shininess!==void 0&&(c.shininess=this.shininess),this.clearcoat!==void 0&&(c.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(c.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(c.clearcoatMap=this.clearcoatMap.toJSON(a).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(c.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(c.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,c.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.map&&this.map.isTexture&&(c.map=this.map.toJSON(a).uuid),this.matcap&&this.matcap.isTexture&&(c.matcap=this.matcap.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(c.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(c.lightMap=this.lightMap.toJSON(a).uuid),this.aoMap&&this.aoMap.isTexture&&(c.aoMap=this.aoMap.toJSON(a).uuid,c.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(c.bumpMap=this.bumpMap.toJSON(a).uuid,c.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(c.normalMap=this.normalMap.toJSON(a).uuid,c.normalMapType=this.normalMapType,c.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(c.displacementMap=this.displacementMap.toJSON(a).uuid,c.displacementScale=this.displacementScale,c.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(c.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(c.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(c.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(c.specularMap=this.specularMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(c.envMap=this.envMap.toJSON(a).uuid,c.reflectivity=this.reflectivity,c.refractionRatio=this.refractionRatio,this.combine!==void 0&&(c.combine=this.combine),this.envMapIntensity!==void 0&&(c.envMapIntensity=this.envMapIntensity)),this.gradientMap&&this.gradientMap.isTexture&&(c.gradientMap=this.gradientMap.toJSON(a).uuid),this.size!==void 0&&(c.size=this.size),this.sizeAttenuation!==void 0&&(c.sizeAttenuation=this.sizeAttenuation),this.blending!==he&&(c.blending=this.blending),this.flatShading===!0&&(c.flatShading=this.flatShading),this.side!==Oc&&(c.side=this.side),this.vertexColors&&(c.vertexColors=!0),this.opacity<1&&(c.opacity=this.opacity),this.transparent===!0&&(c.transparent=this.transparent),c.depthFunc=this.depthFunc,c.depthTest=this.depthTest,c.depthWrite=this.depthWrite,c.stencilWrite=this.stencilWrite,c.stencilWriteMask=this.stencilWriteMask,c.stencilFunc=this.stencilFunc,c.stencilRef=this.stencilRef,c.stencilFuncMask=this.stencilFuncMask,c.stencilFail=this.stencilFail,c.stencilZFail=this.stencilZFail,c.stencilZPass=this.stencilZPass,this.rotation&&this.rotation!==0&&(c.rotation=this.rotation),this.polygonOffset===!0&&(c.polygonOffset=!0),this.polygonOffsetFactor!==0&&(c.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(c.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth&&this.linewidth!==1&&(c.linewidth=this.linewidth),this.dashSize!==void 0&&(c.dashSize=this.dashSize),this.gapSize!==void 0&&(c.gapSize=this.gapSize),this.scale!==void 0&&(c.scale=this.scale),this.dithering===!0&&(c.dithering=!0),this.alphaTest>0&&(c.alphaTest=this.alphaTest),this.premultipliedAlpha===!0&&(c.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(c.wireframe=this.wireframe),this.wireframeLinewidth>1&&(c.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(c.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(c.wireframeLinejoin=this.wireframeLinejoin),this.morphTargets===!0&&(c.morphTargets=!0),this.morphNormals===!0&&(c.morphNormals=!0),this.skinning===!0&&(c.skinning=!0),this.visible===!1&&(c.visible=!1),this.toneMapped===!1&&(c.toneMapped=!1),JSON.stringify(this.userData)!=="{}"&&(c.userData=this.userData);function d(e){const f=[];for(const g in e){const h=e[g];delete h.metadata,f.push(h)}return f}if(b){const e=d(a.textures),f=d(a.images);e.length>0&&(c.textures=e),f.length>0&&(c.images=f)}return c},clone:function(){return new this.constructor().copy(this)},copy:function(a){this.name=a.name,this.fog=a.fog,this.blending=a.blending,this.side=a.side,this.flatShading=a.flatShading,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;const b=a.clippingPlanes;let c=null;if(b!==null){const d=b.length;c=new Array(d);for(let e=0;e!==d;++e)c[e]=b[e].clone()}return this.clippingPlanes=c,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.premultipliedAlpha=a.premultipliedAlpha,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this},dispose:function(){this.dispatchEvent({type:"dispose"})}});Object.defineProperty(pa.prototype,"needsUpdate",{set:function(a){a===!0&&this.version++}});function Ab(a){pa.call(this),this.type="MeshBasicMaterial",this.color=new da(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.setValues(a)}Ab.prototype=Object.create(pa.prototype);Ab.prototype.constructor=Ab;Ab.prototype.isMeshBasicMaterial=!0;Ab.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this};const Ma=new v(),If=new N();function qa(a,b,c){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.name="",this.array=a,this.itemSize=b,this.count=a!==void 0?a.length/b:0,this.normalized=c===!0,this.usage=zf,this.updateRange={offset:0,count:-1},this.version=0}Object.defineProperty(qa.prototype,"needsUpdate",{set:function(a){a===!0&&this.version++}});Object.assign(qa.prototype,{isBufferAttribute:!0,onUploadCallback:function(){},setUsage:function(a){return this.usage=a,this},copy:function(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this},copyAt:function(a,b,c){a*=this.itemSize,c*=b.itemSize;for(let d=0,e=this.itemSize;d<e;d++)this.array[a+d]=b.array[c+d];return this},copyArray:function(a){return this.array.set(a),this},copyColorsArray:function(a){const b=this.array;let c=0;for(let d=0,e=a.length;d<e;d++){let f=a[d];f===void 0&&(console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined",d),f=new da()),b[c++]=f.r,b[c++]=f.g,b[c++]=f.b}return this},copyVector2sArray:function(a){const b=this.array;let c=0;for(let d=0,e=a.length;d<e;d++){let f=a[d];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined",d),f=new N()),b[c++]=f.x,b[c++]=f.y}return this},copyVector3sArray:function(a){const b=this.array;let c=0;for(let d=0,e=a.length;d<e;d++){let f=a[d];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined",d),f=new v()),b[c++]=f.x,b[c++]=f.y,b[c++]=f.z}return this},copyVector4sArray:function(a){const b=this.array;let c=0;for(let d=0,e=a.length;d<e;d++){let f=a[d];f===void 0&&(console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined",d),f=new Ia()),b[c++]=f.x,b[c++]=f.y,b[c++]=f.z,b[c++]=f.w}return this},applyMatrix3:function(a){if(this.itemSize===2)for(let b=0,c=this.count;b<c;b++)If.fromBufferAttribute(this,b),If.applyMatrix3(a),this.setXY(b,If.x,If.y);else if(this.itemSize===3)for(let b=0,c=this.count;b<c;b++)Ma.fromBufferAttribute(this,b),Ma.applyMatrix3(a),this.setXYZ(b,Ma.x,Ma.y,Ma.z);return this},applyMatrix4:function(a){for(let b=0,c=this.count;b<c;b++)Ma.x=this.getX(b),Ma.y=this.getY(b),Ma.z=this.getZ(b),Ma.applyMatrix4(a),this.setXYZ(b,Ma.x,Ma.y,Ma.z);return this},applyNormalMatrix:function(a){for(let b=0,c=this.count;b<c;b++)Ma.x=this.getX(b),Ma.y=this.getY(b),Ma.z=this.getZ(b),Ma.applyNormalMatrix(a),this.setXYZ(b,Ma.x,Ma.y,Ma.z);return this},transformDirection:function(a){for(let b=0,c=this.count;b<c;b++)Ma.x=this.getX(b),Ma.y=this.getY(b),Ma.z=this.getZ(b),Ma.transformDirection(a),this.setXYZ(b,Ma.x,Ma.y,Ma.z);return this},set:function(a,b){return b===void 0&&(b=0),this.array.set(a,b),this},getX:function(a){return this.array[a*this.itemSize]},setX:function(a,b){return this.array[a*this.itemSize]=b,this},getY:function(a){return this.array[a*this.itemSize+1]},setY:function(a,b){return this.array[a*this.itemSize+1]=b,this},getZ:function(a){return this.array[a*this.itemSize+2]},setZ:function(a,b){return this.array[a*this.itemSize+2]=b,this},getW:function(a){return this.array[a*this.itemSize+3]},setW:function(a,b){return this.array[a*this.itemSize+3]=b,this},setXY:function(a,b,c){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this},setXYZ:function(a,b,c,d){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this},setXYZW:function(a,b,c,d,e){return a*=this.itemSize,this.array[a+0]=b,this.array[a+1]=c,this.array[a+2]=d,this.array[a+3]=e,this},onUpload:function(a){return this.onUploadCallback=a,this},clone:function(){return new this.constructor(this.array,this.itemSize).copy(this)},toJSON:function(){return{itemSize:this.itemSize,type:this.array.constructor.name,array:Array.prototype.slice.call(this.array),normalized:this.normalized}}});function uh(a,b,c){qa.call(this,new Int8Array(a),b,c)}uh.prototype=Object.create(qa.prototype);uh.prototype.constructor=uh;function vh(a,b,c){qa.call(this,new Uint8Array(a),b,c)}vh.prototype=Object.create(qa.prototype);vh.prototype.constructor=vh;function wh(a,b,c){qa.call(this,new Uint8ClampedArray(a),b,c)}wh.prototype=Object.create(qa.prototype);wh.prototype.constructor=wh;function xh(a,b,c){qa.call(this,new Int16Array(a),b,c)}xh.prototype=Object.create(qa.prototype);xh.prototype.constructor=xh;function re(a,b,c){qa.call(this,new Uint16Array(a),b,c)}re.prototype=Object.create(qa.prototype);re.prototype.constructor=re;function yh(a,b,c){qa.call(this,new Int32Array(a),b,c)}yh.prototype=Object.create(qa.prototype);yh.prototype.constructor=yh;function se(a,b,c){qa.call(this,new Uint32Array(a),b,c)}se.prototype=Object.create(qa.prototype);se.prototype.constructor=se;function aa(a,b,c){qa.call(this,new Float32Array(a),b,c)}aa.prototype=Object.create(qa.prototype);aa.prototype.constructor=aa;function zh(a,b,c){qa.call(this,new Float64Array(a),b,c)}zh.prototype=Object.create(qa.prototype);zh.prototype.constructor=zh;function tj(){this.vertices=[],this.normals=[],this.colors=[],this.uvs=[],this.uvs2=[],this.groups=[],this.morphTargets={},this.skinWeights=[],this.skinIndices=[],this.boundingBox=null,this.boundingSphere=null,this.verticesNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.uvsNeedUpdate=!1,this.groupsNeedUpdate=!1}Object.assign(tj.prototype,{computeGroups:function(a){const b=[];let c,d,e;const f=a.faces;for(d=0;d<f.length;d++){const g=f[d];g.materialIndex!==e&&(e=g.materialIndex,c!==void 0&&(c.count=d*3-c.start,b.push(c)),c={start:d*3,materialIndex:e})}c!==void 0&&(c.count=d*3-c.start,b.push(c)),this.groups=b},fromGeometry:function(a){const b=a.faces,c=a.vertices,d=a.faceVertexUvs,e=d[0]&&d[0].length>0,f=d[1]&&d[1].length>0,g=a.morphTargets,h=g.length;let i;if(h>0){i=[];for(let r=0;r<h;r++)i[r]={name:g[r].name,data:[]};this.morphTargets.position=i}const j=a.morphNormals,l=j.length;let k;if(l>0){k=[];for(let r=0;r<l;r++)k[r]={name:j[r].name,data:[]};this.morphTargets.normal=k}const n=a.skinIndices,m=a.skinWeights,o=n.length===c.length,s=m.length===c.length;c.length>0&&b.length===0&&console.error("THREE.DirectGeometry: Faceless geometries are not supported.");for(let r=0;r<b.length;r++){const p=b[r];this.vertices.push(c[p.a],c[p.b],c[p.c]);const q=p.vertexNormals;if(q.length===3)this.normals.push(q[0],q[1],q[2]);else{const t=p.normal;this.normals.push(t,t,t)}const u=p.vertexColors;if(u.length===3)this.colors.push(u[0],u[1],u[2]);else{const t=p.color;this.colors.push(t,t,t)}if(e===!0){const t=d[0][r];t!==void 0?this.uvs.push(t[0],t[1],t[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ",r),this.uvs.push(new N(),new N(),new N()))}if(f===!0){const t=d[1][r];t!==void 0?this.uvs2.push(t[0],t[1],t[2]):(console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ",r),this.uvs2.push(new N(),new N(),new N()))}for(let t=0;t<h;t++){const w=g[t].vertices;i[t].data.push(w[p.a],w[p.b],w[p.c])}for(let t=0;t<l;t++){const w=j[t].vertexNormals[r];k[t].data.push(w.a,w.b,w.c)}o&&this.skinIndices.push(n[p.a],n[p.b],n[p.c]),s&&this.skinWeights.push(m[p.a],m[p.b],m[p.c])}return this.computeGroups(a),this.verticesNeedUpdate=a.verticesNeedUpdate,this.normalsNeedUpdate=a.normalsNeedUpdate,this.colorsNeedUpdate=a.colorsNeedUpdate,this.uvsNeedUpdate=a.uvsNeedUpdate,this.groupsNeedUpdate=a.groupsNeedUpdate,a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),this}});function uj(a){if(a.length===0)return-Infinity;let b=a[0];for(let c=1,d=a.length;c<d;++c)a[c]>b&&(b=a[c]);return b}let mn=1;const Wb=new za(),Ah=new $(),yd=new v(),Bb=new Ib(),te=new Ib(),ib=new v();function fa(){Object.defineProperty(this,"id",{value:mn+=2}),this.uuid=va.generateUUID(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={}}fa.prototype=Object.assign(Object.create(ec.prototype),{constructor:fa,isBufferGeometry:!0,getIndex:function(){return this.index},setIndex:function(a){Array.isArray(a)?this.index=new(uj(a)>65535?se:re)(a,1):this.index=a},getAttribute:function(a){return this.attributes[a]},setAttribute:function(a,b){return this.attributes[a]=b,this},deleteAttribute:function(a){return delete this.attributes[a],this},addGroup:function(a,b,c){this.groups.push({start:a,count:b,materialIndex:c!==void 0?c:0})},clearGroups:function(){this.groups=[]},setDrawRange:function(a,b){this.drawRange.start=a,this.drawRange.count=b},applyMatrix4:function(a){const b=this.attributes.position;b!==void 0&&(b.applyMatrix4(a),b.needsUpdate=!0);const c=this.attributes.normal;if(c!==void 0){const e=new ob().getNormalMatrix(a);c.applyNormalMatrix(e),c.needsUpdate=!0}const d=this.attributes.tangent;return d!==void 0&&(d.transformDirection(a),d.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this},rotateX:function(a){return Wb.makeRotationX(a),this.applyMatrix4(Wb),this},rotateY:function(a){return Wb.makeRotationY(a),this.applyMatrix4(Wb),this},rotateZ:function(a){return Wb.makeRotationZ(a),this.applyMatrix4(Wb),this},translate:function(a,b,c){return Wb.makeTranslation(a,b,c),this.applyMatrix4(Wb),this},scale:function(a,b,c){return Wb.makeScale(a,b,c),this.applyMatrix4(Wb),this},lookAt:function(a){return Ah.lookAt(a),Ah.updateMatrix(),this.applyMatrix4(Ah.matrix),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(yd).negate(),this.translate(yd.x,yd.y,yd.z),this},setFromObject:function(a){const b=a.geometry;if(a.isPoints||a.isLine){const c=new aa(b.vertices.length*3,3),d=new aa(b.colors.length*3,3);this.setAttribute("position",c.copyVector3sArray(b.vertices)),this.setAttribute("color",d.copyColorsArray(b.colors));if(b.lineDistances&&b.lineDistances.length===b.vertices.length){const e=new aa(b.lineDistances.length,1);this.setAttribute("lineDistance",e.copyArray(b.lineDistances))}b.boundingSphere!==null&&(this.boundingSphere=b.boundingSphere.clone()),b.boundingBox!==null&&(this.boundingBox=b.boundingBox.clone())}else a.isMesh&&(b&&b.isGeometry&&this.fromGeometry(b));return this},setFromPoints:function(a){const b=[];for(let c=0,d=a.length;c<d;c++){const e=a[c];b.push(e.x,e.y,e.z||0)}return this.setAttribute("position",new aa(b,3)),this},updateFromObject:function(a){let b=a.geometry;if(a.isMesh){let c=b.__directGeometry;b.elementsNeedUpdate===!0&&(c=void 0,b.elementsNeedUpdate=!1);if(c===void 0)return this.fromGeometry(b);c.verticesNeedUpdate=b.verticesNeedUpdate,c.normalsNeedUpdate=b.normalsNeedUpdate,c.colorsNeedUpdate=b.colorsNeedUpdate,c.uvsNeedUpdate=b.uvsNeedUpdate,c.groupsNeedUpdate=b.groupsNeedUpdate,b.verticesNeedUpdate=!1,b.normalsNeedUpdate=!1,b.colorsNeedUpdate=!1,b.uvsNeedUpdate=!1,b.groupsNeedUpdate=!1,b=c}if(b.verticesNeedUpdate===!0){const c=this.attributes.position;c!==void 0&&(c.copyVector3sArray(b.vertices),c.needsUpdate=!0),b.verticesNeedUpdate=!1}if(b.normalsNeedUpdate===!0){const c=this.attributes.normal;c!==void 0&&(c.copyVector3sArray(b.normals),c.needsUpdate=!0),b.normalsNeedUpdate=!1}if(b.colorsNeedUpdate===!0){const c=this.attributes.color;c!==void 0&&(c.copyColorsArray(b.colors),c.needsUpdate=!0),b.colorsNeedUpdate=!1}if(b.uvsNeedUpdate){const c=this.attributes.uv;c!==void 0&&(c.copyVector2sArray(b.uvs),c.needsUpdate=!0),b.uvsNeedUpdate=!1}if(b.lineDistancesNeedUpdate){const c=this.attributes.lineDistance;c!==void 0&&(c.copyArray(b.lineDistances),c.needsUpdate=!0),b.lineDistancesNeedUpdate=!1}return b.groupsNeedUpdate&&(b.computeGroups(a.geometry),this.groups=b.groups,b.groupsNeedUpdate=!1),this},fromGeometry:function(a){return a.__directGeometry=new tj().fromGeometry(a),this.fromDirectGeometry(a.__directGeometry)},fromDirectGeometry:function(a){const b=new Float32Array(a.vertices.length*3);this.setAttribute("position",new qa(b,3).copyVector3sArray(a.vertices));if(a.normals.length>0){const c=new Float32Array(a.normals.length*3);this.setAttribute("normal",new qa(c,3).copyVector3sArray(a.normals))}if(a.colors.length>0){const c=new Float32Array(a.colors.length*3);this.setAttribute("color",new qa(c,3).copyColorsArray(a.colors))}if(a.uvs.length>0){const c=new Float32Array(a.uvs.length*2);this.setAttribute("uv",new qa(c,2).copyVector2sArray(a.uvs))}if(a.uvs2.length>0){const c=new Float32Array(a.uvs2.length*2);this.setAttribute("uv2",new qa(c,2).copyVector2sArray(a.uvs2))}this.groups=a.groups;for(const c in a.morphTargets){const d=[],e=a.morphTargets[c];for(let f=0,g=e.length;f<g;f++){const h=e[f],i=new aa(h.data.length*3,3);i.name=h.name,d.push(i.copyVector3sArray(h.data))}this.morphAttributes[c]=d}if(a.skinIndices.length>0){const c=new aa(a.skinIndices.length*4,4);this.setAttribute("skinIndex",c.copyVector4sArray(a.skinIndices))}if(a.skinWeights.length>0){const c=new aa(a.skinWeights.length*4,4);this.setAttribute("skinWeight",c.copyVector4sArray(a.skinWeights))}return a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),this},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ib());const a=this.attributes.position,b=this.morphAttributes.position;if(a!==void 0){this.boundingBox.setFromBufferAttribute(a);if(b)for(let c=0,d=b.length;c<d;c++){const e=b[c];Bb.setFromBufferAttribute(e),this.morphTargetsRelative?(ib.addVectors(this.boundingBox.min,Bb.min),this.boundingBox.expandByPoint(ib),ib.addVectors(this.boundingBox.max,Bb.max),this.boundingBox.expandByPoint(ib)):(this.boundingBox.expandByPoint(Bb.min),this.boundingBox.expandByPoint(Bb.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new hc());const a=this.attributes.position,b=this.morphAttributes.position;if(a){const c=this.boundingSphere.center;Bb.setFromBufferAttribute(a);if(b)for(let e=0,f=b.length;e<f;e++){const g=b[e];te.setFromBufferAttribute(g),this.morphTargetsRelative?(ib.addVectors(Bb.min,te.min),Bb.expandByPoint(ib),ib.addVectors(Bb.max,te.max),Bb.expandByPoint(ib)):(Bb.expandByPoint(te.min),Bb.expandByPoint(te.max))}Bb.getCenter(c);let d=0;for(let e=0,f=a.count;e<f;e++)ib.fromBufferAttribute(a,e),d=Math.max(d,c.distanceToSquared(ib));if(b)for(let e=0,f=b.length;e<f;e++){const g=b[e],h=this.morphTargetsRelative;for(let i=0,j=g.count;i<j;i++)ib.fromBufferAttribute(g,i),h&&(yd.fromBufferAttribute(a,i),ib.add(yd)),d=Math.max(d,c.distanceToSquared(ib))}this.boundingSphere.radius=Math.sqrt(d),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}},computeFaceNormals:function(){},computeVertexNormals:function(){const a=this.index,b=this.getAttribute("position");if(b!==void 0){let c=this.getAttribute("normal");if(c===void 0)c=new qa(new Float32Array(b.count*3),3),this.setAttribute("normal",c);else for(let k=0,n=c.count;k<n;k++)c.setXYZ(k,0,0,0);const d=new v(),e=new v(),f=new v(),g=new v(),h=new v(),i=new v(),j=new v(),l=new v();if(a)for(let k=0,n=a.count;k<n;k+=3){const m=a.getX(k+0),o=a.getX(k+1),s=a.getX(k+2);d.fromBufferAttribute(b,m),e.fromBufferAttribute(b,o),f.fromBufferAttribute(b,s),j.subVectors(f,e),l.subVectors(d,e),j.cross(l),g.fromBufferAttribute(c,m),h.fromBufferAttribute(c,o),i.fromBufferAttribute(c,s),g.add(j),h.add(j),i.add(j),c.setXYZ(m,g.x,g.y,g.z),c.setXYZ(o,h.x,h.y,h.z),c.setXYZ(s,i.x,i.y,i.z)}else for(let k=0,n=b.count;k<n;k+=3)d.fromBufferAttribute(b,k+0),e.fromBufferAttribute(b,k+1),f.fromBufferAttribute(b,k+2),j.subVectors(f,e),l.subVectors(d,e),j.cross(l),c.setXYZ(k+0,j.x,j.y,j.z),c.setXYZ(k+1,j.x,j.y,j.z),c.setXYZ(k+2,j.x,j.y,j.z);this.normalizeNormals(),c.needsUpdate=!0}},merge:function(a,b){if(!(a&&a.isBufferGeometry)){console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",a);return}b===void 0&&(b=0,console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."));const c=this.attributes;for(const d in c){if(a.attributes[d]===void 0)continue;const e=c[d],f=e.array,g=a.attributes[d],h=g.array,i=g.itemSize*b,j=Math.min(h.length,f.length-i);for(let l=0,k=i;l<j;l++,k++)f[k]=h[l]}return this},normalizeNormals:function(){const a=this.attributes.normal;for(let b=0,c=a.count;b<c;b++)ib.fromBufferAttribute(a,b),ib.normalize(),a.setXYZ(b,ib.x,ib.y,ib.z)},toNonIndexed:function(){function a(g,h){const i=g.array,j=g.itemSize,l=g.normalized,k=new i.constructor(h.length*j);let n=0,m=0;for(let o=0,s=h.length;o<s;o++){n=h[o]*j;for(let r=0;r<j;r++)k[m++]=i[n++]}return new qa(k,j,l)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed."),this;const b=new fa(),c=this.index.array,d=this.attributes;for(const g in d){const h=d[g],i=a(h,c);b.setAttribute(g,i)}const e=this.morphAttributes;for(const g in e){const h=[],i=e[g];for(let j=0,l=i.length;j<l;j++){const k=i[j],n=a(k,c);h.push(n)}b.morphAttributes[g]=h}b.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let g=0,h=f.length;g<h;g++){const i=f[g];b.addGroup(i.start,i.count,i.materialIndex)}return b},toJSON:function(){const a={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),Object.keys(this.userData).length>0&&(a.userData=this.userData);if(this.parameters!==void 0){const h=this.parameters;for(const i in h)h[i]!==void 0&&(a[i]=h[i]);return a}a.data={attributes:{}};const b=this.index;b!==null&&(a.data.index={type:b.array.constructor.name,array:Array.prototype.slice.call(b.array)});const c=this.attributes;for(const h in c){const i=c[h],j=i.toJSON(a.data);i.name!==""&&(j.name=i.name),a.data.attributes[h]=j}const d={};let e=!1;for(const h in this.morphAttributes){const i=this.morphAttributes[h],j=[];for(let l=0,k=i.length;l<k;l++){const n=i[l],m=n.toJSON(a.data);n.name!==""&&(m.name=n.name),j.push(m)}j.length>0&&(d[h]=j,e=!0)}e&&(a.data.morphAttributes=d,a.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(a.data.groups=JSON.parse(JSON.stringify(f)));const g=this.boundingSphere;return g!==null&&(a.data.boundingSphere={center:g.center.toArray(),radius:g.radius}),a},clone:function(){return new fa().copy(this)},copy:function(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const b={};this.name=a.name;const c=a.index;c!==null&&this.setIndex(c.clone(b));const d=a.attributes;for(const i in d){const j=d[i];this.setAttribute(i,j.clone(b))}const e=a.morphAttributes;for(const i in e){const j=[],l=e[i];for(let k=0,n=l.length;k<n;k++)j.push(l[k].clone(b));this.morphAttributes[i]=j}this.morphTargetsRelative=a.morphTargetsRelative;const f=a.groups;for(let i=0,j=f.length;i<j;i++){const l=f[i];this.addGroup(l.start,l.count,l.materialIndex)}const g=a.boundingBox;g!==null&&(this.boundingBox=g.clone());const h=a.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});const vj=new za(),Tc=new vd(),Bh=new hc(),zc=new v(),Ac=new v(),Bc=new v(),Ch=new v(),Dh=new v(),Eh=new v(),Jf=new v(),Kf=new v(),Lf=new v(),zd=new N(),Ad=new N(),Bd=new N(),ue=new v(),Mf=new v();function Ha(a,b){$.call(this),this.type="Mesh",this.geometry=a!==void 0?a:new fa(),this.material=b!==void 0?b:new Ab(),this.updateMorphTargets()}Ha.prototype=Object.assign(Object.create($.prototype),{constructor:Ha,isMesh:!0,copy:function(a){return $.prototype.copy.call(this,a),a.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=a.morphTargetInfluences.slice()),a.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary)),this.material=a.material,this.geometry=a.geometry,this},updateMorphTargets:function(){const a=this.geometry;if(a.isBufferGeometry){const b=a.morphAttributes,c=Object.keys(b);if(c.length>0){const d=b[c[0]];if(d!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,f=d.length;e<f;e++){const g=d[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=e}}}}else{const b=a.morphTargets;b!==void 0&&b.length>0&&console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.")}},raycast:function(a,b){const c=this.geometry,d=this.material,e=this.matrixWorld;if(d===void 0)return;c.boundingSphere===null&&c.computeBoundingSphere(),Bh.copy(c.boundingSphere),Bh.applyMatrix4(e);if(a.ray.intersectsSphere(Bh)===!1)return;vj.getInverse(e),Tc.copy(a.ray).applyMatrix4(vj);if(c.boundingBox!==null){if(Tc.intersectsBox(c.boundingBox)===!1)return}let f;if(c.isBufferGeometry){const g=c.index,h=c.attributes.position,i=c.morphAttributes.position,j=c.morphTargetsRelative,l=c.attributes.uv,k=c.attributes.uv2,n=c.groups,m=c.drawRange;if(g!==null)if(Array.isArray(d))for(let o=0,s=n.length;o<s;o++){const r=n[o],p=d[r.materialIndex],q=Math.max(r.start,m.start),u=Math.min(r.start+r.count,m.start+m.count);for(let t=q,w=u;t<w;t+=3){const A=g.getX(t),B=g.getX(t+1),L=g.getX(t+2);f=Nf(this,p,a,Tc,h,i,j,l,k,A,B,L),f&&(f.faceIndex=Math.floor(t/3),f.face.materialIndex=r.materialIndex,b.push(f))}}else{const o=Math.max(0,m.start),s=Math.min(g.count,m.start+m.count);for(let r=o,p=s;r<p;r+=3){const q=g.getX(r),u=g.getX(r+1),t=g.getX(r+2);f=Nf(this,d,a,Tc,h,i,j,l,k,q,u,t),f&&(f.faceIndex=Math.floor(r/3),b.push(f))}}else if(h!==void 0)if(Array.isArray(d))for(let o=0,s=n.length;o<s;o++){const r=n[o],p=d[r.materialIndex],q=Math.max(r.start,m.start),u=Math.min(r.start+r.count,m.start+m.count);for(let t=q,w=u;t<w;t+=3){const A=t,B=t+1,L=t+2;f=Nf(this,p,a,Tc,h,i,j,l,k,A,B,L),f&&(f.faceIndex=Math.floor(t/3),f.face.materialIndex=r.materialIndex,b.push(f))}}else{const o=Math.max(0,m.start),s=Math.min(h.count,m.start+m.count);for(let r=o,p=s;r<p;r+=3){const q=r,u=r+1,t=r+2;f=Nf(this,d,a,Tc,h,i,j,l,k,q,u,t),f&&(f.faceIndex=Math.floor(r/3),b.push(f))}}}else if(c.isGeometry){const g=Array.isArray(d),h=c.vertices,i=c.faces;let j;const l=c.faceVertexUvs[0];l.length>0&&(j=l);for(let k=0,n=i.length;k<n;k++){const m=i[k],o=g?d[m.materialIndex]:d;if(o===void 0)continue;const s=h[m.a],r=h[m.b],p=h[m.c];f=wj(this,o,a,Tc,s,r,p,ue);if(f){if(j&&j[k]){const q=j[k];zd.copy(q[0]),Ad.copy(q[1]),Bd.copy(q[2]),f.uv=kb.getUV(ue,s,r,p,zd,Ad,Bd,new N())}f.face=m,f.faceIndex=k,b.push(f)}}}}});function wj(a,b,c,d,e,f,g,h){let i;b.side===fb?i=d.intersectTriangle(g,f,e,!0,h):i=d.intersectTriangle(e,f,g,b.side!==nf,h);if(i===null)return null;Mf.copy(h),Mf.applyMatrix4(a.matrixWorld);const j=c.ray.origin.distanceTo(Mf);return j<c.near||j>c.far?null:{distance:j,point:Mf.clone(),object:a}}function Nf(a,b,c,d,e,f,g,h,i,j,l,k){zc.fromBufferAttribute(e,j),Ac.fromBufferAttribute(e,l),Bc.fromBufferAttribute(e,k);const n=a.morphTargetInfluences;if(b.morphTargets&&f&&n){Jf.set(0,0,0),Kf.set(0,0,0),Lf.set(0,0,0);for(let o=0,s=f.length;o<s;o++){const r=n[o],p=f[o];if(r===0)continue;Ch.fromBufferAttribute(p,j),Dh.fromBufferAttribute(p,l),Eh.fromBufferAttribute(p,k),g?(Jf.addScaledVector(Ch,r),Kf.addScaledVector(Dh,r),Lf.addScaledVector(Eh,r)):(Jf.addScaledVector(Ch.sub(zc),r),Kf.addScaledVector(Dh.sub(Ac),r),Lf.addScaledVector(Eh.sub(Bc),r))}zc.add(Jf),Ac.add(Kf),Bc.add(Lf)}a.isSkinnedMesh&&(a.boneTransform(j,zc),a.boneTransform(l,Ac),a.boneTransform(k,Bc));const m=wj(a,b,c,d,zc,Ac,Bc,ue);if(m){h&&(zd.fromBufferAttribute(h,j),Ad.fromBufferAttribute(h,l),Bd.fromBufferAttribute(h,k),m.uv=kb.getUV(ue,zc,Ac,Bc,zd,Ad,Bd,new N())),i&&(zd.fromBufferAttribute(i,j),Ad.fromBufferAttribute(i,l),Bd.fromBufferAttribute(i,k),m.uv2=kb.getUV(ue,zc,Ac,Bc,zd,Ad,Bd,new N()));const o=new Hf(j,l,k);kb.getNormal(zc,Ac,Bc,o.normal),m.face=o}return m}let nn=0;const Xb=new za(),Fh=new $(),Of=new v();function ra(){Object.defineProperty(this,"id",{value:nn+=2}),this.uuid=va.generateUUID(),this.name="",this.type="Geometry",this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.elementsNeedUpdate=!1,this.verticesNeedUpdate=!1,this.uvsNeedUpdate=!1,this.normalsNeedUpdate=!1,this.colorsNeedUpdate=!1,this.lineDistancesNeedUpdate=!1,this.groupsNeedUpdate=!1}ra.prototype=Object.assign(Object.create(ec.prototype),{constructor:ra,isGeometry:!0,applyMatrix4:function(a){const b=new ob().getNormalMatrix(a);for(let c=0,d=this.vertices.length;c<d;c++){const e=this.vertices[c];e.applyMatrix4(a)}for(let c=0,d=this.faces.length;c<d;c++){const e=this.faces[c];e.normal.applyMatrix3(b).normalize();for(let f=0,g=e.vertexNormals.length;f<g;f++)e.vertexNormals[f].applyMatrix3(b).normalize()}return this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this.verticesNeedUpdate=!0,this.normalsNeedUpdate=!0,this},rotateX:function(a){return Xb.makeRotationX(a),this.applyMatrix4(Xb),this},rotateY:function(a){return Xb.makeRotationY(a),this.applyMatrix4(Xb),this},rotateZ:function(a){return Xb.makeRotationZ(a),this.applyMatrix4(Xb),this},translate:function(a,b,c){return Xb.makeTranslation(a,b,c),this.applyMatrix4(Xb),this},scale:function(a,b,c){return Xb.makeScale(a,b,c),this.applyMatrix4(Xb),this},lookAt:function(a){return Fh.lookAt(a),Fh.updateMatrix(),this.applyMatrix4(Fh.matrix),this},fromBufferGeometry:function(a){const b=this,c=a.index!==null?a.index:void 0,d=a.attributes;if(d.position===void 0)return console.error("THREE.Geometry.fromBufferGeometry(): Position attribute required for conversion."),this;const e=d.position,f=d.normal,g=d.color,h=d.uv,i=d.uv2;i!==void 0&&(this.faceVertexUvs[1]=[]);for(let k=0;k<e.count;k++)b.vertices.push(new v().fromBufferAttribute(e,k)),g!==void 0&&b.colors.push(new da().fromBufferAttribute(g,k));function j(k,n,m,o){const s=g===void 0?[]:[b.colors[k].clone(),b.colors[n].clone(),b.colors[m].clone()],r=f===void 0?[]:[new v().fromBufferAttribute(f,k),new v().fromBufferAttribute(f,n),new v().fromBufferAttribute(f,m)],p=new Hf(k,n,m,r,s,o);b.faces.push(p),h!==void 0&&b.faceVertexUvs[0].push([new N().fromBufferAttribute(h,k),new N().fromBufferAttribute(h,n),new N().fromBufferAttribute(h,m)]),i!==void 0&&b.faceVertexUvs[1].push([new N().fromBufferAttribute(i,k),new N().fromBufferAttribute(i,n),new N().fromBufferAttribute(i,m)])}const l=a.groups;if(l.length>0)for(let k=0;k<l.length;k++){const n=l[k],m=n.start,o=n.count;for(let s=m,r=m+o;s<r;s+=3)c!==void 0?j(c.getX(s),c.getX(s+1),c.getX(s+2),n.materialIndex):j(s,s+1,s+2,n.materialIndex)}else if(c!==void 0)for(let k=0;k<c.count;k+=3)j(c.getX(k),c.getX(k+1),c.getX(k+2));else for(let k=0;k<e.count;k+=3)j(k,k+1,k+2);return this.computeFaceNormals(),a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this},center:function(){return this.computeBoundingBox(),this.boundingBox.getCenter(Of).negate(),this.translate(Of.x,Of.y,Of.z),this},normalize:function(){this.computeBoundingSphere();const a=this.boundingSphere.center,b=this.boundingSphere.radius,c=b===0?1:1/b,d=new za();return d.set(c,0,0,-c*a.x,0,c,0,-c*a.y,0,0,c,-c*a.z,0,0,0,1),this.applyMatrix4(d),this},computeFaceNormals:function(){const a=new v(),b=new v();for(let c=0,d=this.faces.length;c<d;c++){const e=this.faces[c],f=this.vertices[e.a],g=this.vertices[e.b],h=this.vertices[e.c];a.subVectors(h,g),b.subVectors(f,g),a.cross(b),a.normalize(),e.normal.copy(a)}},computeVertexNormals:function(a){a===void 0&&(a=!0);const b=new Array(this.vertices.length);for(let c=0,d=this.vertices.length;c<d;c++)b[c]=new v();if(a){const c=new v(),d=new v();for(let e=0,f=this.faces.length;e<f;e++){const g=this.faces[e],h=this.vertices[g.a],i=this.vertices[g.b],j=this.vertices[g.c];c.subVectors(j,i),d.subVectors(h,i),c.cross(d),b[g.a].add(c),b[g.b].add(c),b[g.c].add(c)}}else{this.computeFaceNormals();for(let c=0,d=this.faces.length;c<d;c++){const e=this.faces[c];b[e.a].add(e.normal),b[e.b].add(e.normal),b[e.c].add(e.normal)}}for(let c=0,d=this.vertices.length;c<d;c++)b[c].normalize();for(let c=0,d=this.faces.length;c<d;c++){const e=this.faces[c],f=e.vertexNormals;f.length===3?(f[0].copy(b[e.a]),f[1].copy(b[e.b]),f[2].copy(b[e.c])):(f[0]=b[e.a].clone(),f[1]=b[e.b].clone(),f[2]=b[e.c].clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeFlatVertexNormals:function(){this.computeFaceNormals();for(let a=0,b=this.faces.length;a<b;a++){const c=this.faces[a],d=c.vertexNormals;d.length===3?(d[0].copy(c.normal),d[1].copy(c.normal),d[2].copy(c.normal)):(d[0]=c.normal.clone(),d[1]=c.normal.clone(),d[2]=c.normal.clone())}this.faces.length>0&&(this.normalsNeedUpdate=!0)},computeMorphNormals:function(){for(let b=0,c=this.faces.length;b<c;b++){const d=this.faces[b];d.__originalFaceNormal?d.__originalFaceNormal.copy(d.normal):d.__originalFaceNormal=d.normal.clone(),d.__originalVertexNormals||(d.__originalVertexNormals=[]);for(let e=0,f=d.vertexNormals.length;e<f;e++)d.__originalVertexNormals[e]?d.__originalVertexNormals[e].copy(d.vertexNormals[e]):d.__originalVertexNormals[e]=d.vertexNormals[e].clone()}const a=new ra();a.faces=this.faces;for(let b=0,c=this.morphTargets.length;b<c;b++){if(!this.morphNormals[b]){this.morphNormals[b]={},this.morphNormals[b].faceNormals=[],this.morphNormals[b].vertexNormals=[];const e=this.morphNormals[b].faceNormals,f=this.morphNormals[b].vertexNormals;for(let g=0,h=this.faces.length;g<h;g++){const i=new v(),j={a:new v(),b:new v(),c:new v()};e.push(i),f.push(j)}}const d=this.morphNormals[b];a.vertices=this.morphTargets[b].vertices,a.computeFaceNormals(),a.computeVertexNormals();for(let e=0,f=this.faces.length;e<f;e++){const g=this.faces[e],h=d.faceNormals[e],i=d.vertexNormals[e];h.copy(g.normal),i.a.copy(g.vertexNormals[0]),i.b.copy(g.vertexNormals[1]),i.c.copy(g.vertexNormals[2])}}for(let b=0,c=this.faces.length;b<c;b++){const d=this.faces[b];d.normal=d.__originalFaceNormal,d.vertexNormals=d.__originalVertexNormals}},computeBoundingBox:function(){this.boundingBox===null&&(this.boundingBox=new Ib()),this.boundingBox.setFromPoints(this.vertices)},computeBoundingSphere:function(){this.boundingSphere===null&&(this.boundingSphere=new hc()),this.boundingSphere.setFromPoints(this.vertices)},merge:function(a,b,c){if(!(a&&a.isGeometry)){console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.",a);return}let d,e=this.vertices.length,f=this.vertices,g=a.vertices,h=this.faces,i=a.faces,j=this.colors,l=a.colors;c===void 0&&(c=0),b!==void 0&&(d=new ob().getNormalMatrix(b));for(let k=0,n=g.length;k<n;k++){const m=g[k],o=m.clone();b!==void 0&&o.applyMatrix4(b),f.push(o)}for(let k=0,n=l.length;k<n;k++)j.push(l[k].clone());for(let k=0,n=i.length;k<n;k++){let m=i[k],o,s,r,p=m.vertexNormals,q=m.vertexColors;o=new Hf(m.a+e,m.b+e,m.c+e),o.normal.copy(m.normal),d!==void 0&&o.normal.applyMatrix3(d).normalize();for(let u=0,t=p.length;u<t;u++)s=p[u].clone(),d!==void 0&&s.applyMatrix3(d).normalize(),o.vertexNormals.push(s);o.color.copy(m.color);for(let u=0,t=q.length;u<t;u++)r=q[u],o.vertexColors.push(r.clone());o.materialIndex=m.materialIndex+c,h.push(o)}for(let k=0,n=a.faceVertexUvs.length;k<n;k++){const m=a.faceVertexUvs[k];this.faceVertexUvs[k]===void 0&&(this.faceVertexUvs[k]=[]);for(let o=0,s=m.length;o<s;o++){const r=m[o],p=[];for(let q=0,u=r.length;q<u;q++)p.push(r[q].clone());this.faceVertexUvs[k].push(p)}}},mergeMesh:function(a){if(!(a&&a.isMesh)){console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.",a);return}a.matrixAutoUpdate&&a.updateMatrix(),this.merge(a.geometry,a.matrix)},mergeVertices:function(){const a={},b=[],c=[],d=4,e=Math.pow(10,d);for(let h=0,i=this.vertices.length;h<i;h++){const j=this.vertices[h],l=Math.round(j.x*e)+"_"+Math.round(j.y*e)+"_"+Math.round(j.z*e);a[l]===void 0?(a[l]=h,b.push(this.vertices[h]),c[h]=b.length-1):c[h]=c[a[l]]}const f=[];for(let h=0,i=this.faces.length;h<i;h++){const j=this.faces[h];j.a=c[j.a],j.b=c[j.b],j.c=c[j.c];const l=[j.a,j.b,j.c];for(let k=0;k<3;k++)if(l[k]===l[(k+1)%3]){f.push(h);break}}for(let h=f.length-1;h>=0;h--){const i=f[h];this.faces.splice(i,1);for(let j=0,l=this.faceVertexUvs.length;j<l;j++)this.faceVertexUvs[j].splice(i,1)}const g=this.vertices.length-b.length;return this.vertices=b,g},setFromPoints:function(a){this.vertices=[];for(let b=0,c=a.length;b<c;b++){const d=a[b];this.vertices.push(new v(d.x,d.y,d.z||0))}return this},sortFacesByMaterialIndex:function(){const a=this.faces,b=a.length;for(let h=0;h<b;h++)a[h]._id=h;function c(h,i){return h.materialIndex-i.materialIndex}a.sort(c);const d=this.faceVertexUvs[0],e=this.faceVertexUvs[1];let f,g;d&&d.length===b&&(f=[]),e&&e.length===b&&(g=[]);for(let h=0;h<b;h++){const i=a[h]._id;f&&f.push(d[i]),g&&g.push(e[i])}f&&(this.faceVertexUvs[0]=f),g&&(this.faceVertexUvs[1]=g)},toJSON:function(){const a={metadata:{version:4.5,type:"Geometry",generator:"Geometry.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name);if(this.parameters!==void 0){const m=this.parameters;for(const o in m)m[o]!==void 0&&(a[o]=m[o]);return a}const b=[];for(let m=0;m<this.vertices.length;m++){const o=this.vertices[m];b.push(o.x,o.y,o.z)}const c=[],d=[],e={},f=[],g={},h=[],i={};for(let m=0;m<this.faces.length;m++){const o=this.faces[m],s=!0,r=!1,p=this.faceVertexUvs[0][m]!==void 0,q=o.normal.length()>0,u=o.vertexNormals.length>0,t=o.color.r!==1||o.color.g!==1||o.color.b!==1,w=o.vertexColors.length>0;let A=0;A=j(A,0,0),A=j(A,1,s),A=j(A,2,r),A=j(A,3,p),A=j(A,4,q),A=j(A,5,u),A=j(A,6,t),A=j(A,7,w),c.push(A),c.push(o.a,o.b,o.c),c.push(o.materialIndex);if(p){const B=this.faceVertexUvs[0][m];c.push(n(B[0]),n(B[1]),n(B[2]))}q&&c.push(l(o.normal));if(u){const B=o.vertexNormals;c.push(l(B[0]),l(B[1]),l(B[2]))}t&&c.push(k(o.color));if(w){const B=o.vertexColors;c.push(k(B[0]),k(B[1]),k(B[2]))}}function j(m,o,s){return s?m|1<<o:m&~(1<<o)}function l(m){const o=m.x.toString()+m.y.toString()+m.z.toString();return e[o]!==void 0?e[o]:(e[o]=d.length/3,d.push(m.x,m.y,m.z),e[o])}function k(m){const o=m.r.toString()+m.g.toString()+m.b.toString();return g[o]!==void 0?g[o]:(g[o]=f.length,f.push(m.getHex()),g[o])}function n(m){const o=m.x.toString()+m.y.toString();return i[o]!==void 0?i[o]:(i[o]=h.length/2,h.push(m.x,m.y),i[o])}return a.data={},a.data.vertices=b,a.data.normals=d,f.length>0&&(a.data.colors=f),h.length>0&&(a.data.uvs=[h]),a.data.faces=c,a},clone:function(){return new ra().copy(this)},copy:function(a){this.vertices=[],this.colors=[],this.faces=[],this.faceVertexUvs=[[]],this.morphTargets=[],this.morphNormals=[],this.skinWeights=[],this.skinIndices=[],this.lineDistances=[],this.boundingBox=null,this.boundingSphere=null,this.name=a.name;const b=a.vertices;for(let k=0,n=b.length;k<n;k++)this.vertices.push(b[k].clone());const c=a.colors;for(let k=0,n=c.length;k<n;k++)this.colors.push(c[k].clone());const d=a.faces;for(let k=0,n=d.length;k<n;k++)this.faces.push(d[k].clone());for(let k=0,n=a.faceVertexUvs.length;k<n;k++){const m=a.faceVertexUvs[k];this.faceVertexUvs[k]===void 0&&(this.faceVertexUvs[k]=[]);for(let o=0,s=m.length;o<s;o++){const r=m[o],p=[];for(let q=0,u=r.length;q<u;q++){const t=r[q];p.push(t.clone())}this.faceVertexUvs[k].push(p)}}const e=a.morphTargets;for(let k=0,n=e.length;k<n;k++){const m={};m.name=e[k].name;if(e[k].vertices!==void 0){m.vertices=[];for(let o=0,s=e[k].vertices.length;o<s;o++)m.vertices.push(e[k].vertices[o].clone())}if(e[k].normals!==void 0){m.normals=[];for(let o=0,s=e[k].normals.length;o<s;o++)m.normals.push(e[k].normals[o].clone())}this.morphTargets.push(m)}const f=a.morphNormals;for(let k=0,n=f.length;k<n;k++){const m={};if(f[k].vertexNormals!==void 0){m.vertexNormals=[];for(let o=0,s=f[k].vertexNormals.length;o<s;o++){const r=f[k].vertexNormals[o],p={};p.a=r.a.clone(),p.b=r.b.clone(),p.c=r.c.clone(),m.vertexNormals.push(p)}}if(f[k].faceNormals!==void 0){m.faceNormals=[];for(let o=0,s=f[k].faceNormals.length;o<s;o++)m.faceNormals.push(f[k].faceNormals[o].clone())}this.morphNormals.push(m)}const g=a.skinWeights;for(let k=0,n=g.length;k<n;k++)this.skinWeights.push(g[k].clone());const h=a.skinIndices;for(let k=0,n=h.length;k<n;k++)this.skinIndices.push(h[k].clone());const i=a.lineDistances;for(let k=0,n=i.length;k<n;k++)this.lineDistances.push(i[k]);const j=a.boundingBox;j!==null&&(this.boundingBox=j.clone());const l=a.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.elementsNeedUpdate=a.elementsNeedUpdate,this.verticesNeedUpdate=a.verticesNeedUpdate,this.uvsNeedUpdate=a.uvsNeedUpdate,this.normalsNeedUpdate=a.normalsNeedUpdate,this.colorsNeedUpdate=a.colorsNeedUpdate,this.lineDistancesNeedUpdate=a.lineDistancesNeedUpdate,this.groupsNeedUpdate=a.groupsNeedUpdate,this},dispose:function(){this.dispatchEvent({type:"dispose"})}});class on extends ra{constructor(a,b,c,d,e,f){super();this.type="BoxGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f},this.fromBufferGeometry(new Cd(a,b,c,d,e,f)),this.mergeVertices()}}class Cd extends fa{constructor(a,b,c,d,e,f){super();this.type="BoxBufferGeometry",this.parameters={width:a,height:b,depth:c,widthSegments:d,heightSegments:e,depthSegments:f};const g=this;a=a||1,b=b||1,c=c||1,d=Math.floor(d)||1,e=Math.floor(e)||1,f=Math.floor(f)||1;const h=[],i=[],j=[],l=[];let k=0,n=0;m("z","y","x",-1,-1,c,b,a,f,e,0),m("z","y","x",1,-1,c,b,-a,f,e,1),m("x","z","y",1,1,a,c,b,d,f,2),m("x","z","y",1,-1,a,c,-b,d,f,3),m("x","y","z",1,-1,a,b,c,d,e,4),m("x","y","z",-1,-1,a,b,-c,d,e,5),this.setIndex(h),this.setAttribute("position",new aa(i,3)),this.setAttribute("normal",new aa(j,3)),this.setAttribute("uv",new aa(l,2));function m(o,s,r,p,q,u,t,w,A,B,L){const C=u/A,U=t/B,I=u/2,J=t/2,H=w/2,D=A+1,F=B+1;let M=0,S=0;const T=new v();for(let ea=0;ea<F;ea++){const ka=ea*U-J;for(let ma=0;ma<D;ma++){const Ga=ma*C-I;T[o]=Ga*p,T[s]=ka*q,T[r]=H,i.push(T.x,T.y,T.z),T[o]=0,T[s]=0,T[r]=w>0?1:-1,j.push(T.x,T.y,T.z),l.push(ma/A),l.push(1-ea/B),M+=1}}for(let ea=0;ea<B;ea++)for(let ka=0;ka<A;ka++){const ma=k+ka+D*ea,Ga=k+ka+D*(ea+1),Aa=k+(ka+1)+D*(ea+1),Ta=k+(ka+1)+D*ea;h.push(ma,Ga,Ta),h.push(Ga,Aa,Ta),S+=6}g.addGroup(n,S,L),n+=S,k+=M}}}function Dd(a){const b={};for(const c in a){b[c]={};for(const d in a[c]){const e=a[c][d];e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture)?b[c][d]=e.clone():Array.isArray(e)?b[c][d]=e.slice():b[c][d]=e}}return b}function mb(a){const b={};for(let c=0;c<a.length;c++){const d=Dd(a[c]);for(const e in d)b[e]=d[e]}return b}const pn={clone:Dd,merge:mb};var qn=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rn=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;function vb(a){pa.call(this),this.type="ShaderMaterial",this.defines={},this.uniforms={},this.vertexShader=qn,this.fragmentShader=rn,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,a!==void 0&&(a.attributes!==void 0&&console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."),this.setValues(a))}vb.prototype=Object.create(pa.prototype);vb.prototype.constructor=vb;vb.prototype.isShaderMaterial=!0;vb.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=Dd(a.uniforms),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.lights=a.lights,this.clipping=a.clipping,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this.extensions=Object.assign({},a.extensions),this};vb.prototype.toJSON=function(a){const b=pa.prototype.toJSON.call(this,a);b.uniforms={};for(const d in this.uniforms){const e=this.uniforms[d],f=e.value;f&&f.isTexture?b.uniforms[d]={type:"t",value:f.toJSON(a).uuid}:f&&f.isColor?b.uniforms[d]={type:"c",value:f.getHex()}:f&&f.isVector2?b.uniforms[d]={type:"v2",value:f.toArray()}:f&&f.isVector3?b.uniforms[d]={type:"v3",value:f.toArray()}:f&&f.isVector4?b.uniforms[d]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?b.uniforms[d]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?b.uniforms[d]={type:"m4",value:f.toArray()}:b.uniforms[d]={value:f}}Object.keys(this.defines).length>0&&(b.defines=this.defines),b.vertexShader=this.vertexShader,b.fragmentShader=this.fragmentShader;const c={};for(const d in this.extensions)this.extensions[d]===!0&&(c[d]=!0);return Object.keys(c).length>0&&(b.extensions=c),b};function lc(){$.call(this),this.type="Camera",this.matrixWorldInverse=new za(),this.projectionMatrix=new za(),this.projectionMatrixInverse=new za()}lc.prototype=Object.assign(Object.create($.prototype),{constructor:lc,isCamera:!0,copy:function(a,b){return $.prototype.copy.call(this,a,b),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this},getWorldDirection:function(a){a===void 0&&(console.warn("THREE.Camera: .getWorldDirection() target is now required"),a=new v()),this.updateMatrixWorld(!0);const b=this.matrixWorld.elements;return a.set(-b[8],-b[9],-b[10]).normalize()},updateMatrixWorld:function(a){$.prototype.updateMatrixWorld.call(this,a),this.matrixWorldInverse.getInverse(this.matrixWorld)},updateWorldMatrix:function(a,b){$.prototype.updateWorldMatrix.call(this,a,b),this.matrixWorldInverse.getInverse(this.matrixWorld)},clone:function(){return new this.constructor().copy(this)}});function Ya(a,b,c,d){lc.call(this),this.type="PerspectiveCamera",this.fov=a!==void 0?a:50,this.zoom=1,this.near=c!==void 0?c:.1,this.far=d!==void 0?d:2e3,this.focus=10,this.aspect=b!==void 0?b:1,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}Ya.prototype=Object.assign(Object.create(lc.prototype),{constructor:Ya,isPerspectiveCamera:!0,copy:function(a,b){return lc.prototype.copy.call(this,a,b),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this},setFocalLength:function(a){const b=.5*this.getFilmHeight()/a;this.fov=va.RAD2DEG*2*Math.atan(b),this.updateProjectionMatrix()},getFocalLength:function(){const a=Math.tan(va.DEG2RAD*.5*this.fov);return .5*this.getFilmHeight()/a},getEffectiveFOV:function(){return va.RAD2DEG*2*Math.atan(Math.tan(va.DEG2RAD*.5*this.fov)/this.zoom)},getFilmWidth:function(){return this.filmGauge*Math.min(this.aspect,1)},getFilmHeight:function(){return this.filmGauge/Math.max(this.aspect,1)},setViewOffset:function(a,b,c,d,e,f){this.aspect=a/b,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=b,this.view.offsetX=c,this.view.offsetY=d,this.view.width=e,this.view.height=f,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){let a=this.near,b=a*Math.tan(va.DEG2RAD*.5*this.fov)/this.zoom,c=2*b,d=this.aspect*c,e=-.5*d,f=this.view;if(this.view!==null&&this.view.enabled){const h=f.fullWidth,i=f.fullHeight;e+=f.offsetX*d/h,b-=f.offsetY*c/i,d*=f.width/h,c*=f.height/i}const g=this.filmOffset;g!==0&&(e+=a*g/this.getFilmWidth()),this.projectionMatrix.makePerspective(e,e+d,b,b-c,a,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){const b=$.prototype.toJSON.call(this,a);return b.object.fov=this.fov,b.object.zoom=this.zoom,b.object.near=this.near,b.object.far=this.far,b.object.focus=this.focus,b.object.aspect=this.aspect,this.view!==null&&(b.object.view=Object.assign({},this.view)),b.object.filmGauge=this.filmGauge,b.object.filmOffset=this.filmOffset,b}});const Ed=90,Fd=1;function ve(a,b,c){$.call(this),this.type="CubeCamera";if(c.isWebGLCubeRenderTarget!==!0){console.error("THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter.");return}this.renderTarget=c;const d=new Ya(Ed,Fd,a,b);d.layers=this.layers,d.up.set(0,-1,0),d.lookAt(new v(1,0,0)),this.add(d);const e=new Ya(Ed,Fd,a,b);e.layers=this.layers,e.up.set(0,-1,0),e.lookAt(new v(-1,0,0)),this.add(e);const f=new Ya(Ed,Fd,a,b);f.layers=this.layers,f.up.set(0,0,1),f.lookAt(new v(0,1,0)),this.add(f);const g=new Ya(Ed,Fd,a,b);g.layers=this.layers,g.up.set(0,0,-1),g.lookAt(new v(0,-1,0)),this.add(g);const h=new Ya(Ed,Fd,a,b);h.layers=this.layers,h.up.set(0,-1,0),h.lookAt(new v(0,0,1)),this.add(h);const i=new Ya(Ed,Fd,a,b);i.layers=this.layers,i.up.set(0,-1,0),i.lookAt(new v(0,0,-1)),this.add(i),this.update=function(j,l){this.parent===null&&this.updateMatrixWorld();const k=j.xr.enabled,n=j.getRenderTarget();j.xr.enabled=!1;const m=c.texture.generateMipmaps;c.texture.generateMipmaps=!1,j.setRenderTarget(c,0),j.render(l,d),j.setRenderTarget(c,1),j.render(l,e),j.setRenderTarget(c,2),j.render(l,f),j.setRenderTarget(c,3),j.render(l,g),j.setRenderTarget(c,4),j.render(l,h),c.texture.generateMipmaps=m,j.setRenderTarget(c,5),j.render(l,i),j.setRenderTarget(n),j.xr.enabled=k},this.clear=function(j,l,k,n){const m=j.getRenderTarget();for(let o=0;o<6;o++)j.setRenderTarget(c,o),j.clear(l,k,n);j.setRenderTarget(m)}}ve.prototype=Object.create($.prototype);ve.prototype.constructor=ve;function we(a,b,c){Number.isInteger(b)&&(console.warn("THREE.WebGLCubeRenderTarget: constructor signature is now WebGLCubeRenderTarget( size, options )"),b=c),Hb.call(this,a,a,b)}we.prototype=Object.create(Hb.prototype);we.prototype.constructor=we;we.prototype.isWebGLCubeRenderTarget=!0;we.prototype.fromEquirectangularTexture=function(a,b){this.texture.type=b.type,this.texture.format=b.format,this.texture.encoding=b.encoding;const c=new rd(),d={uniforms:{tEquirect:{value:null}},vertexShader:["varying vec3 vWorldDirection;","vec3 transformDirection( in vec3 dir, in mat4 matrix ) {","	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );","}","void main() {","	vWorldDirection = transformDirection( position, modelMatrix );","	#include <begin_vertex>","	#include <project_vertex>","}"].join(`
`),fragmentShader:["uniform sampler2D tEquirect;","varying vec3 vWorldDirection;","#include <common>","void main() {","	vec3 direction = normalize( vWorldDirection );","	vec2 sampleUV = equirectUv( direction );","	gl_FragColor = texture2D( tEquirect, sampleUV );","}"].join(`
`)},e=new vb({name:"CubemapFromEquirect",uniforms:Dd(d.uniforms),vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,side:fb,blending:tc});e.uniforms.tEquirect.value=b;const f=new Ha(new Cd(5,5,5),e);c.add(f);const g=new ve(1,10,this);return g.update(a,c),f.geometry.dispose(),f.material.dispose(),this};function Gd(a,b,c,d,e,f,g,h,i,j,l,k){La.call(this,null,f,g,h,i,j,d,e,l,k),this.image={data:a||null,width:b||1,height:c||1},this.magFilter=i!==void 0?i:gb,this.minFilter=j!==void 0?j:gb,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.needsUpdate=!0}Gd.prototype=Object.create(La.prototype);Gd.prototype.constructor=Gd;Gd.prototype.isDataTexture=!0;const Hd=new hc(),Pf=new v();function xe(a,b,c,d,e,f){this.planes=[a!==void 0?a:new Vb(),b!==void 0?b:new Vb(),c!==void 0?c:new Vb(),d!==void 0?d:new Vb(),e!==void 0?e:new Vb(),f!==void 0?f:new Vb()]}Object.assign(xe.prototype,{set:function(a,b,c,d,e,f){const g=this.planes;return g[0].copy(a),g[1].copy(b),g[2].copy(c),g[3].copy(d),g[4].copy(e),g[5].copy(f),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){const b=this.planes;for(let c=0;c<6;c++)b[c].copy(a.planes[c]);return this},setFromProjectionMatrix:function(a){const b=this.planes,c=a.elements,d=c[0],e=c[1],f=c[2],g=c[3],h=c[4],i=c[5],j=c[6],l=c[7],k=c[8],n=c[9],m=c[10],o=c[11],s=c[12],r=c[13],p=c[14],q=c[15];return b[0].setComponents(g-d,l-h,o-k,q-s).normalize(),b[1].setComponents(g+d,l+h,o+k,q+s).normalize(),b[2].setComponents(g+e,l+i,o+n,q+r).normalize(),b[3].setComponents(g-e,l-i,o-n,q-r).normalize(),b[4].setComponents(g-f,l-j,o-m,q-p).normalize(),b[5].setComponents(g+f,l+j,o+m,q+p).normalize(),this},intersectsObject:function(a){const b=a.geometry;return b.boundingSphere===null&&b.computeBoundingSphere(),Hd.copy(b.boundingSphere).applyMatrix4(a.matrixWorld),this.intersectsSphere(Hd)},intersectsSprite:function(a){return Hd.center.set(0,0,0),Hd.radius=.7071067811865476,Hd.applyMatrix4(a.matrixWorld),this.intersectsSphere(Hd)},intersectsSphere:function(a){const b=this.planes,c=a.center,d=-a.radius;for(let e=0;e<6;e++){const f=b[e].distanceToPoint(c);if(f<d)return!1}return!0},intersectsBox:function(a){const b=this.planes;for(let c=0;c<6;c++){const d=b[c];Pf.x=d.normal.x>0?a.max.x:a.min.x,Pf.y=d.normal.y>0?a.max.y:a.min.y,Pf.z=d.normal.z>0?a.max.z:a.min.z;if(d.distanceToPoint(Pf)<0)return!1}return!0},containsPoint:function(a){const b=this.planes;for(let c=0;c<6;c++)if(b[c].distanceToPoint(a)<0)return!1;return!0}});const ba={common:{diffuse:{value:new da(15658734)},opacity:{value:1},map:{value:null},uvTransform:{value:new ob()},uv2Transform:{value:new ob()},alphaMap:{value:null}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},refractionRatio:{value:.98},maxMipLevel:{value:0}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new N(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new da(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotShadowMap:{value:[]},spotShadowMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}}},points:{diffuse:{value:new da(15658734)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ob()}},sprite:{diffuse:{value:new da(15658734)},opacity:{value:1},center:{value:new N(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},uvTransform:{value:new ob()}}};function xj(){let a=null,b=!1,c=null,d=null;function e(f,g){c(f,g),d=a.requestAnimationFrame(e)}return{start:function(){if(b===!0)return;if(c===null)return;d=a.requestAnimationFrame(e),b=!0},stop:function(){a.cancelAnimationFrame(d),b=!1},setAnimationLoop:function(f){c=f},setContext:function(f){a=f}}}function sn(a,b){const c=b.isWebGL2,d=new WeakMap();function e(j,l){const k=j.array,n=j.usage,m=a.createBuffer();a.bindBuffer(l,m),a.bufferData(l,k,n),j.onUploadCallback();let o=5126;return k instanceof Float32Array?o=5126:k instanceof Float64Array?console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array."):k instanceof Uint16Array?o=5123:k instanceof Int16Array?o=5122:k instanceof Uint32Array?o=5125:k instanceof Int32Array?o=5124:k instanceof Int8Array?o=5120:k instanceof Uint8Array&&(o=5121),{buffer:m,type:o,bytesPerElement:k.BYTES_PER_ELEMENT,version:j.version}}function f(j,l,k){const n=l.array,m=l.updateRange;a.bindBuffer(k,j),m.count===-1?a.bufferSubData(k,0,n):(c?a.bufferSubData(k,m.offset*n.BYTES_PER_ELEMENT,n,m.offset,m.count):a.bufferSubData(k,m.offset*n.BYTES_PER_ELEMENT,n.subarray(m.offset,m.offset+m.count)),m.count=-1)}function g(j){return j.isInterleavedBufferAttribute&&(j=j.data),d.get(j)}function h(j){j.isInterleavedBufferAttribute&&(j=j.data);const l=d.get(j);l&&(a.deleteBuffer(l.buffer),d.delete(j))}function i(j,l){j.isInterleavedBufferAttribute&&(j=j.data);const k=d.get(j);k===void 0?d.set(j,e(j,l)):k.version<j.version&&(f(k.buffer,j,l),k.version=j.version)}return{get:g,remove:h,update:i}}function Qf(a,b,c,d){ra.call(this),this.type="PlaneGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},this.fromBufferGeometry(new Cc(a,b,c,d)),this.mergeVertices()}Qf.prototype=Object.create(ra.prototype);Qf.prototype.constructor=Qf;function Cc(a,b,c,d){fa.call(this),this.type="PlaneBufferGeometry",this.parameters={width:a,height:b,widthSegments:c,heightSegments:d},a=a||1,b=b||1;const e=a/2,f=b/2,g=Math.floor(c)||1,h=Math.floor(d)||1,i=g+1,j=h+1,l=a/g,k=b/h,n=[],m=[],o=[],s=[];for(let r=0;r<j;r++){const p=r*k-f;for(let q=0;q<i;q++){const u=q*l-e;m.push(u,-p,0),o.push(0,0,1),s.push(q/g),s.push(1-r/h)}}for(let r=0;r<h;r++)for(let p=0;p<g;p++){const q=p+i*r,u=p+i*(r+1),t=p+1+i*(r+1),w=p+1+i*r;n.push(q,u,w),n.push(u,t,w)}this.setIndex(n),this.setAttribute("position",new aa(m,3)),this.setAttribute("normal",new aa(o,3)),this.setAttribute("uv",new aa(s,2))}Cc.prototype=Object.create(fa.prototype);Cc.prototype.constructor=Cc;var tn=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,un=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vn=`#ifdef ALPHATEST
	if ( diffuseColor.a < ALPHATEST ) discard;
#endif`,wn=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );
	#endif
#endif`,xn=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yn="vec3 transformed = vec3( position );",zn=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,An=`vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	return vec2( -1.04, 1.04 ) * a004 + r.zw;
}
float punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
#if defined ( PHYSICALLY_CORRECT_LIGHTS )
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
#else
	if( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
		return pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );
	}
	return 1.0;
#endif
}
vec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {
	float fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );
	return ( 1.0 - specularColor ) * fresnel + specularColor;
}
vec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {
	float fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );
	vec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;
	return Fr * fresnel + F0;
}
float G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	float gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	return 1.0 / ( gl * gv );
}
float G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( incidentLight.direction + viewDir );
	float dotNL = saturate( dot( normal, incidentLight.direction ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( G * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE  = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS  = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
vec3 BRDF_Specular_GGX_Environment( const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	return specularColor * brdf.x + brdf.y;
}
void BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
	float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
	vec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );
	vec2 brdf = integrateSpecularBRDF( dotNV, roughness );
	vec3 FssEss = F * brdf.x + brdf.y;
	float Ess = brdf.x + brdf.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );
	float dotNH = saturate( dot( geometry.normal, halfDir ) );
	float dotLH = saturate( dot( incidentLight.direction, halfDir ) );
	vec3 F = F_Schlick( specularColor, dotLH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
float GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {
	return ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );
}
float BlinnExponentToGGXRoughness( const in float blinnExponent ) {
	return sqrt( 2.0 / ( blinnExponent + 2.0 ) );
}
#if defined( USE_SHEEN )
float D_Charlie(float roughness, float NoH) {
	float invAlpha  = 1.0 / roughness;
	float cos2h = NoH * NoH;
	float sin2h = max(1.0 - cos2h, 0.0078125);	return (2.0 + invAlpha) * pow(sin2h, invAlpha * 0.5) / (2.0 * PI);
}
float V_Neubelt(float NoV, float NoL) {
	return saturate(1.0 / (4.0 * (NoL + NoV - NoL * NoV)));
}
vec3 BRDF_Specular_Sheen( const in float roughness, const in vec3 L, const in GeometricContext geometry, vec3 specularColor ) {
	vec3 N = geometry.normal;
	vec3 V = geometry.viewDir;
	vec3 H = normalize( V + L );
	float dotNH = saturate( dot( N, H ) );
	return specularColor * D_Charlie( roughness, dotNH ) * V_Neubelt( dot(N, V), dot(N, L) );
}
#endif`,Bn=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 );
		fDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cn=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Dn=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,En=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fn=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Gn=`#ifdef USE_COLOR
	diffuseColor.rgb *= vColor;
#endif`,Hn=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,In=`#ifdef USE_COLOR
	varying vec3 vColor;
#endif`,Jn=`#ifdef USE_COLOR
	vColor.xyz = color.xyz;
#endif`,Kn=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement(a) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract(sin(sn) * c);
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float max3( vec3 v ) { return max( max( v.x, v.y ), v.z ); }
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
vec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	float distance = dot( planeNormal, point - pointOnPlane );
	return - distance * planeNormal + point;
}
float sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return sign( dot( point - pointOnPlane, planeNormal ) );
}
vec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {
	return lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
  return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Ln=`#ifdef ENVMAP_TYPE_CUBE_UV
#define cubeUV_maxMipLevel 8.0
#define cubeUV_minMipLevel 4.0
#define cubeUV_maxTileSize 256.0
#define cubeUV_minTileSize 16.0
float getFace(vec3 direction) {
    vec3 absDirection = abs(direction);
    float face = -1.0;
    if (absDirection.x > absDirection.z) {
      if (absDirection.x > absDirection.y)
        face = direction.x > 0.0 ? 0.0 : 3.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    } else {
      if (absDirection.z > absDirection.y)
        face = direction.z > 0.0 ? 2.0 : 5.0;
      else
        face = direction.y > 0.0 ? 1.0 : 4.0;
    }
    return face;
}
vec2 getUV(vec3 direction, float face) {
    vec2 uv;
    if (face == 0.0) {
      uv = vec2(direction.z, direction.y) / abs(direction.x);    } else if (face == 1.0) {
      uv = vec2(-direction.x, -direction.z) / abs(direction.y);    } else if (face == 2.0) {
      uv = vec2(-direction.x, direction.y) / abs(direction.z);    } else if (face == 3.0) {
      uv = vec2(-direction.z, direction.y) / abs(direction.x);    } else if (face == 4.0) {
      uv = vec2(-direction.x, direction.z) / abs(direction.y);    } else {
      uv = vec2(direction.x, direction.y) / abs(direction.z);    }
    return 0.5 * (uv + 1.0);
}
vec3 bilinearCubeUV(sampler2D envMap, vec3 direction, float mipInt) {
  float face = getFace(direction);
  float filterInt = max(cubeUV_minMipLevel - mipInt, 0.0);
  mipInt = max(mipInt, cubeUV_minMipLevel);
  float faceSize = exp2(mipInt);
  float texelSize = 1.0 / (3.0 * cubeUV_maxTileSize);
  vec2 uv = getUV(direction, face) * (faceSize - 1.0);
  vec2 f = fract(uv);
  uv += 0.5 - f;
  if (face > 2.0) {
    uv.y += faceSize;
    face -= 3.0;
  }
  uv.x += face * faceSize;
  if(mipInt < cubeUV_maxMipLevel){
    uv.y += 2.0 * cubeUV_maxTileSize;
  }
  uv.y += filterInt * 2.0 * cubeUV_minTileSize;
  uv.x += 3.0 * max(0.0, cubeUV_maxTileSize - 2.0 * faceSize);
  uv *= texelSize;
  vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x += texelSize;
  vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.y += texelSize;
  vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  uv.x -= texelSize;
  vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
  vec3 tm = mix(tl, tr, f.x);
  vec3 bm = mix(bl, br, f.x);
  return mix(tm, bm, f.y);
}
#define r0 1.0
#define v0 0.339
#define m0 -2.0
#define r1 0.8
#define v1 0.276
#define m1 -1.0
#define r4 0.4
#define v4 0.046
#define m4 2.0
#define r5 0.305
#define v5 0.016
#define m5 3.0
#define r6 0.21
#define v6 0.0038
#define m6 4.0
float roughnessToMip(float roughness) {
  float mip = 0.0;
  if (roughness >= r1) {
    mip = (r0 - roughness) * (m1 - m0) / (r0 - r1) + m0;
  } else if (roughness >= r4) {
    mip = (r1 - roughness) * (m4 - m1) / (r1 - r4) + m1;
  } else if (roughness >= r5) {
    mip = (r4 - roughness) * (m5 - m4) / (r4 - r5) + m4;
  } else if (roughness >= r6) {
    mip = (r5 - roughness) * (m6 - m5) / (r5 - r6) + m5;
  } else {
    mip = -2.0 * log2(1.16 * roughness);  }
  return mip;
}
vec4 textureCubeUV(sampler2D envMap, vec3 sampleDir, float roughness) {
  float mip = clamp(roughnessToMip(roughness), m0, cubeUV_maxMipLevel);
  float mipF = fract(mip);
  float mipInt = floor(mip);
  vec3 color0 = bilinearCubeUV(envMap, sampleDir, mipInt);
  if (mipF == 0.0) {
    return vec4(color0, 1.0);
  } else {
    vec3 color1 = bilinearCubeUV(envMap, sampleDir, mipInt + 1.0);
    return vec4(mix(color0, color1, mipF), 1.0);
  }
}
#endif`,Mn=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Nn=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,On=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Pn=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	emissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qn=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Rn="gl_FragColor = linearToOutputTexel( gl_FragColor );",Sn=`
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 GammaToLinear( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );
}
vec4 LinearToGamma( in vec4 value, in float gammaFactor ) {
	return vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );
}
vec4 sRGBToLinear( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 RGBEToLinear( in vec4 value ) {
	return vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );
}
vec4 LinearToRGBE( in vec4 value ) {
	float maxComponent = max( max( value.r, value.g ), value.b );
	float fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );
	return vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );
}
vec4 RGBMToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * value.a * maxRange, 1.0 );
}
vec4 LinearToRGBM( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float M = clamp( maxRGB / maxRange, 0.0, 1.0 );
	M = ceil( M * 255.0 ) / 255.0;
	return vec4( value.rgb / ( M * maxRange ), M );
}
vec4 RGBDToLinear( in vec4 value, in float maxRange ) {
	return vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );
}
vec4 LinearToRGBD( in vec4 value, in float maxRange ) {
	float maxRGB = max( value.r, max( value.g, value.b ) );
	float D = max( maxRange / maxRGB, 1.0 );
	D = clamp( floor( D ) / 255.0, 0.0, 1.0 );
	return vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );
}
const mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );
vec4 LinearToLogLuv( in vec4 value )  {
	vec3 Xp_Y_XYZp = cLogLuvM * value.rgb;
	Xp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );
	vec4 vResult;
	vResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;
	float Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;
	vResult.w = fract( Le );
	vResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;
	return vResult;
}
const mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );
vec4 LogLuvToLinear( in vec4 value ) {
	float Le = value.z * 255.0 + value.w;
	vec3 Xp_Y_XYZp;
	Xp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );
	Xp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;
	Xp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;
	vec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;
	return vec4( max( vRGB, 0.0 ), 1.0 );
}`,Tn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		}  else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#elif defined( ENVMAP_TYPE_EQUIREC )
		reflectVec = normalize( reflectVec );
		vec2 sampleUV = equirectUv( reflectVec );
		vec4 envColor = texture2D( envMap, sampleUV );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifndef ENVMAP_TYPE_CUBE_UV
		envColor = envMapTexelToLinear( envColor );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Un=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform int maxMipLevel;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vn=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Wn=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xn=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) { 
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yn=`#ifdef USE_FOG
	fogDepth = -mvPosition.z;
#endif`,Zn=`#ifdef USE_FOG
	varying float fogDepth;
#endif`,_n=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * fogDepth * fogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, fogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$n=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float fogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ao=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return texture2D( gradientMap, coord ).rgb;
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,bo=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel= texture2D( lightMap, vUv2 );
	reflectedLight.indirectDiffuse += PI * lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
#endif`,co=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,eo=`vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = PI * directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( -dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );
		#endif
	}
	#pragma unroll_loop_end
#endif`,fo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {
	vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	return irradiance;
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		directLight.color = directionalLight.color;
		directLight.direction = directionalLight.direction;
		directLight.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {
		vec3 lVector = pointLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		directLight.color = pointLight.color;
		directLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );
		directLight.visible = ( directLight.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {
		vec3 lVector = spotLight.position - geometry.position;
		directLight.direction = normalize( lVector );
		float lightDistance = length( lVector );
		float angleCos = dot( directLight.direction, spotLight.direction );
		if ( angleCos > spotLight.coneCos ) {
			float spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );
			directLight.color = spotLight.color;
			directLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );
			directLight.visible = true;
		} else {
			directLight.color = vec3( 0.0 );
			directLight.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {
		float dotNL = dot( geometry.normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			irradiance *= PI;
		#endif
		return irradiance;
	}
#endif`,go=`#if defined( USE_ENVMAP )
	#ifdef ENVMAP_MODE_REFRACTION
		uniform float refractionRatio;
	#endif
	vec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {
		vec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );
			#else
				vec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
		#else
			vec4 envMapColor = vec4( 0.0 );
		#endif
		return PI * envMapColor.rgb * envMapIntensity;
	}
	float getSpecularMIPLevel( const in float roughness, const in int maxMIPLevel ) {
		float maxMIPLevelScalar = float( maxMIPLevel );
		float sigma = PI * roughness * roughness / ( 1.0 + roughness );
		float desiredMIPLevel = maxMIPLevelScalar + log2( sigma );
		return clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );
	}
	vec3 getLightProbeIndirectRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in int maxMIPLevel ) {
		#ifdef ENVMAP_MODE_REFLECTION
		  vec3 reflectVec = reflect( -viewDir, normal );
		  reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		#else
		  vec3 reflectVec = refract( -viewDir, normal, refractionRatio );
		#endif
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		float specularMIPLevel = getSpecularMIPLevel( roughness, maxMIPLevel );
		#ifdef ENVMAP_TYPE_CUBE
			vec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );
			#else
				vec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#elif defined( ENVMAP_TYPE_CUBE_UV )
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		#elif defined( ENVMAP_TYPE_EQUIREC )
			vec2 sampleUV = equirectUv( reflectVec );
			#ifdef TEXTURE_LOD_EXT
				vec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );
			#else
				vec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );
			#endif
			envMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;
		#endif
		return envMapColor.rgb * envMapIntensity;
	}
#endif`,ho=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,io=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct ToonMaterial {
	vec3	diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,jo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ko=`varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
struct BlinnPhongMaterial {
	vec3	diffuseColor;
	vec3	specularColor;
	float	specularShininess;
	float	specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,lo=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.specularRoughness = max( roughnessFactor, 0.0525 );material.specularRoughness += geometryRoughness;
material.specularRoughness = min( material.specularRoughness, 1.0 );
#ifdef REFLECTIVITY
	material.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );
#endif
#ifdef CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheen;
#endif`,mo=`struct PhysicalMaterial {
	vec3	diffuseColor;
	float	specularRoughness;
	vec3	specularColor;
#ifdef CLEARCOAT
	float clearcoat;
	float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	vec3 sheenColor;
#endif
};
#define MAXIMUM_SPECULAR_COEFFICIENT 0.16
#define DEFAULT_SPECULAR_COEFFICIENT 0.04
float clearcoatDHRApprox( const in float roughness, const in float dotNL ) {
	return DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.specularRoughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifndef PHYSICALLY_CORRECT_LIGHTS
		irradiance *= PI;
	#endif
	#ifdef CLEARCOAT
		float ccDotNL = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = ccDotNL * directLight.color;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			ccIrradiance *= PI;
		#endif
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
		reflectedLight.directSpecular += ccIrradiance * material.clearcoat * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
	#else
		float clearcoatDHR = 0.0;
	#endif
	#ifdef USE_SHEEN
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_Sheen(
			material.specularRoughness,
			directLight.direction,
			geometry,
			material.sheenColor
		);
	#else
		reflectedLight.directSpecular += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry.viewDir, geometry.normal, material.specularColor, material.specularRoughness);
	#endif
	reflectedLight.directDiffuse += ( 1.0 - clearcoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef CLEARCOAT
		float ccDotNV = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		reflectedLight.indirectSpecular += clearcoatRadiance * material.clearcoat * BRDF_Specular_GGX_Environment( geometry.viewDir, geometry.clearcoatNormal, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearcoatRoughness );
		float ccDotNL = ccDotNV;
		float clearcoatDHR = material.clearcoat * clearcoatDHRApprox( material.clearcoatRoughness, ccDotNL );
	#else
		float clearcoatDHR = 0.0;
	#endif
	float clearcoatInv = 1.0 - clearcoatDHR;
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	BRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );
	vec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );
	reflectedLight.indirectSpecular += clearcoatInv * radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,no=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointDirectLightIrradiance( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotDirectLightIrradiance( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,oo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
		#ifndef PHYSICALLY_CORRECT_LIGHTS
			lightMapIrradiance *= PI;
		#endif
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.normal, material.specularRoughness, maxMipLevel );
	#ifdef CLEARCOAT
		clearcoatRadiance += getLightProbeIndirectRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness, maxMipLevel );
	#endif
#endif`,po=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,qo=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ro=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,so=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,to=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uo=`#ifdef USE_MAP
	vec4 texelColor = texture2D( map, vUv );
	texelColor = mapTexelToLinear( texelColor );
	diffuseColor *= texelColor;
#endif`,vo=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	vec4 mapTexel = texture2D( map, uv );
	diffuseColor *= mapTexelToLinear( mapTexel );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yo=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zo=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ao=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
	objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
	objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
	objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
#endif`,Bo=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifndef USE_MORPHNORMALS
	uniform float morphTargetInfluences[ 8 ];
	#else
	uniform float morphTargetInfluences[ 4 ];
	#endif
#endif`,Co=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	transformed += morphTarget0 * morphTargetInfluences[ 0 ];
	transformed += morphTarget1 * morphTargetInfluences[ 1 ];
	transformed += morphTarget2 * morphTargetInfluences[ 2 ];
	transformed += morphTarget3 * morphTargetInfluences[ 3 ];
	#ifndef USE_MORPHNORMALS
	transformed += morphTarget4 * morphTargetInfluences[ 4 ];
	transformed += morphTarget5 * morphTargetInfluences[ 5 ];
	transformed += morphTarget6 * morphTargetInfluences[ 6 ];
	transformed += morphTarget7 * morphTargetInfluences[ 7 ];
	#endif
#endif`,Do=`#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
			bitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Eo=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( -vViewPosition, normal, mapN );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );
#endif`,Fo=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		float scale = sign( st1.t * st0.s - st0.t * st1.s );
		vec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );
		vec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );
		vec3 N = normalize( surf_norm );
		mat3 tsn = mat3( S, T, N );
		mapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );
		return normalize( tsn * mapN );
	}
#endif`,Go=`#ifdef CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Ho=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN );
	#endif
#endif`,Io=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Jo=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ));
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w);
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return (( near + viewZ ) * far ) / (( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Ko=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Lo=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mo=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,No=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Oo=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Po=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qo=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Ro=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,So=`#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,To=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Uo=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vo=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	#ifdef BONE_TEXTURE
		uniform highp sampler2D boneTexture;
		uniform int boneTextureSize;
		mat4 getBoneMatrix( const in float i ) {
			float j = i * 4.0;
			float x = mod( j, float( boneTextureSize ) );
			float y = floor( j / float( boneTextureSize ) );
			float dx = 1.0 / float( boneTextureSize );
			float dy = 1.0 / float( boneTextureSize );
			y = dy * ( y + 0.5 );
			vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
			vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
			vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
			vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
			mat4 bone = mat4( v1, v2, v3, v4 );
			return bone;
		}
	#else
		uniform mat4 boneMatrices[ MAX_BONES ];
		mat4 getBoneMatrix( const in float i ) {
			mat4 bone = boneMatrices[ int(i) ];
			return bone;
		}
	#endif
#endif`,Wo=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xo=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yo=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zo=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_o=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$o=`#ifndef saturate
#define saturate(a) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,bp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,dp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,ep=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,fp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,gp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,hp=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jp=`#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,mp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,np=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,op=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	vec4 texColor = texture2D( tEquirect, sampleUV );
	gl_FragColor = mapTexelToLinear( texColor );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
	
		vec4 lightMapTexel= texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexelToLinear( lightMapTexel ).rgb * lightMapIntensity;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,up=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <skinbase_vertex>
	#ifdef USE_ENVMAP
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
		matcapColor = matcapTexelToLinear( matcapColor );
	#else
		vec4 matcapColor = vec4( 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#ifndef FLAT_SHADED
		vNormal = normalize( transformedNormal );
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,zp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ap=`#define TOON
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define PHONG
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dp=`#define STANDARD
#ifdef PHYSICAL
	#define REFLECTIVITY
	#define CLEARCOAT
	#define TRANSPARENCY
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef TRANSPARENCY
	uniform float transparency;
#endif
#ifdef REFLECTIVITY
	uniform float reflectivity;
#endif
#ifdef CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheen;
#endif
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#ifdef TRANSPARENCY
		diffuseColor.a *= saturate( 1. - transparency + linearToRelativeLuminance( reflectedLight.directSpecular + reflectedLight.indirectSpecular ) );
	#endif
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ep=`#define STANDARD
varying vec3 vViewPosition;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <packing>
#include <uv_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
}`,Gp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Hp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Kp=`#include <common>
#include <fog_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <begin_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	gl_FragColor = vec4( outgoingLight, diffuseColor.a );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Mp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`;const Ea={alphamap_fragment:tn,alphamap_pars_fragment:un,alphatest_fragment:vn,aomap_fragment:wn,aomap_pars_fragment:xn,begin_vertex:yn,beginnormal_vertex:zn,bsdfs:An,bumpmap_pars_fragment:Bn,clipping_planes_fragment:Cn,clipping_planes_pars_fragment:Dn,clipping_planes_pars_vertex:En,clipping_planes_vertex:Fn,color_fragment:Gn,color_pars_fragment:Hn,color_pars_vertex:In,color_vertex:Jn,common:Kn,cube_uv_reflection_fragment:Ln,defaultnormal_vertex:Mn,displacementmap_pars_vertex:Nn,displacementmap_vertex:On,emissivemap_fragment:Pn,emissivemap_pars_fragment:Qn,encodings_fragment:Rn,encodings_pars_fragment:Sn,envmap_fragment:Tn,envmap_common_pars_fragment:Un,envmap_pars_fragment:Vn,envmap_pars_vertex:Wn,envmap_physical_pars_fragment:go,envmap_vertex:Xn,fog_vertex:Yn,fog_pars_vertex:Zn,fog_fragment:_n,fog_pars_fragment:$n,gradientmap_pars_fragment:ao,lightmap_fragment:bo,lightmap_pars_fragment:co,lights_lambert_vertex:eo,lights_pars_begin:fo,lights_toon_fragment:ho,lights_toon_pars_fragment:io,lights_phong_fragment:jo,lights_phong_pars_fragment:ko,lights_physical_fragment:lo,lights_physical_pars_fragment:mo,lights_fragment_begin:no,lights_fragment_maps:oo,lights_fragment_end:po,logdepthbuf_fragment:qo,logdepthbuf_pars_fragment:ro,logdepthbuf_pars_vertex:so,logdepthbuf_vertex:to,map_fragment:uo,map_pars_fragment:vo,map_particle_fragment:wo,map_particle_pars_fragment:xo,metalnessmap_fragment:yo,metalnessmap_pars_fragment:zo,morphnormal_vertex:Ao,morphtarget_pars_vertex:Bo,morphtarget_vertex:Co,normal_fragment_begin:Do,normal_fragment_maps:Eo,normalmap_pars_fragment:Fo,clearcoat_normal_fragment_begin:Go,clearcoat_normal_fragment_maps:Ho,clearcoat_pars_fragment:Io,packing:Jo,premultiplied_alpha_fragment:Ko,project_vertex:Lo,dithering_fragment:Mo,dithering_pars_fragment:No,roughnessmap_fragment:Oo,roughnessmap_pars_fragment:Po,shadowmap_pars_fragment:Qo,shadowmap_pars_vertex:Ro,shadowmap_vertex:So,shadowmask_pars_fragment:To,skinbase_vertex:Uo,skinning_pars_vertex:Vo,skinning_vertex:Wo,skinnormal_vertex:Xo,specularmap_fragment:Yo,specularmap_pars_fragment:Zo,tonemapping_fragment:_o,tonemapping_pars_fragment:$o,uv_pars_fragment:ap,uv_pars_vertex:bp,uv_vertex:cp,uv2_pars_fragment:dp,uv2_pars_vertex:ep,uv2_vertex:fp,worldpos_vertex:gp,background_frag:hp,background_vert:ip,cube_frag:jp,cube_vert:kp,depth_frag:lp,depth_vert:mp,distanceRGBA_frag:np,distanceRGBA_vert:op,equirect_frag:pp,equirect_vert:qp,linedashed_frag:rp,linedashed_vert:sp,meshbasic_frag:tp,meshbasic_vert:up,meshlambert_frag:vp,meshlambert_vert:wp,meshmatcap_frag:xp,meshmatcap_vert:yp,meshtoon_frag:zp,meshtoon_vert:Ap,meshphong_frag:Bp,meshphong_vert:Cp,meshphysical_frag:Dp,meshphysical_vert:Ep,normal_frag:Fp,normal_vert:Gp,points_frag:Hp,points_vert:Ip,shadow_frag:Jp,shadow_vert:Kp,sprite_frag:Lp,sprite_vert:Mp},mc={basic:{uniforms:mb([ba.common,ba.specularmap,ba.envmap,ba.aomap,ba.lightmap,ba.fog]),vertexShader:Ea.meshbasic_vert,fragmentShader:Ea.meshbasic_frag},lambert:{uniforms:mb([ba.common,ba.specularmap,ba.envmap,ba.aomap,ba.lightmap,ba.emissivemap,ba.fog,ba.lights,{emissive:{value:new da(0)}}]),vertexShader:Ea.meshlambert_vert,fragmentShader:Ea.meshlambert_frag},phong:{uniforms:mb([ba.common,ba.specularmap,ba.envmap,ba.aomap,ba.lightmap,ba.emissivemap,ba.bumpmap,ba.normalmap,ba.displacementmap,ba.fog,ba.lights,{emissive:{value:new da(0)},specular:{value:new da(1118481)},shininess:{value:30}}]),vertexShader:Ea.meshphong_vert,fragmentShader:Ea.meshphong_frag},standard:{uniforms:mb([ba.common,ba.envmap,ba.aomap,ba.lightmap,ba.emissivemap,ba.bumpmap,ba.normalmap,ba.displacementmap,ba.roughnessmap,ba.metalnessmap,ba.fog,ba.lights,{emissive:{value:new da(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ea.meshphysical_vert,fragmentShader:Ea.meshphysical_frag},toon:{uniforms:mb([ba.common,ba.aomap,ba.lightmap,ba.emissivemap,ba.bumpmap,ba.normalmap,ba.displacementmap,ba.gradientmap,ba.fog,ba.lights,{emissive:{value:new da(0)}}]),vertexShader:Ea.meshtoon_vert,fragmentShader:Ea.meshtoon_frag},matcap:{uniforms:mb([ba.common,ba.bumpmap,ba.normalmap,ba.displacementmap,ba.fog,{matcap:{value:null}}]),vertexShader:Ea.meshmatcap_vert,fragmentShader:Ea.meshmatcap_frag},points:{uniforms:mb([ba.points,ba.fog]),vertexShader:Ea.points_vert,fragmentShader:Ea.points_frag},dashed:{uniforms:mb([ba.common,ba.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ea.linedashed_vert,fragmentShader:Ea.linedashed_frag},depth:{uniforms:mb([ba.common,ba.displacementmap]),vertexShader:Ea.depth_vert,fragmentShader:Ea.depth_frag},normal:{uniforms:mb([ba.common,ba.bumpmap,ba.normalmap,ba.displacementmap,{opacity:{value:1}}]),vertexShader:Ea.normal_vert,fragmentShader:Ea.normal_frag},sprite:{uniforms:mb([ba.sprite,ba.fog]),vertexShader:Ea.sprite_vert,fragmentShader:Ea.sprite_frag},background:{uniforms:{uvTransform:{value:new ob()},t2D:{value:null}},vertexShader:Ea.background_vert,fragmentShader:Ea.background_frag},cube:{uniforms:mb([ba.envmap,{opacity:{value:1}}]),vertexShader:Ea.cube_vert,fragmentShader:Ea.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ea.equirect_vert,fragmentShader:Ea.equirect_frag},distanceRGBA:{uniforms:mb([ba.common,ba.displacementmap,{referencePosition:{value:new v()},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ea.distanceRGBA_vert,fragmentShader:Ea.distanceRGBA_frag},shadow:{uniforms:mb([ba.lights,ba.fog,{color:{value:new da(0)},opacity:{value:1}}]),vertexShader:Ea.shadow_vert,fragmentShader:Ea.shadow_frag}};mc.physical={uniforms:mb([mc.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new N(1,1)},clearcoatNormalMap:{value:null},sheen:{value:new da(0)},transparency:{value:0}}]),vertexShader:Ea.meshphysical_vert,fragmentShader:Ea.meshphysical_frag};function Np(a,b,c,d){const e=new da(0);let f=0,g,h,i=null,j=0,l=null;function k(m,o,s,r){let p=o.isScene===!0?o.background:null;const q=a.xr,u=q.getSession&&q.getSession();u&&u.environmentBlendMode==="additive"&&(p=null),p===null?n(e,f):p&&p.isColor&&(n(p,1),r=!0),(a.autoClear||r)&&a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil);if(p&&(p.isCubeTexture||p.isWebGLCubeRenderTarget||p.mapping===ie)){h===void 0&&(h=new Ha(new Cd(1,1,1),new vb({name:"BackgroundCubeMaterial",uniforms:Dd(mc.cube.uniforms),vertexShader:mc.cube.vertexShader,fragmentShader:mc.cube.fragmentShader,side:fb,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,A,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),c.update(h));const t=p.isWebGLCubeRenderTarget?p.texture:p;h.material.uniforms.envMap.value=t,h.material.uniforms.flipEnvMap.value=t.isCubeTexture?-1:1,(i!==p||j!==t.version||l!==a.toneMapping)&&(h.material.needsUpdate=!0,i=p,j=t.version,l=a.toneMapping),m.unshift(h,h.geometry,h.material,0,0,null)}else p&&p.isTexture&&(g===void 0&&(g=new Ha(new Cc(2,2),new vb({name:"BackgroundMaterial",uniforms:Dd(mc.background.uniforms),vertexShader:mc.background.vertexShader,fragmentShader:mc.background.fragmentShader,side:Oc,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),c.update(g)),g.material.uniforms.t2D.value=p,p.matrixAutoUpdate===!0&&p.updateMatrix(),g.material.uniforms.uvTransform.value.copy(p.matrix),(i!==p||j!==p.version||l!==a.toneMapping)&&(g.material.needsUpdate=!0,i=p,j=p.version,l=a.toneMapping),m.unshift(g,g.geometry,g.material,0,0,null))}function n(m,o){b.buffers.color.setClear(m.r,m.g,m.b,o,d)}return{getClearColor:function(){return e},setClearColor:function(m,o){e.set(m),f=o!==void 0?o:1,n(e,f)},getClearAlpha:function(){return f},setClearAlpha:function(m){f=m,n(e,f)},render:k}}function Op(a,b,c,d){const e=a.getParameter(34921),f=d.isWebGL2?null:b.get("OES_vertex_array_object"),g=d.isWebGL2||f!==null,h={},i=s(null);let j=i;function l(H,D,F,M,S){let T=!1;if(g){const ea=o(M,F,D);j!==ea&&(j=ea,n(j.object)),T=r(M),T&&p(M)}else{const ea=D.wireframe===!0;(j.geometry!==M.id||j.program!==F.id||j.wireframe!==ea)&&(j.geometry=M.id,j.program=F.id,j.wireframe=ea,T=!0)}H.isInstancedMesh===!0&&(T=!0),S!==null&&c.update(S,34963),T&&(B(H,D,F,M),S!==null&&a.bindBuffer(34963,c.get(S).buffer))}function k(){return d.isWebGL2?a.createVertexArray():f.createVertexArrayOES()}function n(H){return d.isWebGL2?a.bindVertexArray(H):f.bindVertexArrayOES(H)}function m(H){return d.isWebGL2?a.deleteVertexArray(H):f.deleteVertexArrayOES(H)}function o(H,D,F){const M=F.wireframe===!0;let S=h[H.id];S===void 0&&(S={},h[H.id]=S);let T=S[D.id];T===void 0&&(T={},S[D.id]=T);let ea=T[M];return ea===void 0&&(ea=s(k()),T[M]=ea),ea}function s(H){const D=[],F=[],M=[];for(let S=0;S<e;S++)D[S]=0,F[S]=0,M[S]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:M,object:H,attributes:{}}}function r(H){const D=j.attributes,F=H.attributes;if(Object.keys(D).length!==Object.keys(F).length)return!0;for(const M in F){const S=D[M],T=F[M];if(S.attribute!==T)return!0;if(S.data!==T.data)return!0}return!1}function p(H){const D={},F=H.attributes;for(const M in F){const S=F[M],T={};T.attribute=S,S.data&&(T.data=S.data),D[M]=T}j.attributes=D}function q(){const H=j.newAttributes;for(let D=0,F=H.length;D<F;D++)H[D]=0}function u(H){t(H,0)}function t(H,D){const F=j.newAttributes,M=j.enabledAttributes,S=j.attributeDivisors;F[H]=1,M[H]===0&&(a.enableVertexAttribArray(H),M[H]=1);if(S[H]!==D){const T=d.isWebGL2?a:b.get("ANGLE_instanced_arrays");T[d.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](H,D),S[H]=D}}function w(){const H=j.newAttributes,D=j.enabledAttributes;for(let F=0,M=D.length;F<M;F++)D[F]!==H[F]&&(a.disableVertexAttribArray(F),D[F]=0)}function A(H,D,F,M,S,T){d.isWebGL2===!0&&(F===5124||F===5125)?a.vertexAttribIPointer(H,D,F,M,S,T):a.vertexAttribPointer(H,D,F,M,S,T)}function B(H,D,F,M){if(d.isWebGL2===!1&&(H.isInstancedMesh||M.isInstancedBufferGeometry)){if(b.get("ANGLE_instanced_arrays")===null)return}q();const S=M.attributes,T=F.getAttributes(),ea=D.defaultAttributeValues;for(const ka in T){const ma=T[ka];if(ma>=0){const Ga=S[ka];if(Ga!==void 0){const Aa=Ga.normalized,Ta=Ga.itemSize,Ka=c.get(Ga);if(Ka===void 0)continue;const Q=Ka.buffer,cb=Ka.type,Ba=Ka.bytesPerElement;if(Ga.isInterleavedBufferAttribute){const Ca=Ga.data,ua=Ca.stride,R=Ga.offset;Ca&&Ca.isInstancedInterleavedBuffer?(t(ma,Ca.meshPerAttribute),M._maxInstanceCount===void 0&&(M._maxInstanceCount=Ca.meshPerAttribute*Ca.count)):u(ma),a.bindBuffer(34962,Q),A(ma,Ta,cb,Aa,ua*Ba,R*Ba)}else Ga.isInstancedBufferAttribute?(t(ma,Ga.meshPerAttribute),M._maxInstanceCount===void 0&&(M._maxInstanceCount=Ga.meshPerAttribute*Ga.count)):u(ma),a.bindBuffer(34962,Q),A(ma,Ta,cb,Aa,0,0)}else if(ka==="instanceMatrix"){const Aa=c.get(H.instanceMatrix);if(Aa===void 0)continue;const Ta=Aa.buffer,Ka=Aa.type;t(ma+0,1),t(ma+1,1),t(ma+2,1),t(ma+3,1),a.bindBuffer(34962,Ta),a.vertexAttribPointer(ma+0,4,Ka,!1,64,0),a.vertexAttribPointer(ma+1,4,Ka,!1,64,16),a.vertexAttribPointer(ma+2,4,Ka,!1,64,32),a.vertexAttribPointer(ma+3,4,Ka,!1,64,48)}else if(ea!==void 0){const Aa=ea[ka];if(Aa!==void 0)switch(Aa.length){case 2:a.vertexAttrib2fv(ma,Aa);break;case 3:a.vertexAttrib3fv(ma,Aa);break;case 4:a.vertexAttrib4fv(ma,Aa);break;default:a.vertexAttrib1fv(ma,Aa)}}}}w()}function L(){I();for(const H in h){const D=h[H];for(const F in D){const M=D[F];for(const S in M)m(M[S].object),delete M[S];delete D[F]}delete h[H]}}function C(H){if(h[H.id]===void 0)return;const D=h[H.id];for(const F in D){const M=D[F];for(const S in M)m(M[S].object),delete M[S];delete D[F]}delete h[H.id]}function U(H){for(const D in h){const F=h[D];if(F[H.id]===void 0)continue;const M=F[H.id];for(const S in M)m(M[S].object),delete M[S];delete F[H.id]}}function I(){J();if(j===i)return;j=i,n(j.object)}function J(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:l,reset:I,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:C,releaseStatesOfProgram:U,initAttributes:q,enableAttribute:u,disableUnusedAttributes:w}}function Pp(a,b,c,d){const e=d.isWebGL2;let f;function g(j){f=j}function h(j,l){a.drawArrays(f,j,l),c.update(l,f)}function i(j,l,k,n){if(n===0)return;let m,o;if(e)m=a,o="drawArraysInstanced";else{m=b.get("ANGLE_instanced_arrays"),o="drawArraysInstancedANGLE";if(m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}m[o](f,l,k,n),c.update(k,f,n)}this.setMode=g,this.render=h,this.renderInstances=i}function Qp(a,b,c){let d;function e(){if(d!==void 0)return d;const A=b.get("EXT_texture_filter_anisotropic");return A!==null?d=a.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT):d=0,d}function f(A){if(A==="highp"){if(a.getShaderPrecisionFormat(35633,36338).precision>0&&a.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";A="mediump"}if(A==="mediump"){if(a.getShaderPrecisionFormat(35633,36337).precision>0&&a.getShaderPrecisionFormat(35632,36337).precision>0)return"mediump"}return"lowp"}const g=typeof WebGL2RenderingContext!=="undefined"&&a instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext!=="undefined"&&a instanceof WebGL2ComputeRenderingContext;let h=c.precision!==void 0?c.precision:"highp";const i=f(h);i!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",i,"instead."),h=i);const j=c.logarithmicDepthBuffer===!0,l=a.getParameter(34930),k=a.getParameter(35660),n=a.getParameter(3379),m=a.getParameter(34076),o=a.getParameter(34921),s=a.getParameter(36347),r=a.getParameter(36348),p=a.getParameter(36349),q=k>0,u=g||!!b.get("OES_texture_float"),t=q&&u,w=g?a.getParameter(36183):0;return{isWebGL2:g,getMaxAnisotropy:e,getMaxPrecision:f,precision:h,logarithmicDepthBuffer:j,maxTextures:l,maxVertexTextures:k,maxTextureSize:n,maxCubemapSize:m,maxAttributes:o,maxVertexUniforms:s,maxVaryings:r,maxFragmentUniforms:p,vertexTextures:q,floatFragmentTextures:u,floatVertexTextures:t,maxSamples:w}}function Rp(){const a=this;let b=null,c=0,d=!1,e=!1;const f=new Vb(),g=new ob(),h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(l,k,n){const m=l.length!==0||k||c!==0||d;return d=k,b=j(l,n,0),c=l.length,m},this.beginShadows=function(){e=!0,j(null)},this.endShadows=function(){e=!1,i()},this.setState=function(l,k,n,m,o,s){if(!d||l===null||l.length===0||e&&!n)e?j(null):i();else{const r=e?0:c,p=r*4;let q=o.clippingState||null;h.value=q,q=j(l,m,p,s);for(let u=0;u!==p;++u)q[u]=b[u];o.clippingState=q,this.numIntersection=k?this.numPlanes:0,this.numPlanes+=r}};function i(){h.value!==b&&(h.value=b,h.needsUpdate=c>0),a.numPlanes=c,a.numIntersection=0}function j(l,k,n,m){let o=l!==null?l.length:0,s=null;if(o!==0){s=h.value;if(m!==!0||s===null){const r=n+o*4,p=k.matrixWorldInverse;g.getNormalMatrix(p),(s===null||s.length<r)&&(s=new Float32Array(r));for(let q=0,u=n;q!==o;++q,u+=4)f.copy(l[q]).applyMatrix4(p,g),f.normal.toArray(s,u),s[u+3]=f.constant}h.value=s,h.needsUpdate=!0}return a.numPlanes=o,a.numIntersection=0,s}}function Sp(a){const b={};return{get:function(c){if(b[c]!==void 0)return b[c];let d;switch(c){case"WEBGL_depth_texture":d=a.getExtension("WEBGL_depth_texture")||a.getExtension("MOZ_WEBGL_depth_texture")||a.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":d=a.getExtension("EXT_texture_filter_anisotropic")||a.getExtension("MOZ_EXT_texture_filter_anisotropic")||a.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":d=a.getExtension("WEBGL_compressed_texture_s3tc")||a.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":d=a.getExtension("WEBGL_compressed_texture_pvrtc")||a.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:d=a.getExtension(c)}return d===null&&console.warn("THREE.WebGLRenderer: "+c+" extension not supported."),b[c]=d,d}}}function Tp(a,b,c,d){const e=new WeakMap(),f=new WeakMap();function g(k){const n=k.target,m=e.get(n);m.index!==null&&b.remove(m.index);for(const s in m.attributes)b.remove(m.attributes[s]);n.removeEventListener("dispose",g),e.delete(n);const o=f.get(m);o&&(b.remove(o),f.delete(m)),d.releaseStatesOfGeometry(n),n.isInstancedBufferGeometry===!0&&delete n._maxInstanceCount,c.memory.geometries--}function h(k,n){let m=e.get(n);return m?m:(n.addEventListener("dispose",g),n.isBufferGeometry?m=n:n.isGeometry&&(n._bufferGeometry===void 0&&(n._bufferGeometry=new fa().setFromObject(k)),m=n._bufferGeometry),e.set(n,m),c.memory.geometries++,m)}function i(k){const n=k.attributes;for(const o in n)b.update(n[o],34962);const m=k.morphAttributes;for(const o in m){const s=m[o];for(let r=0,p=s.length;r<p;r++)b.update(s[r],34962)}}function j(k){const n=[],m=k.index,o=k.attributes.position;let s=0;if(m!==null){const q=m.array;s=m.version;for(let u=0,t=q.length;u<t;u+=3){const w=q[u+0],A=q[u+1],B=q[u+2];n.push(w,A,A,B,B,w)}}else{const q=o.array;s=o.version;for(let u=0,t=q.length/3-1;u<t;u+=3){const w=u+0,A=u+1,B=u+2;n.push(w,A,A,B,B,w)}}const r=new(uj(n)>65535?se:re)(n,1);r.version=s;const p=f.get(k);p&&b.remove(p),f.set(k,r)}function l(k){const n=f.get(k);if(n){const m=k.index;m!==null&&(n.version<m.version&&j(k))}else j(k);return f.get(k)}return{get:h,update:i,getWireframeAttribute:l}}function Up(a,b,c,d){const e=d.isWebGL2;let f;function g(n){f=n}let h,i;function j(n){h=n.type,i=n.bytesPerElement}function l(n,m){a.drawElements(f,m,h,n*i),c.update(m,f)}function k(n,m,o,s){if(s===0)return;let r,p;if(e)r=a,p="drawElementsInstanced";else{r=b.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE";if(r===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}}r[p](f,o,h,m*i,s),c.update(o,f,s)}this.setMode=g,this.setIndex=j,this.render=l,this.renderInstances=k}function Vp(a){const b={geometries:0,textures:0},c={frame:0,calls:0,triangles:0,points:0,lines:0};function d(f,g,h){h=h||1,c.calls++;switch(g){case 4:c.triangles+=h*(f/3);break;case 1:c.lines+=h*(f/2);break;case 3:c.lines+=h*(f-1);break;case 2:c.lines+=h*f;break;case 0:c.points+=h*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",g);break}}function e(){c.frame++,c.calls=0,c.triangles=0,c.points=0,c.lines=0}return{memory:b,render:c,programs:null,autoReset:!0,reset:e,update:d}}function Wp(a,b){return a[0]-b[0]}function Xp(a,b){return Math.abs(b[1])-Math.abs(a[1])}function Yp(a){const b={},c=new Float32Array(8),d=[];for(let f=0;f<8;f++)d[f]=[f,0];function e(f,g,h,i){const j=f.morphTargetInfluences,l=j===void 0?0:j.length;let k=b[g.id];if(k===void 0){k=[];for(let r=0;r<l;r++)k[r]=[r,0];b[g.id]=k}for(let r=0;r<l;r++){const p=k[r];p[0]=r,p[1]=j[r]}k.sort(Xp);for(let r=0;r<8;r++)r<l&&k[r][1]?(d[r][0]=k[r][0],d[r][1]=k[r][1]):(d[r][0]=Number.MAX_SAFE_INTEGER,d[r][1]=0);d.sort(Wp);const n=h.morphTargets&&g.morphAttributes.position,m=h.morphNormals&&g.morphAttributes.normal;let o=0;for(let r=0;r<8;r++){const p=d[r],q=p[0],u=p[1];q!==Number.MAX_SAFE_INTEGER&&u?(n&&g.getAttribute("morphTarget"+r)!==n[q]&&g.setAttribute("morphTarget"+r,n[q]),m&&g.getAttribute("morphNormal"+r)!==m[q]&&g.setAttribute("morphNormal"+r,m[q]),c[r]=u,o+=u):(n&&g.getAttribute("morphTarget"+r)!==void 0&&g.deleteAttribute("morphTarget"+r),m&&g.getAttribute("morphNormal"+r)!==void 0&&g.deleteAttribute("morphNormal"+r),c[r]=0)}const s=g.morphTargetsRelative?1:1-o;i.getUniforms().setValue(a,"morphTargetBaseInfluence",s),i.getUniforms().setValue(a,"morphTargetInfluences",c)}return{update:e}}function Zp(a,b,c,d){let e=new WeakMap();function f(h){const i=d.render.frame,j=h.geometry,l=b.get(h,j);return e.get(l)!==i&&(j.isGeometry&&l.updateFromObject(h),b.update(l),e.set(l,i)),h.isInstancedMesh&&c.update(h.instanceMatrix,34962),l}function g(){e=new WeakMap()}return{update:f,dispose:g}}function Dc(a,b,c,d,e,f,g,h,i,j){a=a!==void 0?a:[],b=b!==void 0?b:Xg,g=g!==void 0?g:Pc,La.call(this,a,b,c,d,e,f,g,h,i,j),this.flipY=!1}Dc.prototype=Object.create(La.prototype);Dc.prototype.constructor=Dc;Dc.prototype.isCubeTexture=!0;Object.defineProperty(Dc.prototype,"images",{get:function(){return this.image},set:function(a){this.image=a}});function ye(a,b,c,d){La.call(this,null),this.image={data:a||null,width:b||1,height:c||1,depth:d||1},this.magFilter=gb,this.minFilter=gb,this.wrapR=tb,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ye.prototype=Object.create(La.prototype);ye.prototype.constructor=ye;ye.prototype.isDataTexture2DArray=!0;function ze(a,b,c,d){La.call(this,null),this.image={data:a||null,width:b||1,height:c||1,depth:d||1},this.magFilter=gb,this.minFilter=gb,this.wrapR=tb,this.generateMipmaps=!1,this.flipY=!1,this.needsUpdate=!0}ze.prototype=Object.create(La.prototype);ze.prototype.constructor=ze;ze.prototype.isDataTexture3D=!0;const yj=new La(),_p=new ye(),$p=new ze(),zj=new Dc(),Aj=[],Bj=[],Cj=new Float32Array(16),Dj=new Float32Array(9),Ej=new Float32Array(4);function Id(a,b,c){const d=a[0];if(d<=0||d>0)return a;let e=b*c,f=Aj[e];f===void 0&&(f=new Float32Array(e),Aj[e]=f);if(b!==0){d.toArray(f,0);for(let g=1,h=0;g!==b;++g)h+=c,a[g].toArray(f,h)}return f}function Jb(a,b){if(a.length!==b.length)return!1;for(let c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function Cb(a,b){for(let c=0,d=b.length;c<d;c++)a[c]=b[c]}function Fj(a,b){let c=Bj[b];c===void 0&&(c=new Int32Array(b),Bj[b]=c);for(let d=0;d!==b;++d)c[d]=a.allocateTextureUnit();return c}function aq(a,b){const c=this.cache;if(c[0]===b)return;a.uniform1f(this.addr,b),c[0]=b}function bq(a,b){const c=this.cache;if(b.x!==void 0)(c[0]!==b.x||c[1]!==b.y)&&(a.uniform2f(this.addr,b.x,b.y),c[0]=b.x,c[1]=b.y);else{if(Jb(c,b))return;a.uniform2fv(this.addr,b),Cb(c,b)}}function cq(a,b){const c=this.cache;if(b.x!==void 0)(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z)&&(a.uniform3f(this.addr,b.x,b.y,b.z),c[0]=b.x,c[1]=b.y,c[2]=b.z);else if(b.r!==void 0)(c[0]!==b.r||c[1]!==b.g||c[2]!==b.b)&&(a.uniform3f(this.addr,b.r,b.g,b.b),c[0]=b.r,c[1]=b.g,c[2]=b.b);else{if(Jb(c,b))return;a.uniform3fv(this.addr,b),Cb(c,b)}}function dq(a,b){const c=this.cache;if(b.x!==void 0)(c[0]!==b.x||c[1]!==b.y||c[2]!==b.z||c[3]!==b.w)&&(a.uniform4f(this.addr,b.x,b.y,b.z,b.w),c[0]=b.x,c[1]=b.y,c[2]=b.z,c[3]=b.w);else{if(Jb(c,b))return;a.uniform4fv(this.addr,b),Cb(c,b)}}function eq(a,b){const c=this.cache,d=b.elements;if(d===void 0){if(Jb(c,b))return;a.uniformMatrix2fv(this.addr,!1,b),Cb(c,b)}else{if(Jb(c,d))return;Ej.set(d),a.uniformMatrix2fv(this.addr,!1,Ej),Cb(c,d)}}function fq(a,b){const c=this.cache,d=b.elements;if(d===void 0){if(Jb(c,b))return;a.uniformMatrix3fv(this.addr,!1,b),Cb(c,b)}else{if(Jb(c,d))return;Dj.set(d),a.uniformMatrix3fv(this.addr,!1,Dj),Cb(c,d)}}function gq(a,b){const c=this.cache,d=b.elements;if(d===void 0){if(Jb(c,b))return;a.uniformMatrix4fv(this.addr,!1,b),Cb(c,b)}else{if(Jb(c,d))return;Cj.set(d),a.uniformMatrix4fv(this.addr,!1,Cj),Cb(c,d)}}function hq(a,b,c){const d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e),c.safeSetTexture2D(b||yj,e)}function iq(a,b,c){const d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e),c.setTexture2DArray(b||_p,e)}function jq(a,b,c){const d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e),c.setTexture3D(b||$p,e)}function kq(a,b,c){const d=this.cache,e=c.allocateTextureUnit();d[0]!==e&&(a.uniform1i(this.addr,e),d[0]=e),c.safeSetTextureCube(b||zj,e)}function lq(a,b){const c=this.cache;if(c[0]===b)return;a.uniform1i(this.addr,b),c[0]=b}function mq(a,b){const c=this.cache;if(Jb(c,b))return;a.uniform2iv(this.addr,b),Cb(c,b)}function nq(a,b){const c=this.cache;if(Jb(c,b))return;a.uniform3iv(this.addr,b),Cb(c,b)}function oq(a,b){const c=this.cache;if(Jb(c,b))return;a.uniform4iv(this.addr,b),Cb(c,b)}function pq(a,b){const c=this.cache;if(c[0]===b)return;a.uniform1ui(this.addr,b),c[0]=b}function qq(a){switch(a){case 5126:return aq;case 35664:return bq;case 35665:return cq;case 35666:return dq;case 35674:return eq;case 35675:return fq;case 35676:return gq;case 5124:case 35670:return lq;case 35667:case 35671:return mq;case 35668:case 35672:return nq;case 35669:case 35673:return oq;case 5125:return pq;case 35678:case 36198:case 36298:case 36306:case 35682:return hq;case 35679:case 36299:case 36307:return jq;case 35680:case 36300:case 36308:case 36293:return kq;case 36289:case 36303:case 36311:case 36292:return iq}}function rq(a,b){a.uniform1fv(this.addr,b)}function sq(a,b){a.uniform1iv(this.addr,b)}function tq(a,b){a.uniform2iv(this.addr,b)}function uq(a,b){a.uniform3iv(this.addr,b)}function vq(a,b){a.uniform4iv(this.addr,b)}function wq(a,b){const c=Id(b,this.size,2);a.uniform2fv(this.addr,c)}function xq(a,b){const c=Id(b,this.size,3);a.uniform3fv(this.addr,c)}function yq(a,b){const c=Id(b,this.size,4);a.uniform4fv(this.addr,c)}function zq(a,b){const c=Id(b,this.size,4);a.uniformMatrix2fv(this.addr,!1,c)}function Aq(a,b){const c=Id(b,this.size,9);a.uniformMatrix3fv(this.addr,!1,c)}function Bq(a,b){const c=Id(b,this.size,16);a.uniformMatrix4fv(this.addr,!1,c)}function Cq(a,b,c){const d=b.length,e=Fj(c,d);a.uniform1iv(this.addr,e);for(let f=0;f!==d;++f)c.safeSetTexture2D(b[f]||yj,e[f])}function Dq(a,b,c){const d=b.length,e=Fj(c,d);a.uniform1iv(this.addr,e);for(let f=0;f!==d;++f)c.safeSetTextureCube(b[f]||zj,e[f])}function Eq(a){switch(a){case 5126:return rq;case 35664:return wq;case 35665:return xq;case 35666:return yq;case 35674:return zq;case 35675:return Aq;case 35676:return Bq;case 5124:case 35670:return sq;case 35667:case 35671:return tq;case 35668:case 35672:return uq;case 35669:case 35673:return vq;case 35678:case 36198:case 36298:case 36306:case 35682:return Cq;case 35680:case 36300:case 36308:case 36293:return Dq}}function Fq(a,b,c){this.id=a,this.addr=c,this.cache=[],this.setValue=qq(b.type)}function Gj(a,b,c){this.id=a,this.addr=c,this.cache=[],this.size=b.size,this.setValue=Eq(b.type)}Gj.prototype.updateCache=function(a){let b=this.cache;a instanceof Float32Array&&b.length!==a.length&&(this.cache=new Float32Array(a.length)),Cb(b,a)};function Hj(a){this.id=a,this.seq=[],this.map={}}Hj.prototype.setValue=function(a,b,c){const d=this.seq;for(let e=0,f=d.length;e!==f;++e){const g=d[e];g.setValue(a,b[g.id],c)}};const Gh=/([\w\d_]+)(\])?(\[|\.)?/g;function Ij(a,b){a.seq.push(b),a.map[b.id]=b}function Gq(a,b,c){const d=a.name,e=d.length;for(Gh.lastIndex=0;;){const f=Gh.exec(d),g=Gh.lastIndex;let h=f[1],i=f[2]==="]",j=f[3];i&&(h=h|0);if(j===void 0||j==="["&&g+2===e){Ij(c,j===void 0?new Fq(h,a,b):new Gj(h,a,b));break}else{const l=c.map;let k=l[h];k===void 0&&(k=new Hj(h),Ij(c,k)),c=k}}}function Ec(a,b){this.seq=[],this.map={};const c=a.getProgramParameter(b,35718);for(let d=0;d<c;++d){const e=a.getActiveUniform(b,d),f=a.getUniformLocation(b,e.name);Gq(e,f,this)}}Ec.prototype.setValue=function(a,b,c,d){const e=this.map[b];e!==void 0&&e.setValue(a,c,d)};Ec.prototype.setOptional=function(a,b,c){const d=b[c];d!==void 0&&this.setValue(a,c,d)};Ec.upload=function(a,b,c,d){for(let e=0,f=b.length;e!==f;++e){const g=b[e],h=c[g.id];h.needsUpdate!==!1&&g.setValue(a,h.value,d)}};Ec.seqWithValue=function(a,b){const c=[];for(let d=0,e=a.length;d!==e;++d){const f=a[d];f.id in b&&c.push(f)}return c};function Jj(a,b,c){const d=a.createShader(b);return a.shaderSource(d,c),a.compileShader(d),d}let Hq=0;function Iq(a){const b=a.split(`
`);for(let c=0;c<b.length;c++)b[c]=c+1+": "+b[c];return b.join(`
`)}function Kj(a){switch(a){case ub:return["Linear","( value )"];case yf:return["sRGB","( value )"];case dh:return["RGBE","( value )"];case gj:return["RGBM","( value, 7.0 )"];case hj:return["RGBM","( value, 16.0 )"];case ij:return["RGBD","( value, 256.0 )"];case me:return["Gamma","( value, float( GAMMA_FACTOR ) )"];case Wm:return["LogLuv","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",a),["Linear","( value )"]}}function Lj(a,b,c){const d=a.getShaderParameter(b,35713),e=a.getShaderInfoLog(b).trim();if(d&&e==="")return"";const f=a.getShaderSource(b);return"THREE.WebGLShader: gl.getShaderInfoLog() "+c+`
`+e+Iq(f)}function Ae(a,b){const c=Kj(b);return"vec4 "+a+"( vec4 value ) { return "+c[0]+"ToLinear"+c[1]+"; }"}function Jq(a,b){const c=Kj(b);return"vec4 "+a+"( vec4 value ) { return LinearTo"+c[0]+c[1]+"; }"}function Kq(a,b){let c;switch(b){case Vl:c="Linear";break;case Wl:c="Reinhard";break;case Xl:c="OptimizedCineon";break;case Yl:c="ACESFilmic";break;case Zl:c="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",b),c="Linear"}return"vec3 "+a+"( vec3 color ) { return "+c+"ToneMapping( color ); }"}function Lq(a){const b=[a.extensionDerivatives||a.envMapCubeUV||a.bumpMap||a.tangentSpaceNormalMap||a.clearcoatNormalMap||a.flatShading||a.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(a.extensionFragDepth||a.logarithmicDepthBuffer)&&a.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",a.extensionDrawBuffers&&a.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(a.extensionShaderTextureLOD||a.envMap)&&a.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""];return b.filter(Be).join(`
`)}function Mq(a){const b=[];for(const c in a){const d=a[c];if(d===!1)continue;b.push("#define "+c+" "+d)}return b.join(`
`)}function Nq(a,b){const c={},d=a.getProgramParameter(b,35721);for(let e=0;e<d;e++){const f=a.getActiveAttrib(b,e),g=f.name;c[g]=a.getAttribLocation(b,g)}return c}function Be(a){return a!==""}function Mj(a,b){return a.replace(/NUM_DIR_LIGHTS/g,b.numDirLights).replace(/NUM_SPOT_LIGHTS/g,b.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g,b.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,b.numPointLights).replace(/NUM_HEMI_LIGHTS/g,b.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,b.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS/g,b.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,b.numPointLightShadows)}function Nj(a,b){return a.replace(/NUM_CLIPPING_PLANES/g,b.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,b.numClippingPlanes-b.numClipIntersection)}const Oq=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hh(a){return a.replace(Oq,Pq)}function Pq(a,b){const c=Ea[b];if(c===void 0)throw new Error("Can not resolve #include <"+b+">");return Hh(c)}const Qq=/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,Rq=/#pragma unroll_loop_start[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}[\s]+?#pragma unroll_loop_end/g;function Oj(a){return a.replace(Rq,Pj).replace(Qq,Sq)}function Sq(a,b,c,d){return console.warn("WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."),Pj(a,b,c,d)}function Pj(a,b,c,d){let e="";for(let f=parseInt(b);f<parseInt(c);f++)e+=d.replace(/\[ i \]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return e}function Qj(a){let b="precision "+a.precision+` float;
precision `+a.precision+" int;";return a.precision==="highp"?b+=`
#define HIGH_PRECISION`:a.precision==="mediump"?b+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(b+=`
#define LOW_PRECISION`),b}function Tq(a){let b="SHADOWMAP_TYPE_BASIC";return a.shadowMapType===Mi?b="SHADOWMAP_TYPE_PCF":a.shadowMapType===zl?b="SHADOWMAP_TYPE_PCF_SOFT":a.shadowMapType===ge&&(b="SHADOWMAP_TYPE_VSM"),b}function Uq(a){let b="ENVMAP_TYPE_CUBE";if(a.envMap)switch(a.envMapMode){case Xg:case Yg:b="ENVMAP_TYPE_CUBE";break;case ie:case _g:b="ENVMAP_TYPE_CUBE_UV";break;case Vi:case Zg:b="ENVMAP_TYPE_EQUIREC";break}return b}function Vq(a){let b="ENVMAP_MODE_REFLECTION";if(a.envMap)switch(a.envMapMode){case Yg:case Zg:b="ENVMAP_MODE_REFRACTION";break}return b}function Wq(a){let b="ENVMAP_BLENDING_NONE";if(a.envMap)switch(a.combine){case of:b="ENVMAP_BLENDING_MULTIPLY";break;case Tl:b="ENVMAP_BLENDING_MIX";break;case Ul:b="ENVMAP_BLENDING_ADD";break}return b}function Xq(a,b,c,d){const e=a.getContext(),f=c.defines;let g=c.vertexShader,h=c.fragmentShader;const i=Tq(c),j=Uq(c),l=Vq(c),k=Wq(c),n=a.gammaFactor>0?a.gammaFactor:1,m=c.isWebGL2?"":Lq(c),o=Mq(f),s=e.createProgram();let r,p;c.isRawShaderMaterial?(r=[o].filter(Be).join(`
`),r.length>0&&(r+=`
`),p=[m,o].filter(Be).join(`
`),p.length>0&&(p+=`
`)):(r=[Qj(c),"#define SHADER_NAME "+c.shaderName,o,c.instancing?"#define USE_INSTANCING":"",c.supportsVertexTextures?"#define VERTEX_TEXTURES":"","#define GAMMA_FACTOR "+n,"#define MAX_BONES "+c.maxBones,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+l:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatMap?"#define USE_CLEARCOATMAP":"",c.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.displacementMap&&c.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.flatShading?"#define FLAT_SHADED":"",c.skinning?"#define USE_SKINNING":"",c.useVertexTexture?"#define BONE_TEXTURE":"",c.morphTargets?"#define USE_MORPHTARGETS":"",c.morphNormals&&c.flatShading===!1?"#define USE_MORPHNORMALS":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+i:"",c.sizeAttenuation?"#define USE_SIZEATTENUATION":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING"," attribute mat4 instanceMatrix;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#ifdef USE_COLOR","	attribute vec3 color;","#endif","#ifdef USE_MORPHTARGETS","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Be).join(`
`),p=[m,Qj(c),"#define SHADER_NAME "+c.shaderName,o,c.alphaTest?"#define ALPHATEST "+c.alphaTest+(c.alphaTest%1?"":".0"):"","#define GAMMA_FACTOR "+n,c.useFog&&c.fog?"#define USE_FOG":"",c.useFog&&c.fogExp2?"#define FOG_EXP2":"",c.map?"#define USE_MAP":"",c.matcap?"#define USE_MATCAP":"",c.envMap?"#define USE_ENVMAP":"",c.envMap?"#define "+j:"",c.envMap?"#define "+l:"",c.envMap?"#define "+k:"",c.lightMap?"#define USE_LIGHTMAP":"",c.aoMap?"#define USE_AOMAP":"",c.emissiveMap?"#define USE_EMISSIVEMAP":"",c.bumpMap?"#define USE_BUMPMAP":"",c.normalMap?"#define USE_NORMALMAP":"",c.normalMap&&c.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",c.normalMap&&c.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",c.clearcoatMap?"#define USE_CLEARCOATMAP":"",c.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",c.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",c.specularMap?"#define USE_SPECULARMAP":"",c.roughnessMap?"#define USE_ROUGHNESSMAP":"",c.metalnessMap?"#define USE_METALNESSMAP":"",c.alphaMap?"#define USE_ALPHAMAP":"",c.sheen?"#define USE_SHEEN":"",c.vertexTangents?"#define USE_TANGENT":"",c.vertexColors?"#define USE_COLOR":"",c.vertexUvs?"#define USE_UV":"",c.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",c.gradientMap?"#define USE_GRADIENTMAP":"",c.flatShading?"#define FLAT_SHADED":"",c.doubleSided?"#define DOUBLE_SIDED":"",c.flipSided?"#define FLIP_SIDED":"",c.shadowMapEnabled?"#define USE_SHADOWMAP":"",c.shadowMapEnabled?"#define "+i:"",c.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",c.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",c.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",c.logarithmicDepthBuffer&&c.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"",(c.extensionShaderTextureLOD||c.envMap)&&c.rendererExtensionShaderTextureLod?"#define TEXTURE_LOD_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",c.toneMapping!==id?"#define TONE_MAPPING":"",c.toneMapping!==id?Ea.tonemapping_pars_fragment:"",c.toneMapping!==id?Kq("toneMapping",c.toneMapping):"",c.dithering?"#define DITHERING":"",Ea.encodings_pars_fragment,c.map?Ae("mapTexelToLinear",c.mapEncoding):"",c.matcap?Ae("matcapTexelToLinear",c.matcapEncoding):"",c.envMap?Ae("envMapTexelToLinear",c.envMapEncoding):"",c.emissiveMap?Ae("emissiveMapTexelToLinear",c.emissiveMapEncoding):"",c.lightMap?Ae("lightMapTexelToLinear",c.lightMapEncoding):"",Jq("linearToOutputTexel",c.outputEncoding),c.depthPacking?"#define DEPTH_PACKING "+c.depthPacking:"",`
`].filter(Be).join(`
`)),g=Hh(g),g=Mj(g,c),g=Nj(g,c),h=Hh(h),h=Mj(h,c),h=Nj(h,c),g=Oj(g),h=Oj(h);if(c.isWebGL2&&!c.isRawShaderMaterial){let L=!1;const C=/^\s*#version\s+300\s+es\s*\n/;c.isShaderMaterial&&g.match(C)!==null&&h.match(C)!==null&&(L=!0,g=g.replace(C,""),h=h.replace(C,"")),r=[`#version 300 es
`,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r,p=[`#version 300 es
`,"#define varying in",L?"":"out highp vec4 pc_fragColor;",L?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p}const q=r+g,u=p+h,t=Jj(e,35633,q),w=Jj(e,35632,u);e.attachShader(s,t),e.attachShader(s,w),c.index0AttributeName!==void 0?e.bindAttribLocation(s,0,c.index0AttributeName):c.morphTargets===!0&&e.bindAttribLocation(s,0,"position"),e.linkProgram(s);if(a.debug.checkShaderErrors){const L=e.getProgramInfoLog(s).trim(),C=e.getShaderInfoLog(t).trim(),U=e.getShaderInfoLog(w).trim();let I=!0,J=!0;if(e.getProgramParameter(s,35714)===!1){I=!1;const H=Lj(e,t,"vertex"),D=Lj(e,w,"fragment");console.error("THREE.WebGLProgram: shader error: ",e.getError(),"35715",e.getProgramParameter(s,35715),"gl.getProgramInfoLog",L,H,D)}else L!==""?console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()",L):(C===""||U==="")&&(J=!1);J&&(this.diagnostics={runnable:I,programLog:L,vertexShader:{log:C,prefix:r},fragmentShader:{log:U,prefix:p}})}e.deleteShader(t),e.deleteShader(w);let A;this.getUniforms=function(){return A===void 0&&(A=new Ec(e,s)),A};let B;return this.getAttributes=function(){return B===void 0&&(B=Nq(e,s)),B},this.destroy=function(){d.releaseStatesOfProgram(this),e.deleteProgram(s),this.program=void 0},this.name=c.shaderName,this.id=Hq++,this.cacheKey=b,this.usedTimes=1,this.program=s,this.vertexShader=t,this.fragmentShader=w,this}function Yq(a,b,c,d){const e=[],f=c.isWebGL2,g=c.logarithmicDepthBuffer,h=c.floatVertexTextures,i=c.maxVertexUniforms,j=c.vertexTextures;let l=c.precision;const k={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"},n=["precision","isWebGL2","supportsVertexTextures","outputEncoding","instancing","map","mapEncoding","matcap","matcapEncoding","envMap","envMapMode","envMapEncoding","envMapCubeUV","lightMap","lightMapEncoding","aoMap","emissiveMap","emissiveMapEncoding","bumpMap","normalMap","objectSpaceNormalMap","tangentSpaceNormalMap","clearcoatMap","clearcoatRoughnessMap","clearcoatNormalMap","displacementMap","specularMap","roughnessMap","metalnessMap","gradientMap","alphaMap","combine","vertexColors","vertexTangents","vertexUvs","uvsVertexOnly","fog","useFog","fogExp2","flatShading","sizeAttenuation","logarithmicDepthBuffer","skinning","maxBones","useVertexTexture","morphTargets","morphNormals","maxMorphTargets","maxMorphNormals","premultipliedAlpha","numDirLights","numPointLights","numSpotLights","numHemiLights","numRectAreaLights","numDirLightShadows","numPointLightShadows","numSpotLightShadows","shadowMapEnabled","shadowMapType","toneMapping","physicallyCorrectLights","alphaTest","doubleSided","flipSided","numClippingPlanes","numClipIntersection","depthPacking","dithering","sheen"];function m(t,w){let A;if(w){const B=mc[w];A={name:t.name||t.type,uniforms:pn.clone(B.uniforms),vertexShader:B.vertexShader,fragmentShader:B.fragmentShader}}else A={name:t.name||t.type,uniforms:t.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader};return A}function o(t){const w=t.skeleton,A=w.bones;if(h)return 1024;{const B=i,L=Math.floor((B-20)/4),C=Math.min(L,A.length);return C<A.length?(console.warn("THREE.WebGLRenderer: Skeleton has "+A.length+" bones. This GPU supports "+C+"."),0):C}}function s(t){let w;return t?t.isTexture?w=t.encoding:t.isWebGLRenderTarget&&(console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead."),w=t.texture.encoding):w=ub,w}function r(t,w,A,B,L,C,U){const I=B.fog,J=t.isMeshStandardMaterial?B.environment:null,H=t.envMap||J,D=k[t.type],F=U.isSkinnedMesh?o(U):0;t.precision!==null&&(l=c.getMaxPrecision(t.precision),l!==t.precision&&console.warn("THREE.WebGLProgram.getParameters:",t.precision,"not supported, using",l,"instead."));const M=m(t,D);t.onBeforeCompile(M,a);const S=a.getRenderTarget(),T={isWebGL2:f,shaderID:D,shaderName:M.name,uniforms:M.uniforms,vertexShader:M.vertexShader,fragmentShader:M.fragmentShader,defines:t.defines,isRawShaderMaterial:t.isRawShaderMaterial,isShaderMaterial:t.isShaderMaterial,precision:l,instancing:U.isInstancedMesh===!0,supportsVertexTextures:j,outputEncoding:S!==null?s(S.texture):a.outputEncoding,map:!!t.map,mapEncoding:s(t.map),matcap:!!t.matcap,matcapEncoding:s(t.matcap),envMap:!!H,envMapMode:H&&H.mapping,envMapEncoding:s(H),envMapCubeUV:!!H&&(H.mapping===ie||H.mapping===_g),lightMap:!!t.lightMap,lightMapEncoding:s(t.lightMap),aoMap:!!t.aoMap,emissiveMap:!!t.emissiveMap,emissiveMapEncoding:s(t.emissiveMap),bumpMap:!!t.bumpMap,normalMap:!!t.normalMap,objectSpaceNormalMap:t.normalMapType===Zm,tangentSpaceNormalMap:t.normalMapType===md,clearcoatMap:!!t.clearcoatMap,clearcoatRoughnessMap:!!t.clearcoatRoughnessMap,clearcoatNormalMap:!!t.clearcoatNormalMap,displacementMap:!!t.displacementMap,roughnessMap:!!t.roughnessMap,metalnessMap:!!t.metalnessMap,specularMap:!!t.specularMap,alphaMap:!!t.alphaMap,gradientMap:!!t.gradientMap,sheen:!!t.sheen,combine:t.combine,vertexTangents:t.normalMap&&t.vertexTangents,vertexColors:t.vertexColors,vertexUvs:!!t.map||!!t.bumpMap||!!t.normalMap||!!t.specularMap||!!t.alphaMap||!!t.emissiveMap||!!t.roughnessMap||!!t.metalnessMap||!!t.clearcoatMap||!!t.clearcoatRoughnessMap||!!t.clearcoatNormalMap||!!t.displacementMap,uvsVertexOnly:!(!!t.map||!!t.bumpMap||!!t.normalMap||!!t.specularMap||!!t.alphaMap||!!t.emissiveMap||!!t.roughnessMap||!!t.metalnessMap||!!t.clearcoatNormalMap)&&!!t.displacementMap,fog:!!I,useFog:t.fog,fogExp2:I&&I.isFogExp2,flatShading:t.flatShading,sizeAttenuation:t.sizeAttenuation,logarithmicDepthBuffer:g,skinning:t.skinning&&F>0,maxBones:F,useVertexTexture:h,morphTargets:t.morphTargets,morphNormals:t.morphNormals,maxMorphTargets:a.maxMorphTargets,maxMorphNormals:a.maxMorphNormals,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numClippingPlanes:L,numClipIntersection:C,dithering:t.dithering,shadowMapEnabled:a.shadowMap.enabled&&A.length>0,shadowMapType:a.shadowMap.type,toneMapping:t.toneMapped?a.toneMapping:id,physicallyCorrectLights:a.physicallyCorrectLights,premultipliedAlpha:t.premultipliedAlpha,alphaTest:t.alphaTest,doubleSided:t.side===nf,flipSided:t.side===fb,depthPacking:t.depthPacking!==void 0?t.depthPacking:!1,index0AttributeName:t.index0AttributeName,extensionDerivatives:t.extensions&&t.extensions.derivatives,extensionFragDepth:t.extensions&&t.extensions.fragDepth,extensionDrawBuffers:t.extensions&&t.extensions.drawBuffers,extensionShaderTextureLOD:t.extensions&&t.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||b.get("EXT_frag_depth")!==null,rendererExtensionDrawBuffers:f||b.get("WEBGL_draw_buffers")!==null,rendererExtensionShaderTextureLod:f||b.get("EXT_shader_texture_lod")!==null,customProgramCacheKey:t.customProgramCacheKey()};return T}function p(t){const w=[];t.shaderID?w.push(t.shaderID):(w.push(t.fragmentShader),w.push(t.vertexShader));if(t.defines!==void 0)for(const A in t.defines)w.push(A),w.push(t.defines[A]);if(t.isRawShaderMaterial===void 0){for(let A=0;A<n.length;A++)w.push(t[n[A]]);w.push(a.outputEncoding),w.push(a.gammaFactor)}return w.push(t.customProgramCacheKey),w.join()}function q(t,w){let A;for(let B=0,L=e.length;B<L;B++){const C=e[B];if(C.cacheKey===w){A=C,++A.usedTimes;break}}return A===void 0&&(A=new Xq(a,w,t,d),e.push(A)),A}function u(t){if(--t.usedTimes===0){const w=e.indexOf(t);e[w]=e[e.length-1],e.pop(),t.destroy()}}return{getParameters:r,getProgramCacheKey:p,acquireProgram:q,releaseProgram:u,programs:e}}function Zq(){let a=new WeakMap();function b(f){let g=a.get(f);return g===void 0&&(g={},a.set(f,g)),g}function c(f){a.delete(f)}function d(f,g,h){a.get(f)[g]=h}function e(){a=new WeakMap()}return{get:b,remove:c,update:d,dispose:e}}function _q(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.program!==b.program?a.program.id-b.program.id:a.material.id!==b.material.id?a.material.id-b.material.id:a.z!==b.z?a.z-b.z:a.id-b.id}function $q(a,b){return a.groupOrder!==b.groupOrder?a.groupOrder-b.groupOrder:a.renderOrder!==b.renderOrder?a.renderOrder-b.renderOrder:a.z!==b.z?b.z-a.z:a.id-b.id}function Rj(){const a=[];let b=0;const c=[],d=[],e={id:-1};function f(){b=0,c.length=0,d.length=0}function g(k,n,m,o,s,r){let p=a[b];return p===void 0?(p={id:k.id,object:k,geometry:n,material:m,program:m.program||e,groupOrder:o,renderOrder:k.renderOrder,z:s,group:r},a[b]=p):(p.id=k.id,p.object=k,p.geometry=n,p.material=m,p.program=m.program||e,p.groupOrder=o,p.renderOrder=k.renderOrder,p.z=s,p.group=r),b++,p}function h(k,n,m,o,s,r){const p=g(k,n,m,o,s,r);(m.transparent===!0?d:c).push(p)}function i(k,n,m,o,s,r){const p=g(k,n,m,o,s,r);(m.transparent===!0?d:c).unshift(p)}function j(k,n){c.length>1&&c.sort(k||_q),d.length>1&&d.sort(n||$q)}function l(){for(let k=b,n=a.length;k<n;k++){const m=a[k];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.program=null,m.group=null}}return{opaque:c,transparent:d,init:f,push:h,unshift:i,finish:l,sort:j}}function ar(){let a=new WeakMap();function b(e){const f=e.target;f.removeEventListener("dispose",b),a.delete(f)}function c(e,f){const g=a.get(e);let h;return g===void 0?(h=new Rj(),a.set(e,new WeakMap()),a.get(e).set(f,h),e.addEventListener("dispose",b)):(h=g.get(f),h===void 0&&(h=new Rj(),g.set(f,h))),h}function d(){a=new WeakMap()}return{get:c,dispose:d}}function br(){const a={};return{get:function(b){if(a[b.id]!==void 0)return a[b.id];let c;switch(b.type){case"DirectionalLight":c={direction:new v(),color:new da()};break;case"SpotLight":c={position:new v(),direction:new v(),color:new da(),distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":c={position:new v(),color:new da(),distance:0,decay:0};break;case"HemisphereLight":c={direction:new v(),skyColor:new da(),groundColor:new da()};break;case"RectAreaLight":c={color:new da(),position:new v(),halfWidth:new v(),halfHeight:new v()};break}return a[b.id]=c,c}}}function cr(){const a={};return{get:function(b){if(a[b.id]!==void 0)return a[b.id];let c;switch(b.type){case"DirectionalLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N()};break;case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N()};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new N(),shadowCameraNear:1,shadowCameraFar:1e3};break}return a[b.id]=c,c}}}let dr=0;function er(a,b){return(b.castShadow?1:0)-(a.castShadow?1:0)}function fr(){const a=new br(),b=cr(),c={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotShadow:[],spotShadowMap:[],spotShadowMatrix:[],rectArea:[],point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[]};for(let h=0;h<9;h++)c.probe.push(new v());const d=new v(),e=new za(),f=new za();function g(h,i,j){let l=0,k=0,n=0;for(let B=0;B<9;B++)c.probe[B].set(0,0,0);let m=0,o=0,s=0,r=0,p=0,q=0,u=0,t=0;const w=j.matrixWorldInverse;h.sort(er);for(let B=0,L=h.length;B<L;B++){const C=h[B],U=C.color,I=C.intensity,J=C.distance,H=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)l+=U.r*I,k+=U.g*I,n+=U.b*I;else if(C.isLightProbe)for(let D=0;D<9;D++)c.probe[D].addScaledVector(C.sh.coefficients[D],I);else if(C.isDirectionalLight){const D=a.get(C);D.color.copy(C.color).multiplyScalar(C.intensity),D.direction.setFromMatrixPosition(C.matrixWorld),d.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(d),D.direction.transformDirection(w);if(C.castShadow){const F=C.shadow,M=b.get(C);M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,c.directionalShadow[m]=M,c.directionalShadowMap[m]=H,c.directionalShadowMatrix[m]=C.shadow.matrix,q++}c.directional[m]=D,m++}else if(C.isSpotLight){const D=a.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(w),D.color.copy(U).multiplyScalar(I),D.distance=J,D.direction.setFromMatrixPosition(C.matrixWorld),d.setFromMatrixPosition(C.target.matrixWorld),D.direction.sub(d),D.direction.transformDirection(w),D.coneCos=Math.cos(C.angle),D.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),D.decay=C.decay;if(C.castShadow){const F=C.shadow,M=b.get(C);M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,c.spotShadow[s]=M,c.spotShadowMap[s]=H,c.spotShadowMatrix[s]=C.shadow.matrix,t++}c.spot[s]=D,s++}else if(C.isRectAreaLight){const D=a.get(C);D.color.copy(U).multiplyScalar(I),D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(w),f.identity(),e.copy(C.matrixWorld),e.premultiply(w),f.extractRotation(e),D.halfWidth.set(C.width*.5,0,0),D.halfHeight.set(0,C.height*.5,0),D.halfWidth.applyMatrix4(f),D.halfHeight.applyMatrix4(f),c.rectArea[r]=D,r++}else if(C.isPointLight){const D=a.get(C);D.position.setFromMatrixPosition(C.matrixWorld),D.position.applyMatrix4(w),D.color.copy(C.color).multiplyScalar(C.intensity),D.distance=C.distance,D.decay=C.decay;if(C.castShadow){const F=C.shadow,M=b.get(C);M.shadowBias=F.bias,M.shadowNormalBias=F.normalBias,M.shadowRadius=F.radius,M.shadowMapSize=F.mapSize,M.shadowCameraNear=F.camera.near,M.shadowCameraFar=F.camera.far,c.pointShadow[o]=M,c.pointShadowMap[o]=H,c.pointShadowMatrix[o]=C.shadow.matrix,u++}c.point[o]=D,o++}else if(C.isHemisphereLight){const D=a.get(C);D.direction.setFromMatrixPosition(C.matrixWorld),D.direction.transformDirection(w),D.direction.normalize(),D.skyColor.copy(C.color).multiplyScalar(I),D.groundColor.copy(C.groundColor).multiplyScalar(I),c.hemi[p]=D,p++}}c.ambient[0]=l,c.ambient[1]=k,c.ambient[2]=n;const A=c.hash;(A.directionalLength!==m||A.pointLength!==o||A.spotLength!==s||A.rectAreaLength!==r||A.hemiLength!==p||A.numDirectionalShadows!==q||A.numPointShadows!==u||A.numSpotShadows!==t)&&(c.directional.length=m,c.spot.length=s,c.rectArea.length=r,c.point.length=o,c.hemi.length=p,c.directionalShadow.length=q,c.directionalShadowMap.length=q,c.pointShadow.length=u,c.pointShadowMap.length=u,c.spotShadow.length=t,c.spotShadowMap.length=t,c.directionalShadowMatrix.length=q,c.pointShadowMatrix.length=u,c.spotShadowMatrix.length=t,A.directionalLength=m,A.pointLength=o,A.spotLength=s,A.rectAreaLength=r,A.hemiLength=p,A.numDirectionalShadows=q,A.numPointShadows=u,A.numSpotShadows=t,c.version=dr++)}return{setup:g,state:c}}function Sj(){const a=new fr(),b=[],c=[];function d(){b.length=0,c.length=0}function e(i){b.push(i)}function f(i){c.push(i)}function g(i){a.setup(b,c,i)}const h={lightsArray:b,shadowsArray:c,lights:a};return{init:d,state:h,setupLights:g,pushLight:e,pushShadow:f}}function gr(){let a=new WeakMap();function b(e){const f=e.target;f.removeEventListener("dispose",b),a.delete(f)}function c(e,f){let g;return a.has(e)===!1?(g=new Sj(),a.set(e,new WeakMap()),a.get(e).set(f,g),e.addEventListener("dispose",b)):a.get(e).has(f)===!1?(g=new Sj(),a.get(e).set(f,g)):g=a.get(e).get(f),g}function d(){a=new WeakMap()}return{get:c,dispose:d}}function Uc(a){pa.call(this),this.type="MeshDepthMaterial",this.depthPacking=Xm,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.setValues(a)}Uc.prototype=Object.create(pa.prototype);Uc.prototype.constructor=Uc;Uc.prototype.isMeshDepthMaterial=!0;Uc.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.depthPacking=a.depthPacking,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this};function Vc(a){pa.call(this),this.type="MeshDistanceMaterial",this.referencePosition=new v(),this.nearDistance=1,this.farDistance=1e3,this.skinning=!1,this.morphTargets=!1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.fog=!1,this.setValues(a)}Vc.prototype=Object.create(pa.prototype);Vc.prototype.constructor=Vc;Vc.prototype.isMeshDistanceMaterial=!0;Vc.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.referencePosition.copy(a.referencePosition),this.nearDistance=a.nearDistance,this.farDistance=a.farDistance,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this};var hr=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
  float mean = 0.0;
  float squared_mean = 0.0;
	float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy  ) / resolution ) );
  for ( float i = -1.0; i < 1.0 ; i += SAMPLE_RATE) {
    #ifdef HORIZONAL_PASS
      vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( i, 0.0 ) * radius ) / resolution ) );
      mean += distribution.x;
      squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
    #else
      float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0,  i )  * radius ) / resolution ) );
      mean += depth;
      squared_mean += depth * depth;
    #endif
  }
  mean = mean * HALF_SAMPLE_RATE;
  squared_mean = squared_mean * HALF_SAMPLE_RATE;
  float std_dev = sqrt( squared_mean - mean * mean );
  gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`,ir=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;function Tj(a,b,c){let d=new xe();const e=new N(),f=new N(),g=new Ia(),h=[],i=[],j={},l={0:fb,1:Oc,2:nf},k=new vb({defines:{SAMPLE_RATE:2/8,HALF_SAMPLE_RATE:1/8},uniforms:{shadow_pass:{value:null},resolution:{value:new N()},radius:{value:4}},vertexShader:ir,fragmentShader:hr}),n=k.clone();n.defines.HORIZONAL_PASS=1;const m=new fa();m.setAttribute("position",new qa(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const o=new Ha(m,k),s=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mi,this.render=function(w,A,B){if(s.enabled===!1)return;if(s.autoUpdate===!1&&s.needsUpdate===!1)return;if(w.length===0)return;const L=a.getRenderTarget(),C=a.getActiveCubeFace(),U=a.getActiveMipmapLevel(),I=a.state;I.setBlending(tc),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let J=0,H=w.length;J<H;J++){const D=w[J],F=D.shadow;if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;if(F===void 0){console.warn("THREE.WebGLShadowMap:",D,"has no shadow.");continue}e.copy(F.mapSize);const M=F.getFrameExtents();e.multiply(M),f.copy(F.mapSize),(e.x>c||e.y>c)&&(e.x>c&&(f.x=Math.floor(c/M.x),e.x=f.x*M.x,F.mapSize.x=f.x),e.y>c&&(f.y=Math.floor(c/M.y),e.y=f.y*M.y,F.mapSize.y=f.y));if(F.map===null&&!F.isPointLightShadow&&this.type===ge){const T={minFilter:lb,magFilter:lb,format:Nb};F.map=new Hb(e.x,e.y,T),F.map.texture.name=D.name+".shadowMap",F.mapPass=new Hb(e.x,e.y,T),F.camera.updateProjectionMatrix()}if(F.map===null){const T={minFilter:gb,magFilter:gb,format:Nb};F.map=new Hb(e.x,e.y,T),F.map.texture.name=D.name+".shadowMap",F.camera.updateProjectionMatrix()}a.setRenderTarget(F.map),a.clear();const S=F.getViewportCount();for(let T=0;T<S;T++){const ea=F.getViewport(T);g.set(f.x*ea.x,f.y*ea.y,f.x*ea.z,f.y*ea.w),I.viewport(g),F.updateMatrices(D,T),d=F.getFrustum(),t(A,B,F.camera,D,this.type)}!F.isPointLightShadow&&this.type===ge&&r(F,B),F.needsUpdate=!1}s.needsUpdate=!1,a.setRenderTarget(L,C,U)};function r(w,A){const B=b.update(o);k.uniforms.shadow_pass.value=w.map.texture,k.uniforms.resolution.value=w.mapSize,k.uniforms.radius.value=w.radius,a.setRenderTarget(w.mapPass),a.clear(),a.renderBufferDirect(A,null,B,k,o,null),n.uniforms.shadow_pass.value=w.mapPass.texture,n.uniforms.resolution.value=w.mapSize,n.uniforms.radius.value=w.radius,a.setRenderTarget(w.map),a.clear(),a.renderBufferDirect(A,null,B,n,o,null)}function p(w,A,B){const L=w<<0|A<<1|B<<2;let C=h[L];return C===void 0&&(C=new Uc({depthPacking:Ym,morphTargets:w,skinning:A}),h[L]=C),C}function q(w,A,B){const L=w<<0|A<<1|B<<2;let C=i[L];return C===void 0&&(C=new Vc({morphTargets:w,skinning:A}),i[L]=C),C}function u(w,A,B,L,C,U,I){let J=null,H=p,D=w.customDepthMaterial;L.isPointLight===!0&&(H=q,D=w.customDistanceMaterial);if(D===void 0){let F=!1;B.morphTargets===!0&&(F=A.morphAttributes&&A.morphAttributes.position&&A.morphAttributes.position.length>0);let M=!1;w.isSkinnedMesh===!0&&(B.skinning===!0?M=!0:console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:",w));const S=w.isInstancedMesh===!0;J=H(F,M,S)}else J=D;if(a.localClippingEnabled&&B.clipShadows===!0&&B.clippingPlanes.length!==0){const F=J.uuid,M=B.uuid;let S=j[F];S===void 0&&(S={},j[F]=S);let T=S[M];T===void 0&&(T=J.clone(),S[M]=T),J=T}return J.visible=B.visible,J.wireframe=B.wireframe,I===ge?J.side=B.shadowSide!==null?B.shadowSide:B.side:J.side=B.shadowSide!==null?B.shadowSide:l[B.side],J.clipShadows=B.clipShadows,J.clippingPlanes=B.clippingPlanes,J.clipIntersection=B.clipIntersection,J.wireframeLinewidth=B.wireframeLinewidth,J.linewidth=B.linewidth,L.isPointLight===!0&&J.isMeshDistanceMaterial===!0&&(J.referencePosition.setFromMatrixPosition(L.matrixWorld),J.nearDistance=C,J.farDistance=U),J}function t(w,A,B,L,C){if(w.visible===!1)return;const U=w.layers.test(A.layers);if(U&&(w.isMesh||w.isLine||w.isPoints)){if((w.castShadow||w.receiveShadow&&C===ge)&&(!w.frustumCulled||d.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld);const J=b.update(w),H=w.material;if(Array.isArray(H)){const D=J.groups;for(let F=0,M=D.length;F<M;F++){const S=D[F],T=H[S.materialIndex];if(T&&T.visible){const ea=u(w,J,T,L,B.near,B.far,C);a.renderBufferDirect(B,null,J,ea,w,S)}}}else if(H.visible){const D=u(w,J,H,L,B.near,B.far,C);a.renderBufferDirect(B,null,J,D,w,null)}}}const I=w.children;for(let J=0,H=I.length;J<H;J++)t(I[J],A,B,L,C)}}function jr(a,b,c){const d=c.isWebGL2;function e(){let E=!1;const Z=new Ia();let _=null;const oa=new Ia(0,0,0,0);return{setMask:function(X){_!==X&&!E&&(a.colorMask(X,X,X,X),_=X)},setLocked:function(X){E=X},setClear:function(X,ha,Da,sa,la){la===!0&&(X*=sa,ha*=sa,Da*=sa),Z.set(X,ha,Da,sa),oa.equals(Z)===!1&&(a.clearColor(X,ha,Da,sa),oa.copy(Z))},reset:function(){E=!1,_=null,oa.set(-1,0,0,0)}}}function f(){let E=!1,Z=null,_=null,oa=null;return{setTest:function(X){X?ka(2929):ma(2929)},setMask:function(X){Z!==X&&!E&&(a.depthMask(X),Z=X)},setFunc:function(X){if(_!==X){if(X)switch(X){case Ml:a.depthFunc(512);break;case Nl:a.depthFunc(519);break;case Ol:a.depthFunc(513);break;case Vg:a.depthFunc(515);break;case Pl:a.depthFunc(514);break;case Ql:a.depthFunc(518);break;case Rl:a.depthFunc(516);break;case Sl:a.depthFunc(517);break;default:a.depthFunc(515)}else a.depthFunc(515);_=X}},setLocked:function(X){E=X},setClear:function(X){oa!==X&&(a.clearDepth(X),oa=X)},reset:function(){E=!1,Z=null,_=null,oa=null}}}function g(){let E=!1,Z=null,_=null,oa=null,X=null,ha=null,Da=null,sa=null,la=null;return{setTest:function(ta){E||(ta?ka(2960):ma(2960))},setMask:function(ta){Z!==ta&&!E&&(a.stencilMask(ta),Z=ta)},setFunc:function(ta,$a,yb){(_!==ta||oa!==$a||X!==yb)&&(a.stencilFunc(ta,$a,yb),_=ta,oa=$a,X=yb)},setOp:function(ta,$a,yb){(ha!==ta||Da!==$a||sa!==yb)&&(a.stencilOp(ta,$a,yb),ha=ta,Da=$a,sa=yb)},setLocked:function(ta){E=ta},setClear:function(ta){la!==ta&&(a.clearStencil(ta),la=ta)},reset:function(){E=!1,Z=null,_=null,oa=null,X=null,ha=null,Da=null,sa=null,la=null}}}const h=new e(),i=new f(),j=new g();let l={},k=null,n=null,m=null,o=null,s=null,r=null,p=null,q=null,u=null,t=!1,w=null,A=null,B=null,L=null,C=null;const U=a.getParameter(35661);let I=!1,J=0;const H=a.getParameter(7938);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL\ ([0-9])/.exec(H)[1]),I=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(H)[1]),I=J>=2);let D=null,F={};const M=new Ia(),S=new Ia();function T(E,Z,_){const oa=new Uint8Array(4),X=a.createTexture();a.bindTexture(E,X),a.texParameteri(E,10241,9728),a.texParameteri(E,10240,9728);for(let ha=0;ha<_;ha++)a.texImage2D(Z+ha,0,6408,1,1,0,6408,5121,oa);return X}const ea={};ea[3553]=T(3553,3553,1),ea[34067]=T(34067,34069,6),h.setClear(0,0,0,1),i.setClear(1),j.setClear(0),ka(2929),i.setFunc(Vg),cb(!1),Ba(Li),ka(2884),Ka(tc);function ka(E){l[E]!==!0&&(a.enable(E),l[E]=!0)}function ma(E){l[E]!==!1&&(a.disable(E),l[E]=!1)}function Ga(E){return k!==E?(a.useProgram(E),k=E,!0):!1}const Aa={[hd]:32774,[Bl]:32778,[Cl]:32779};if(d)Aa[Ri]=32775,Aa[Si]=32776;else{const E=b.get("EXT_blend_minmax");E!==null&&(Aa[Ri]=E.MIN_EXT,Aa[Si]=E.MAX_EXT)}const Ta={[Dl]:0,[El]:1,[Fl]:768,[Ti]:770,[Ll]:776,[Jl]:774,[Hl]:772,[Gl]:769,[Ui]:771,[Kl]:775,[Il]:773};function Ka(E,Z,_,oa,X,ha,Da,sa){if(E===tc){n&&(ma(3042),n=!1);return}n||(ka(3042),n=!0);if(E!==Al){if(E!==m||sa!==t){(o!==hd||p!==hd)&&(a.blendEquation(32774),o=hd,p=hd);if(sa)switch(E){case he:a.blendFuncSeparate(1,771,1,771);break;case Oi:a.blendFunc(1,1);break;case Pi:a.blendFuncSeparate(0,0,769,771);break;case Qi:a.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}else switch(E){case he:a.blendFuncSeparate(770,771,1,771);break;case Oi:a.blendFunc(770,1);break;case Pi:a.blendFunc(0,769);break;case Qi:a.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",E);break}s=null,r=null,q=null,u=null,m=E,t=sa}return}X=X||Z,ha=ha||_,Da=Da||oa,(Z!==o||X!==p)&&(a.blendEquationSeparate(Aa[Z],Aa[X]),o=Z,p=X),(_!==s||oa!==r||ha!==q||Da!==u)&&(a.blendFuncSeparate(Ta[_],Ta[oa],Ta[ha],Ta[Da]),s=_,r=oa,q=ha,u=Da),m=E,t=null}function Q(E,Z){E.side===nf?ma(2884):ka(2884);let _=E.side===fb;Z&&(_=!_),cb(_),E.blending===he&&E.transparent===!1?Ka(tc):Ka(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.premultipliedAlpha),i.setFunc(E.depthFunc),i.setTest(E.depthTest),i.setMask(E.depthWrite),h.setMask(E.colorWrite);const oa=E.stencilWrite;j.setTest(oa),oa&&(j.setMask(E.stencilWriteMask),j.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),j.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),ua(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits)}function cb(E){w!==E&&(E?a.frontFace(2304):a.frontFace(2305),w=E)}function Ba(E){E!==Ug?(ka(2884),E!==A&&(E===Li?a.cullFace(1029):E===yl?a.cullFace(1028):a.cullFace(1032))):ma(2884),A=E}function Ca(E){E!==B&&(I&&a.lineWidth(E),B=E)}function ua(E,Z,_){E?(ka(32823),(L!==Z||C!==_)&&(a.polygonOffset(Z,_),L=Z,C=_)):ma(32823)}function R(E){E?ka(3089):ma(3089)}function V(E){E===void 0&&(E=33984+U-1),D!==E&&(a.activeTexture(E),D=E)}function Y(E,Z){D===null&&V();let _=F[D];_===void 0&&(_={type:void 0,texture:void 0},F[D]=_),(_.type!==E||_.texture!==Z)&&(a.bindTexture(E,Z||ea[E]),_.type=E,_.texture=Z)}function ia(){const E=F[D];E!==void 0&&E.type!==void 0&&(a.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)}function ga(){try{a.compressedTexImage2D.apply(a,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function xa(){try{a.texImage2D.apply(a,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function x(){try{a.texImage3D.apply(a,arguments)}catch(E){console.error("THREE.WebGLState:",E)}}function z(E){M.equals(E)===!1&&(a.scissor(E.x,E.y,E.z,E.w),M.copy(E))}function W(E){S.equals(E)===!1&&(a.viewport(E.x,E.y,E.z,E.w),S.copy(E))}function P(){l={},D=null,F={},k=null,m=null,w=null,A=null,h.reset(),i.reset(),j.reset()}return{buffers:{color:h,depth:i,stencil:j},enable:ka,disable:ma,useProgram:Ga,setBlending:Ka,setMaterial:Q,setFlipSided:cb,setCullFace:Ba,setLineWidth:Ca,setPolygonOffset:ua,setScissorTest:R,activeTexture:V,bindTexture:Y,unbindTexture:ia,compressedTexImage2D:ga,texImage2D:xa,texImage3D:x,scissor:z,viewport:W,reset:P}}function kr(a,b,c,d,e,f,g){const h=e.isWebGL2,i=e.maxTextures,j=e.maxCubemapSize,l=e.maxTextureSize,k=e.maxSamples,n=new WeakMap();let m,o=!1;try{o=typeof OffscreenCanvas!=="undefined"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch(x){}function s(x,z){return o?new OffscreenCanvas(x,z):document.createElementNS("http://www.w3.org/1999/xhtml","canvas")}function r(x,z,W,P){let E=1;(x.width>P||x.height>P)&&(E=P/Math.max(x.width,x.height));if(E<1||z===!0)if(typeof HTMLImageElement!=="undefined"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement!=="undefined"&&x instanceof HTMLCanvasElement||typeof ImageBitmap!=="undefined"&&x instanceof ImageBitmap){const Z=z?va.floorPowerOfTwo:Math.floor,_=Z(E*x.width),oa=Z(E*x.height);m===void 0&&(m=s(_,oa));const X=W?s(_,oa):m;X.width=_,X.height=oa;const ha=X.getContext("2d");return ha.drawImage(x,0,0,_,oa),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+x.width+"x"+x.height+") to ("+_+"x"+oa+")."),X}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+x.width+"x"+x.height+")."),x;return x}function p(x){return va.isPowerOfTwo(x.width)&&va.isPowerOfTwo(x.height)}function q(x){return h?!1:x.wrapS!==tb||x.wrapT!==tb||x.minFilter!==gb&&x.minFilter!==lb}function u(x,z){return x.generateMipmaps&&z&&x.minFilter!==gb&&x.minFilter!==lb}function t(x,z,W,P){a.generateMipmap(x);const E=d.get(z);E.__maxMipLevel=Math.log(Math.max(W,P))*Math.LOG2E}function w(x,z,W){if(h===!1)return z;if(x!==null){if(a[x]!==void 0)return a[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let P=z;return z===6403&&(W===5126&&(P=33326),W===5131&&(P=33325),W===5121&&(P=33321)),z===6407&&(W===5126&&(P=34837),W===5131&&(P=34843),W===5121&&(P=32849)),z===6408&&(W===5126&&(P=34836),W===5131&&(P=34842),W===5121&&(P=32856)),(P===33325||P===33326||P===34842||P===34836)&&b.get("EXT_color_buffer_float"),P}function A(x){return x===gb||x===$g||x===ah?9728:9729}function B(x){const z=x.target;z.removeEventListener("dispose",B),C(z),z.isVideoTexture&&n.delete(z),g.memory.textures--}function L(x){const z=x.target;z.removeEventListener("dispose",L),U(z),g.memory.textures--}function C(x){const z=d.get(x);if(z.__webglInit===void 0)return;a.deleteTexture(z.__webglTexture),d.remove(x)}function U(x){const z=d.get(x),W=d.get(x.texture);if(!x)return;W.__webglTexture!==void 0&&a.deleteTexture(W.__webglTexture),x.depthTexture&&x.depthTexture.dispose();if(x.isWebGLCubeRenderTarget)for(let P=0;P<6;P++)a.deleteFramebuffer(z.__webglFramebuffer[P]),z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer[P]);else a.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&a.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&a.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer&&a.deleteRenderbuffer(z.__webglColorRenderbuffer),z.__webglDepthRenderbuffer&&a.deleteRenderbuffer(z.__webglDepthRenderbuffer);d.remove(x.texture),d.remove(x)}let I=0;function J(){I=0}function H(){const x=I;return x>=i&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+i),I+=1,x}function D(x,z){const W=d.get(x);x.isVideoTexture&&V(x);if(x.version>0&&W.__version!==x.version){const P=x.image;if(P===void 0)console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Aa(W,x,z);return}}c.activeTexture(33984+z),c.bindTexture(3553,W.__webglTexture)}function F(x,z){const W=d.get(x);if(x.version>0&&W.__version!==x.version){Aa(W,x,z);return}c.activeTexture(33984+z),c.bindTexture(35866,W.__webglTexture)}function M(x,z){const W=d.get(x);if(x.version>0&&W.__version!==x.version){Aa(W,x,z);return}c.activeTexture(33984+z),c.bindTexture(32879,W.__webglTexture)}function S(x,z){if(x.image.length!==6)return;const W=d.get(x);if(x.version>0&&W.__version!==x.version){Ga(W,x),c.activeTexture(33984+z),c.bindTexture(34067,W.__webglTexture),a.pixelStorei(37440,x.flipY);const P=x&&(x.isCompressedTexture||x.image[0].isCompressedTexture),E=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let la=0;la<6;la++)!P&&!E?Z[la]=r(x.image[la],!1,!0,j):Z[la]=E?x.image[la].image:x.image[la];const _=Z[0],oa=p(_)||h,X=f.convert(x.format),ha=f.convert(x.type),Da=w(x.internalFormat,X,ha);ma(34067,x,oa);let sa;if(P){for(let la=0;la<6;la++){sa=Z[la].mipmaps;for(let ta=0;ta<sa.length;ta++){const $a=sa[ta];x.format!==Nb&&x.format!==Pc?X!==null?c.compressedTexImage2D(34069+la,ta,Da,$a.width,$a.height,0,$a.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):c.texImage2D(34069+la,ta,Da,$a.width,$a.height,0,X,ha,$a.data)}}W.__maxMipLevel=sa.length-1}else{sa=x.mipmaps;for(let la=0;la<6;la++)if(E){c.texImage2D(34069+la,0,Da,Z[la].width,Z[la].height,0,X,ha,Z[la].data);for(let ta=0;ta<sa.length;ta++){const $a=sa[ta],yb=$a.image[la].image;c.texImage2D(34069+la,ta+1,Da,yb.width,yb.height,0,X,ha,yb.data)}}else{c.texImage2D(34069+la,0,Da,X,ha,Z[la]);for(let ta=0;ta<sa.length;ta++){const $a=sa[ta];c.texImage2D(34069+la,ta+1,Da,X,ha,$a.image[la])}}W.__maxMipLevel=sa.length}u(x,oa)&&t(34067,x,_.width,_.height),W.__version=x.version,x.onUpdate&&x.onUpdate(x)}else c.activeTexture(33984+z),c.bindTexture(34067,W.__webglTexture)}function T(x,z){c.activeTexture(33984+z),c.bindTexture(34067,d.get(x).__webglTexture)}const ea={[pf]:10497,[tb]:33071,[qf]:33648},ka={[gb]:9728,[$g]:9984,[ah]:9986,[lb]:9729,[Wi]:9985,[rf]:9987};function ma(x,z,W){W?(a.texParameteri(x,10242,ea[z.wrapS]),a.texParameteri(x,10243,ea[z.wrapT]),(x===32879||x===35866)&&a.texParameteri(x,32882,ea[z.wrapR]),a.texParameteri(x,10240,ka[z.magFilter]),a.texParameteri(x,10241,ka[z.minFilter])):(a.texParameteri(x,10242,33071),a.texParameteri(x,10243,33071),(x===32879||x===35866)&&a.texParameteri(x,32882,33071),(z.wrapS!==tb||z.wrapT!==tb)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),a.texParameteri(x,10240,A(z.magFilter)),a.texParameteri(x,10241,A(z.minFilter)),z.minFilter!==gb&&z.minFilter!==lb&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."));const P=b.get("EXT_texture_filter_anisotropic");if(P){if(z.type===uc&&b.get("OES_texture_float_linear")===null)return;if(z.type===uf&&(h||b.get("OES_texture_half_float_linear"))===null)return;(z.anisotropy>1||d.get(z).__currentAnisotropy)&&(a.texParameterf(x,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(z.anisotropy,e.getMaxAnisotropy())),d.get(z).__currentAnisotropy=z.anisotropy)}}function Ga(x,z){x.__webglInit===void 0&&(x.__webglInit=!0,z.addEventListener("dispose",B),x.__webglTexture=a.createTexture(),g.memory.textures++)}function Aa(x,z,W){let P=3553;z.isDataTexture2DArray&&(P=35866),z.isDataTexture3D&&(P=32879),Ga(x,z),c.activeTexture(33984+W),c.bindTexture(P,x.__webglTexture),a.pixelStorei(37440,z.flipY),a.pixelStorei(37441,z.premultiplyAlpha),a.pixelStorei(3317,z.unpackAlignment);const E=q(z)&&p(z.image)===!1,Z=r(z.image,E,!1,l),_=p(Z)||h,oa=f.convert(z.format);let X=f.convert(z.type),ha=w(z.internalFormat,oa,X);ma(P,z,_);let Da;const sa=z.mipmaps;if(z.isDepthTexture)ha=6402,h?z.type===uc?ha=36012:z.type===tf?ha=33190:z.type===ke?ha=35056:ha=33189:z.type===uc&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),z.format===jd&&ha===6402&&(z.type!==sf&&z.type!==tf&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),z.type=sf,X=f.convert(z.type))),z.format===le&&ha===6402&&(ha=34041,z.type!==ke&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),z.type=ke,X=f.convert(z.type))),c.texImage2D(3553,0,ha,Z.width,Z.height,0,oa,X,null);else if(z.isDataTexture)if(sa.length>0&&_){for(let la=0,ta=sa.length;la<ta;la++)Da=sa[la],c.texImage2D(3553,la,ha,Da.width,Da.height,0,oa,X,Da.data);z.generateMipmaps=!1,x.__maxMipLevel=sa.length-1}else c.texImage2D(3553,0,ha,Z.width,Z.height,0,oa,X,Z.data),x.__maxMipLevel=0;else if(z.isCompressedTexture){for(let la=0,ta=sa.length;la<ta;la++)Da=sa[la],z.format!==Nb&&z.format!==Pc?oa!==null?c.compressedTexImage2D(3553,la,ha,Da.width,Da.height,0,Da.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):c.texImage2D(3553,la,ha,Da.width,Da.height,0,oa,X,Da.data);x.__maxMipLevel=sa.length-1}else if(z.isDataTexture2DArray)c.texImage3D(35866,0,ha,Z.width,Z.height,Z.depth,0,oa,X,Z.data),x.__maxMipLevel=0;else if(z.isDataTexture3D)c.texImage3D(32879,0,ha,Z.width,Z.height,Z.depth,0,oa,X,Z.data),x.__maxMipLevel=0;else if(sa.length>0&&_){for(let la=0,ta=sa.length;la<ta;la++)Da=sa[la],c.texImage2D(3553,la,ha,oa,X,Da);z.generateMipmaps=!1,x.__maxMipLevel=sa.length-1}else c.texImage2D(3553,0,ha,oa,X,Z),x.__maxMipLevel=0;u(z,_)&&t(P,z,Z.width,Z.height),x.__version=z.version,z.onUpdate&&z.onUpdate(z)}function Ta(x,z,W,P){const E=f.convert(z.texture.format),Z=f.convert(z.texture.type),_=w(z.texture.internalFormat,E,Z);c.texImage2D(P,0,_,z.width,z.height,0,E,Z,null),a.bindFramebuffer(36160,x),a.framebufferTexture2D(36160,W,P,d.get(z.texture).__webglTexture,0),a.bindFramebuffer(36160,null)}function Ka(x,z,W){a.bindRenderbuffer(36161,x);if(z.depthBuffer&&!z.stencilBuffer){let P=33189;if(W){const E=z.depthTexture;E&&E.isDepthTexture&&(E.type===uc?P=36012:E.type===tf&&(P=33190));const Z=R(z);a.renderbufferStorageMultisample(36161,Z,P,z.width,z.height)}else a.renderbufferStorage(36161,P,z.width,z.height);a.framebufferRenderbuffer(36160,36096,36161,x)}else if(z.depthBuffer&&z.stencilBuffer){if(W){const P=R(z);a.renderbufferStorageMultisample(36161,P,35056,z.width,z.height)}else a.renderbufferStorage(36161,34041,z.width,z.height);a.framebufferRenderbuffer(36160,33306,36161,x)}else{const P=f.convert(z.texture.format),E=f.convert(z.texture.type),Z=w(z.texture.internalFormat,P,E);if(W){const _=R(z);a.renderbufferStorageMultisample(36161,_,Z,z.width,z.height)}else a.renderbufferStorage(36161,Z,z.width,z.height)}a.bindRenderbuffer(36161,null)}function Q(x,z){const W=z&&z.isWebGLCubeRenderTarget;if(W)throw new Error("Depth Texture with cube render targets is not supported");a.bindFramebuffer(36160,x);if(!(z.depthTexture&&z.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!d.get(z.depthTexture).__webglTexture||z.depthTexture.image.width!==z.width||z.depthTexture.image.height!==z.height)&&(z.depthTexture.image.width=z.width,z.depthTexture.image.height=z.height,z.depthTexture.needsUpdate=!0),D(z.depthTexture,0);const P=d.get(z.depthTexture).__webglTexture;if(z.depthTexture.format===jd)a.framebufferTexture2D(36160,36096,3553,P,0);else if(z.depthTexture.format===le)a.framebufferTexture2D(36160,33306,3553,P,0);else throw new Error("Unknown depthTexture format")}function cb(x){const z=d.get(x),W=x.isWebGLCubeRenderTarget===!0;if(x.depthTexture){if(W)throw new Error("target.depthTexture not supported in Cube render targets");Q(z.__webglFramebuffer,x)}else if(W){z.__webglDepthbuffer=[];for(let P=0;P<6;P++)a.bindFramebuffer(36160,z.__webglFramebuffer[P]),z.__webglDepthbuffer[P]=a.createRenderbuffer(),Ka(z.__webglDepthbuffer[P],x,!1)}else a.bindFramebuffer(36160,z.__webglFramebuffer),z.__webglDepthbuffer=a.createRenderbuffer(),Ka(z.__webglDepthbuffer,x,!1);a.bindFramebuffer(36160,null)}function Ba(x){const z=d.get(x),W=d.get(x.texture);x.addEventListener("dispose",L),W.__webglTexture=a.createTexture(),g.memory.textures++;const P=x.isWebGLCubeRenderTarget===!0,E=x.isWebGLMultisampleRenderTarget===!0,Z=p(x)||h;h&&x.texture.format===Pc&&(x.texture.type===uc||x.texture.type===uf)&&(x.texture.format=Nb,console.warn("THREE.WebGLRenderer: Rendering to textures with RGB format is not supported. Using RGBA format instead."));if(P){z.__webglFramebuffer=[];for(let _=0;_<6;_++)z.__webglFramebuffer[_]=a.createFramebuffer()}else{z.__webglFramebuffer=a.createFramebuffer();if(E)if(h){z.__webglMultisampledFramebuffer=a.createFramebuffer(),z.__webglColorRenderbuffer=a.createRenderbuffer(),a.bindRenderbuffer(36161,z.__webglColorRenderbuffer);const _=f.convert(x.texture.format),oa=f.convert(x.texture.type),X=w(x.texture.internalFormat,_,oa),ha=R(x);a.renderbufferStorageMultisample(36161,ha,X,x.width,x.height),a.bindFramebuffer(36160,z.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(36160,36064,36161,z.__webglColorRenderbuffer),a.bindRenderbuffer(36161,null),x.depthBuffer&&(z.__webglDepthRenderbuffer=a.createRenderbuffer(),Ka(z.__webglDepthRenderbuffer,x,!0)),a.bindFramebuffer(36160,null)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}if(P){c.bindTexture(34067,W.__webglTexture),ma(34067,x.texture,Z);for(let _=0;_<6;_++)Ta(z.__webglFramebuffer[_],x,36064,34069+_);u(x.texture,Z)&&t(34067,x.texture,x.width,x.height),c.bindTexture(34067,null)}else c.bindTexture(3553,W.__webglTexture),ma(3553,x.texture,Z),Ta(z.__webglFramebuffer,x,36064,3553),u(x.texture,Z)&&t(3553,x.texture,x.width,x.height),c.bindTexture(3553,null);x.depthBuffer&&cb(x)}function Ca(x){const z=x.texture,W=p(x)||h;if(u(z,W)){const P=x.isWebGLCubeRenderTarget?34067:3553,E=d.get(z).__webglTexture;c.bindTexture(P,E),t(P,z,x.width,x.height),c.bindTexture(P,null)}}function ua(x){if(x.isWebGLMultisampleRenderTarget)if(h){const z=d.get(x);a.bindFramebuffer(36008,z.__webglMultisampledFramebuffer),a.bindFramebuffer(36009,z.__webglFramebuffer);const W=x.width,P=x.height;let E=16384;x.depthBuffer&&(E|=256),x.stencilBuffer&&(E|=1024),a.blitFramebuffer(0,0,W,P,0,0,W,P,E,9728),a.bindFramebuffer(36160,z.__webglMultisampledFramebuffer)}else console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.")}function R(x){return h&&x.isWebGLMultisampleRenderTarget?Math.min(k,x.samples):0}function V(x){const z=g.render.frame;n.get(x)!==z&&(n.set(x,z),x.update())}let Y=!1,ia=!1;function ga(x,z){x&&x.isWebGLRenderTarget&&(Y===!1&&(console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead."),Y=!0),x=x.texture),D(x,z)}function xa(x,z){x&&x.isWebGLCubeRenderTarget&&(ia===!1&&(console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead."),ia=!0),x=x.texture),x&&x.isCubeTexture||Array.isArray(x.image)&&x.image.length===6?S(x,z):T(x,z)}this.allocateTextureUnit=H,this.resetTextureUnits=J,this.setTexture2D=D,this.setTexture2DArray=F,this.setTexture3D=M,this.setTextureCube=S,this.setTextureCubeDynamic=T,this.setupRenderTarget=Ba,this.updateRenderTargetMipmap=Ca,this.updateMultisampleRenderTarget=ua,this.safeSetTexture2D=ga,this.safeSetTextureCube=xa}function lr(a,b,c){const d=c.isWebGL2;function e(f){let g;if(f===je)return 5121;if(f===bm)return 32819;if(f===cm)return 32820;if(f===dm)return 33635;if(f===_l)return 5120;if(f===$l)return 5122;if(f===sf)return 5123;if(f===am)return 5124;if(f===tf)return 5125;if(f===uc)return 5126;if(f===uf)return d?5131:(g=b.get("OES_texture_half_float"),g!==null?g.HALF_FLOAT_OES:null);if(f===em)return 6406;if(f===Pc)return 6407;if(f===Nb)return 6408;if(f===fm)return 6409;if(f===gm)return 6410;if(f===jd)return 6402;if(f===le)return 34041;if(f===im)return 6403;if(f===jm)return 36244;if(f===km)return 33319;if(f===lm)return 33320;if(f===mm)return 36248;if(f===nm)return 36249;if(f===Xi||f===Yi||f===Zi||f===_i){g=b.get("WEBGL_compressed_texture_s3tc");if(g!==null){if(f===Xi)return g.COMPRESSED_RGB_S3TC_DXT1_EXT;if(f===Yi)return g.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(f===Zi)return g.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(f===_i)return g.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(f===$i||f===aj||f===bj||f===cj){g=b.get("WEBGL_compressed_texture_pvrtc");if(g!==null){if(f===$i)return g.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(f===aj)return g.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(f===bj)return g.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(f===cj)return g.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(f===om)return g=b.get("WEBGL_compressed_texture_etc1"),g!==null?g.COMPRESSED_RGB_ETC1_WEBGL:null;if(f===dj||f===ej){g=b.get("WEBGL_compressed_texture_etc");if(g!==null){if(f===dj)return g.COMPRESSED_RGB8_ETC2;if(f===ej)return g.COMPRESSED_RGBA8_ETC2_EAC}}if(f===pm||f===qm||f===rm||f===sm||f===tm||f===um||f===vm||f===wm||f===xm||f===ym||f===zm||f===Am||f===Bm||f===Cm||f===Em||f===Fm||f===Gm||f===Hm||f===Im||f===Jm||f===Km||f===Lm||f===Mm||f===Nm||f===Om||f===Pm||f===Qm||f===Rm)return g=b.get("WEBGL_compressed_texture_astc"),g!==null?f:null;if(f===Dm)return g=b.get("EXT_texture_compression_bptc"),g!==null?f:null;if(f===ke)return d?34042:(g=b.get("WEBGL_depth_texture"),g!==null?g.UNSIGNED_INT_24_8_WEBGL:null)}return{convert:e}}function Ih(a){Ya.call(this),this.cameras=a||[]}Ih.prototype=Object.assign(Object.create(Ya.prototype),{constructor:Ih,isArrayCamera:!0});function Ce(){$.call(this),this.type="Group"}Ce.prototype=Object.assign(Object.create($.prototype),{constructor:Ce,isGroup:!0});function Rf(){this._targetRay=null,this._grip=null}Object.assign(Rf.prototype,{constructor:Rf,getTargetRaySpace:function(){return this._targetRay===null&&(this._targetRay=new Ce(),this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1),this._targetRay},getGripSpace:function(){return this._grip===null&&(this._grip=new Ce(),this._grip.matrixAutoUpdate=!1,this._grip.visible=!1),this._grip},dispatchEvent:function(a){return this._targetRay!==null&&this._targetRay.dispatchEvent(a),this._grip!==null&&this._grip.dispatchEvent(a),this},disconnect:function(a){return this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this},update:function(a,b,c){let d=null,e=null;const f=this._targetRay,g=this._grip;return a&&(f!==null&&(d=b.getPose(a.targetRaySpace,c),d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale))),g!==null&&a.gripSpace&&(e=b.getPose(a.gripSpace,c),e!==null&&(g.matrix.fromArray(e.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale)))),f!==null&&(f.visible=d!==null),g!==null&&(g.visible=e!==null),this}});function Uj(a,b){const c=this;let d=null,e=1,f=null,g="local-floor",h=null;const i=[],j=new Map(),l=new Ya();l.layers.enable(1),l.viewport=new Ia();const k=new Ya();k.layers.enable(2),k.viewport=new Ia();const n=[l,k],m=new Ih();m.layers.enable(1),m.layers.enable(2);let o=null,s=null;this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let J=i[I];return J===void 0&&(J=new Rf(),i[I]=J),J.getTargetRaySpace()},this.getControllerGrip=function(I){let J=i[I];return J===void 0&&(J=new Rf(),i[I]=J),J.getGripSpace()};function r(I){const J=j.get(I.inputSource);J&&J.dispatchEvent({type:I.type})}function p(){j.forEach(function(I,J){I.disconnect(J)}),j.clear(),a.setFramebuffer(null),a.setRenderTarget(a.getRenderTarget()),U.stop(),c.isPresenting=!1,c.dispatchEvent({type:"sessionend"})}function q(I){f=I,U.setContext(d),U.start(),c.isPresenting=!0,c.dispatchEvent({type:"sessionstart"})}this.setFramebufferScaleFactor=function(I){e=I,c.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){g=I,c.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return f},this.getSession=function(){return d},this.setSession=function(I){d=I;if(d!==null){d.addEventListener("select",r),d.addEventListener("selectstart",r),d.addEventListener("selectend",r),d.addEventListener("squeeze",r),d.addEventListener("squeezestart",r),d.addEventListener("squeezeend",r),d.addEventListener("end",p);const J=b.getContextAttributes();J.xrCompatible!==!0&&b.makeXRCompatible();const H={antialias:J.antialias,alpha:J.alpha,depth:J.depth,stencil:J.stencil,framebufferScaleFactor:e},D=new XRWebGLLayer(d,b,H);d.updateRenderState({baseLayer:D}),d.requestReferenceSpace(g).then(q),d.addEventListener("inputsourceschange",u)}};function u(I){const J=d.inputSources;for(let H=0;H<i.length;H++)j.set(J[H],i[H]);for(let H=0;H<I.removed.length;H++){const D=I.removed[H],F=j.get(D);F&&(F.dispatchEvent({type:"disconnected",data:D}),j.delete(D))}for(let H=0;H<I.added.length;H++){const D=I.added[H],F=j.get(D);F&&F.dispatchEvent({type:"connected",data:D})}}const t=new v(),w=new v();function A(I,J,H){t.setFromMatrixPosition(J.matrixWorld),w.setFromMatrixPosition(H.matrixWorld);const D=t.distanceTo(w),F=J.projectionMatrix.elements,M=H.projectionMatrix.elements,S=F[14]/(F[10]-1),T=F[14]/(F[10]+1),ea=(F[9]+1)/F[5],ka=(F[9]-1)/F[5],ma=(F[8]-1)/F[0],Ga=(M[8]+1)/M[0],Aa=S*ma,Ta=S*Ga,Ka=D/(-ma+Ga),Q=Ka*-ma;J.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Q),I.translateZ(Ka),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.getInverse(I.matrixWorld);const cb=S+Ka,Ba=T+Ka,Ca=Aa-Q,ua=Ta+(D-Q),R=ea*T/Ba*cb,V=ka*T/Ba*cb;I.projectionMatrix.makePerspective(Ca,ua,R,V,cb,Ba)}function B(I,J){J===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(J.matrixWorld,I.matrix),I.matrixWorldInverse.getInverse(I.matrixWorld)}this.getCamera=function(I){m.near=k.near=l.near=I.near,m.far=k.far=l.far=I.far,(o!==m.near||s!==m.far)&&(d.updateRenderState({depthNear:m.near,depthFar:m.far}),o=m.near,s=m.far);const J=I.parent,H=m.cameras;B(m,J);for(let F=0;F<H.length;F++)B(H[F],J);I.matrixWorld.copy(m.matrixWorld);const D=I.children;for(let F=0,M=D.length;F<M;F++)D[F].updateMatrixWorld(!0);return H.length===2?A(m,l,k):m.projectionMatrix.copy(l.projectionMatrix),m};let L=null;function C(I,J){h=J.getViewerPose(f);if(h!==null){const D=h.views,F=d.renderState.baseLayer;a.setFramebuffer(F.framebuffer);let M=!1;D.length!==m.cameras.length&&(m.cameras.length=0,M=!0);for(let S=0;S<D.length;S++){const T=D[S],ea=F.getViewport(T),ka=n[S];ka.matrix.fromArray(T.transform.matrix),ka.projectionMatrix.fromArray(T.projectionMatrix),ka.viewport.set(ea.x,ea.y,ea.width,ea.height),S===0&&m.matrix.copy(ka.matrix),M===!0&&m.cameras.push(ka)}}const H=d.inputSources;for(let D=0;D<i.length;D++){const F=i[D],M=H[D];F.update(M,J,f)}L&&L(I,J)}const U=new xj();U.setAnimationLoop(C),this.setAnimationLoop=function(I){L=I},this.dispose=function(){}}Object.assign(Uj.prototype,ec.prototype);function mr(a){function b(p,q){p.fogColor.value.copy(q.color),q.isFog?(p.fogNear.value=q.near,p.fogFar.value=q.far):q.isFogExp2&&(p.fogDensity.value=q.density)}function c(p,q,u,t,w){q.isMeshBasicMaterial?d(p,q):q.isMeshLambertMaterial?(d(p,q),i(p,q)):q.isMeshToonMaterial?(d(p,q),l(p,q)):q.isMeshPhongMaterial?(d(p,q),j(p,q)):q.isMeshStandardMaterial?(d(p,q,u),q.isMeshPhysicalMaterial?n(p,q,u):k(p,q,u)):q.isMeshMatcapMaterial?(d(p,q),m(p,q)):q.isMeshDepthMaterial?(d(p,q),o(p,q)):q.isMeshDistanceMaterial?(d(p,q),s(p,q)):q.isMeshNormalMaterial?(d(p,q),r(p,q)):q.isLineBasicMaterial?(e(p,q),q.isLineDashedMaterial&&f(p,q)):q.isPointsMaterial?g(p,q,t,w):q.isSpriteMaterial?h(p,q):q.isShadowMaterial?(p.color.value.copy(q.color),p.opacity.value=q.opacity):q.isShaderMaterial&&(q.uniformsNeedUpdate=!1)}function d(p,q,u){p.opacity.value=q.opacity,q.color&&p.diffuse.value.copy(q.color),q.emissive&&p.emissive.value.copy(q.emissive).multiplyScalar(q.emissiveIntensity),q.map&&(p.map.value=q.map),q.alphaMap&&(p.alphaMap.value=q.alphaMap),q.specularMap&&(p.specularMap.value=q.specularMap);const t=q.envMap||u;t&&(p.envMap.value=t,p.flipEnvMap.value=t.isCubeTexture?-1:1,p.reflectivity.value=q.reflectivity,p.refractionRatio.value=q.refractionRatio,p.maxMipLevel.value=a.get(t).__maxMipLevel),q.lightMap&&(p.lightMap.value=q.lightMap,p.lightMapIntensity.value=q.lightMapIntensity),q.aoMap&&(p.aoMap.value=q.aoMap,p.aoMapIntensity.value=q.aoMapIntensity);let w;q.map?w=q.map:q.specularMap?w=q.specularMap:q.displacementMap?w=q.displacementMap:q.normalMap?w=q.normalMap:q.bumpMap?w=q.bumpMap:q.roughnessMap?w=q.roughnessMap:q.metalnessMap?w=q.metalnessMap:q.alphaMap?w=q.alphaMap:q.emissiveMap&&(w=q.emissiveMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix));let A;q.aoMap?A=q.aoMap:q.lightMap&&(A=q.lightMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),p.uv2Transform.value.copy(A.matrix))}function e(p,q){p.diffuse.value.copy(q.color),p.opacity.value=q.opacity}function f(p,q){p.dashSize.value=q.dashSize,p.totalSize.value=q.dashSize+q.gapSize,p.scale.value=q.scale}function g(p,q,u,t){p.diffuse.value.copy(q.color),p.opacity.value=q.opacity,p.size.value=q.size*u,p.scale.value=t*.5,q.map&&(p.map.value=q.map),q.alphaMap&&(p.alphaMap.value=q.alphaMap);let w;q.map?w=q.map:q.alphaMap&&(w=q.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),p.uvTransform.value.copy(w.matrix))}function h(p,q){p.diffuse.value.copy(q.color),p.opacity.value=q.opacity,p.rotation.value=q.rotation,q.map&&(p.map.value=q.map),q.alphaMap&&(p.alphaMap.value=q.alphaMap);let u;q.map?u=q.map:q.alphaMap&&(u=q.alphaMap),u!==void 0&&(u.matrixAutoUpdate===!0&&u.updateMatrix(),p.uvTransform.value.copy(u.matrix))}function i(p,q){q.emissiveMap&&(p.emissiveMap.value=q.emissiveMap)}function j(p,q){p.specular.value.copy(q.specular),p.shininess.value=Math.max(q.shininess,1e-4),q.emissiveMap&&(p.emissiveMap.value=q.emissiveMap),q.bumpMap&&(p.bumpMap.value=q.bumpMap,p.bumpScale.value=q.bumpScale,q.side===fb&&(p.bumpScale.value*=-1)),q.normalMap&&(p.normalMap.value=q.normalMap,p.normalScale.value.copy(q.normalScale),q.side===fb&&p.normalScale.value.negate()),q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias)}function l(p,q){q.gradientMap&&(p.gradientMap.value=q.gradientMap),q.emissiveMap&&(p.emissiveMap.value=q.emissiveMap),q.bumpMap&&(p.bumpMap.value=q.bumpMap,p.bumpScale.value=q.bumpScale,q.side===fb&&(p.bumpScale.value*=-1)),q.normalMap&&(p.normalMap.value=q.normalMap,p.normalScale.value.copy(q.normalScale),q.side===fb&&p.normalScale.value.negate()),q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias)}function k(p,q,u){p.roughness.value=q.roughness,p.metalness.value=q.metalness,q.roughnessMap&&(p.roughnessMap.value=q.roughnessMap),q.metalnessMap&&(p.metalnessMap.value=q.metalnessMap),q.emissiveMap&&(p.emissiveMap.value=q.emissiveMap),q.bumpMap&&(p.bumpMap.value=q.bumpMap,p.bumpScale.value=q.bumpScale,q.side===fb&&(p.bumpScale.value*=-1)),q.normalMap&&(p.normalMap.value=q.normalMap,p.normalScale.value.copy(q.normalScale),q.side===fb&&p.normalScale.value.negate()),q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias),(q.envMap||u)&&(p.envMapIntensity.value=q.envMapIntensity)}function n(p,q,u){k(p,q,u),p.reflectivity.value=q.reflectivity,p.clearcoat.value=q.clearcoat,p.clearcoatRoughness.value=q.clearcoatRoughness,q.sheen&&p.sheen.value.copy(q.sheen),q.clearcoatMap&&(p.clearcoatMap.value=q.clearcoatMap),q.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=q.clearcoatRoughnessMap),q.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(q.clearcoatNormalScale),p.clearcoatNormalMap.value=q.clearcoatNormalMap,q.side===fb&&p.clearcoatNormalScale.value.negate()),p.transparency.value=q.transparency}function m(p,q){q.matcap&&(p.matcap.value=q.matcap),q.bumpMap&&(p.bumpMap.value=q.bumpMap,p.bumpScale.value=q.bumpScale,q.side===fb&&(p.bumpScale.value*=-1)),q.normalMap&&(p.normalMap.value=q.normalMap,p.normalScale.value.copy(q.normalScale),q.side===fb&&p.normalScale.value.negate()),q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias)}function o(p,q){q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias)}function s(p,q){q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias),p.referencePosition.value.copy(q.referencePosition),p.nearDistance.value=q.nearDistance,p.farDistance.value=q.farDistance}function r(p,q){q.bumpMap&&(p.bumpMap.value=q.bumpMap,p.bumpScale.value=q.bumpScale,q.side===fb&&(p.bumpScale.value*=-1)),q.normalMap&&(p.normalMap.value=q.normalMap,p.normalScale.value.copy(q.normalScale),q.side===fb&&p.normalScale.value.negate()),q.displacementMap&&(p.displacementMap.value=q.displacementMap,p.displacementScale.value=q.displacementScale,p.displacementBias.value=q.displacementBias)}return{refreshFogUniforms:b,refreshMaterialUniforms:c}}function Jd(a){a=a||{};const b=a.canvas!==void 0?a.canvas:document.createElementNS("http://www.w3.org/1999/xhtml","canvas"),c=a.context!==void 0?a.context:null,d=a.alpha!==void 0?a.alpha:!1,e=a.depth!==void 0?a.depth:!0,f=a.stencil!==void 0?a.stencil:!0,g=a.antialias!==void 0?a.antialias:!1,h=a.premultipliedAlpha!==void 0?a.premultipliedAlpha:!0,i=a.preserveDrawingBuffer!==void 0?a.preserveDrawingBuffer:!1,j=a.powerPreference!==void 0?a.powerPreference:"default",l=a.failIfMajorPerformanceCaveat!==void 0?a.failIfMajorPerformanceCaveat:!1;let k=null,n=null;this.domElement=b,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.gammaFactor=2,this.outputEncoding=ub,this.physicallyCorrectLights=!1,this.toneMapping=id,this.toneMappingExposure=1,this.maxMorphTargets=8,this.maxMorphNormals=4;const m=this;let o=!1,s=null,r=0,p=0,q=null,u=null,t=-1,w=null,A=null;const B=new Ia(),L=new Ia();let C=null,U=b.width,I=b.height,J=1,H=null,D=null;const F=new Ia(0,0,U,I),M=new Ia(0,0,U,I);let S=!1;const T=new xe(),ea=new Rp();let ka=!1,ma=!1;const Ga=new za(),Aa=new v(),Ta={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ka(){return q===null?J:1}let Q=c;function cb(y,K){for(let G=0;G<y.length;G++){const O=y[G],ca=b.getContext(O,K);if(ca!==null)return ca}return null}try{const y={alpha:d,depth:e,stencil:f,antialias:g,premultipliedAlpha:h,preserveDrawingBuffer:i,powerPreference:j,failIfMajorPerformanceCaveat:l};b.addEventListener("webglcontextlost",ta,!1),b.addEventListener("webglcontextrestored",$a,!1);if(Q===null){const K=["webgl2","webgl","experimental-webgl"];m.isWebGL1Renderer===!0&&K.shift(),Q=cb(K,y);if(Q===null)throw cb(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Q.getShaderPrecisionFormat===void 0&&(Q.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let Ba,Ca,ua,R,V,Y,ia,ga,xa,x,z,W,P,E,Z,_,oa,X,ha;function Da(){Ba=new Sp(Q),Ca=new Qp(Q,Ba,a),Ca.isWebGL2===!1&&(Ba.get("WEBGL_depth_texture"),Ba.get("OES_texture_float"),Ba.get("OES_texture_half_float"),Ba.get("OES_texture_half_float_linear"),Ba.get("OES_standard_derivatives"),Ba.get("OES_element_index_uint"),Ba.get("OES_vertex_array_object"),Ba.get("ANGLE_instanced_arrays")),Ba.get("OES_texture_float_linear"),X=new lr(Q,Ba,Ca),ua=new jr(Q,Ba,Ca),ua.scissor(L.copy(M).multiplyScalar(J).floor()),ua.viewport(B.copy(F).multiplyScalar(J).floor()),R=new Vp(Q),V=new Zq(),Y=new kr(Q,Ba,ua,V,Ca,X,R),ia=new sn(Q,Ca),ha=new Op(Q,Ba,ia,Ca),ga=new Tp(Q,ia,R,ha),xa=new Zp(Q,ga,ia,R),Z=new Yp(Q),x=new Yq(m,Ba,Ca,ha),z=new mr(V),W=new ar(),P=new gr(),E=new Np(m,ua,xa,h),_=new Pp(Q,Ba,R,Ca),oa=new Up(Q,Ba,R,Ca),R.programs=x.programs,m.capabilities=Ca,m.extensions=Ba,m.properties=V,m.renderLists=W,m.state=ua,m.info=R}Da();const sa=new Uj(m,Q);this.xr=sa;const la=new Tj(m,xa,Ca.maxTextureSize);this.shadowMap=la,this.getContext=function(){return Q},this.getContextAttributes=function(){return Q.getContextAttributes()},this.forceContextLoss=function(){const y=Ba.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=Ba.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(y){if(y===void 0)return;J=y,this.setSize(U,I,!1)},this.getSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument"),y=new N()),y.set(U,I)},this.setSize=function(y,K,G){if(sa.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=y,I=K,b.width=Math.floor(y*J),b.height=Math.floor(K*J),G!==!1&&(b.style.width=y+"px",b.style.height=K+"px"),this.setViewport(0,0,y,K)},this.getDrawingBufferSize=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument"),y=new N()),y.set(U*J,I*J).floor()},this.setDrawingBufferSize=function(y,K,G){U=y,I=K,J=G,b.width=Math.floor(y*G),b.height=Math.floor(K*G),this.setViewport(0,0,y,K)},this.getCurrentViewport=function(y){return y===void 0&&(console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument"),y=new Ia()),y.copy(B)},this.getViewport=function(y){return y.copy(F)},this.setViewport=function(y,K,G,O){y.isVector4?F.set(y.x,y.y,y.z,y.w):F.set(y,K,G,O),ua.viewport(B.copy(F).multiplyScalar(J).floor())},this.getScissor=function(y){return y.copy(M)},this.setScissor=function(y,K,G,O){y.isVector4?M.set(y.x,y.y,y.z,y.w):M.set(y,K,G,O),ua.scissor(L.copy(M).multiplyScalar(J).floor())},this.getScissorTest=function(){return S},this.setScissorTest=function(y){ua.setScissorTest(S=y)},this.setOpaqueSort=function(y){H=y},this.setTransparentSort=function(y){D=y},this.getClearColor=function(){return E.getClearColor()},this.setClearColor=function(){E.setClearColor.apply(E,arguments)},this.getClearAlpha=function(){return E.getClearAlpha()},this.setClearAlpha=function(){E.setClearAlpha.apply(E,arguments)},this.clear=function(y,K,G){let O=0;(y===void 0||y)&&(O|=16384),(K===void 0||K)&&(O|=256),(G===void 0||G)&&(O|=1024),Q.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){b.removeEventListener("webglcontextlost",ta,!1),b.removeEventListener("webglcontextrestored",$a,!1),W.dispose(),P.dispose(),V.dispose(),xa.dispose(),ha.dispose(),sa.dispose(),lf.stop()};function ta(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),o=!0}function $a(){console.log("THREE.WebGLRenderer: Context Restored."),o=!1,Da()}function yb(y){const K=y.target;K.removeEventListener("dispose",yb),ps(K)}function ps(y){tl(y),V.remove(y)}function tl(y){const K=V.get(y).program;y.program=void 0,K!==void 0&&x.releaseProgram(K)}function qs(y,K){y.render(function(G){m.renderBufferImmediate(G,K)})}this.renderBufferImmediate=function(y,K){ha.initAttributes();const G=V.get(y);y.hasPositions&&!G.position&&(G.position=Q.createBuffer()),y.hasNormals&&!G.normal&&(G.normal=Q.createBuffer()),y.hasUvs&&!G.uv&&(G.uv=Q.createBuffer()),y.hasColors&&!G.color&&(G.color=Q.createBuffer());const O=K.getAttributes();y.hasPositions&&(Q.bindBuffer(34962,G.position),Q.bufferData(34962,y.positionArray,35048),ha.enableAttribute(O.position),Q.vertexAttribPointer(O.position,3,5126,!1,0,0)),y.hasNormals&&(Q.bindBuffer(34962,G.normal),Q.bufferData(34962,y.normalArray,35048),ha.enableAttribute(O.normal),Q.vertexAttribPointer(O.normal,3,5126,!1,0,0)),y.hasUvs&&(Q.bindBuffer(34962,G.uv),Q.bufferData(34962,y.uvArray,35048),ha.enableAttribute(O.uv),Q.vertexAttribPointer(O.uv,2,5126,!1,0,0)),y.hasColors&&(Q.bindBuffer(34962,G.color),Q.bufferData(34962,y.colorArray,35048),ha.enableAttribute(O.color),Q.vertexAttribPointer(O.color,3,5126,!1,0,0)),ha.disableUnusedAttributes(),Q.drawArrays(4,0,y.count),y.count=0},this.renderBufferDirect=function(y,K,G,O,ca,Fa){K===null&&(K=Ta);const ya=ca.isMesh&&ca.matrixWorld.determinant()<0,na=xl(y,K,O,ca);ua.setMaterial(O,ya);let Wa=G.index;const Ua=G.attributes.position;if(Wa===null){if(Ua===void 0||Ua.count===0)return}else if(Wa.count===0)return;let Pa=1;O.wireframe===!0&&(Wa=ga.getWireframeAttribute(G),Pa=2),(O.morphTargets||O.morphNormals)&&Z.update(ca,G,O,na),ha.setup(ca,O,na,G,Wa);let ab,wa=_;Wa!==null&&(ab=ia.get(Wa),wa=oa,wa.setIndex(ab));const Xa=Wa!==null?Wa.count:Ua.count,eb=G.drawRange.start*Pa,Oa=G.drawRange.count*Pa,Sg=Fa!==null?Fa.start*Pa:0,Ub=Fa!==null?Fa.count*Pa:Infinity,Nc=Math.max(eb,Sg),Ii=Math.min(Xa,eb+Oa,Sg+Ub)-1,Tg=Math.max(0,Ii-Nc+1);if(Tg===0)return;if(ca.isMesh)O.wireframe===!0?(ua.setLineWidth(O.wireframeLinewidth*Ka()),wa.setMode(1)):wa.setMode(4);else if(ca.isLine){let mf=O.linewidth;mf===void 0&&(mf=1),ua.setLineWidth(mf*Ka()),ca.isLineSegments?wa.setMode(1):ca.isLineLoop?wa.setMode(2):wa.setMode(3)}else ca.isPoints?wa.setMode(0):ca.isSprite&&wa.setMode(4);if(ca.isInstancedMesh)wa.renderInstances(G,Nc,Tg,ca.count);else if(G.isInstancedBufferGeometry){const mf=Math.min(G.instanceCount,G._maxInstanceCount);wa.renderInstances(G,Nc,Tg,mf)}else wa.render(Nc,Tg)},this.compile=function(y,K){n=P.get(y,K),n.init(),y.traverse(function(O){O.isLight&&(n.pushLight(O),O.castShadow&&n.pushShadow(O))}),n.setupLights(K);const G=new WeakMap();y.traverse(function(O){let ca=O.material;if(ca)if(Array.isArray(ca))for(let Fa=0;Fa<ca.length;Fa++){let ya=ca[Fa];G.has(ya)===!1&&(sc(ya,y,O),G.set(ya))}else G.has(ca)===!1&&(sc(ca,y,O),G.set(ca))})};let Hi=null;function rs(y){if(sa.isPresenting)return;Hi&&Hi(y)}const lf=new xj();lf.setAnimationLoop(rs),typeof window!=="undefined"&&lf.setContext(window),this.setAnimationLoop=function(y){Hi=y,sa.setAnimationLoop(y),y===null?lf.stop():lf.start()},this.render=function(y,K){let G,O;arguments[2]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead."),G=arguments[2]),arguments[3]!==void 0&&(console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead."),O=arguments[3]);if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(o===!0)return;ha.resetDefaultState(),t=-1,w=null,y.autoUpdate===!0&&y.updateMatrixWorld(),K.parent===null&&K.updateMatrixWorld(),sa.enabled===!0&&sa.isPresenting===!0&&(K=sa.getCamera(K)),y.isScene===!0&&y.onBeforeRender(m,y,K,G||q),n=P.get(y,K),n.init(),Ga.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),T.setFromProjectionMatrix(Ga),ma=this.localClippingEnabled,ka=ea.init(this.clippingPlanes,ma,K),k=W.get(y,K),k.init(),ul(y,K,0,m.sortObjects),k.finish(),m.sortObjects===!0&&k.sort(H,D),ka===!0&&ea.beginShadows();const ca=n.state.shadowsArray;la.render(ca,y,K),n.setupLights(K),ka===!0&&ea.endShadows(),this.info.autoReset===!0&&this.info.reset(),G!==void 0&&this.setRenderTarget(G),E.render(k,y,K,O);const Fa=k.opaque,ya=k.transparent;Fa.length>0&&vl(Fa,y,K),ya.length>0&&vl(ya,y,K),y.isScene===!0&&y.onAfterRender(m,y,K),q!==null&&(Y.updateRenderTargetMipmap(q),Y.updateMultisampleRenderTarget(q)),ua.buffers.depth.setTest(!0),ua.buffers.depth.setMask(!0),ua.buffers.color.setMask(!0),ua.setPolygonOffset(!1),k=null,n=null};function ul(y,K,G,O){if(y.visible===!1)return;const ca=y.layers.test(K.layers);if(ca){if(y.isGroup)G=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(K);else if(y.isLight)n.pushLight(y),y.castShadow&&n.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||T.intersectsSprite(y)){O&&Aa.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ga);const ya=xa.update(y),na=y.material;na.visible&&k.push(y,ya,na,G,Aa.z,null)}}else if(y.isImmediateRenderObject)O&&Aa.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ga),k.push(y,null,y.material,G,Aa.z,null);else if(y.isMesh||y.isLine||y.isPoints){y.isSkinnedMesh&&(y.skeleton.frame!==R.render.frame&&(y.skeleton.update(),y.skeleton.frame=R.render.frame));if(!y.frustumCulled||T.intersectsObject(y)){O&&Aa.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ga);const ya=xa.update(y),na=y.material;if(Array.isArray(na)){const Wa=ya.groups;for(let Ua=0,Pa=Wa.length;Ua<Pa;Ua++){const ab=Wa[Ua],wa=na[ab.materialIndex];wa&&wa.visible&&k.push(y,ya,wa,G,Aa.z,ab)}}else na.visible&&k.push(y,ya,na,G,Aa.z,null)}}}const Fa=y.children;for(let ya=0,na=Fa.length;ya<na;ya++)ul(Fa[ya],K,G,O)}function vl(y,K,G){const O=K.isScene===!0?K.overrideMaterial:null;for(let ca=0,Fa=y.length;ca<Fa;ca++){const ya=y[ca],na=ya.object,Wa=ya.geometry,Ua=O===null?ya.material:O,Pa=ya.group;if(G.isArrayCamera){A=G;const ab=G.cameras;for(let wa=0,Xa=ab.length;wa<Xa;wa++){const eb=ab[wa];na.layers.test(eb.layers)&&(ua.viewport(B.copy(eb.viewport)),n.setupLights(eb),wl(na,K,eb,Wa,Ua,Pa))}}else A=null,wl(na,K,G,Wa,Ua,Pa)}}function wl(y,K,G,O,ca,Fa){y.onBeforeRender(m,K,G,O,ca,Fa),n=P.get(K,A||G),y.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix);if(y.isImmediateRenderObject){const ya=xl(G,K,ca,y);ua.setMaterial(ca),ha.reset(),qs(y,ya)}else m.renderBufferDirect(G,K,O,ca,y,Fa);y.onAfterRender(m,K,G,O,ca,Fa),n=P.get(K,A||G)}function sc(y,K,G){K.isScene!==!0&&(K=Ta);const O=V.get(y),ca=n.state.lights,Fa=n.state.shadowsArray,ya=ca.state.version,na=x.getParameters(y,ca.state,Fa,K,ea.numPlanes,ea.numIntersection,G),Wa=x.getProgramCacheKey(na);let Ua=O.program,Pa=!0;if(Ua===void 0)y.addEventListener("dispose",yb);else if(Ua.cacheKey!==Wa)tl(y);else if(O.lightsStateVersion!==ya)O.lightsStateVersion=ya,Pa=!1;else{if(na.shaderID!==void 0)return;Pa=!1}Pa&&(Ua=x.acquireProgram(na,Wa),O.program=Ua,O.uniforms=na.uniforms,O.outputEncoding=na.outputEncoding,y.program=Ua);const ab=Ua.getAttributes();if(y.morphTargets){y.numSupportedMorphTargets=0;for(let Oa=0;Oa<m.maxMorphTargets;Oa++)ab["morphTarget"+Oa]>=0&&y.numSupportedMorphTargets++}if(y.morphNormals){y.numSupportedMorphNormals=0;for(let Oa=0;Oa<m.maxMorphNormals;Oa++)ab["morphNormal"+Oa]>=0&&y.numSupportedMorphNormals++}const wa=O.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(O.numClippingPlanes=ea.numPlanes,O.numIntersection=ea.numIntersection,wa.clippingPlanes=ea.uniform),O.environment=y.isMeshStandardMaterial?K.environment:null,O.fog=K.fog,O.needsLights=ts(y),O.lightsStateVersion=ya,O.needsLights&&(wa.ambientLightColor.value=ca.state.ambient,wa.lightProbe.value=ca.state.probe,wa.directionalLights.value=ca.state.directional,wa.directionalLightShadows.value=ca.state.directionalShadow,wa.spotLights.value=ca.state.spot,wa.spotLightShadows.value=ca.state.spotShadow,wa.rectAreaLights.value=ca.state.rectArea,wa.pointLights.value=ca.state.point,wa.pointLightShadows.value=ca.state.pointShadow,wa.hemisphereLights.value=ca.state.hemi,wa.directionalShadowMap.value=ca.state.directionalShadowMap,wa.directionalShadowMatrix.value=ca.state.directionalShadowMatrix,wa.spotShadowMap.value=ca.state.spotShadowMap,wa.spotShadowMatrix.value=ca.state.spotShadowMatrix,wa.pointShadowMap.value=ca.state.pointShadowMap,wa.pointShadowMatrix.value=ca.state.pointShadowMatrix);const Xa=O.program.getUniforms(),eb=Ec.seqWithValue(Xa.seq,wa);O.uniformsList=eb}function xl(y,K,G,O){K.isScene!==!0&&(K=Ta),Y.resetTextureUnits();const ca=K.fog,Fa=G.isMeshStandardMaterial?K.environment:null,ya=q===null?m.outputEncoding:q.texture.encoding,na=V.get(G),Wa=n.state.lights;if(ka===!0){if(ma===!0||y!==w){const Oa=y===w&&G.id===t;ea.setState(G.clippingPlanes,G.clipIntersection,G.clipShadows,y,na,Oa)}}G.version===na.__version?na.program===void 0?sc(G,K,O):G.fog&&na.fog!==ca?sc(G,K,O):na.environment!==Fa?sc(G,K,O):na.needsLights&&na.lightsStateVersion!==Wa.state.version?sc(G,K,O):na.numClippingPlanes!==void 0&&(na.numClippingPlanes!==ea.numPlanes||na.numIntersection!==ea.numIntersection)?sc(G,K,O):na.outputEncoding!==ya&&sc(G,K,O):(sc(G,K,O),na.__version=G.version);let Ua=!1,Pa=!1,ab=!1;const wa=na.program,Xa=wa.getUniforms(),eb=na.uniforms;ua.useProgram(wa.program)&&(Ua=!0,Pa=!0,ab=!0),G.id!==t&&(t=G.id,Pa=!0);if(Ua||w!==y){Xa.setValue(Q,"projectionMatrix",y.projectionMatrix),Ca.logarithmicDepthBuffer&&Xa.setValue(Q,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),w!==y&&(w=y,Pa=!0,ab=!0);if(G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const Oa=Xa.map.cameraPosition;Oa!==void 0&&Oa.setValue(Q,Aa.setFromMatrixPosition(y.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Xa.setValue(Q,"isOrthographic",y.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||G.skinning)&&Xa.setValue(Q,"viewMatrix",y.matrixWorldInverse)}if(G.skinning){Xa.setOptional(Q,O,"bindMatrix"),Xa.setOptional(Q,O,"bindMatrixInverse");const Oa=O.skeleton;if(Oa){const Sg=Oa.bones;if(Ca.floatVertexTextures){if(Oa.boneTexture===void 0){let Ub=Math.sqrt(Sg.length*4);Ub=va.ceilPowerOfTwo(Ub),Ub=Math.max(Ub,4);const Nc=new Float32Array(Ub*Ub*4);Nc.set(Oa.boneMatrices);const Ii=new Gd(Nc,Ub,Ub,Nb,uc);Oa.boneMatrices=Nc,Oa.boneTexture=Ii,Oa.boneTextureSize=Ub}Xa.setValue(Q,"boneTexture",Oa.boneTexture,Y),Xa.setValue(Q,"boneTextureSize",Oa.boneTextureSize)}else Xa.setOptional(Q,Oa,"boneMatrices")}}return(Pa||na.receiveShadow!==O.receiveShadow)&&(na.receiveShadow=O.receiveShadow,Xa.setValue(Q,"receiveShadow",O.receiveShadow)),Pa&&(Xa.setValue(Q,"toneMappingExposure",m.toneMappingExposure),na.needsLights&&ss(eb,ab),ca&&G.fog&&z.refreshFogUniforms(eb,ca),z.refreshMaterialUniforms(eb,G,Fa,J,I),eb.ltc_1!==void 0&&(eb.ltc_1.value=ba.LTC_1),eb.ltc_2!==void 0&&(eb.ltc_2.value=ba.LTC_2),Ec.upload(Q,na.uniformsList,eb,Y)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ec.upload(Q,na.uniformsList,eb,Y),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Xa.setValue(Q,"center",O.center),Xa.setValue(Q,"modelViewMatrix",O.modelViewMatrix),Xa.setValue(Q,"normalMatrix",O.normalMatrix),Xa.setValue(Q,"modelMatrix",O.matrixWorld),wa}function ss(y,K){y.ambientLightColor.needsUpdate=K,y.lightProbe.needsUpdate=K,y.directionalLights.needsUpdate=K,y.directionalLightShadows.needsUpdate=K,y.pointLights.needsUpdate=K,y.pointLightShadows.needsUpdate=K,y.spotLights.needsUpdate=K,y.spotLightShadows.needsUpdate=K,y.rectAreaLights.needsUpdate=K,y.hemisphereLights.needsUpdate=K}function ts(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.setFramebuffer=function(y){s!==y&&q===null&&Q.bindFramebuffer(36160,y),s=y},this.getActiveCubeFace=function(){return r},this.getActiveMipmapLevel=function(){return p},this.getRenderTarget=function(){return q},this.setRenderTarget=function(y,K,G){q=y,r=K,p=G,y&&V.get(y).__webglFramebuffer===void 0&&Y.setupRenderTarget(y);let O=s,ca=!1;if(y){const Fa=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(O=Fa[K||0],ca=!0):y.isWebGLMultisampleRenderTarget?O=V.get(y).__webglMultisampledFramebuffer:O=Fa,B.copy(y.viewport),L.copy(y.scissor),C=y.scissorTest}else B.copy(F).multiplyScalar(J).floor(),L.copy(M).multiplyScalar(J).floor(),C=S;u!==O&&(Q.bindFramebuffer(36160,O),u=O),ua.viewport(B),ua.scissor(L),ua.setScissorTest(C);if(ca){const Fa=V.get(y.texture);Q.framebufferTexture2D(36160,36064,34069+(K||0),Fa.__webglTexture,G||0)}},this.readRenderTargetPixels=function(y,K,G,O,ca,Fa,ya){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let na=V.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget&&ya!==void 0&&(na=na[ya]);if(na){let Wa=!1;na!==u&&(Q.bindFramebuffer(36160,na),Wa=!0);try{const Ua=y.texture,Pa=Ua.format,ab=Ua.type;if(Pa!==Nb&&X.convert(Pa)!==Q.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ab!==je&&X.convert(ab)!==Q.getParameter(35738)&&!(ab===uc&&(Ca.isWebGL2||Ba.get("OES_texture_float")||Ba.get("WEBGL_color_buffer_float")))&&!(ab===uf&&(Ca.isWebGL2?Ba.get("EXT_color_buffer_float"):Ba.get("EXT_color_buffer_half_float")))){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q.checkFramebufferStatus(36160)===36053?K>=0&&K<=y.width-O&&(G>=0&&G<=y.height-ca)&&Q.readPixels(K,G,O,ca,X.convert(Pa),X.convert(ab),Fa):console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.")}finally{Wa&&Q.bindFramebuffer(36160,u)}}},this.copyFramebufferToTexture=function(y,K,G){G===void 0&&(G=0);const O=Math.pow(2,-G),ca=Math.floor(K.image.width*O),Fa=Math.floor(K.image.height*O),ya=X.convert(K.format);Y.setTexture2D(K,0),Q.copyTexImage2D(3553,G,ya,y.x,y.y,ca,Fa,0),ua.unbindTexture()},this.copyTextureToTexture=function(y,K,G,O){O===void 0&&(O=0);const ca=K.image.width,Fa=K.image.height,ya=X.convert(G.format),na=X.convert(G.type);Y.setTexture2D(G,0),Q.pixelStorei(37440,G.flipY),Q.pixelStorei(37441,G.premultiplyAlpha),Q.pixelStorei(3317,G.unpackAlignment),K.isDataTexture?Q.texSubImage2D(3553,O,y.x,y.y,ca,Fa,ya,na,K.image.data):K.isCompressedTexture?Q.compressedTexSubImage2D(3553,O,y.x,y.y,K.mipmaps[0].width,K.mipmaps[0].height,ya,K.mipmaps[0].data):Q.texSubImage2D(3553,O,y.x,y.y,ya,na,K.image),O===0&&G.generateMipmaps&&Q.generateMipmap(3553),ua.unbindTexture()},this.initTexture=function(y){Y.setTexture2D(y,0),ua.unbindTexture()},typeof __THREE_DEVTOOLS__!=="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}function Vj(a){Jd.call(this,a)}Vj.prototype=Object.assign(Object.create(Jd.prototype),{constructor:Vj,isWebGL1Renderer:!0});function Jh(a,b){this.name="",this.color=new da(a),this.density=b!==void 0?b:25e-5}Object.assign(Jh.prototype,{isFogExp2:!0,clone:function(){return new Jh(this.color,this.density)},toJSON:function(){return{type:"FogExp2",color:this.color.getHex(),density:this.density}}});function Kh(a,b,c){this.name="",this.color=new da(a),this.near=b!==void 0?b:1,this.far=c!==void 0?c:1e3}Object.assign(Kh.prototype,{isFog:!0,clone:function(){return new Kh(this.color,this.near,this.far)},toJSON:function(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}});function Kb(a,b){this.array=a,this.stride=b,this.count=a!==void 0?a.length/b:0,this.usage=zf,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=va.generateUUID()}Object.defineProperty(Kb.prototype,"needsUpdate",{set:function(a){a===!0&&this.version++}});Object.assign(Kb.prototype,{isInterleavedBuffer:!0,onUploadCallback:function(){},setUsage:function(a){return this.usage=a,this},copy:function(a){return this.array=new a.array.constructor(a.array),this.count=a.count,this.stride=a.stride,this.usage=a.usage,this},copyAt:function(a,b,c){a*=this.stride,c*=b.stride;for(let d=0,e=this.stride;d<e;d++)this.array[a+d]=b.array[c+d];return this},set:function(a,b){return b===void 0&&(b=0),this.array.set(a,b),this},clone:function(a){a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va.generateUUID()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const b=new this.array.constructor(a.arrayBuffers[this.array.buffer._uuid]),c=new Kb(b,this.stride);return c.setUsage(this.usage),c},onUpload:function(a){return this.onUploadCallback=a,this},toJSON:function(a){return a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=va.generateUUID()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=Array.prototype.slice.call(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}});const Wc=new v();function Xc(a,b,c,d){this.name="",this.data=a,this.itemSize=b,this.offset=c,this.normalized=d===!0}Object.defineProperties(Xc.prototype,{count:{get:function(){return this.data.count}},array:{get:function(){return this.data.array}}});Object.assign(Xc.prototype,{isInterleavedBufferAttribute:!0,applyMatrix4:function(a){for(let b=0,c=this.data.count;b<c;b++)Wc.x=this.getX(b),Wc.y=this.getY(b),Wc.z=this.getZ(b),Wc.applyMatrix4(a),this.setXYZ(b,Wc.x,Wc.y,Wc.z);return this},setX:function(a,b){return this.data.array[a*this.data.stride+this.offset]=b,this},setY:function(a,b){return this.data.array[a*this.data.stride+this.offset+1]=b,this},setZ:function(a,b){return this.data.array[a*this.data.stride+this.offset+2]=b,this},setW:function(a,b){return this.data.array[a*this.data.stride+this.offset+3]=b,this},getX:function(a){return this.data.array[a*this.data.stride+this.offset]},getY:function(a){return this.data.array[a*this.data.stride+this.offset+1]},getZ:function(a){return this.data.array[a*this.data.stride+this.offset+2]},getW:function(a){return this.data.array[a*this.data.stride+this.offset+3]},setXY:function(a,b,c){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this},setXYZ:function(a,b,c,d){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this.data.array[a+2]=d,this},setXYZW:function(a,b,c,d,e){return a=a*this.data.stride+this.offset,this.data.array[a+0]=b,this.data.array[a+1]=c,this.data.array[a+2]=d,this.data.array[a+3]=e,this},clone:function(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interlaved buffer attribute will deinterleave buffer data.");const b=[];for(let c=0;c<this.count;c++){const d=c*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)b.push(this.data.array[d+e])}return new qa(new this.array.constructor(b),this.itemSize,this.normalized)}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.clone(a)),new Xc(a.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)},toJSON:function(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interlaved buffer attribute will deinterleave buffer data.");const b=[];for(let c=0;c<this.count;c++){const d=c*this.data.stride+this.offset;for(let e=0;e<this.itemSize;e++)b.push(this.data.array[d+e])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:b,normalized:this.normalized}}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.toJSON(a)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}});function Yc(a){pa.call(this),this.type="SpriteMaterial",this.color=new da(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.setValues(a)}Yc.prototype=Object.create(pa.prototype);Yc.prototype.constructor=Yc;Yc.prototype.isSpriteMaterial=!0;Yc.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.alphaMap=a.alphaMap,this.rotation=a.rotation,this.sizeAttenuation=a.sizeAttenuation,this};let Kd;const De=new v(),Ld=new v(),Md=new v(),Nd=new N(),Ee=new N(),Wj=new za(),Sf=new v(),Fe=new v(),Tf=new v(),Xj=new N(),Lh=new N(),Yj=new N();function Mh(a){$.call(this),this.type="Sprite";if(Kd===void 0){Kd=new fa();const b=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),c=new Kb(b,5);Kd.setIndex([0,1,2,0,2,3]),Kd.setAttribute("position",new Xc(c,3,0,!1)),Kd.setAttribute("uv",new Xc(c,2,3,!1))}this.geometry=Kd,this.material=a!==void 0?a:new Yc(),this.center=new N(.5,.5)}Mh.prototype=Object.assign(Object.create($.prototype),{constructor:Mh,isSprite:!0,raycast:function(a,b){a.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ld.setFromMatrixScale(this.matrixWorld),Wj.copy(a.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(a.camera.matrixWorldInverse,this.matrixWorld),Md.setFromMatrixPosition(this.modelViewMatrix),a.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ld.multiplyScalar(-Md.z);const c=this.material.rotation;let d,e;c!==0&&(e=Math.cos(c),d=Math.sin(c));const f=this.center;Uf(Sf.set(-.5,-.5,0),Md,f,Ld,d,e),Uf(Fe.set(.5,-.5,0),Md,f,Ld,d,e),Uf(Tf.set(.5,.5,0),Md,f,Ld,d,e),Xj.set(0,0),Lh.set(1,0),Yj.set(1,1);let g=a.ray.intersectTriangle(Sf,Fe,Tf,!1,De);if(g===null){Uf(Fe.set(-.5,.5,0),Md,f,Ld,d,e),Lh.set(0,1),g=a.ray.intersectTriangle(Sf,Tf,Fe,!1,De);if(g===null)return}const h=a.ray.origin.distanceTo(De);if(h<a.near||h>a.far)return;b.push({distance:h,point:De.clone(),uv:kb.getUV(De,Sf,Fe,Tf,Xj,Lh,Yj,new N()),face:null,object:this})},copy:function(a){return $.prototype.copy.call(this,a),a.center!==void 0&&this.center.copy(a.center),this.material=a.material,this}});function Uf(a,b,c,d,e,f){Nd.subVectors(a,c).addScalar(.5).multiply(d),e!==void 0?(Ee.x=f*Nd.x-e*Nd.y,Ee.y=e*Nd.x+f*Nd.y):Ee.copy(Nd),a.copy(b),a.x+=Ee.x,a.y+=Ee.y,a.applyMatrix4(Wj)}const Vf=new v(),Zj=new v();function Wf(){$.call(this),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]}}),this.autoUpdate=!0}Wf.prototype=Object.assign(Object.create($.prototype),{constructor:Wf,isLOD:!0,copy:function(a){$.prototype.copy.call(this,a,!1);const b=a.levels;for(let c=0,d=b.length;c<d;c++){const e=b[c];this.addLevel(e.object.clone(),e.distance)}return this.autoUpdate=a.autoUpdate,this},addLevel:function(a,b){b===void 0&&(b=0),b=Math.abs(b);const c=this.levels;let d;for(d=0;d<c.length;d++)if(b<c[d].distance)break;return c.splice(d,0,{distance:b,object:a}),this.add(a),this},getCurrentLevel:function(){return this._currentLevel},getObjectForDistance:function(a){const b=this.levels;if(b.length>0){let c,d;for(c=1,d=b.length;c<d;c++)if(a<b[c].distance)break;return b[c-1].object}return null},raycast:function(a,b){const c=this.levels;if(c.length>0){Vf.setFromMatrixPosition(this.matrixWorld);const d=a.ray.origin.distanceTo(Vf);this.getObjectForDistance(d).raycast(a,b)}},update:function(a){const b=this.levels;if(b.length>1){Vf.setFromMatrixPosition(a.matrixWorld),Zj.setFromMatrixPosition(this.matrixWorld);const c=Vf.distanceTo(Zj)/a.zoom;b[0].object.visible=!0;let d,e;for(d=1,e=b.length;d<e;d++)if(c>=b[d].distance)b[d-1].object.visible=!1,b[d].object.visible=!0;else break;for(this._currentLevel=d-1;d<e;d++)b[d].object.visible=!1}},toJSON:function(a){const b=$.prototype.toJSON.call(this,a);this.autoUpdate===!1&&(b.object.autoUpdate=!1),b.object.levels=[];const c=this.levels;for(let d=0,e=c.length;d<e;d++){const f=c[d];b.object.levels.push({object:f.object.uuid,distance:f.distance})}return b}});function Nh(a,b){a&&a.isGeometry&&console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead."),Ha.call(this,a,b),this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new za(),this.bindMatrixInverse=new za()}Nh.prototype=Object.assign(Object.create(Ha.prototype),{constructor:Nh,isSkinnedMesh:!0,copy:function(a){return Ha.prototype.copy.call(this,a),this.bindMode=a.bindMode,this.bindMatrix.copy(a.bindMatrix),this.bindMatrixInverse.copy(a.bindMatrixInverse),this.skeleton=a.skeleton,this},bind:function(a,b){this.skeleton=a,b===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),b=this.matrixWorld),this.bindMatrix.copy(b),this.bindMatrixInverse.getInverse(b)},pose:function(){this.skeleton.pose()},normalizeSkinWeights:function(){const a=new Ia(),b=this.geometry.attributes.skinWeight;for(let c=0,d=b.count;c<d;c++){a.x=b.getX(c),a.y=b.getY(c),a.z=b.getZ(c),a.w=b.getW(c);const e=1/a.manhattanLength();e!==Infinity?a.multiplyScalar(e):a.set(1,0,0,0),b.setXYZW(c,a.x,a.y,a.z,a.w)}},updateMatrixWorld:function(a){Ha.prototype.updateMatrixWorld.call(this,a),this.bindMode==="attached"?this.bindMatrixInverse.getInverse(this.matrixWorld):this.bindMode==="detached"?this.bindMatrixInverse.getInverse(this.bindMatrix):console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)},boneTransform:function(){const a=new v(),b=new Ia(),c=new Ia(),d=new v(),e=new za();return function(f,g){const h=this.skeleton,i=this.geometry;b.fromBufferAttribute(i.attributes.skinIndex,f),c.fromBufferAttribute(i.attributes.skinWeight,f),a.fromBufferAttribute(i.attributes.position,f).applyMatrix4(this.bindMatrix),g.set(0,0,0);for(let j=0;j<4;j++){const l=c.getComponent(j);if(l!==0){const k=b.getComponent(j);e.multiplyMatrices(h.bones[k].matrixWorld,h.boneInverses[k]),g.addScaledVector(d.copy(a).applyMatrix4(e),l)}}return g.applyMatrix4(this.bindMatrixInverse)}}()});const _j=new za(),nr=new za();function Oh(a,b){a=a||[],this.bones=a.slice(0),this.boneMatrices=new Float32Array(this.bones.length*16),this.frame=-1;if(b===void 0)this.calculateInverses();else if(this.bones.length===b.length)this.boneInverses=b.slice(0);else{console.warn("THREE.Skeleton boneInverses is the wrong length."),this.boneInverses=[];for(let c=0,d=this.bones.length;c<d;c++)this.boneInverses.push(new za())}}Object.assign(Oh.prototype,{calculateInverses:function(){this.boneInverses=[];for(let a=0,b=this.bones.length;a<b;a++){const c=new za();this.bones[a]&&c.getInverse(this.bones[a].matrixWorld),this.boneInverses.push(c)}},pose:function(){for(let a=0,b=this.bones.length;a<b;a++){const c=this.bones[a];c&&c.matrixWorld.getInverse(this.boneInverses[a])}for(let a=0,b=this.bones.length;a<b;a++){const c=this.bones[a];c&&(c.parent&&c.parent.isBone?(c.matrix.getInverse(c.parent.matrixWorld),c.matrix.multiply(c.matrixWorld)):c.matrix.copy(c.matrixWorld),c.matrix.decompose(c.position,c.quaternion,c.scale))}},update:function(){const a=this.bones,b=this.boneInverses,c=this.boneMatrices,d=this.boneTexture;for(let e=0,f=a.length;e<f;e++){const g=a[e]?a[e].matrixWorld:nr;_j.multiplyMatrices(g,b[e]),_j.toArray(c,e*16)}d!==void 0&&(d.needsUpdate=!0)},clone:function(){return new Oh(this.bones,this.boneInverses)},getBoneByName:function(a){for(let b=0,c=this.bones.length;b<c;b++){const d=this.bones[b];if(d.name===a)return d}return},dispose:function(){this.boneTexture&&(this.boneTexture.dispose(),this.boneTexture=void 0)}});function $j(){$.call(this),this.type="Bone"}$j.prototype=Object.assign(Object.create($.prototype),{constructor:$j,isBone:!0});const ak=new za(),bk=new za(),Xf=[],Ge=new Ha();function Ph(a,b,c){Ha.call(this,a,b),this.instanceMatrix=new qa(new Float32Array(c*16),16),this.count=c,this.frustumCulled=!1}Ph.prototype=Object.assign(Object.create(Ha.prototype),{constructor:Ph,isInstancedMesh:!0,copy:function(a){return Ha.prototype.copy.call(this,a),this.instanceMatrix.copy(a.instanceMatrix),this.count=a.count,this},getMatrixAt:function(a,b){b.fromArray(this.instanceMatrix.array,a*16)},raycast:function(a,b){const c=this.matrixWorld,d=this.count;Ge.geometry=this.geometry,Ge.material=this.material;if(Ge.material===void 0)return;for(let e=0;e<d;e++){this.getMatrixAt(e,ak),bk.multiplyMatrices(c,ak),Ge.matrixWorld=bk,Ge.raycast(a,Xf);for(let f=0,g=Xf.length;f<g;f++){const h=Xf[f];h.instanceId=e,h.object=this,b.push(h)}Xf.length=0}},setMatrixAt:function(a,b){b.toArray(this.instanceMatrix.array,a*16)},updateMorphTargets:function(){}});function Qa(a){pa.call(this),this.type="LineBasicMaterial",this.color=new da(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.morphTargets=!1,this.setValues(a)}Qa.prototype=Object.create(pa.prototype);Qa.prototype.constructor=Qa;Qa.prototype.isLineBasicMaterial=!0;Qa.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.morphTargets=a.morphTargets,this};const ck=new v(),dk=new v(),ek=new za(),Yf=new vd(),Zf=new hc();function wb(a,b,c){c===1&&console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead."),$.call(this),this.type="Line",this.geometry=a!==void 0?a:new fa(),this.material=b!==void 0?b:new Qa(),this.updateMorphTargets()}wb.prototype=Object.assign(Object.create($.prototype),{constructor:wb,isLine:!0,copy:function(a){return $.prototype.copy.call(this,a),this.material=a.material,this.geometry=a.geometry,this},computeLineDistances:function(){const a=this.geometry;if(a.isBufferGeometry)if(a.index===null){const b=a.attributes.position,c=[0];for(let d=1,e=b.count;d<e;d++)ck.fromBufferAttribute(b,d-1),dk.fromBufferAttribute(b,d),c[d]=c[d-1],c[d]+=ck.distanceTo(dk);a.setAttribute("lineDistance",new aa(c,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry){const b=a.vertices,c=a.lineDistances;c[0]=0;for(let d=1,e=b.length;d<e;d++)c[d]=c[d-1],c[d]+=b[d-1].distanceTo(b[d])}return this},raycast:function(a,b){const c=this.geometry,d=this.matrixWorld,e=a.params.Line.threshold;c.boundingSphere===null&&c.computeBoundingSphere(),Zf.copy(c.boundingSphere),Zf.applyMatrix4(d),Zf.radius+=e;if(a.ray.intersectsSphere(Zf)===!1)return;ek.getInverse(d),Yf.copy(a.ray).applyMatrix4(ek);const f=e/((this.scale.x+this.scale.y+this.scale.z)/3),g=f*f,h=new v(),i=new v(),j=new v(),l=new v(),k=this&&this.isLineSegments?2:1;if(c.isBufferGeometry){const n=c.index,m=c.attributes,o=m.position.array;if(n!==null){const s=n.array;for(let r=0,p=s.length-1;r<p;r+=k){const q=s[r],u=s[r+1];h.fromArray(o,q*3),i.fromArray(o,u*3);const t=Yf.distanceSqToSegment(h,i,l,j);if(t>g)continue;l.applyMatrix4(this.matrixWorld);const w=a.ray.origin.distanceTo(l);if(w<a.near||w>a.far)continue;b.push({distance:w,point:j.clone().applyMatrix4(this.matrixWorld),index:r,face:null,faceIndex:null,object:this})}}else for(let s=0,r=o.length/3-1;s<r;s+=k){h.fromArray(o,3*s),i.fromArray(o,3*s+3);const p=Yf.distanceSqToSegment(h,i,l,j);if(p>g)continue;l.applyMatrix4(this.matrixWorld);const q=a.ray.origin.distanceTo(l);if(q<a.near||q>a.far)continue;b.push({distance:q,point:j.clone().applyMatrix4(this.matrixWorld),index:s,face:null,faceIndex:null,object:this})}}else if(c.isGeometry){const n=c.vertices,m=n.length;for(let o=0;o<m-1;o+=k){const s=Yf.distanceSqToSegment(n[o],n[o+1],l,j);if(s>g)continue;l.applyMatrix4(this.matrixWorld);const r=a.ray.origin.distanceTo(l);if(r<a.near||r>a.far)continue;b.push({distance:r,point:j.clone().applyMatrix4(this.matrixWorld),index:o,face:null,faceIndex:null,object:this})}}},updateMorphTargets:function(){const a=this.geometry;if(a.isBufferGeometry){const b=a.morphAttributes,c=Object.keys(b);if(c.length>0){const d=b[c[0]];if(d!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,f=d.length;e<f;e++){const g=d[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=e}}}}else{const b=a.morphTargets;b!==void 0&&b.length>0&&console.error("THREE.Line.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});const _f=new v(),$f=new v();function bb(a,b){wb.call(this,a,b),this.type="LineSegments"}bb.prototype=Object.assign(Object.create(wb.prototype),{constructor:bb,isLineSegments:!0,computeLineDistances:function(){const a=this.geometry;if(a.isBufferGeometry)if(a.index===null){const b=a.attributes.position,c=[];for(let d=0,e=b.count;d<e;d+=2)_f.fromBufferAttribute(b,d),$f.fromBufferAttribute(b,d+1),c[d]=d===0?0:c[d-1],c[d+1]=c[d]+_f.distanceTo($f);a.setAttribute("lineDistance",new aa(c,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");else if(a.isGeometry){const b=a.vertices,c=a.lineDistances;for(let d=0,e=b.length;d<e;d+=2)_f.copy(b[d]),$f.copy(b[d+1]),c[d]=d===0?0:c[d-1],c[d+1]=c[d]+_f.distanceTo($f)}return this}});function Qh(a,b){wb.call(this,a,b),this.type="LineLoop"}Qh.prototype=Object.assign(Object.create(wb.prototype),{constructor:Qh,isLineLoop:!0});function Zc(a){pa.call(this),this.type="PointsMaterial",this.color=new da(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.morphTargets=!1,this.setValues(a)}Zc.prototype=Object.create(pa.prototype);Zc.prototype.constructor=Zc;Zc.prototype.isPointsMaterial=!0;Zc.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.alphaMap=a.alphaMap,this.size=a.size,this.sizeAttenuation=a.sizeAttenuation,this.morphTargets=a.morphTargets,this};const fk=new za(),Rh=new vd(),ag=new hc(),bg=new v();function Sh(a,b){$.call(this),this.type="Points",this.geometry=a!==void 0?a:new fa(),this.material=b!==void 0?b:new Zc(),this.updateMorphTargets()}Sh.prototype=Object.assign(Object.create($.prototype),{constructor:Sh,isPoints:!0,copy:function(a){return $.prototype.copy.call(this,a),this.material=a.material,this.geometry=a.geometry,this},raycast:function(a,b){const c=this.geometry,d=this.matrixWorld,e=a.params.Points.threshold;c.boundingSphere===null&&c.computeBoundingSphere(),ag.copy(c.boundingSphere),ag.applyMatrix4(d),ag.radius+=e;if(a.ray.intersectsSphere(ag)===!1)return;fk.getInverse(d),Rh.copy(a.ray).applyMatrix4(fk);const f=e/((this.scale.x+this.scale.y+this.scale.z)/3),g=f*f;if(c.isBufferGeometry){const h=c.index,i=c.attributes,j=i.position.array;if(h!==null){const l=h.array;for(let k=0,n=l.length;k<n;k++){const m=l[k];bg.fromArray(j,m*3),Th(bg,m,g,d,a,b,this)}}else for(let l=0,k=j.length/3;l<k;l++)bg.fromArray(j,l*3),Th(bg,l,g,d,a,b,this)}else{const h=c.vertices;for(let i=0,j=h.length;i<j;i++)Th(h[i],i,g,d,a,b,this)}},updateMorphTargets:function(){const a=this.geometry;if(a.isBufferGeometry){const b=a.morphAttributes,c=Object.keys(b);if(c.length>0){const d=b[c[0]];if(d!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,f=d.length;e<f;e++){const g=d[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[g]=e}}}}else{const b=a.morphTargets;b!==void 0&&b.length>0&&console.error("THREE.Points.updateMorphTargets() does not support THREE.Geometry. Use THREE.BufferGeometry instead.")}}});function Th(a,b,c,d,e,f,g){const h=Rh.distanceSqToPoint(a);if(h<c){const i=new v();Rh.closestPointToPoint(a,i),i.applyMatrix4(d);const j=e.ray.origin.distanceTo(i);if(j<e.near||j>e.far)return;f.push({distance:j,distanceToRay:Math.sqrt(h),point:i,index:b,face:null,object:g})}}function gk(a,b,c,d,e,f,g,h,i){La.call(this,a,b,c,d,e,f,g,h,i),this.format=g!==void 0?g:Pc,this.minFilter=f!==void 0?f:lb,this.magFilter=e!==void 0?e:lb,this.generateMipmaps=!1}gk.prototype=Object.assign(Object.create(La.prototype),{constructor:gk,isVideoTexture:!0,update:function(){const a=this.image;a.readyState>=a.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}});function He(a,b,c,d,e,f,g,h,i,j,l,k){La.call(this,null,f,g,h,i,j,d,e,l,k),this.image={width:b,height:c},this.mipmaps=a,this.flipY=!1,this.generateMipmaps=!1}He.prototype=Object.create(La.prototype);He.prototype.constructor=He;He.prototype.isCompressedTexture=!0;function cg(a,b,c,d,e,f,g,h,i){La.call(this,a,b,c,d,e,f,g,h,i),this.needsUpdate=!0}cg.prototype=Object.create(La.prototype);cg.prototype.constructor=cg;cg.prototype.isCanvasTexture=!0;function dg(a,b,c,d,e,f,g,h,i,j){j=j!==void 0?j:jd;if(j!==jd&&j!==le)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");c===void 0&&j===jd&&(c=sf),c===void 0&&j===le&&(c=ke),La.call(this,null,d,e,f,g,h,j,c,i),this.image={width:a,height:b},this.magFilter=g!==void 0?g:gb,this.minFilter=h!==void 0?h:gb,this.flipY=!1,this.generateMipmaps=!1}dg.prototype=Object.create(La.prototype);dg.prototype.constructor=dg;dg.prototype.isDepthTexture=!0;function eg(a){fa.call(this),this.type="WireframeGeometry";const b=[],c=[0,0],d={},e=["a","b","c"];if(a&&a.isGeometry){const f=a.faces;for(let g=0,h=f.length;g<h;g++){const i=f[g];for(let j=0;j<3;j++){const l=i[e[j]],k=i[e[(j+1)%3]];c[0]=Math.min(l,k),c[1]=Math.max(l,k);const n=c[0]+","+c[1];d[n]===void 0&&(d[n]={index1:c[0],index2:c[1]})}}for(const g in d){const h=d[g];let i=a.vertices[h.index1];b.push(i.x,i.y,i.z),i=a.vertices[h.index2],b.push(i.x,i.y,i.z)}}else if(a&&a.isBufferGeometry){let f=new v();if(a.index!==null){const g=a.attributes.position,h=a.index;let i=a.groups;i.length===0&&(i=[{start:0,count:h.count,materialIndex:0}]);for(let j=0,l=i.length;j<l;++j){const k=i[j],n=k.start,m=k.count;for(let o=n,s=n+m;o<s;o+=3)for(let r=0;r<3;r++){const p=h.getX(o+r),q=h.getX(o+(r+1)%3);c[0]=Math.min(p,q),c[1]=Math.max(p,q);const u=c[0]+","+c[1];d[u]===void 0&&(d[u]={index1:c[0],index2:c[1]})}}for(const j in d){const l=d[j];f.fromBufferAttribute(g,l.index1),b.push(f.x,f.y,f.z),f.fromBufferAttribute(g,l.index2),b.push(f.x,f.y,f.z)}}else{const g=a.attributes.position;for(let h=0,i=g.count/3;h<i;h++)for(let j=0;j<3;j++){const l=3*h+j;f.fromBufferAttribute(g,l),b.push(f.x,f.y,f.z);const k=3*h+(j+1)%3;f.fromBufferAttribute(g,k),b.push(f.x,f.y,f.z)}}}this.setAttribute("position",new aa(b,3))}eg.prototype=Object.create(fa.prototype);eg.prototype.constructor=eg;function fg(a,b,c){ra.call(this),this.type="ParametricGeometry",this.parameters={func:a,slices:b,stacks:c},this.fromBufferGeometry(new Ie(a,b,c)),this.mergeVertices()}fg.prototype=Object.create(ra.prototype);fg.prototype.constructor=fg;function Ie(a,b,c){fa.call(this),this.type="ParametricBufferGeometry",this.parameters={func:a,slices:b,stacks:c};const d=[],e=[],f=[],g=[],h=1e-5,i=new v(),j=new v(),l=new v(),k=new v(),n=new v();a.length<3&&console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");const m=b+1;for(let o=0;o<=c;o++){const s=o/c;for(let r=0;r<=b;r++){const p=r/b;a(p,s,j),e.push(j.x,j.y,j.z),p-h>=0?(a(p-h,s,l),k.subVectors(j,l)):(a(p+h,s,l),k.subVectors(l,j)),s-h>=0?(a(p,s-h,l),n.subVectors(j,l)):(a(p,s+h,l),n.subVectors(l,j)),i.crossVectors(k,n).normalize(),f.push(i.x,i.y,i.z),g.push(p,s)}}for(let o=0;o<c;o++)for(let s=0;s<b;s++){const r=o*m+s,p=o*m+s+1,q=(o+1)*m+s+1,u=(o+1)*m+s;d.push(r,p,u),d.push(p,q,u)}this.setIndex(d),this.setAttribute("position",new aa(e,3)),this.setAttribute("normal",new aa(f,3)),this.setAttribute("uv",new aa(g,2))}Ie.prototype=Object.create(fa.prototype);Ie.prototype.constructor=Ie;function gg(a,b,c,d){ra.call(this),this.type="PolyhedronGeometry",this.parameters={vertices:a,indices:b,radius:c,detail:d},this.fromBufferGeometry(new Db(a,b,c,d)),this.mergeVertices()}gg.prototype=Object.create(ra.prototype);gg.prototype.constructor=gg;function Db(a,b,c,d){fa.call(this),this.type="PolyhedronBufferGeometry",this.parameters={vertices:a,indices:b,radius:c,detail:d},c=c||1,d=d||0;const e=[],f=[];g(d),i(c),j(),this.setAttribute("position",new aa(e,3)),this.setAttribute("normal",new aa(e.slice(),3)),this.setAttribute("uv",new aa(f,2)),d===0?this.computeVertexNormals():this.normalizeNormals();function g(p){const q=new v(),u=new v(),t=new v();for(let w=0;w<b.length;w+=3)n(b[w+0],q),n(b[w+1],u),n(b[w+2],t),h(q,u,t,p)}function h(p,q,u,t){const w=Math.pow(2,t),A=[];for(let B=0;B<=w;B++){A[B]=[];const L=p.clone().lerp(u,B/w),C=q.clone().lerp(u,B/w),U=w-B;for(let I=0;I<=U;I++)I===0&&B===w?A[B][I]=L:A[B][I]=L.clone().lerp(C,I/U)}for(let B=0;B<w;B++)for(let L=0;L<2*(w-B)-1;L++){const C=Math.floor(L/2);L%2===0?(k(A[B][C+1]),k(A[B+1][C]),k(A[B][C])):(k(A[B][C+1]),k(A[B+1][C+1]),k(A[B+1][C]))}}function i(p){const q=new v();for(let u=0;u<e.length;u+=3)q.x=e[u+0],q.y=e[u+1],q.z=e[u+2],q.normalize().multiplyScalar(p),e[u+0]=q.x,e[u+1]=q.y,e[u+2]=q.z}function j(){const p=new v();for(let q=0;q<e.length;q+=3){p.x=e[q+0],p.y=e[q+1],p.z=e[q+2];const u=s(p)/2/Math.PI+.5,t=r(p)/Math.PI+.5;f.push(u,1-t)}m(),l()}function l(){for(let p=0;p<f.length;p+=6){const q=f[p+0],u=f[p+2],t=f[p+4],w=Math.max(q,u,t),A=Math.min(q,u,t);w>.9&&A<.1&&(q<.2&&(f[p+0]+=1),u<.2&&(f[p+2]+=1),t<.2&&(f[p+4]+=1))}}function k(p){e.push(p.x,p.y,p.z)}function n(p,q){const u=p*3;q.x=a[u+0],q.y=a[u+1],q.z=a[u+2]}function m(){const p=new v(),q=new v(),u=new v(),t=new v(),w=new N(),A=new N(),B=new N();for(let L=0,C=0;L<e.length;L+=9,C+=6){p.set(e[L+0],e[L+1],e[L+2]),q.set(e[L+3],e[L+4],e[L+5]),u.set(e[L+6],e[L+7],e[L+8]),w.set(f[C+0],f[C+1]),A.set(f[C+2],f[C+3]),B.set(f[C+4],f[C+5]),t.copy(p).add(q).add(u).divideScalar(3);const U=s(t);o(w,C+0,p,U),o(A,C+2,q,U),o(B,C+4,u,U)}}function o(p,q,u,t){t<0&&p.x===1&&(f[q]=p.x-1),u.x===0&&u.z===0&&(f[q]=t/2/Math.PI+.5)}function s(p){return Math.atan2(p.z,-p.x)}function r(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}Db.prototype=Object.create(fa.prototype);Db.prototype.constructor=Db;function hg(a,b){ra.call(this),this.type="TetrahedronGeometry",this.parameters={radius:a,detail:b},this.fromBufferGeometry(new Je(a,b)),this.mergeVertices()}hg.prototype=Object.create(ra.prototype);hg.prototype.constructor=hg;function Je(a,b){const c=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],d=[2,1,0,0,3,2,1,3,0,2,3,1];Db.call(this,c,d,a,b),this.type="TetrahedronBufferGeometry",this.parameters={radius:a,detail:b}}Je.prototype=Object.create(Db.prototype);Je.prototype.constructor=Je;function ig(a,b){ra.call(this),this.type="OctahedronGeometry",this.parameters={radius:a,detail:b},this.fromBufferGeometry(new Od(a,b)),this.mergeVertices()}ig.prototype=Object.create(ra.prototype);ig.prototype.constructor=ig;function Od(a,b){const c=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],d=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];Db.call(this,c,d,a,b),this.type="OctahedronBufferGeometry",this.parameters={radius:a,detail:b}}Od.prototype=Object.create(Db.prototype);Od.prototype.constructor=Od;function jg(a,b){ra.call(this),this.type="IcosahedronGeometry",this.parameters={radius:a,detail:b},this.fromBufferGeometry(new Ke(a,b)),this.mergeVertices()}jg.prototype=Object.create(ra.prototype);jg.prototype.constructor=jg;function Ke(a,b){const c=(1+Math.sqrt(5))/2,d=[-1,c,0,1,c,0,-1,-c,0,1,-c,0,0,-1,c,0,1,c,0,-1,-c,0,1,-c,c,0,-1,c,0,1,-c,0,-1,-c,0,1],e=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];Db.call(this,d,e,a,b),this.type="IcosahedronBufferGeometry",this.parameters={radius:a,detail:b}}Ke.prototype=Object.create(Db.prototype);Ke.prototype.constructor=Ke;function kg(a,b){ra.call(this),this.type="DodecahedronGeometry",this.parameters={radius:a,detail:b},this.fromBufferGeometry(new Le(a,b)),this.mergeVertices()}kg.prototype=Object.create(ra.prototype);kg.prototype.constructor=kg;function Le(a,b){const c=(1+Math.sqrt(5))/2,d=1/c,e=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-d,-c,0,-d,c,0,d,-c,0,d,c,-d,-c,0,-d,c,0,d,-c,0,d,c,0,-c,0,-d,c,0,-d,-c,0,d,c,0,d],f=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];Db.call(this,e,f,a,b),this.type="DodecahedronBufferGeometry",this.parameters={radius:a,detail:b}}Le.prototype=Object.create(Db.prototype);Le.prototype.constructor=Le;function lg(a,b,c,d,e,f){ra.call(this),this.type="TubeGeometry",this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e},f!==void 0&&console.warn("THREE.TubeGeometry: taper has been removed.");const g=new Pd(a,b,c,d,e);this.tangents=g.tangents,this.normals=g.normals,this.binormals=g.binormals,this.fromBufferGeometry(g),this.mergeVertices()}lg.prototype=Object.create(ra.prototype);lg.prototype.constructor=lg;function Pd(a,b,c,d,e){fa.call(this),this.type="TubeBufferGeometry",this.parameters={path:a,tubularSegments:b,radius:c,radialSegments:d,closed:e},b=b||64,c=c||1,d=d||8,e=e||!1;const f=a.computeFrenetFrames(b,e);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const g=new v(),h=new v(),i=new N();let j=new v();const l=[],k=[],n=[],m=[];o(),this.setIndex(m),this.setAttribute("position",new aa(l,3)),this.setAttribute("normal",new aa(k,3)),this.setAttribute("uv",new aa(n,2));function o(){for(let q=0;q<b;q++)s(q);s(e===!1?b:0),p(),r()}function s(q){j=a.getPointAt(q/b,j);const u=f.normals[q],t=f.binormals[q];for(let w=0;w<=d;w++){const A=w/d*Math.PI*2,B=Math.sin(A),L=-Math.cos(A);h.x=L*u.x+B*t.x,h.y=L*u.y+B*t.y,h.z=L*u.z+B*t.z,h.normalize(),k.push(h.x,h.y,h.z),g.x=j.x+c*h.x,g.y=j.y+c*h.y,g.z=j.z+c*h.z,l.push(g.x,g.y,g.z)}}function r(){for(let q=1;q<=b;q++)for(let u=1;u<=d;u++){const t=(d+1)*(q-1)+(u-1),w=(d+1)*q+(u-1),A=(d+1)*q+u,B=(d+1)*(q-1)+u;m.push(t,w,B),m.push(w,A,B)}}function p(){for(let q=0;q<=b;q++)for(let u=0;u<=d;u++)i.x=q/b,i.y=u/d,n.push(i.x,i.y)}}Pd.prototype=Object.create(fa.prototype);Pd.prototype.constructor=Pd;Pd.prototype.toJSON=function(){const a=fa.prototype.toJSON.call(this);return a.path=this.parameters.path.toJSON(),a};function mg(a,b,c,d,e,f,g){ra.call(this),this.type="TorusKnotGeometry",this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f},g!==void 0&&console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead."),this.fromBufferGeometry(new Me(a,b,c,d,e,f)),this.mergeVertices()}mg.prototype=Object.create(ra.prototype);mg.prototype.constructor=mg;function Me(a,b,c,d,e,f){fa.call(this),this.type="TorusKnotBufferGeometry",this.parameters={radius:a,tube:b,tubularSegments:c,radialSegments:d,p:e,q:f},a=a||1,b=b||.4,c=Math.floor(c)||64,d=Math.floor(d)||8,e=e||2,f=f||3;const g=[],h=[],i=[],j=[],l=new v(),k=new v(),n=new v(),m=new v(),o=new v(),s=new v(),r=new v();for(let q=0;q<=c;++q){const u=q/c*e*Math.PI*2;p(u,e,f,a,n),p(u+.01,e,f,a,m),s.subVectors(m,n),r.addVectors(m,n),o.crossVectors(s,r),r.crossVectors(o,s),o.normalize(),r.normalize();for(let t=0;t<=d;++t){const w=t/d*Math.PI*2,A=-b*Math.cos(w),B=b*Math.sin(w);l.x=n.x+(A*r.x+B*o.x),l.y=n.y+(A*r.y+B*o.y),l.z=n.z+(A*r.z+B*o.z),h.push(l.x,l.y,l.z),k.subVectors(l,n).normalize(),i.push(k.x,k.y,k.z),j.push(q/c),j.push(t/d)}}for(let q=1;q<=c;q++)for(let u=1;u<=d;u++){const t=(d+1)*(q-1)+(u-1),w=(d+1)*q+(u-1),A=(d+1)*q+u,B=(d+1)*(q-1)+u;g.push(t,w,B),g.push(w,A,B)}this.setIndex(g),this.setAttribute("position",new aa(h,3)),this.setAttribute("normal",new aa(i,3)),this.setAttribute("uv",new aa(j,2));function p(q,u,t,w,A){const B=Math.cos(q),L=Math.sin(q),C=t/u*q,U=Math.cos(C);A.x=w*(2+U)*.5*B,A.y=w*(2+U)*L*.5,A.z=w*Math.sin(C)*.5}}Me.prototype=Object.create(fa.prototype);Me.prototype.constructor=Me;function ng(a,b,c,d,e){ra.call(this),this.type="TorusGeometry",this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e},this.fromBufferGeometry(new Ne(a,b,c,d,e)),this.mergeVertices()}ng.prototype=Object.create(ra.prototype);ng.prototype.constructor=ng;function Ne(a,b,c,d,e){fa.call(this),this.type="TorusBufferGeometry",this.parameters={radius:a,tube:b,radialSegments:c,tubularSegments:d,arc:e},a=a||1,b=b||.4,c=Math.floor(c)||8,d=Math.floor(d)||6,e=e||Math.PI*2;const f=[],g=[],h=[],i=[],j=new v(),l=new v(),k=new v();for(let n=0;n<=c;n++)for(let m=0;m<=d;m++){const o=m/d*e,s=n/c*Math.PI*2;l.x=(a+b*Math.cos(s))*Math.cos(o),l.y=(a+b*Math.cos(s))*Math.sin(o),l.z=b*Math.sin(s),g.push(l.x,l.y,l.z),j.x=a*Math.cos(o),j.y=a*Math.sin(o),k.subVectors(l,j).normalize(),h.push(k.x,k.y,k.z),i.push(m/d),i.push(n/c)}for(let n=1;n<=c;n++)for(let m=1;m<=d;m++){const o=(d+1)*n+m-1,s=(d+1)*(n-1)+m-1,r=(d+1)*(n-1)+m,p=(d+1)*n+m;f.push(o,s,p),f.push(s,r,p)}this.setIndex(f),this.setAttribute("position",new aa(g,3)),this.setAttribute("normal",new aa(h,3)),this.setAttribute("uv",new aa(i,2))}Ne.prototype=Object.create(fa.prototype);Ne.prototype.constructor=Ne;const or={triangulate:function(a,b,c){c=c||2;let d=b&&b.length,e=d?b[0]*c:a.length,f=hk(a,0,e,c,!0),g=[];if(!f||f.next===f.prev)return g;let h,i,j,l,k,n,m;d&&(f=tr(a,b,f,c));if(a.length>80*c){h=j=a[0],i=l=a[1];for(let o=c;o<e;o+=c)k=a[o],n=a[o+1],k<h&&(h=k),n<i&&(i=n),k>j&&(j=k),n>l&&(l=n);m=Math.max(j-h,l-i),m=m!==0?1/m:0}return Oe(f,g,c,h,i,m),g}};function hk(a,b,c,d,e){let f,g;if(e===Er(a,b,c,d)>0)for(f=b;f<c;f+=d)g=kk(f,a[f],a[f+1],g);else for(f=c-d;f>=b;f-=d)g=kk(f,a[f],a[f+1],g);return g&&og(g,g.next)&&(Qe(g),g=g.next),g}function Fc(a,b){if(!a)return a;b||(b=a);let c=a,d;do{d=!1;if(!c.steiner&&(og(c,c.next)||Ra(c.prev,c,c.next)===0)){Qe(c),c=b=c.prev;if(c===c.next)break;d=!0}else c=c.next}while(d||c!==b);return b}function Oe(a,b,c,d,e,f,g){if(!a)return;!g&&f&&yr(a,d,e,f);let h=a,i,j;for(;a.prev!==a.next;){i=a.prev,j=a.next;if(f?qr(a,d,e,f):pr(a)){b.push(i.i/c),b.push(a.i/c),b.push(j.i/c),Qe(a),a=j.next,h=j.next;continue}a=j;if(a===h){g?g===1?(a=rr(Fc(a),b,c),Oe(a,b,c,d,e,f,2)):g===2&&sr(a,b,c,d,e,f):Oe(Fc(a),b,c,d,e,f,1);break}}}function pr(a){let b=a.prev,c=a,d=a.next;if(Ra(b,c,d)>=0)return!1;let e=a.next.next;for(;e!==a.prev;){if(Qd(b.x,b.y,c.x,c.y,d.x,d.y,e.x,e.y)&&Ra(e.prev,e,e.next)>=0)return!1;e=e.next}return!0}function qr(a,b,c,d){let e=a.prev,f=a,g=a.next;if(Ra(e,f,g)>=0)return!1;let h=e.x<f.x?e.x<g.x?e.x:g.x:f.x<g.x?f.x:g.x,i=e.y<f.y?e.y<g.y?e.y:g.y:f.y<g.y?f.y:g.y,j=e.x>f.x?e.x>g.x?e.x:g.x:f.x>g.x?f.x:g.x,l=e.y>f.y?e.y>g.y?e.y:g.y:f.y>g.y?f.y:g.y,k=Uh(h,i,b,c,d),n=Uh(j,l,b,c,d),m=a.prevZ,o=a.nextZ;for(;m&&m.z>=k&&o&&o.z<=n;){if(m!==a.prev&&m!==a.next&&Qd(e.x,e.y,f.x,f.y,g.x,g.y,m.x,m.y)&&Ra(m.prev,m,m.next)>=0)return!1;m=m.prevZ;if(o!==a.prev&&o!==a.next&&Qd(e.x,e.y,f.x,f.y,g.x,g.y,o.x,o.y)&&Ra(o.prev,o,o.next)>=0)return!1;o=o.nextZ}for(;m&&m.z>=k;){if(m!==a.prev&&m!==a.next&&Qd(e.x,e.y,f.x,f.y,g.x,g.y,m.x,m.y)&&Ra(m.prev,m,m.next)>=0)return!1;m=m.prevZ}for(;o&&o.z<=n;){if(o!==a.prev&&o!==a.next&&Qd(e.x,e.y,f.x,f.y,g.x,g.y,o.x,o.y)&&Ra(o.prev,o,o.next)>=0)return!1;o=o.nextZ}return!0}function rr(a,b,c){let d=a;do{let e=d.prev,f=d.next.next;!og(e,f)&&ik(e,d,d.next,f)&&Pe(e,f)&&Pe(f,e)&&(b.push(e.i/c),b.push(d.i/c),b.push(f.i/c),Qe(d),Qe(d.next),d=a=f),d=d.next}while(d!==a);return Fc(d)}function sr(a,b,c,d,e,f){let g=a;do{let h=g.next.next;for(;h!==g.prev;){if(g.i!==h.i&&Br(g,h)){let i=jk(g,h);g=Fc(g,g.next),i=Fc(i,i.next),Oe(g,b,c,d,e,f),Oe(i,b,c,d,e,f);return}h=h.next}g=g.next}while(g!==a)}function tr(a,b,c,d){let e=[],f,g,h,i,j;for(f=0,g=b.length;f<g;f++)h=b[f]*d,i=f<g-1?b[f+1]*d:a.length,j=hk(a,h,i,d,!1),j===j.next&&(j.steiner=!0),e.push(Ar(j));for(e.sort(ur),f=0;f<e.length;f++)vr(e[f],c),c=Fc(c,c.next);return c}function ur(a,b){return a.x-b.x}function vr(a,b){b=wr(a,b);if(b){const c=jk(b,a);Fc(b,b.next),Fc(c,c.next)}}function wr(a,b){let c=b,d=a.x,e=a.y,f=-Infinity,g;do{if(e<=c.y&&e>=c.next.y&&c.next.y!==c.y){let n=c.x+(e-c.y)*(c.next.x-c.x)/(c.next.y-c.y);if(n<=d&&n>f){f=n;if(n===d){if(e===c.y)return c;if(e===c.next.y)return c.next}g=c.x<c.next.x?c:c.next}}c=c.next}while(c!==b);if(!g)return null;if(d===f)return g;let h=g,i=g.x,j=g.y,l=Infinity,k;c=g;do d>=c.x&&c.x>=i&&d!==c.x&&Qd(e<j?d:f,e,i,j,e<j?f:d,e,c.x,c.y)&&(k=Math.abs(e-c.y)/(d-c.x),Pe(c,a)&&(k<l||k===l&&(c.x>g.x||c.x===g.x&&xr(g,c)))&&(g=c,l=k)),c=c.next;while(c!==h);return g}function xr(a,b){return Ra(a.prev,a,b.prev)<0&&Ra(b.next,a,a.next)<0}function yr(a,b,c,d){let e=a;do e.z===null&&(e.z=Uh(e.x,e.y,b,c,d)),e.prevZ=e.prev,e.nextZ=e.next,e=e.next;while(e!==a);e.prevZ.nextZ=null,e.prevZ=null,zr(e)}function zr(a){let b,c,d,e,f,g,h,i,j=1;do{for(c=a,a=null,f=null,g=0;c;){for(g++,d=c,h=0,b=0;b<j;b++){h++,d=d.nextZ;if(!d)break}for(i=j;h>0||i>0&&d;)h!==0&&(i===0||!d||c.z<=d.z)?(e=c,c=c.nextZ,h--):(e=d,d=d.nextZ,i--),f?f.nextZ=e:a=e,e.prevZ=f,f=e;c=d}f.nextZ=null,j*=2}while(g>1);return a}function Uh(a,b,c,d,e){return a=32767*(a-c)*e,b=32767*(b-d)*e,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,b=(b|b<<8)&16711935,b=(b|b<<4)&252645135,b=(b|b<<2)&858993459,b=(b|b<<1)&1431655765,a|b<<1}function Ar(a){let b=a,c=a;do(b.x<c.x||b.x===c.x&&b.y<c.y)&&(c=b),b=b.next;while(b!==a);return c}function Qd(a,b,c,d,e,f,g,h){return(e-g)*(b-h)-(a-g)*(f-h)>=0&&(a-g)*(d-h)-(c-g)*(b-h)>=0&&(c-g)*(f-h)-(e-g)*(d-h)>=0}function Br(a,b){return a.next.i!==b.i&&a.prev.i!==b.i&&!Cr(a,b)&&(Pe(a,b)&&Pe(b,a)&&Dr(a,b)&&(Ra(a.prev,a,b.prev)||Ra(a,b.prev,b))||og(a,b)&&Ra(a.prev,a,a.next)>0&&Ra(b.prev,b,b.next)>0)}function Ra(a,b,c){return(b.y-a.y)*(c.x-b.x)-(b.x-a.x)*(c.y-b.y)}function og(a,b){return a.x===b.x&&a.y===b.y}function ik(a,b,c,d){const e=qg(Ra(a,b,c)),f=qg(Ra(a,b,d)),g=qg(Ra(c,d,a)),h=qg(Ra(c,d,b));return e!==f&&g!==h?!0:e===0&&pg(a,c,b)?!0:f===0&&pg(a,d,b)?!0:g===0&&pg(c,a,d)?!0:h===0&&pg(c,b,d)?!0:!1}function pg(a,b,c){return b.x<=Math.max(a.x,c.x)&&b.x>=Math.min(a.x,c.x)&&b.y<=Math.max(a.y,c.y)&&b.y>=Math.min(a.y,c.y)}function qg(a){return a>0?1:a<0?-1:0}function Cr(a,b){let c=a;do{if(c.i!==a.i&&c.next.i!==a.i&&c.i!==b.i&&c.next.i!==b.i&&ik(c,c.next,a,b))return!0;c=c.next}while(c!==a);return!1}function Pe(a,b){return Ra(a.prev,a,a.next)<0?Ra(a,b,a.next)>=0&&Ra(a,a.prev,b)>=0:Ra(a,b,a.prev)<0||Ra(a,a.next,b)<0}function Dr(a,b){let c=a,d=!1,e=(a.x+b.x)/2,f=(a.y+b.y)/2;do c.y>f!==c.next.y>f&&c.next.y!==c.y&&e<(c.next.x-c.x)*(f-c.y)/(c.next.y-c.y)+c.x&&(d=!d),c=c.next;while(c!==a);return d}function jk(a,b){let c=new Vh(a.i,a.x,a.y),d=new Vh(b.i,b.x,b.y),e=a.next,f=b.prev;return a.next=b,b.prev=a,c.next=e,e.prev=c,d.next=c,c.prev=d,f.next=d,d.prev=f,d}function kk(a,b,c,d){const e=new Vh(a,b,c);return d?(e.next=d.next,e.prev=d,d.next.prev=e,d.next=e):(e.prev=e,e.next=e),e}function Qe(a){a.next.prev=a.prev,a.prev.next=a.next,a.prevZ&&(a.prevZ.nextZ=a.nextZ),a.nextZ&&(a.nextZ.prevZ=a.prevZ)}function Vh(a,b,c){this.i=a,this.x=b,this.y=c,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Er(a,b,c,d){let e=0;for(let f=b,g=c-d;f<c;f+=d)e+=(a[g]-a[f])*(a[f+1]+a[g+1]),g=f;return e}const Gc={area:function(a){const b=a.length;let c=0;for(let d=b-1,e=0;e<b;d=e++)c+=a[d].x*a[e].y-a[e].x*a[d].y;return c*.5},isClockWise:function(a){return Gc.area(a)<0},triangulateShape:function(a,b){const c=[],d=[],e=[];lk(a),mk(c,a);let f=a.length;b.forEach(lk);for(let h=0;h<b.length;h++)d.push(f),f+=b[h].length,mk(c,b[h]);const g=or.triangulate(c,d);for(let h=0;h<g.length;h+=3)e.push(g.slice(h,h+3));return e}};function lk(a){const b=a.length;b>2&&a[b-1].equals(a[0])&&a.pop()}function mk(a,b){for(let c=0;c<b.length;c++)a.push(b[c].x),a.push(b[c].y)}function Rd(a,b){ra.call(this),this.type="ExtrudeGeometry",this.parameters={shapes:a,options:b},this.fromBufferGeometry(new nc(a,b)),this.mergeVertices()}Rd.prototype=Object.create(ra.prototype);Rd.prototype.constructor=Rd;Rd.prototype.toJSON=function(){const a=ra.prototype.toJSON.call(this),b=this.parameters.shapes,c=this.parameters.options;return nk(b,c,a)};function nc(a,b){fa.call(this),this.type="ExtrudeBufferGeometry",this.parameters={shapes:a,options:b},a=Array.isArray(a)?a:[a];const c=this,d=[],e=[];for(let g=0,h=a.length;g<h;g++){const i=a[g];f(i)}this.setAttribute("position",new aa(d,3)),this.setAttribute("uv",new aa(e,2)),this.computeVertexNormals();function f(g){const h=[],i=b.curveSegments!==void 0?b.curveSegments:12,j=b.steps!==void 0?b.steps:1;let l=b.depth!==void 0?b.depth:100,k=b.bevelEnabled!==void 0?b.bevelEnabled:!0,n=b.bevelThickness!==void 0?b.bevelThickness:6,m=b.bevelSize!==void 0?b.bevelSize:n-2,o=b.bevelOffset!==void 0?b.bevelOffset:0,s=b.bevelSegments!==void 0?b.bevelSegments:3;const r=b.extrudePath,p=b.UVGenerator!==void 0?b.UVGenerator:Fr;b.amount!==void 0&&(console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth."),l=b.amount);let q,u=!1,t,w,A,B;r&&(q=r.getSpacedPoints(j),u=!0,k=!1,t=r.computeFrenetFrames(j,!1),w=new v(),A=new v(),B=new v()),k||(s=0,n=0,m=0,o=0);const L=g.extractPoints(i);let C=L.shape;const U=L.holes,I=!Gc.isClockWise(C);if(I){C=C.reverse();for(let R=0,V=U.length;R<V;R++){const Y=U[R];Gc.isClockWise(Y)&&(U[R]=Y.reverse())}}const J=Gc.triangulateShape(C,U),H=C;for(let R=0,V=U.length;R<V;R++){const Y=U[R];C=C.concat(Y)}function D(R,V,Y){return V||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().multiplyScalar(Y).add(R)}const F=C.length,M=J.length;function S(R,V,Y){let ia,ga,xa;const x=R.x-V.x,z=R.y-V.y,W=Y.x-R.x,P=Y.y-R.y,E=x*x+z*z,Z=x*P-z*W;if(Math.abs(Z)>Number.EPSILON){const _=Math.sqrt(E),oa=Math.sqrt(W*W+P*P),X=V.x-z/_,ha=V.y+x/_,Da=Y.x-P/oa,sa=Y.y+W/oa,la=((Da-X)*P-(sa-ha)*W)/(x*P-z*W);ia=X+x*la-R.x,ga=ha+z*la-R.y;const ta=ia*ia+ga*ga;if(ta<=2)return new N(ia,ga);xa=Math.sqrt(ta/2)}else{let _=!1;x>Number.EPSILON?W>Number.EPSILON&&(_=!0):x<-Number.EPSILON?W<-Number.EPSILON&&(_=!0):Math.sign(z)===Math.sign(P)&&(_=!0),_?(ia=-z,ga=x,xa=Math.sqrt(E)):(ia=x,ga=z,xa=Math.sqrt(E/2))}return new N(ia/xa,ga/xa)}const T=[];for(let R=0,V=H.length,Y=V-1,ia=R+1;R<V;R++,Y++,ia++)Y===V&&(Y=0),ia===V&&(ia=0),T[R]=S(H[R],H[Y],H[ia]);const ea=[];let ka,ma=T.concat();for(let R=0,V=U.length;R<V;R++){const Y=U[R];ka=[];for(let ia=0,ga=Y.length,xa=ga-1,x=ia+1;ia<ga;ia++,xa++,x++)xa===ga&&(xa=0),x===ga&&(x=0),ka[ia]=S(Y[ia],Y[xa],Y[x]);ea.push(ka),ma=ma.concat(ka)}for(let R=0;R<s;R++){const V=R/s,Y=n*Math.cos(V*Math.PI/2),ia=m*Math.sin(V*Math.PI/2)+o;for(let ga=0,xa=H.length;ga<xa;ga++){const x=D(H[ga],T[ga],ia);Q(x.x,x.y,-Y)}for(let ga=0,xa=U.length;ga<xa;ga++){const x=U[ga];ka=ea[ga];for(let z=0,W=x.length;z<W;z++){const P=D(x[z],ka[z],ia);Q(P.x,P.y,-Y)}}}const Ga=m+o;for(let R=0;R<F;R++){const V=k?D(C[R],ma[R],Ga):C[R];u?(A.copy(t.normals[0]).multiplyScalar(V.x),w.copy(t.binormals[0]).multiplyScalar(V.y),B.copy(q[0]).add(A).add(w),Q(B.x,B.y,B.z)):Q(V.x,V.y,0)}for(let R=1;R<=j;R++)for(let V=0;V<F;V++){const Y=k?D(C[V],ma[V],Ga):C[V];u?(A.copy(t.normals[R]).multiplyScalar(Y.x),w.copy(t.binormals[R]).multiplyScalar(Y.y),B.copy(q[R]).add(A).add(w),Q(B.x,B.y,B.z)):Q(Y.x,Y.y,l/j*R)}for(let R=s-1;R>=0;R--){const V=R/s,Y=n*Math.cos(V*Math.PI/2),ia=m*Math.sin(V*Math.PI/2)+o;for(let ga=0,xa=H.length;ga<xa;ga++){const x=D(H[ga],T[ga],ia);Q(x.x,x.y,l+Y)}for(let ga=0,xa=U.length;ga<xa;ga++){const x=U[ga];ka=ea[ga];for(let z=0,W=x.length;z<W;z++){const P=D(x[z],ka[z],ia);u?Q(P.x,P.y+q[j-1].y,q[j-1].x+Y):Q(P.x,P.y,l+Y)}}}Aa(),Ta();function Aa(){const R=d.length/3;if(k){let V=0,Y=F*V;for(let ia=0;ia<M;ia++){const ga=J[ia];cb(ga[2]+Y,ga[1]+Y,ga[0]+Y)}V=j+s*2,Y=F*V;for(let ia=0;ia<M;ia++){const ga=J[ia];cb(ga[0]+Y,ga[1]+Y,ga[2]+Y)}}else{for(let V=0;V<M;V++){const Y=J[V];cb(Y[2],Y[1],Y[0])}for(let V=0;V<M;V++){const Y=J[V];cb(Y[0]+F*j,Y[1]+F*j,Y[2]+F*j)}}c.addGroup(R,d.length/3-R,0)}function Ta(){const R=d.length/3;let V=0;Ka(H,V),V+=H.length;for(let Y=0,ia=U.length;Y<ia;Y++){const ga=U[Y];Ka(ga,V),V+=ga.length}c.addGroup(R,d.length/3-R,1)}function Ka(R,V){let Y=R.length;for(;--Y>=0;){const ia=Y;let ga=Y-1;ga<0&&(ga=R.length-1);for(let xa=0,x=j+s*2;xa<x;xa++){const z=F*xa,W=F*(xa+1),P=V+ia+z,E=V+ga+z,Z=V+ga+W,_=V+ia+W;Ba(P,E,Z,_)}}}function Q(R,V,Y){h.push(R),h.push(V),h.push(Y)}function cb(R,V,Y){Ca(R),Ca(V),Ca(Y);const ia=d.length/3,ga=p.generateTopUV(c,d,ia-3,ia-2,ia-1);ua(ga[0]),ua(ga[1]),ua(ga[2])}function Ba(R,V,Y,ia){Ca(R),Ca(V),Ca(ia),Ca(V),Ca(Y),Ca(ia);const ga=d.length/3,xa=p.generateSideWallUV(c,d,ga-6,ga-3,ga-2,ga-1);ua(xa[0]),ua(xa[1]),ua(xa[3]),ua(xa[1]),ua(xa[2]),ua(xa[3])}function Ca(R){d.push(h[R*3+0]),d.push(h[R*3+1]),d.push(h[R*3+2])}function ua(R){e.push(R.x),e.push(R.y)}}}nc.prototype=Object.create(fa.prototype);nc.prototype.constructor=nc;nc.prototype.toJSON=function(){const a=fa.prototype.toJSON.call(this),b=this.parameters.shapes,c=this.parameters.options;return nk(b,c,a)};const Fr={generateTopUV:function(a,b,c,d,e){const f=b[c*3],g=b[c*3+1],h=b[d*3],i=b[d*3+1],j=b[e*3],l=b[e*3+1];return[new N(f,g),new N(h,i),new N(j,l)]},generateSideWallUV:function(a,b,c,d,e,f){const g=b[c*3],h=b[c*3+1],i=b[c*3+2],j=b[d*3],l=b[d*3+1],k=b[d*3+2],n=b[e*3],m=b[e*3+1],o=b[e*3+2],s=b[f*3],r=b[f*3+1],p=b[f*3+2];return Math.abs(h-l)<.01?[new N(g,1-i),new N(j,1-k),new N(n,1-o),new N(s,1-p)]:[new N(h,1-i),new N(l,1-k),new N(m,1-o),new N(r,1-p)]}};function nk(a,b,c){c.shapes=[];if(Array.isArray(a))for(let d=0,e=a.length;d<e;d++){const f=a[d];c.shapes.push(f.uuid)}else c.shapes.push(a.uuid);return b.extrudePath!==void 0&&(c.options.extrudePath=b.extrudePath.toJSON()),c}function rg(a,b){ra.call(this),this.type="TextGeometry",this.parameters={text:a,parameters:b},this.fromBufferGeometry(new Re(a,b)),this.mergeVertices()}rg.prototype=Object.create(ra.prototype);rg.prototype.constructor=rg;function Re(a,b){b=b||{};const c=b.font;if(!(c&&c.isFont))return console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font."),new ra();const d=c.generateShapes(a,b.size);b.depth=b.height!==void 0?b.height:50,b.bevelThickness===void 0&&(b.bevelThickness=10),b.bevelSize===void 0&&(b.bevelSize=8),b.bevelEnabled===void 0&&(b.bevelEnabled=!1),nc.call(this,d,b),this.type="TextBufferGeometry"}Re.prototype=Object.create(nc.prototype);Re.prototype.constructor=Re;function sg(a,b,c,d,e,f,g){ra.call(this),this.type="SphereGeometry",this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g},this.fromBufferGeometry(new Hc(a,b,c,d,e,f,g)),this.mergeVertices()}sg.prototype=Object.create(ra.prototype);sg.prototype.constructor=sg;function Hc(a,b,c,d,e,f,g){fa.call(this),this.type="SphereBufferGeometry",this.parameters={radius:a,widthSegments:b,heightSegments:c,phiStart:d,phiLength:e,thetaStart:f,thetaLength:g},a=a||1,b=Math.max(3,Math.floor(b)||8),c=Math.max(2,Math.floor(c)||6),d=d!==void 0?d:0,e=e!==void 0?e:Math.PI*2,f=f!==void 0?f:0,g=g!==void 0?g:Math.PI;const h=Math.min(f+g,Math.PI);let i=0;const j=[],l=new v(),k=new v(),n=[],m=[],o=[],s=[];for(let r=0;r<=c;r++){const p=[],q=r/c;let u=0;r==0&&f==0?u=.5/b:r==c&&h==Math.PI&&(u=-.5/b);for(let t=0;t<=b;t++){const w=t/b;l.x=-a*Math.cos(d+w*e)*Math.sin(f+q*g),l.y=a*Math.cos(f+q*g),l.z=a*Math.sin(d+w*e)*Math.sin(f+q*g),m.push(l.x,l.y,l.z),k.copy(l).normalize(),o.push(k.x,k.y,k.z),s.push(w+u,1-q),p.push(i++)}j.push(p)}for(let r=0;r<c;r++)for(let p=0;p<b;p++){const q=j[r][p+1],u=j[r][p],t=j[r+1][p],w=j[r+1][p+1];(r!==0||f>0)&&n.push(q,u,w),(r!==c-1||h<Math.PI)&&n.push(u,t,w)}this.setIndex(n),this.setAttribute("position",new aa(m,3)),this.setAttribute("normal",new aa(o,3)),this.setAttribute("uv",new aa(s,2))}Hc.prototype=Object.create(fa.prototype);Hc.prototype.constructor=Hc;function tg(a,b,c,d,e,f){ra.call(this),this.type="RingGeometry",this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f},this.fromBufferGeometry(new Se(a,b,c,d,e,f)),this.mergeVertices()}tg.prototype=Object.create(ra.prototype);tg.prototype.constructor=tg;function Se(a,b,c,d,e,f){fa.call(this),this.type="RingBufferGeometry",this.parameters={innerRadius:a,outerRadius:b,thetaSegments:c,phiSegments:d,thetaStart:e,thetaLength:f},a=a||.5,b=b||1,e=e!==void 0?e:0,f=f!==void 0?f:Math.PI*2,c=c!==void 0?Math.max(3,c):8,d=d!==void 0?Math.max(1,d):1;const g=[],h=[],i=[],j=[];let l=a;const k=(b-a)/d,n=new v(),m=new N();for(let o=0;o<=d;o++){for(let s=0;s<=c;s++){const r=e+s/c*f;n.x=l*Math.cos(r),n.y=l*Math.sin(r),h.push(n.x,n.y,n.z),i.push(0,0,1),m.x=(n.x/b+1)/2,m.y=(n.y/b+1)/2,j.push(m.x,m.y)}l+=k}for(let o=0;o<d;o++){const s=o*(c+1);for(let r=0;r<c;r++){const p=r+s,q=p,u=p+c+1,t=p+c+2,w=p+1;g.push(q,u,w),g.push(u,t,w)}}this.setIndex(g),this.setAttribute("position",new aa(h,3)),this.setAttribute("normal",new aa(i,3)),this.setAttribute("uv",new aa(j,2))}Se.prototype=Object.create(fa.prototype);Se.prototype.constructor=Se;function ug(a,b,c,d){ra.call(this),this.type="LatheGeometry",this.parameters={points:a,segments:b,phiStart:c,phiLength:d},this.fromBufferGeometry(new Te(a,b,c,d)),this.mergeVertices()}ug.prototype=Object.create(ra.prototype);ug.prototype.constructor=ug;function Te(a,b,c,d){fa.call(this),this.type="LatheBufferGeometry",this.parameters={points:a,segments:b,phiStart:c,phiLength:d},b=Math.floor(b)||12,c=c||0,d=d||Math.PI*2,d=va.clamp(d,0,Math.PI*2);const e=[],f=[],g=[],h=1/b,i=new v(),j=new N();for(let l=0;l<=b;l++){const k=c+l*h*d,n=Math.sin(k),m=Math.cos(k);for(let o=0;o<=a.length-1;o++)i.x=a[o].x*n,i.y=a[o].y,i.z=a[o].x*m,f.push(i.x,i.y,i.z),j.x=l/b,j.y=o/(a.length-1),g.push(j.x,j.y)}for(let l=0;l<b;l++)for(let k=0;k<a.length-1;k++){const n=k+l*a.length,m=n,o=n+a.length,s=n+a.length+1,r=n+1;e.push(m,o,r),e.push(o,s,r)}this.setIndex(e),this.setAttribute("position",new aa(f,3)),this.setAttribute("uv",new aa(g,2)),this.computeVertexNormals();if(d===Math.PI*2){const l=this.attributes.normal.array,k=new v(),n=new v(),m=new v(),o=b*a.length*3;for(let s=0,r=0;s<a.length;s++,r+=3)k.x=l[r+0],k.y=l[r+1],k.z=l[r+2],n.x=l[o+r+0],n.y=l[o+r+1],n.z=l[o+r+2],m.addVectors(k,n).normalize(),l[r+0]=l[o+r+0]=m.x,l[r+1]=l[o+r+1]=m.y,l[r+2]=l[o+r+2]=m.z}}Te.prototype=Object.create(fa.prototype);Te.prototype.constructor=Te;function Sd(a,b){ra.call(this),this.type="ShapeGeometry",typeof b==="object"&&(console.warn("THREE.ShapeGeometry: Options parameter has been removed."),b=b.curveSegments),this.parameters={shapes:a,curveSegments:b},this.fromBufferGeometry(new Td(a,b)),this.mergeVertices()}Sd.prototype=Object.create(ra.prototype);Sd.prototype.constructor=Sd;Sd.prototype.toJSON=function(){const a=ra.prototype.toJSON.call(this),b=this.parameters.shapes;return ok(b,a)};function Td(a,b){fa.call(this),this.type="ShapeBufferGeometry",this.parameters={shapes:a,curveSegments:b},b=b||12;const c=[],d=[],e=[],f=[];let g=0,h=0;if(Array.isArray(a)===!1)i(a);else for(let j=0;j<a.length;j++)i(a[j]),this.addGroup(g,h,j),g+=h,h=0;this.setIndex(c),this.setAttribute("position",new aa(d,3)),this.setAttribute("normal",new aa(e,3)),this.setAttribute("uv",new aa(f,2));function i(j){const l=d.length/3,k=j.extractPoints(b);let n=k.shape;const m=k.holes;Gc.isClockWise(n)===!1&&(n=n.reverse());for(let s=0,r=m.length;s<r;s++){const p=m[s];Gc.isClockWise(p)===!0&&(m[s]=p.reverse())}const o=Gc.triangulateShape(n,m);for(let s=0,r=m.length;s<r;s++){const p=m[s];n=n.concat(p)}for(let s=0,r=n.length;s<r;s++){const p=n[s];d.push(p.x,p.y,0),e.push(0,0,1),f.push(p.x,p.y)}for(let s=0,r=o.length;s<r;s++){const p=o[s],q=p[0]+l,u=p[1]+l,t=p[2]+l;c.push(q,u,t),h+=3}}}Td.prototype=Object.create(fa.prototype);Td.prototype.constructor=Td;Td.prototype.toJSON=function(){const a=fa.prototype.toJSON.call(this),b=this.parameters.shapes;return ok(b,a)};function ok(a,b){b.shapes=[];if(Array.isArray(a))for(let c=0,d=a.length;c<d;c++){const e=a[c];b.shapes.push(e.uuid)}else b.shapes.push(a.uuid);return b}function vg(a,b){fa.call(this),this.type="EdgesGeometry",this.parameters={thresholdAngle:b},b=b!==void 0?b:1;const c=[],d=Math.cos(va.DEG2RAD*b),e=[0,0],f={};let g,h,i;const j=["a","b","c"];let l;a.isBufferGeometry?(l=new ra(),l.fromBufferGeometry(a)):l=a.clone(),l.mergeVertices(),l.computeFaceNormals();const k=l.vertices,n=l.faces;for(let m=0,o=n.length;m<o;m++){const s=n[m];for(let r=0;r<3;r++)g=s[j[r]],h=s[j[(r+1)%3]],e[0]=Math.min(g,h),e[1]=Math.max(g,h),i=e[0]+","+e[1],f[i]===void 0?f[i]={index1:e[0],index2:e[1],face1:m,face2:void 0}:f[i].face2=m}for(i in f){const m=f[i];if(m.face2===void 0||n[m.face1].normal.dot(n[m.face2].normal)<=d){let o=k[m.index1];c.push(o.x,o.y,o.z),o=k[m.index2],c.push(o.x,o.y,o.z)}}this.setAttribute("position",new aa(c,3))}vg.prototype=Object.create(fa.prototype);vg.prototype.constructor=vg;function Ud(a,b,c,d,e,f,g,h){ra.call(this),this.type="CylinderGeometry",this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h},this.fromBufferGeometry(new Ic(a,b,c,d,e,f,g,h)),this.mergeVertices()}Ud.prototype=Object.create(ra.prototype);Ud.prototype.constructor=Ud;function Ic(a,b,c,d,e,f,g,h){fa.call(this),this.type="CylinderBufferGeometry",this.parameters={radiusTop:a,radiusBottom:b,height:c,radialSegments:d,heightSegments:e,openEnded:f,thetaStart:g,thetaLength:h};const i=this;a=a!==void 0?a:1,b=b!==void 0?b:1,c=c||1,d=Math.floor(d)||8,e=Math.floor(e)||1,f=f!==void 0?f:!1,g=g!==void 0?g:0,h=h!==void 0?h:Math.PI*2;const j=[],l=[],k=[],n=[];let m=0;const o=[],s=c/2;let r=0;p(),f===!1&&(a>0&&q(!0),b>0&&q(!1)),this.setIndex(j),this.setAttribute("position",new aa(l,3)),this.setAttribute("normal",new aa(k,3)),this.setAttribute("uv",new aa(n,2));function p(){const u=new v(),t=new v();let w=0;const A=(b-a)/c;for(let B=0;B<=e;B++){const L=[],C=B/e,U=C*(b-a)+a;for(let I=0;I<=d;I++){const J=I/d,H=J*h+g,D=Math.sin(H),F=Math.cos(H);t.x=U*D,t.y=-C*c+s,t.z=U*F,l.push(t.x,t.y,t.z),u.set(D,A,F).normalize(),k.push(u.x,u.y,u.z),n.push(J,1-C),L.push(m++)}o.push(L)}for(let B=0;B<d;B++)for(let L=0;L<e;L++){const C=o[L][B],U=o[L+1][B],I=o[L+1][B+1],J=o[L][B+1];j.push(C,U,J),j.push(U,I,J),w+=6}i.addGroup(r,w,0),r+=w}function q(u){let t,w;const A=new N(),B=new v();let L=0;const C=u===!0?a:b,U=u===!0?1:-1;t=m;for(let I=1;I<=d;I++)l.push(0,s*U,0),k.push(0,U,0),n.push(.5,.5),m++;w=m;for(let I=0;I<=d;I++){const J=I/d,H=J*h+g,D=Math.cos(H),F=Math.sin(H);B.x=C*F,B.y=s*U,B.z=C*D,l.push(B.x,B.y,B.z),k.push(0,U,0),A.x=D*.5+.5,A.y=F*.5*U+.5,n.push(A.x,A.y),m++}for(let I=0;I<d;I++){const J=t+I,H=w+I;u===!0?j.push(H,H+1,J):j.push(H+1,H,J),L+=3}i.addGroup(r,L,u===!0?1:2),r+=L}}Ic.prototype=Object.create(fa.prototype);Ic.prototype.constructor=Ic;function wg(a,b,c,d,e,f,g){Ud.call(this,0,a,b,c,d,e,f,g),this.type="ConeGeometry",this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}wg.prototype=Object.create(Ud.prototype);wg.prototype.constructor=wg;function xg(a,b,c,d,e,f,g){Ic.call(this,0,a,b,c,d,e,f,g),this.type="ConeBufferGeometry",this.parameters={radius:a,height:b,radialSegments:c,heightSegments:d,openEnded:e,thetaStart:f,thetaLength:g}}xg.prototype=Object.create(Ic.prototype);xg.prototype.constructor=xg;function yg(a,b,c,d){ra.call(this),this.type="CircleGeometry",this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d},this.fromBufferGeometry(new Ue(a,b,c,d)),this.mergeVertices()}yg.prototype=Object.create(ra.prototype);yg.prototype.constructor=yg;function Ue(a,b,c,d){fa.call(this),this.type="CircleBufferGeometry",this.parameters={radius:a,segments:b,thetaStart:c,thetaLength:d},a=a||1,b=b!==void 0?Math.max(3,b):8,c=c!==void 0?c:0,d=d!==void 0?d:Math.PI*2;const e=[],f=[],g=[],h=[],i=new v(),j=new N();f.push(0,0,0),g.push(0,0,1),h.push(.5,.5);for(let l=0,k=3;l<=b;l++,k+=3){const n=c+l/b*d;i.x=a*Math.cos(n),i.y=a*Math.sin(n),f.push(i.x,i.y,i.z),g.push(0,0,1),j.x=(f[k]/a+1)/2,j.y=(f[k+1]/a+1)/2,h.push(j.x,j.y)}for(let l=1;l<=b;l++)e.push(l,l+1,0);this.setIndex(e),this.setAttribute("position",new aa(f,3)),this.setAttribute("normal",new aa(g,3)),this.setAttribute("uv",new aa(h,2))}Ue.prototype=Object.create(fa.prototype);Ue.prototype.constructor=Ue;var pb=Object.freeze({__proto__:null,WireframeGeometry:eg,ParametricGeometry:fg,ParametricBufferGeometry:Ie,TetrahedronGeometry:hg,TetrahedronBufferGeometry:Je,OctahedronGeometry:ig,OctahedronBufferGeometry:Od,IcosahedronGeometry:jg,IcosahedronBufferGeometry:Ke,DodecahedronGeometry:kg,DodecahedronBufferGeometry:Le,PolyhedronGeometry:gg,PolyhedronBufferGeometry:Db,TubeGeometry:lg,TubeBufferGeometry:Pd,TorusKnotGeometry:mg,TorusKnotBufferGeometry:Me,TorusGeometry:ng,TorusBufferGeometry:Ne,TextGeometry:rg,TextBufferGeometry:Re,SphereGeometry:sg,SphereBufferGeometry:Hc,RingGeometry:tg,RingBufferGeometry:Se,PlaneGeometry:Qf,PlaneBufferGeometry:Cc,LatheGeometry:ug,LatheBufferGeometry:Te,ShapeGeometry:Sd,ShapeBufferGeometry:Td,ExtrudeGeometry:Rd,ExtrudeBufferGeometry:nc,EdgesGeometry:vg,ConeGeometry:wg,ConeBufferGeometry:xg,CylinderGeometry:Ud,CylinderBufferGeometry:Ic,CircleGeometry:yg,CircleBufferGeometry:Ue,BoxGeometry:on,BoxBufferGeometry:Cd});function Vd(a){pa.call(this),this.type="ShadowMaterial",this.color=new da(0),this.transparent=!0,this.setValues(a)}Vd.prototype=Object.create(pa.prototype);Vd.prototype.constructor=Vd;Vd.prototype.isShadowMaterial=!0;Vd.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this};function Lb(a){vb.call(this,a),this.type="RawShaderMaterial"}Lb.prototype=Object.create(vb.prototype);Lb.prototype.constructor=Lb;Lb.prototype.isRawShaderMaterial=!0;function oc(a){pa.call(this),this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new da(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new da(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.vertexTangents=!1,this.setValues(a)}oc.prototype=Object.create(pa.prototype);oc.prototype.constructor=oc;oc.prototype.isMeshStandardMaterial=!0;oc.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapIntensity=a.envMapIntensity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this.vertexTangents=a.vertexTangents,this};function Wd(a){oc.call(this),this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoat=0,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new N(1,1),this.clearcoatNormalMap=null,this.reflectivity=.5,this.sheen=null,this.transparency=0,this.setValues(a)}Wd.prototype=Object.create(oc.prototype);Wd.prototype.constructor=Wd;Wd.prototype.isMeshPhysicalMaterial=!0;Wd.prototype.copy=function(a){return oc.prototype.copy.call(this,a),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.reflectivity=a.reflectivity,a.sheen?this.sheen=(this.sheen||new da()).copy(a.sheen):this.sheen=null,this.transparency=a.transparency,this};function _c(a){pa.call(this),this.type="MeshPhongMaterial",this.color=new da(16777215),this.specular=new da(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new da(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}_c.prototype=Object.create(pa.prototype);_c.prototype.constructor=_c;_c.prototype.isMeshPhongMaterial=!0;_c.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.specular.copy(a.specular),this.shininess=a.shininess,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};function Xd(a){pa.call(this),this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new da(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new da(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}Xd.prototype=Object.create(pa.prototype);Xd.prototype.constructor=Xd;Xd.prototype.isMeshToonMaterial=!0;Xd.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.gradientMap=a.gradientMap,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.alphaMap=a.alphaMap,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};function Yd(a){pa.call(this),this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}Yd.prototype=Object.create(pa.prototype);Yd.prototype.constructor=Yd;Yd.prototype.isMeshNormalMaterial=!0;Yd.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};function Zd(a){pa.call(this),this.type="MeshLambertMaterial",this.color=new da(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new da(0),this.emissiveIntensity=1,this.emissiveMap=null,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=of,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}Zd.prototype=Object.create(pa.prototype);Zd.prototype.constructor=Zd;Zd.prototype.isMeshLambertMaterial=!0;Zd.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};function _d(a){pa.call(this),this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new da(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=md,this.normalScale=new N(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.skinning=!1,this.morphTargets=!1,this.morphNormals=!1,this.setValues(a)}_d.prototype=Object.create(pa.prototype);_d.prototype.constructor=_d;_d.prototype.isMeshMatcapMaterial=!0;_d.prototype.copy=function(a){return pa.prototype.copy.call(this,a),this.defines={MATCAP:""},this.color.copy(a.color),this.matcap=a.matcap,this.map=a.map,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.alphaMap=a.alphaMap,this.skinning=a.skinning,this.morphTargets=a.morphTargets,this.morphNormals=a.morphNormals,this};function $d(a){Qa.call(this),this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(a)}$d.prototype=Object.create(Qa.prototype);$d.prototype.constructor=$d;$d.prototype.isLineDashedMaterial=!0;$d.prototype.copy=function(a){return Qa.prototype.copy.call(this,a),this.scale=a.scale,this.dashSize=a.dashSize,this.gapSize=a.gapSize,this};var Gr=Object.freeze({__proto__:null,ShadowMaterial:Vd,SpriteMaterial:Yc,RawShaderMaterial:Lb,ShaderMaterial:vb,PointsMaterial:Zc,MeshPhysicalMaterial:Wd,MeshStandardMaterial:oc,MeshPhongMaterial:_c,MeshToonMaterial:Xd,MeshNormalMaterial:Yd,MeshLambertMaterial:Zd,MeshDepthMaterial:Uc,MeshDistanceMaterial:Vc,MeshBasicMaterial:Ab,MeshMatcapMaterial:_d,LineDashedMaterial:$d,LineBasicMaterial:Qa,Material:pa});const Sa={arraySlice:function(a,b,c){return Sa.isTypedArray(a)?new a.constructor(a.subarray(b,c!==void 0?c:a.length)):a.slice(b,c)},convertArray:function(a,b,c){return!a||!c&&a.constructor===b?a:typeof b.BYTES_PER_ELEMENT==="number"?new b(a):Array.prototype.slice.call(a)},isTypedArray:function(a){return ArrayBuffer.isView(a)&&!(a instanceof DataView)},getKeyframeOrder:function(a){function b(e,f){return a[e]-a[f]}const c=a.length,d=new Array(c);for(let e=0;e!==c;++e)d[e]=e;return d.sort(b),d},sortedArray:function(a,b,c){const d=a.length,e=new a.constructor(d);for(let f=0,g=0;g!==d;++f){const h=c[f]*b;for(let i=0;i!==b;++i)e[g++]=a[h+i]}return e},flattenJSON:function(a,b,c,d){let e=1,f=a[0];for(;f!==void 0&&f[d]===void 0;)f=a[e++];if(f===void 0)return;let g=f[d];if(g===void 0)return;if(Array.isArray(g))do g=f[d],g!==void 0&&(b.push(f.time),c.push.apply(c,g)),f=a[e++];while(f!==void 0);else if(g.toArray!==void 0)do g=f[d],g!==void 0&&(b.push(f.time),g.toArray(c,c.length)),f=a[e++];while(f!==void 0);else do g=f[d],g!==void 0&&(b.push(f.time),c.push(g)),f=a[e++];while(f!==void 0)},subclip:function(a,b,c,d,e){e=e||30;const f=a.clone();f.name=b;const g=[];for(let i=0;i<f.tracks.length;++i){const j=f.tracks[i],l=j.getValueSize(),k=[],n=[];for(let m=0;m<j.times.length;++m){const o=j.times[m]*e;if(o<c||o>=d)continue;k.push(j.times[m]);for(let s=0;s<l;++s)n.push(j.values[m*l+s])}if(k.length===0)continue;j.times=Sa.convertArray(k,j.times.constructor),j.values=Sa.convertArray(n,j.values.constructor),g.push(j)}f.tracks=g;let h=Infinity;for(let i=0;i<f.tracks.length;++i)h>f.tracks[i].times[0]&&(h=f.tracks[i].times[0]);for(let i=0;i<f.tracks.length;++i)f.tracks[i].shift(-1*h);return f.resetDuration(),f},makeClipAdditive:function(a,b,c,d){b===void 0&&(b=0),c===void 0&&(c=a),(d===void 0||d<=0)&&(d=30);const e=a.tracks.length,f=b/d;for(let g=0;g<e;++g){const h=c.tracks[g],i=h.ValueTypeName;if(i==="bool"||i==="string")continue;const j=a.tracks.find(function(o){return o.name===h.name&&o.ValueTypeName===i});if(j===void 0)continue;const l=h.getValueSize(),k=h.times.length-1;let n;if(f<=h.times[0])n=Sa.arraySlice(h.values,0,h.valueSize);else if(f>=h.times[k]){const o=k*l;n=Sa.arraySlice(h.values,o)}else{const o=h.createInterpolant();o.evaluate(f),n=o.resultBuffer}if(i==="quaternion"){const o=new hb(n[0],n[1],n[2],n[3]).normalize().conjugate();o.toArray(n)}const m=j.times.length;for(let o=0;o<m;++o){const s=o*l;if(i==="quaternion")hb.multiplyQuaternionsFlat(j.values,s,n,0,j.values,s);else for(let r=0;r<l;++r)j.values[s+r]-=n[r]}}return a.blendMode=fj,a}};function Mb(a,b,c,d){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=d!==void 0?d:new b.constructor(c),this.sampleValues=b,this.valueSize=c}Object.assign(Mb.prototype,{evaluate:function(a){let b=this.parameterPositions,c=this._cachedIndex,d=b[c],e=b[c-1];fe:{Ji:{let f;Ki:{Ug:if(!(a<d)){for(let g=c+2;;){if(d===void 0){if(a<e)break Ug;return c=b.length,this._cachedIndex=c,this.afterEnd_(c-1,a,e)}if(c===g)break;e=d,d=b[++c];if(a<d)break Ji}f=b.length;break Ki}if(!(a>=e)){const g=b[1];a<g&&(c=2,e=g);for(let h=c-2;;){if(e===void 0)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(c===h)break;d=e,e=b[--c-1];if(a>=e)break Ji}f=c,c=0;break Ki}break fe}for(;c<f;){const g=c+f>>>1;a<b[g]?f=g:c=g+1}d=b[c],e=b[c-1];if(e===void 0)return this._cachedIndex=0,this.beforeStart_(0,a,d);if(d===void 0)return c=b.length,this._cachedIndex=c,this.afterEnd_(c-1,e,a)}this._cachedIndex=c,this.intervalChanged_(c,e,d)}return this.interpolate_(c,e,a,d)},settings:null,DefaultSettings_:{},getSettings_:function(){return this.settings||this.DefaultSettings_},copySampleValue_:function(a){const b=this.resultBuffer,c=this.sampleValues,d=this.valueSize,e=a*d;for(let f=0;f!==d;++f)b[f]=c[e+f];return b},interpolate_:function(){throw new Error("call to abstract method")},intervalChanged_:function(){}});Object.assign(Mb.prototype,{beforeStart_:Mb.prototype.copySampleValue_,afterEnd_:Mb.prototype.copySampleValue_});function Wh(a,b,c,d){Mb.call(this,a,b,c,d),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0}Wh.prototype=Object.assign(Object.create(Mb.prototype),{constructor:Wh,DefaultSettings_:{endingStart:kd,endingEnd:kd},intervalChanged_:function(a,b,c){let d=this.parameterPositions,e=a-2,f=a+1,g=d[e],h=d[f];if(g===void 0)switch(this.getSettings_().endingStart){case ld:e=a,g=2*b-c;break;case xf:e=d.length-2,g=b+d[e]-d[e+1];break;default:e=a,g=c}if(h===void 0)switch(this.getSettings_().endingEnd){case ld:f=a,h=2*c-b;break;case xf:f=1,h=c+d[1]-d[0];break;default:f=a-1,h=b}const i=(c-b)*.5,j=this.valueSize;this._weightPrev=i/(b-g),this._weightNext=i/(h-c),this._offsetPrev=e*j,this._offsetNext=f*j},interpolate_:function(a,b,c,d){const e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=a*g,i=h-g,j=this._offsetPrev,l=this._offsetNext,k=this._weightPrev,n=this._weightNext,m=(c-b)/(d-b),o=m*m,s=o*m,r=-k*s+2*k*o-k*m,p=(1+k)*s+(-1.5-2*k)*o+(-.5+k)*m+1,q=(-1-n)*s+(1.5+n)*o+.5*m,u=n*s-n*o;for(let t=0;t!==g;++t)e[t]=r*f[j+t]+p*f[i+t]+q*f[h+t]+u*f[l+t];return e}});function zg(a,b,c,d){Mb.call(this,a,b,c,d)}zg.prototype=Object.assign(Object.create(Mb.prototype),{constructor:zg,interpolate_:function(a,b,c,d){const e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=a*g,i=h-g,j=(c-b)/(d-b),l=1-j;for(let k=0;k!==g;++k)e[k]=f[i+k]*l+f[h+k]*j;return e}});function Xh(a,b,c,d){Mb.call(this,a,b,c,d)}Xh.prototype=Object.assign(Object.create(Mb.prototype),{constructor:Xh,interpolate_:function(a){return this.copySampleValue_(a-1)}});function nb(a,b,c,d){if(a===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(b===void 0||b.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=Sa.convertArray(b,this.TimeBufferType),this.values=Sa.convertArray(c,this.ValueBufferType),this.setInterpolation(d||this.DefaultInterpolation)}Object.assign(nb,{toJSON:function(a){const b=a.constructor;let c;if(b.toJSON!==void 0)c=b.toJSON(a);else{c={name:a.name,times:Sa.convertArray(a.times,Array),values:Sa.convertArray(a.values,Array)};const d=a.getInterpolation();d!==a.DefaultInterpolation&&(c.interpolation=d)}return c.type=a.ValueTypeName,c}});Object.assign(nb.prototype,{constructor:nb,TimeBufferType:Float32Array,ValueBufferType:Float32Array,DefaultInterpolation:wf,InterpolantFactoryMethodDiscrete:function(a){return new Xh(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodLinear:function(a){return new zg(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:function(a){return new Wh(this.times,this.values,this.getValueSize(),a)},setInterpolation:function(a){let b;switch(a){case vf:b=this.InterpolantFactoryMethodDiscrete;break;case wf:b=this.InterpolantFactoryMethodLinear;break;case bh:b=this.InterpolantFactoryMethodSmooth;break}if(b===void 0){const c="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(c);return console.warn("THREE.KeyframeTrack:",c),this}return this.createInterpolant=b,this},getInterpolation:function(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vf;case this.InterpolantFactoryMethodLinear:return wf;case this.InterpolantFactoryMethodSmooth:return bh}},getValueSize:function(){return this.values.length/this.times.length},shift:function(a){if(a!==0){const b=this.times;for(let c=0,d=b.length;c!==d;++c)b[c]+=a}return this},scale:function(a){if(a!==1){const b=this.times;for(let c=0,d=b.length;c!==d;++c)b[c]*=a}return this},trim:function(a,b){const c=this.times,d=c.length;let e=0,f=d-1;for(;e!==d&&c[e]<a;)++e;for(;f!==-1&&c[f]>b;)--f;++f;if(e!==0||f!==d){e>=f&&(f=Math.max(f,1),e=f-1);const g=this.getValueSize();this.times=Sa.arraySlice(c,e,f),this.values=Sa.arraySlice(this.values,e*g,f*g)}return this},validate:function(){let a=!0;const b=this.getValueSize();b-Math.floor(b)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);const c=this.times,d=this.values,e=c.length;e===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);let f=null;for(let g=0;g!==e;g++){const h=c[g];if(typeof h==="number"&&isNaN(h)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,g,h),a=!1;break}if(f!==null&&f>h){console.error("THREE.KeyframeTrack: Out of order keys.",this,g,h,f),a=!1;break}f=h}if(d!==void 0){if(Sa.isTypedArray(d))for(let g=0,h=d.length;g!==h;++g){const i=d[g];if(isNaN(i)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,g,i),a=!1;break}}}return a},optimize:function(){const a=Sa.arraySlice(this.times),b=Sa.arraySlice(this.values),c=this.getValueSize(),d=this.getInterpolation()===bh,e=a.length-1;let f=1;for(let g=1;g<e;++g){let h=!1;const i=a[g],j=a[g+1];if(i!==j&&(g!==1||i!==i[0]))if(d)h=!0;else{const l=g*c,k=l-c,n=l+c;for(let m=0;m!==c;++m){const o=b[l+m];if(o!==b[k+m]||o!==b[n+m]){h=!0;break}}}if(h){if(g!==f){a[f]=a[g];const l=g*c,k=f*c;for(let n=0;n!==c;++n)b[k+n]=b[l+n]}++f}}if(e>0){a[f]=a[e];for(let g=e*c,h=f*c,i=0;i!==c;++i)b[h+i]=b[g+i];++f}return f!==a.length?(this.times=Sa.arraySlice(a,0,f),this.values=Sa.arraySlice(b,0,f*c)):(this.times=a,this.values=b),this},clone:function(){const a=Sa.arraySlice(this.times,0),b=Sa.arraySlice(this.values,0),c=this.constructor,d=new c(this.name,a,b);return d.createInterpolant=this.createInterpolant,d}});function Yh(a,b,c){nb.call(this,a,b,c)}Yh.prototype=Object.assign(Object.create(nb.prototype),{constructor:Yh,ValueTypeName:"bool",ValueBufferType:Array,DefaultInterpolation:vf,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function Zh(a,b,c,d){nb.call(this,a,b,c,d)}Zh.prototype=Object.assign(Object.create(nb.prototype),{constructor:Zh,ValueTypeName:"color"});function Ve(a,b,c,d){nb.call(this,a,b,c,d)}Ve.prototype=Object.assign(Object.create(nb.prototype),{constructor:Ve,ValueTypeName:"number"});function _h(a,b,c,d){Mb.call(this,a,b,c,d)}_h.prototype=Object.assign(Object.create(Mb.prototype),{constructor:_h,interpolate_:function(a,b,c,d){const e=this.resultBuffer,f=this.sampleValues,g=this.valueSize,h=(c-b)/(d-b);let i=a*g;for(let j=i+g;i!==j;i+=4)hb.slerpFlat(e,0,f,i-g,f,i,h);return e}});function Ag(a,b,c,d){nb.call(this,a,b,c,d)}Ag.prototype=Object.assign(Object.create(nb.prototype),{constructor:Ag,ValueTypeName:"quaternion",DefaultInterpolation:wf,InterpolantFactoryMethodLinear:function(a){return new _h(this.times,this.values,this.getValueSize(),a)},InterpolantFactoryMethodSmooth:void 0});function $h(a,b,c,d){nb.call(this,a,b,c,d)}$h.prototype=Object.assign(Object.create(nb.prototype),{constructor:$h,ValueTypeName:"string",ValueBufferType:Array,DefaultInterpolation:vf,InterpolantFactoryMethodLinear:void 0,InterpolantFactoryMethodSmooth:void 0});function We(a,b,c,d){nb.call(this,a,b,c,d)}We.prototype=Object.assign(Object.create(nb.prototype),{constructor:We,ValueTypeName:"vector"});function Rb(a,b,c,d){this.name=a,this.tracks=c,this.duration=b!==void 0?b:-1,this.blendMode=d!==void 0?d:ch,this.uuid=va.generateUUID(),this.duration<0&&this.resetDuration()}function Hr(a){switch(a.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ve;case"vector":case"vector2":case"vector3":case"vector4":return We;case"color":return Zh;case"quaternion":return Ag;case"bool":case"boolean":return Yh;case"string":return $h}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+a)}function Ir(a){if(a.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const b=Hr(a.type);if(a.times===void 0){const c=[],d=[];Sa.flattenJSON(a.keys,c,d,"value"),a.times=c,a.values=d}return b.parse!==void 0?b.parse(a):new b(a.name,a.times,a.values,a.interpolation)}Object.assign(Rb,{parse:function(a){const b=[],c=a.tracks,d=1/(a.fps||1);for(let e=0,f=c.length;e!==f;++e)b.push(Ir(c[e]).scale(d));return new Rb(a.name,a.duration,b,a.blendMode)},toJSON:function(a){const b=[],c=a.tracks,d={name:a.name,duration:a.duration,tracks:b,uuid:a.uuid,blendMode:a.blendMode};for(let e=0,f=c.length;e!==f;++e)b.push(nb.toJSON(c[e]));return d},CreateFromMorphTargetSequence:function(a,b,c,d){const e=b.length,f=[];for(let g=0;g<e;g++){let h=[],i=[];h.push((g+e-1)%e,g,(g+1)%e),i.push(0,1,0);const j=Sa.getKeyframeOrder(h);h=Sa.sortedArray(h,1,j),i=Sa.sortedArray(i,1,j),!d&&h[0]===0&&(h.push(e),i.push(i[0])),f.push(new Ve(".morphTargetInfluences["+b[g].name+"]",h,i).scale(1/c))}return new Rb(a,-1,f)},findByName:function(a,b){let c=a;if(!Array.isArray(a)){const d=a;c=d.geometry&&d.geometry.animations||d.animations}for(let d=0;d<c.length;d++)if(c[d].name===b)return c[d];return null},CreateClipsFromMorphTargetSequences:function(a,b,c){const d={},e=/^([\w-]*?)([\d]+)$/;for(let g=0,h=a.length;g<h;g++){const i=a[g],j=i.name.match(e);if(j&&j.length>1){const l=j[1];let k=d[l];k||(d[l]=k=[]),k.push(i)}}const f=[];for(const g in d)f.push(Rb.CreateFromMorphTargetSequence(g,d[g],b,c));return f},parseAnimation:function(a,b){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const c=function(l,k,n,m,o){if(n.length!==0){const s=[],r=[];Sa.flattenJSON(n,s,r,m),s.length!==0&&o.push(new l(k,s,r))}},d=[],e=a.name||"default",f=a.fps||30,g=a.blendMode;let h=a.length||-1;const i=a.hierarchy||[];for(let l=0;l<i.length;l++){const k=i[l].keys;if(!k||k.length===0)continue;if(k[0].morphTargets){const n={};let m;for(m=0;m<k.length;m++)if(k[m].morphTargets)for(let o=0;o<k[m].morphTargets.length;o++)n[k[m].morphTargets[o]]=-1;for(const o in n){const s=[],r=[];for(let p=0;p!==k[m].morphTargets.length;++p){const q=k[m];s.push(q.time),r.push(q.morphTarget===o?1:0)}d.push(new Ve(".morphTargetInfluence["+o+"]",s,r))}h=n.length*(f||1)}else{const n=".bones["+b[l].name+"]";c(We,n+".position",k,"pos",d),c(Ag,n+".quaternion",k,"rot",d),c(We,n+".scale",k,"scl",d)}}if(d.length===0)return null;const j=new Rb(e,h,d,g);return j}});Object.assign(Rb.prototype,{resetDuration:function(){const a=this.tracks;let b=0;for(let c=0,d=a.length;c!==d;++c){const e=this.tracks[c];b=Math.max(b,e.times[e.times.length-1])}return this.duration=b,this},trim:function(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this},validate:function(){let a=!0;for(let b=0;b<this.tracks.length;b++)a=a&&this.tracks[b].validate();return a},optimize:function(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this},clone:function(){const a=[];for(let b=0;b<this.tracks.length;b++)a.push(this.tracks[b].clone());return new Rb(this.name,this.duration,a,this.blendMode)}});const ae={enabled:!1,files:{},add:function(a,b){if(this.enabled===!1)return;this.files[a]=b},get:function(a){return this.enabled===!1?void 0:this.files[a]},remove:function(a){delete this.files[a]},clear:function(){this.files={}}};function pk(a,b,c){const d=this;let e=!1,f=0,g=0,h;const i=[];this.onStart=void 0,this.onLoad=a,this.onProgress=b,this.onError=c,this.itemStart=function(j){g++,e===!1&&(d.onStart!==void 0&&d.onStart(j,f,g)),e=!0},this.itemEnd=function(j){f++,d.onProgress!==void 0&&d.onProgress(j,f,g),f===g&&(e=!1,d.onLoad!==void 0&&d.onLoad())},this.itemError=function(j){d.onError!==void 0&&d.onError(j)},this.resolveURL=function(j){return h?h(j):j},this.setURLModifier=function(j){return h=j,this},this.addHandler=function(j,l){return i.push(j,l),this},this.removeHandler=function(j){const l=i.indexOf(j);return l!==-1&&i.splice(l,2),this},this.getHandler=function(j){for(let l=0,k=i.length;l<k;l+=2){const n=i[l],m=i[l+1];n.global&&(n.lastIndex=0);if(n.test(j))return m}return null}}const Jr=new pk();function Ja(a){this.manager=a!==void 0?a:Jr,this.crossOrigin="anonymous",this.path="",this.resourcePath="",this.requestHeader={}}Object.assign(Ja.prototype,{load:function(){},loadAsync:function(a,b){const c=this;return new Promise(function(d,e){c.load(a,d,b,e)})},parse:function(){},setCrossOrigin:function(a){return this.crossOrigin=a,this},setPath:function(a){return this.path=a,this},setResourcePath:function(a){return this.resourcePath=a,this},setRequestHeader:function(a){return this.requestHeader=a,this}});const Sb={};function Yb(a){Ja.call(this,a)}Yb.prototype=Object.assign(Object.create(Ja.prototype),{constructor:Yb,load:function(a,b,c,d){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const e=this,f=ae.get(a);if(f!==void 0)return e.manager.itemStart(a),setTimeout(function(){b&&b(f),e.manager.itemEnd(a)},0),f;if(Sb[a]!==void 0){Sb[a].push({onLoad:b,onProgress:c,onError:d});return}const g=/^data:(.*?)(;base64)?,(.*)$/,h=a.match(g);let i;if(h){const j=h[1],l=!!h[2];let k=h[3];k=decodeURIComponent(k),l&&(k=atob(k));try{let n;const m=(this.responseType||"").toLowerCase();switch(m){case"arraybuffer":case"blob":const o=new Uint8Array(k.length);for(let r=0;r<k.length;r++)o[r]=k.charCodeAt(r);m==="blob"?n=new Blob([o.buffer],{type:j}):n=o.buffer;break;case"document":const s=new DOMParser();n=s.parseFromString(k,j);break;case"json":n=JSON.parse(k);break;default:n=k;break}setTimeout(function(){b&&b(n),e.manager.itemEnd(a)},0)}catch(n){setTimeout(function(){d&&d(n),e.manager.itemError(a),e.manager.itemEnd(a)},0)}}else{Sb[a]=[],Sb[a].push({onLoad:b,onProgress:c,onError:d}),i=new XMLHttpRequest(),i.open("GET",a,!0),i.addEventListener("load",function(j){const l=this.response,k=Sb[a];delete Sb[a];if(this.status===200||this.status===0){this.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),ae.add(a,l);for(let n=0,m=k.length;n<m;n++){const o=k[n];o.onLoad&&o.onLoad(l)}e.manager.itemEnd(a)}else{for(let n=0,m=k.length;n<m;n++){const o=k[n];o.onError&&o.onError(j)}e.manager.itemError(a),e.manager.itemEnd(a)}},!1),i.addEventListener("progress",function(j){const l=Sb[a];for(let k=0,n=l.length;k<n;k++){const m=l[k];m.onProgress&&m.onProgress(j)}},!1),i.addEventListener("error",function(j){const l=Sb[a];delete Sb[a];for(let k=0,n=l.length;k<n;k++){const m=l[k];m.onError&&m.onError(j)}e.manager.itemError(a),e.manager.itemEnd(a)},!1),i.addEventListener("abort",function(j){const l=Sb[a];delete Sb[a];for(let k=0,n=l.length;k<n;k++){const m=l[k];m.onError&&m.onError(j)}e.manager.itemError(a),e.manager.itemEnd(a)},!1),this.responseType!==void 0&&(i.responseType=this.responseType),this.withCredentials!==void 0&&(i.withCredentials=this.withCredentials),i.overrideMimeType&&i.overrideMimeType(this.mimeType!==void 0?this.mimeType:"text/plain");for(const j in this.requestHeader)i.setRequestHeader(j,this.requestHeader[j]);i.send(null)}return e.manager.itemStart(a),i},setResponseType:function(a){return this.responseType=a,this},setWithCredentials:function(a){return this.withCredentials=a,this},setMimeType:function(a){return this.mimeType=a,this}});function qk(a){Ja.call(this,a)}qk.prototype=Object.assign(Object.create(Ja.prototype),{constructor:qk,load:function(a,b,c,d){const e=this,f=new Yb(e.manager);f.setPath(e.path),f.load(a,function(g){try{b(e.parse(JSON.parse(g)))}catch(h){d?d(h):console.error(h),e.manager.itemError(a)}},c,d)},parse:function(a){const b=[];for(let c=0;c<a.length;c++){const d=Rb.parse(a[c]);b.push(d)}return b}});function rk(a){Ja.call(this,a)}rk.prototype=Object.assign(Object.create(Ja.prototype),{constructor:rk,load:function(a,b,c,d){const e=this,f=[],g=new He();g.image=f;const h=new Yb(this.manager);h.setPath(this.path),h.setResponseType("arraybuffer");let i=0;function j(l){h.load(a[l],function(k){const n=e.parse(k,!0);f[l]={width:n.width,height:n.height,format:n.format,mipmaps:n.mipmaps},i+=1,i===6&&(n.mipmapCount===1&&(g.minFilter=lb),g.format=n.format,g.needsUpdate=!0,b&&b(g))},c,d)}if(Array.isArray(a))for(let l=0,k=a.length;l<k;++l)j(l);else h.load(a,function(l){const k=e.parse(l,!0);if(k.isCubemap){const n=k.mipmaps.length/k.mipmapCount;for(let m=0;m<n;m++){f[m]={mipmaps:[]};for(let o=0;o<k.mipmapCount;o++)f[m].mipmaps.push(k.mipmaps[m*k.mipmapCount+o]),f[m].format=k.format,f[m].width=k.width,f[m].height=k.height}}else g.image.width=k.width,g.image.height=k.height,g.mipmaps=k.mipmaps;k.mipmapCount===1&&(g.minFilter=lb),g.format=k.format,g.needsUpdate=!0,b&&b(g)},c,d);return g}});function sk(a){Ja.call(this,a)}sk.prototype=Object.assign(Object.create(Ja.prototype),{constructor:sk,load:function(a,b,c,d){const e=this,f=new Gd(),g=new Yb(this.manager);return g.setResponseType("arraybuffer"),g.setPath(this.path),g.load(a,function(h){const i=e.parse(h);if(!i)return;i.image!==void 0?f.image=i.image:i.data!==void 0&&(f.image.width=i.width,f.image.height=i.height,f.image.data=i.data),f.wrapS=i.wrapS!==void 0?i.wrapS:tb,f.wrapT=i.wrapT!==void 0?i.wrapT:tb,f.magFilter=i.magFilter!==void 0?i.magFilter:lb,f.minFilter=i.minFilter!==void 0?i.minFilter:lb,f.anisotropy=i.anisotropy!==void 0?i.anisotropy:1,i.format!==void 0&&(f.format=i.format),i.type!==void 0&&(f.type=i.type),i.mipmaps!==void 0&&(f.mipmaps=i.mipmaps,f.minFilter=rf),i.mipmapCount===1&&(f.minFilter=lb),f.needsUpdate=!0,b&&b(f,i)},c,d),f}});function Xe(a){Ja.call(this,a)}Xe.prototype=Object.assign(Object.create(Ja.prototype),{constructor:Xe,load:function(a,b,c,d){this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const e=this,f=ae.get(a);if(f!==void 0)return e.manager.itemStart(a),setTimeout(function(){b&&b(f),e.manager.itemEnd(a)},0),f;const g=document.createElementNS("http://www.w3.org/1999/xhtml","img");function h(){g.removeEventListener("load",h,!1),g.removeEventListener("error",i,!1),ae.add(a,this),b&&b(this),e.manager.itemEnd(a)}function i(j){g.removeEventListener("load",h,!1),g.removeEventListener("error",i,!1),d&&d(j),e.manager.itemError(a),e.manager.itemEnd(a)}return g.addEventListener("load",h,!1),g.addEventListener("error",i,!1),a.substr(0,5)!=="data:"&&(this.crossOrigin!==void 0&&(g.crossOrigin=this.crossOrigin)),e.manager.itemStart(a),g.src=a,g}});function ai(a){Ja.call(this,a)}ai.prototype=Object.assign(Object.create(Ja.prototype),{constructor:ai,load:function(a,b,c,d){const e=new Dc(),f=new Xe(this.manager);f.setCrossOrigin(this.crossOrigin),f.setPath(this.path);let g=0;function h(i){f.load(a[i],function(j){e.images[i]=j,g++,g===6&&(e.needsUpdate=!0,b&&b(e))},void 0,d)}for(let i=0;i<a.length;++i)h(i);return e}});function bi(a){Ja.call(this,a)}bi.prototype=Object.assign(Object.create(Ja.prototype),{constructor:bi,load:function(a,b,c,d){const e=new La(),f=new Xe(this.manager);return f.setCrossOrigin(this.crossOrigin),f.setPath(this.path),f.load(a,function(g){e.image=g;const h=a.search(/\.jpe?g($|\?)/i)>0||a.search(/^data\:image\/jpeg/)===0;e.format=h?Pc:Nb,e.needsUpdate=!0,b!==void 0&&b(e)},c,d),e}});function ja(){this.type="Curve",this.arcLengthDivisions=200}Object.assign(ja.prototype,{getPoint:function(){return console.warn("THREE.Curve: .getPoint() not implemented."),null},getPointAt:function(a,b){const c=this.getUtoTmapping(a);return this.getPoint(c,b)},getPoints:function(a){a===void 0&&(a=5);const b=[];for(let c=0;c<=a;c++)b.push(this.getPoint(c/a));return b},getSpacedPoints:function(a){a===void 0&&(a=5);const b=[];for(let c=0;c<=a;c++)b.push(this.getPointAt(c/a));return b},getLength:function(){const a=this.getLengths();return a[a.length-1]},getLengths:function(a){a===void 0&&(a=this.arcLengthDivisions);if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const b=[];let c,d=this.getPoint(0),e=0;b.push(0);for(let f=1;f<=a;f++)c=this.getPoint(f/a),e+=c.distanceTo(d),b.push(e),d=c;return this.cacheArcLengths=b,b},updateArcLengths:function(){this.needsUpdate=!0,this.getLengths()},getUtoTmapping:function(a,b){const c=this.getLengths();let d=0,e=c.length,f;b?f=b:f=a*c[e-1];let g=0,h=e-1,i;for(;g<=h;){d=Math.floor(g+(h-g)/2),i=c[d]-f;if(i<0)g=d+1;else if(i>0)h=d-1;else{h=d;break}}d=h;if(c[d]===f)return d/(e-1);const j=c[d],l=c[d+1],k=l-j,n=(f-j)/k,m=(d+n)/(e-1);return m},getTangent:function(a,b){const c=1e-4;let d=a-c,e=a+c;d<0&&(d=0),e>1&&(e=1);const f=this.getPoint(d),g=this.getPoint(e),h=b||(f.isVector2?new N():new v());return h.copy(g).sub(f).normalize(),h},getTangentAt:function(a,b){const c=this.getUtoTmapping(a);return this.getTangent(c,b)},computeFrenetFrames:function(a,b){const c=new v(),d=[],e=[],f=[],g=new v(),h=new za();for(let n=0;n<=a;n++){const m=n/a;d[n]=this.getTangentAt(m,new v()),d[n].normalize()}e[0]=new v(),f[0]=new v();let i=Number.MAX_VALUE;const j=Math.abs(d[0].x),l=Math.abs(d[0].y),k=Math.abs(d[0].z);j<=i&&(i=j,c.set(1,0,0)),l<=i&&(i=l,c.set(0,1,0)),k<=i&&c.set(0,0,1),g.crossVectors(d[0],c).normalize(),e[0].crossVectors(d[0],g),f[0].crossVectors(d[0],e[0]);for(let n=1;n<=a;n++){e[n]=e[n-1].clone(),f[n]=f[n-1].clone(),g.crossVectors(d[n-1],d[n]);if(g.length()>Number.EPSILON){g.normalize();const m=Math.acos(va.clamp(d[n-1].dot(d[n]),-1,1));e[n].applyMatrix4(h.makeRotationAxis(g,m))}f[n].crossVectors(d[n],e[n])}if(b===!0){let n=Math.acos(va.clamp(e[0].dot(e[a]),-1,1));n/=a,d[0].dot(g.crossVectors(e[0],e[a]))>0&&(n=-n);for(let m=1;m<=a;m++)e[m].applyMatrix4(h.makeRotationAxis(d[m],n*m)),f[m].crossVectors(d[m],e[m])}return{tangents:d,normals:e,binormals:f}},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.arcLengthDivisions=a.arcLengthDivisions,this},toJSON:function(){const a={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a},fromJSON:function(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}});function xb(a,b,c,d,e,f,g,h){ja.call(this),this.type="EllipseCurve",this.aX=a||0,this.aY=b||0,this.xRadius=c||1,this.yRadius=d||1,this.aStartAngle=e||0,this.aEndAngle=f||2*Math.PI,this.aClockwise=g||!1,this.aRotation=h||0}xb.prototype=Object.create(ja.prototype);xb.prototype.constructor=xb;xb.prototype.isEllipseCurve=!0;xb.prototype.getPoint=function(a,b){const c=b||new N(),d=Math.PI*2;let e=this.aEndAngle-this.aStartAngle;const f=Math.abs(e)<Number.EPSILON;for(;e<0;)e+=d;for(;e>d;)e-=d;e<Number.EPSILON&&(f?e=0:e=d),this.aClockwise===!0&&!f&&(e===d?e=-d:e=e-d);const g=this.aStartAngle+a*e;let h=this.aX+this.xRadius*Math.cos(g),i=this.aY+this.yRadius*Math.sin(g);if(this.aRotation!==0){const j=Math.cos(this.aRotation),l=Math.sin(this.aRotation),k=h-this.aX,n=i-this.aY;h=k*j-n*l+this.aX,i=k*l+n*j+this.aY}return c.set(h,i)};xb.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this};xb.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a};xb.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this};function Ye(a,b,c,d,e,f){xb.call(this,a,b,c,c,d,e,f),this.type="ArcCurve"}Ye.prototype=Object.create(xb.prototype);Ye.prototype.constructor=Ye;Ye.prototype.isArcCurve=!0;function ci(){let a=0,b=0,c=0,d=0;function e(f,g,h,i){a=f,b=h,c=-3*f+3*g-2*h-i,d=2*f-2*g+h+i}return{initCatmullRom:function(f,g,h,i,j){e(g,h,j*(h-f),j*(i-g))},initNonuniformCatmullRom:function(f,g,h,i,j,l,k){let n=(g-f)/j-(h-f)/(j+l)+(h-g)/l,m=(h-g)/l-(i-g)/(l+k)+(i-h)/k;n*=l,m*=l,e(g,h,n,m)},calc:function(f){const g=f*f,h=g*f;return a+b*f+c*g+d*h}}}const Bg=new v(),di=new ci(),ei=new ci(),fi=new ci();function qb(a,b,c,d){ja.call(this),this.type="CatmullRomCurve3",this.points=a||[],this.closed=b||!1,this.curveType=c||"centripetal",this.tension=d||.5}qb.prototype=Object.create(ja.prototype);qb.prototype.constructor=qb;qb.prototype.isCatmullRomCurve3=!0;qb.prototype.getPoint=function(a,b){const c=b||new v(),d=this.points,e=d.length,f=(e-(this.closed?0:1))*a;let g=Math.floor(f),h=f-g;this.closed?g+=g>0?0:(Math.floor(Math.abs(g)/e)+1)*e:h===0&&g===e-1&&(g=e-2,h=1);let i,j,l,k;this.closed||g>0?i=d[(g-1)%e]:(Bg.subVectors(d[0],d[1]).add(d[0]),i=Bg),j=d[g%e],l=d[(g+1)%e],this.closed||g+2<e?k=d[(g+2)%e]:(Bg.subVectors(d[e-1],d[e-2]).add(d[e-1]),k=Bg);if(this.curveType==="centripetal"||this.curveType==="chordal"){const n=this.curveType==="chordal"?.5:.25;let m=Math.pow(i.distanceToSquared(j),n),o=Math.pow(j.distanceToSquared(l),n),s=Math.pow(l.distanceToSquared(k),n);o<1e-4&&(o=1),m<1e-4&&(m=o),s<1e-4&&(s=o),di.initNonuniformCatmullRom(i.x,j.x,l.x,k.x,m,o,s),ei.initNonuniformCatmullRom(i.y,j.y,l.y,k.y,m,o,s),fi.initNonuniformCatmullRom(i.z,j.z,l.z,k.z,m,o,s)}else this.curveType==="catmullrom"&&(di.initCatmullRom(i.x,j.x,l.x,k.x,this.tension),ei.initCatmullRom(i.y,j.y,l.y,k.y,this.tension),fi.initCatmullRom(i.z,j.z,l.z,k.z,this.tension));return c.set(di.calc(h),ei.calc(h),fi.calc(h)),c};qb.prototype.copy=function(a){ja.prototype.copy.call(this,a),this.points=[];for(let b=0,c=a.points.length;b<c;b++){const d=a.points[b];this.points.push(d.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this};qb.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);a.points=[];for(let b=0,c=this.points.length;b<c;b++){const d=this.points[b];a.points.push(d.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a};qb.prototype.fromJSON=function(a){ja.prototype.fromJSON.call(this,a),this.points=[];for(let b=0,c=a.points.length;b<c;b++){const d=a.points[b];this.points.push(new v().fromArray(d))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this};function tk(a,b,c,d,e){const f=(d-b)*.5,g=(e-c)*.5,h=a*a,i=a*h;return(2*c-2*d+f+g)*i+(-3*c+3*d-2*f-g)*h+f*a+c}function Kr(a,b){const c=1-a;return c*c*b}function Lr(a,b){return 2*(1-a)*a*b}function Mr(a,b){return a*a*b}function Ze(a,b,c,d){return Kr(a,b)+Lr(a,c)+Mr(a,d)}function Nr(a,b){const c=1-a;return c*c*c*b}function Or(a,b){const c=1-a;return 3*c*c*a*b}function Pr(a,b){return 3*(1-a)*a*a*b}function Qr(a,b){return a*a*a*b}function _e(a,b,c,d,e){return Nr(a,b)+Or(a,c)+Pr(a,d)+Qr(a,e)}function Zb(a,b,c,d){ja.call(this),this.type="CubicBezierCurve",this.v0=a||new N(),this.v1=b||new N(),this.v2=c||new N(),this.v3=d||new N()}Zb.prototype=Object.create(ja.prototype);Zb.prototype.constructor=Zb;Zb.prototype.isCubicBezierCurve=!0;Zb.prototype.getPoint=function(a,b){const c=b||new N(),d=this.v0,e=this.v1,f=this.v2,g=this.v3;return c.set(_e(a,d.x,e.x,f.x,g.x),_e(a,d.y,e.y,f.y,g.y)),c};Zb.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this};Zb.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a};Zb.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this};function pc(a,b,c,d){ja.call(this),this.type="CubicBezierCurve3",this.v0=a||new v(),this.v1=b||new v(),this.v2=c||new v(),this.v3=d||new v()}pc.prototype=Object.create(ja.prototype);pc.prototype.constructor=pc;pc.prototype.isCubicBezierCurve3=!0;pc.prototype.getPoint=function(a,b){const c=b||new v(),d=this.v0,e=this.v1,f=this.v2,g=this.v3;return c.set(_e(a,d.x,e.x,f.x,g.x),_e(a,d.y,e.y,f.y,g.y),_e(a,d.z,e.z,f.z,g.z)),c};pc.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this};pc.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a};pc.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this};function Eb(a,b){ja.call(this),this.type="LineCurve",this.v1=a||new N(),this.v2=b||new N()}Eb.prototype=Object.create(ja.prototype);Eb.prototype.constructor=Eb;Eb.prototype.isLineCurve=!0;Eb.prototype.getPoint=function(a,b){const c=b||new N();return a===1?c.copy(this.v2):(c.copy(this.v2).sub(this.v1),c.multiplyScalar(a).add(this.v1)),c};Eb.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};Eb.prototype.getTangent=function(a,b){const c=b||new N();return c.copy(this.v2).sub(this.v1).normalize(),c};Eb.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v1.copy(a.v1),this.v2.copy(a.v2),this};Eb.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a};Eb.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this};function _b(a,b){ja.call(this),this.type="LineCurve3",this.v1=a||new v(),this.v2=b||new v()}_b.prototype=Object.create(ja.prototype);_b.prototype.constructor=_b;_b.prototype.isLineCurve3=!0;_b.prototype.getPoint=function(a,b){const c=b||new v();return a===1?c.copy(this.v2):(c.copy(this.v2).sub(this.v1),c.multiplyScalar(a).add(this.v1)),c};_b.prototype.getPointAt=function(a,b){return this.getPoint(a,b)};_b.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v1.copy(a.v1),this.v2.copy(a.v2),this};_b.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a};_b.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this};function $b(a,b,c){ja.call(this),this.type="QuadraticBezierCurve",this.v0=a||new N(),this.v1=b||new N(),this.v2=c||new N()}$b.prototype=Object.create(ja.prototype);$b.prototype.constructor=$b;$b.prototype.isQuadraticBezierCurve=!0;$b.prototype.getPoint=function(a,b){const c=b||new N(),d=this.v0,e=this.v1,f=this.v2;return c.set(Ze(a,d.x,e.x,f.x),Ze(a,d.y,e.y,f.y)),c};$b.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this};$b.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a};$b.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this};function qc(a,b,c){ja.call(this),this.type="QuadraticBezierCurve3",this.v0=a||new v(),this.v1=b||new v(),this.v2=c||new v()}qc.prototype=Object.create(ja.prototype);qc.prototype.constructor=qc;qc.prototype.isQuadraticBezierCurve3=!0;qc.prototype.getPoint=function(a,b){const c=b||new v(),d=this.v0,e=this.v1,f=this.v2;return c.set(Ze(a,d.x,e.x,f.x),Ze(a,d.y,e.y,f.y),Ze(a,d.z,e.z,f.z)),c};qc.prototype.copy=function(a){return ja.prototype.copy.call(this,a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this};qc.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a};qc.prototype.fromJSON=function(a){return ja.prototype.fromJSON.call(this,a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this};function ac(a){ja.call(this),this.type="SplineCurve",this.points=a||[]}ac.prototype=Object.create(ja.prototype);ac.prototype.constructor=ac;ac.prototype.isSplineCurve=!0;ac.prototype.getPoint=function(a,b){const c=b||new N(),d=this.points,e=(d.length-1)*a,f=Math.floor(e),g=e-f,h=d[f===0?f:f-1],i=d[f],j=d[f>d.length-2?d.length-1:f+1],l=d[f>d.length-3?d.length-1:f+2];return c.set(tk(g,h.x,i.x,j.x,l.x),tk(g,h.y,i.y,j.y,l.y)),c};ac.prototype.copy=function(a){ja.prototype.copy.call(this,a),this.points=[];for(let b=0,c=a.points.length;b<c;b++){const d=a.points[b];this.points.push(d.clone())}return this};ac.prototype.toJSON=function(){const a=ja.prototype.toJSON.call(this);a.points=[];for(let b=0,c=this.points.length;b<c;b++){const d=this.points[b];a.points.push(d.toArray())}return a};ac.prototype.fromJSON=function(a){ja.prototype.fromJSON.call(this,a),this.points=[];for(let b=0,c=a.points.length;b<c;b++){const d=a.points[b];this.points.push(new N().fromArray(d))}return this};var gi=Object.freeze({__proto__:null,ArcCurve:Ye,CatmullRomCurve3:qb,CubicBezierCurve:Zb,CubicBezierCurve3:pc,EllipseCurve:xb,LineCurve:Eb,LineCurve3:_b,QuadraticBezierCurve:$b,QuadraticBezierCurve3:qc,SplineCurve:ac});function Jc(){ja.call(this),this.type="CurvePath",this.curves=[],this.autoClose=!1}Jc.prototype=Object.assign(Object.create(ja.prototype),{constructor:Jc,add:function(a){this.curves.push(a)},closePath:function(){const a=this.curves[0].getPoint(0),b=this.curves[this.curves.length-1].getPoint(1);a.equals(b)||this.curves.push(new Eb(b,a))},getPoint:function(a){const b=a*this.getLength(),c=this.getCurveLengths();let d=0;for(;d<c.length;){if(c[d]>=b){const e=c[d]-b,f=this.curves[d],g=f.getLength(),h=g===0?0:1-e/g;return f.getPointAt(h)}d++}return null},getLength:function(){const a=this.getCurveLengths();return a[a.length-1]},updateArcLengths:function(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()},getCurveLengths:function(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const a=[];let b=0;for(let c=0,d=this.curves.length;c<d;c++)b+=this.curves[c].getLength(),a.push(b);return this.cacheLengths=a,a},getSpacedPoints:function(a){a===void 0&&(a=40);const b=[];for(let c=0;c<=a;c++)b.push(this.getPoint(c/a));return this.autoClose&&b.push(b[0]),b},getPoints:function(a){a=a||12;const b=[];let c;for(let d=0,e=this.curves;d<e.length;d++){const f=e[d],g=f&&f.isEllipseCurve?a*2:f&&(f.isLineCurve||f.isLineCurve3)?1:f&&f.isSplineCurve?a*f.points.length:a,h=f.getPoints(g);for(let i=0;i<h.length;i++){const j=h[i];if(c&&c.equals(j))continue;b.push(j),c=j}}return this.autoClose&&b.length>1&&!b[b.length-1].equals(b[0])&&b.push(b[0]),b},copy:function(a){ja.prototype.copy.call(this,a),this.curves=[];for(let b=0,c=a.curves.length;b<c;b++){const d=a.curves[b];this.curves.push(d.clone())}return this.autoClose=a.autoClose,this},toJSON:function(){const a=ja.prototype.toJSON.call(this);a.autoClose=this.autoClose,a.curves=[];for(let b=0,c=this.curves.length;b<c;b++){const d=this.curves[b];a.curves.push(d.toJSON())}return a},fromJSON:function(a){ja.prototype.fromJSON.call(this,a),this.autoClose=a.autoClose,this.curves=[];for(let b=0,c=a.curves.length;b<c;b++){const d=a.curves[b];this.curves.push(new gi[d.type]().fromJSON(d))}return this}});function bc(a){Jc.call(this),this.type="Path",this.currentPoint=new N(),a&&this.setFromPoints(a)}bc.prototype=Object.assign(Object.create(Jc.prototype),{constructor:bc,setFromPoints:function(a){this.moveTo(a[0].x,a[0].y);for(let b=1,c=a.length;b<c;b++)this.lineTo(a[b].x,a[b].y);return this},moveTo:function(a,b){return this.currentPoint.set(a,b),this},lineTo:function(a,b){const c=new Eb(this.currentPoint.clone(),new N(a,b));return this.curves.push(c),this.currentPoint.set(a,b),this},quadraticCurveTo:function(a,b,c,d){const e=new $b(this.currentPoint.clone(),new N(a,b),new N(c,d));return this.curves.push(e),this.currentPoint.set(c,d),this},bezierCurveTo:function(a,b,c,d,e,f){const g=new Zb(this.currentPoint.clone(),new N(a,b),new N(c,d),new N(e,f));return this.curves.push(g),this.currentPoint.set(e,f),this},splineThru:function(a){const b=[this.currentPoint.clone()].concat(a),c=new ac(b);return this.curves.push(c),this.currentPoint.copy(a[a.length-1]),this},arc:function(a,b,c,d,e,f){const g=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(a+g,b+h,c,d,e,f),this},absarc:function(a,b,c,d,e,f){return this.absellipse(a,b,c,c,d,e,f),this},ellipse:function(a,b,c,d,e,f,g,h){const i=this.currentPoint.x,j=this.currentPoint.y;return this.absellipse(a+i,b+j,c,d,e,f,g,h),this},absellipse:function(a,b,c,d,e,f,g,h){const i=new xb(a,b,c,d,e,f,g,h);if(this.curves.length>0){const l=i.getPoint(0);l.equals(this.currentPoint)||this.lineTo(l.x,l.y)}this.curves.push(i);const j=i.getPoint(1);return this.currentPoint.copy(j),this},copy:function(a){return Jc.prototype.copy.call(this,a),this.currentPoint.copy(a.currentPoint),this},toJSON:function(){const a=Jc.prototype.toJSON.call(this);return a.currentPoint=this.currentPoint.toArray(),a},fromJSON:function(a){return Jc.prototype.fromJSON.call(this,a),this.currentPoint.fromArray(a.currentPoint),this}});function $c(a){bc.call(this,a),this.uuid=va.generateUUID(),this.type="Shape",this.holes=[]}$c.prototype=Object.assign(Object.create(bc.prototype),{constructor:$c,getPointsHoles:function(a){const b=[];for(let c=0,d=this.holes.length;c<d;c++)b[c]=this.holes[c].getPoints(a);return b},extractPoints:function(a){return{shape:this.getPoints(a),holes:this.getPointsHoles(a)}},copy:function(a){bc.prototype.copy.call(this,a),this.holes=[];for(let b=0,c=a.holes.length;b<c;b++){const d=a.holes[b];this.holes.push(d.clone())}return this},toJSON:function(){const a=bc.prototype.toJSON.call(this);a.uuid=this.uuid,a.holes=[];for(let b=0,c=this.holes.length;b<c;b++){const d=this.holes[b];a.holes.push(d.toJSON())}return a},fromJSON:function(a){bc.prototype.fromJSON.call(this,a),this.uuid=a.uuid,this.holes=[];for(let b=0,c=a.holes.length;b<c;b++){const d=a.holes[b];this.holes.push(new bc().fromJSON(d))}return this}});function Na(a,b){$.call(this),this.type="Light",this.color=new da(a),this.intensity=b!==void 0?b:1,this.receiveShadow=void 0}Na.prototype=Object.assign(Object.create($.prototype),{constructor:Na,isLight:!0,copy:function(a){return $.prototype.copy.call(this,a),this.color.copy(a.color),this.intensity=a.intensity,this},toJSON:function(a){const b=$.prototype.toJSON.call(this,a);return b.object.color=this.color.getHex(),b.object.intensity=this.intensity,this.groundColor!==void 0&&(b.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(b.object.distance=this.distance),this.angle!==void 0&&(b.object.angle=this.angle),this.decay!==void 0&&(b.object.decay=this.decay),this.penumbra!==void 0&&(b.object.penumbra=this.penumbra),this.shadow!==void 0&&(b.object.shadow=this.shadow.toJSON()),b}});function $e(a,b,c){Na.call(this,a,c),this.type="HemisphereLight",this.castShadow=void 0,this.position.copy($.DefaultUp),this.updateMatrix(),this.groundColor=new da(b)}$e.prototype=Object.assign(Object.create(Na.prototype),{constructor:$e,isHemisphereLight:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.groundColor.copy(a.groundColor),this}});function rc(a){this.camera=a,this.bias=0,this.normalBias=0,this.radius=1,this.mapSize=new N(512,512),this.map=null,this.mapPass=null,this.matrix=new za(),this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new xe(),this._frameExtents=new N(1,1),this._viewportCount=1,this._viewports=[new Ia(0,0,1,1)]}Object.assign(rc.prototype,{_projScreenMatrix:new za(),_lightPositionWorld:new v(),_lookTarget:new v(),getViewportCount:function(){return this._viewportCount},getFrustum:function(){return this._frustum},updateMatrices:function(a){const b=this.camera,c=this.matrix,d=this._projScreenMatrix,e=this._lookTarget,f=this._lightPositionWorld;f.setFromMatrixPosition(a.matrixWorld),b.position.copy(f),e.setFromMatrixPosition(a.target.matrixWorld),b.lookAt(e),b.updateMatrixWorld(),d.multiplyMatrices(b.projectionMatrix,b.matrixWorldInverse),this._frustum.setFromProjectionMatrix(d),c.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),c.multiply(b.projectionMatrix),c.multiply(b.matrixWorldInverse)},getViewport:function(a){return this._viewports[a]},getFrameExtents:function(){return this._frameExtents},copy:function(a){return this.camera=a.camera.clone(),this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const a={};return this.bias!==0&&(a.bias=this.bias),this.normalBias!==0&&(a.normalBias=this.normalBias),this.radius!==1&&(a.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(a.mapSize=this.mapSize.toArray()),a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}});function hi(){rc.call(this,new Ya(50,1,.5,500))}hi.prototype=Object.assign(Object.create(rc.prototype),{constructor:hi,isSpotLightShadow:!0,updateMatrices:function(a){const b=this.camera,c=va.RAD2DEG*2*a.angle,d=this.mapSize.width/this.mapSize.height,e=a.distance||b.far;(c!==b.fov||d!==b.aspect||e!==b.far)&&(b.fov=c,b.aspect=d,b.far=e,b.updateProjectionMatrix()),rc.prototype.updateMatrices.call(this,a)}});function ii(a,b,c,d,e,f){Na.call(this,a,b),this.type="SpotLight",this.position.copy($.DefaultUp),this.updateMatrix(),this.target=new $(),Object.defineProperty(this,"power",{get:function(){return this.intensity*Math.PI},set:function(g){this.intensity=g/Math.PI}}),this.distance=c!==void 0?c:0,this.angle=d!==void 0?d:Math.PI/3,this.penumbra=e!==void 0?e:0,this.decay=f!==void 0?f:1,this.shadow=new hi()}ii.prototype=Object.assign(Object.create(Na.prototype),{constructor:ii,isSpotLight:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}});function ji(){rc.call(this,new Ya(90,1,.5,500)),this._frameExtents=new N(4,2),this._viewportCount=6,this._viewports=[new Ia(2,1,1,1),new Ia(0,1,1,1),new Ia(3,1,1,1),new Ia(1,1,1,1),new Ia(3,0,1,1),new Ia(1,0,1,1)],this._cubeDirections=[new v(1,0,0),new v(-1,0,0),new v(0,0,1),new v(0,0,-1),new v(0,1,0),new v(0,-1,0)],this._cubeUps=[new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,1,0),new v(0,0,1),new v(0,0,-1)]}ji.prototype=Object.assign(Object.create(rc.prototype),{constructor:ji,isPointLightShadow:!0,updateMatrices:function(a,b){b===void 0&&(b=0);const c=this.camera,d=this.matrix,e=this._lightPositionWorld,f=this._lookTarget,g=this._projScreenMatrix;e.setFromMatrixPosition(a.matrixWorld),c.position.copy(e),f.copy(c.position),f.add(this._cubeDirections[b]),c.up.copy(this._cubeUps[b]),c.lookAt(f),c.updateMatrixWorld(),d.makeTranslation(-e.x,-e.y,-e.z),g.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),this._frustum.setFromProjectionMatrix(g)}});function ki(a,b,c,d){Na.call(this,a,b),this.type="PointLight",Object.defineProperty(this,"power",{get:function(){return this.intensity*4*Math.PI},set:function(e){this.intensity=e/(4*Math.PI)}}),this.distance=c!==void 0?c:0,this.decay=d!==void 0?d:1,this.shadow=new ji()}ki.prototype=Object.assign(Object.create(Na.prototype),{constructor:ki,isPointLight:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}});function af(a,b,c,d,e,f){lc.call(this),this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a!==void 0?a:-1,this.right=b!==void 0?b:1,this.top=c!==void 0?c:1,this.bottom=d!==void 0?d:-1,this.near=e!==void 0?e:.1,this.far=f!==void 0?f:2e3,this.updateProjectionMatrix()}af.prototype=Object.assign(Object.create(lc.prototype),{constructor:af,isOrthographicCamera:!0,copy:function(a,b){return lc.prototype.copy.call(this,a,b),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this},setViewOffset:function(a,b,c,d,e,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=b,this.view.offsetX=c,this.view.offsetY=d,this.view.width=e,this.view.height=f,this.updateProjectionMatrix()},clearViewOffset:function(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()},updateProjectionMatrix:function(){const a=(this.right-this.left)/(2*this.zoom),b=(this.top-this.bottom)/(2*this.zoom),c=(this.right+this.left)/2,d=(this.top+this.bottom)/2;let e=c-a,f=c+a,g=d+b,h=d-b;if(this.view!==null&&this.view.enabled){const i=(this.right-this.left)/this.view.fullWidth/this.zoom,j=(this.top-this.bottom)/this.view.fullHeight/this.zoom;e+=i*this.view.offsetX,f=e+i*this.view.width,g-=j*this.view.offsetY,h=g-j*this.view.height}this.projectionMatrix.makeOrthographic(e,f,g,h,this.near,this.far),this.projectionMatrixInverse.getInverse(this.projectionMatrix)},toJSON:function(a){const b=$.prototype.toJSON.call(this,a);return b.object.zoom=this.zoom,b.object.left=this.left,b.object.right=this.right,b.object.top=this.top,b.object.bottom=this.bottom,b.object.near=this.near,b.object.far=this.far,this.view!==null&&(b.object.view=Object.assign({},this.view)),b}});function li(){rc.call(this,new af(-5,5,5,-5,.5,500))}li.prototype=Object.assign(Object.create(rc.prototype),{constructor:li,isDirectionalLightShadow:!0,updateMatrices:function(a){rc.prototype.updateMatrices.call(this,a)}});function bf(a,b){Na.call(this,a,b),this.type="DirectionalLight",this.position.copy($.DefaultUp),this.updateMatrix(),this.target=new $(),this.shadow=new li()}bf.prototype=Object.assign(Object.create(Na.prototype),{constructor:bf,isDirectionalLight:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}});function cf(a,b){Na.call(this,a,b),this.type="AmbientLight",this.castShadow=void 0}cf.prototype=Object.assign(Object.create(Na.prototype),{constructor:cf,isAmbientLight:!0});function mi(a,b,c,d){Na.call(this,a,b),this.type="RectAreaLight",this.width=c!==void 0?c:10,this.height=d!==void 0?d:10}mi.prototype=Object.assign(Object.create(Na.prototype),{constructor:mi,isRectAreaLight:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.width=a.width,this.height=a.height,this},toJSON:function(a){const b=Na.prototype.toJSON.call(this,a);return b.object.width=this.width,b.object.height=this.height,b}});function ni(){this.coefficients=[];for(let a=0;a<9;a++)this.coefficients.push(new v())}Object.assign(ni.prototype,{isSphericalHarmonics3:!0,set:function(a){for(let b=0;b<9;b++)this.coefficients[b].copy(a[b]);return this},zero:function(){for(let a=0;a<9;a++)this.coefficients[a].set(0,0,0);return this},getAt:function(a,b){const c=a.x,d=a.y,e=a.z,f=this.coefficients;return b.copy(f[0]).multiplyScalar(.282095),b.addScaledVector(f[1],.488603*d),b.addScaledVector(f[2],.488603*e),b.addScaledVector(f[3],.488603*c),b.addScaledVector(f[4],1.092548*(c*d)),b.addScaledVector(f[5],1.092548*(d*e)),b.addScaledVector(f[6],.315392*(3*e*e-1)),b.addScaledVector(f[7],1.092548*(c*e)),b.addScaledVector(f[8],.546274*(c*c-d*d)),b},getIrradianceAt:function(a,b){const c=a.x,d=a.y,e=a.z,f=this.coefficients;return b.copy(f[0]).multiplyScalar(.886227),b.addScaledVector(f[1],2*.511664*d),b.addScaledVector(f[2],2*.511664*e),b.addScaledVector(f[3],2*.511664*c),b.addScaledVector(f[4],2*.429043*c*d),b.addScaledVector(f[5],2*.429043*d*e),b.addScaledVector(f[6],.743125*e*e-.247708),b.addScaledVector(f[7],2*.429043*c*e),b.addScaledVector(f[8],.429043*(c*c-d*d)),b},add:function(a){for(let b=0;b<9;b++)this.coefficients[b].add(a.coefficients[b]);return this},addScaledSH:function(a,b){for(let c=0;c<9;c++)this.coefficients[c].addScaledVector(a.coefficients[c],b);return this},scale:function(a){for(let b=0;b<9;b++)this.coefficients[b].multiplyScalar(a);return this},lerp:function(a,b){for(let c=0;c<9;c++)this.coefficients[c].lerp(a.coefficients[c],b);return this},equals:function(a){for(let b=0;b<9;b++)if(!this.coefficients[b].equals(a.coefficients[b]))return!1;return!0},copy:function(a){return this.set(a.coefficients)},clone:function(){return new this.constructor().copy(this)},fromArray:function(a,b){b===void 0&&(b=0);const c=this.coefficients;for(let d=0;d<9;d++)c[d].fromArray(a,b+d*3);return this},toArray:function(a,b){a===void 0&&(a=[]),b===void 0&&(b=0);const c=this.coefficients;for(let d=0;d<9;d++)c[d].toArray(a,b+d*3);return a}});Object.assign(ni,{getBasisAt:function(a,b){const c=a.x,d=a.y,e=a.z;b[0]=.282095,b[1]=.488603*d,b[2]=.488603*e,b[3]=.488603*c,b[4]=1.092548*c*d,b[5]=1.092548*d*e,b[6]=.315392*(3*e*e-1),b[7]=1.092548*c*e,b[8]=.546274*(c*c-d*d)}});function Tb(a,b){Na.call(this,void 0,b),this.type="LightProbe",this.sh=a!==void 0?a:new ni()}Tb.prototype=Object.assign(Object.create(Na.prototype),{constructor:Tb,isLightProbe:!0,copy:function(a){return Na.prototype.copy.call(this,a),this.sh.copy(a.sh),this},fromJSON:function(a){return this.intensity=a.intensity,this.sh.fromArray(a.sh),this},toJSON:function(a){const b=Na.prototype.toJSON.call(this,a);return b.object.sh=this.sh.toArray(),b}});function oi(a){Ja.call(this,a),this.textures={}}oi.prototype=Object.assign(Object.create(Ja.prototype),{constructor:oi,load:function(a,b,c,d){const e=this,f=new Yb(e.manager);f.setPath(e.path),f.load(a,function(g){try{b(e.parse(JSON.parse(g)))}catch(h){d?d(h):console.error(h),e.manager.itemError(a)}},c,d)},parse:function(a){const b=this.textures;function c(e){return b[e]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",e),b[e]}const d=new Gr[a.type]();a.uuid!==void 0&&(d.uuid=a.uuid),a.name!==void 0&&(d.name=a.name),a.color!==void 0&&d.color.setHex(a.color),a.roughness!==void 0&&(d.roughness=a.roughness),a.metalness!==void 0&&(d.metalness=a.metalness),a.sheen!==void 0&&(d.sheen=new da().setHex(a.sheen)),a.emissive!==void 0&&d.emissive.setHex(a.emissive),a.specular!==void 0&&d.specular.setHex(a.specular),a.shininess!==void 0&&(d.shininess=a.shininess),a.clearcoat!==void 0&&(d.clearcoat=a.clearcoat),a.clearcoatRoughness!==void 0&&(d.clearcoatRoughness=a.clearcoatRoughness),a.fog!==void 0&&(d.fog=a.fog),a.flatShading!==void 0&&(d.flatShading=a.flatShading),a.blending!==void 0&&(d.blending=a.blending),a.combine!==void 0&&(d.combine=a.combine),a.side!==void 0&&(d.side=a.side),a.opacity!==void 0&&(d.opacity=a.opacity),a.transparent!==void 0&&(d.transparent=a.transparent),a.alphaTest!==void 0&&(d.alphaTest=a.alphaTest),a.depthTest!==void 0&&(d.depthTest=a.depthTest),a.depthWrite!==void 0&&(d.depthWrite=a.depthWrite),a.colorWrite!==void 0&&(d.colorWrite=a.colorWrite),a.stencilWrite!==void 0&&(d.stencilWrite=a.stencilWrite),a.stencilWriteMask!==void 0&&(d.stencilWriteMask=a.stencilWriteMask),a.stencilFunc!==void 0&&(d.stencilFunc=a.stencilFunc),a.stencilRef!==void 0&&(d.stencilRef=a.stencilRef),a.stencilFuncMask!==void 0&&(d.stencilFuncMask=a.stencilFuncMask),a.stencilFail!==void 0&&(d.stencilFail=a.stencilFail),a.stencilZFail!==void 0&&(d.stencilZFail=a.stencilZFail),a.stencilZPass!==void 0&&(d.stencilZPass=a.stencilZPass),a.wireframe!==void 0&&(d.wireframe=a.wireframe),a.wireframeLinewidth!==void 0&&(d.wireframeLinewidth=a.wireframeLinewidth),a.wireframeLinecap!==void 0&&(d.wireframeLinecap=a.wireframeLinecap),a.wireframeLinejoin!==void 0&&(d.wireframeLinejoin=a.wireframeLinejoin),a.rotation!==void 0&&(d.rotation=a.rotation),a.linewidth!==1&&(d.linewidth=a.linewidth),a.dashSize!==void 0&&(d.dashSize=a.dashSize),a.gapSize!==void 0&&(d.gapSize=a.gapSize),a.scale!==void 0&&(d.scale=a.scale),a.polygonOffset!==void 0&&(d.polygonOffset=a.polygonOffset),a.polygonOffsetFactor!==void 0&&(d.polygonOffsetFactor=a.polygonOffsetFactor),a.polygonOffsetUnits!==void 0&&(d.polygonOffsetUnits=a.polygonOffsetUnits),a.skinning!==void 0&&(d.skinning=a.skinning),a.morphTargets!==void 0&&(d.morphTargets=a.morphTargets),a.morphNormals!==void 0&&(d.morphNormals=a.morphNormals),a.dithering!==void 0&&(d.dithering=a.dithering),a.vertexTangents!==void 0&&(d.vertexTangents=a.vertexTangents),a.visible!==void 0&&(d.visible=a.visible),a.toneMapped!==void 0&&(d.toneMapped=a.toneMapped),a.userData!==void 0&&(d.userData=a.userData),a.vertexColors!==void 0&&(typeof a.vertexColors==="number"?d.vertexColors=a.vertexColors>0?!0:!1:d.vertexColors=a.vertexColors);if(a.uniforms!==void 0)for(const e in a.uniforms){const f=a.uniforms[e];d.uniforms[e]={};switch(f.type){case"t":d.uniforms[e].value=c(f.value);break;case"c":d.uniforms[e].value=new da().setHex(f.value);break;case"v2":d.uniforms[e].value=new N().fromArray(f.value);break;case"v3":d.uniforms[e].value=new v().fromArray(f.value);break;case"v4":d.uniforms[e].value=new Ia().fromArray(f.value);break;case"m3":d.uniforms[e].value=new ob().fromArray(f.value);case"m4":d.uniforms[e].value=new za().fromArray(f.value);break;default:d.uniforms[e].value=f.value}}a.defines!==void 0&&(d.defines=a.defines),a.vertexShader!==void 0&&(d.vertexShader=a.vertexShader),a.fragmentShader!==void 0&&(d.fragmentShader=a.fragmentShader);if(a.extensions!==void 0)for(const e in a.extensions)d.extensions[e]=a.extensions[e];a.shading!==void 0&&(d.flatShading=a.shading===1),a.size!==void 0&&(d.size=a.size),a.sizeAttenuation!==void 0&&(d.sizeAttenuation=a.sizeAttenuation),a.map!==void 0&&(d.map=c(a.map)),a.matcap!==void 0&&(d.matcap=c(a.matcap)),a.alphaMap!==void 0&&(d.alphaMap=c(a.alphaMap)),a.bumpMap!==void 0&&(d.bumpMap=c(a.bumpMap)),a.bumpScale!==void 0&&(d.bumpScale=a.bumpScale),a.normalMap!==void 0&&(d.normalMap=c(a.normalMap)),a.normalMapType!==void 0&&(d.normalMapType=a.normalMapType);if(a.normalScale!==void 0){let e=a.normalScale;Array.isArray(e)===!1&&(e=[e,e]),d.normalScale=new N().fromArray(e)}return a.displacementMap!==void 0&&(d.displacementMap=c(a.displacementMap)),a.displacementScale!==void 0&&(d.displacementScale=a.displacementScale),a.displacementBias!==void 0&&(d.displacementBias=a.displacementBias),a.roughnessMap!==void 0&&(d.roughnessMap=c(a.roughnessMap)),a.metalnessMap!==void 0&&(d.metalnessMap=c(a.metalnessMap)),a.emissiveMap!==void 0&&(d.emissiveMap=c(a.emissiveMap)),a.emissiveIntensity!==void 0&&(d.emissiveIntensity=a.emissiveIntensity),a.specularMap!==void 0&&(d.specularMap=c(a.specularMap)),a.envMap!==void 0&&(d.envMap=c(a.envMap)),a.envMapIntensity!==void 0&&(d.envMapIntensity=a.envMapIntensity),a.reflectivity!==void 0&&(d.reflectivity=a.reflectivity),a.refractionRatio!==void 0&&(d.refractionRatio=a.refractionRatio),a.lightMap!==void 0&&(d.lightMap=c(a.lightMap)),a.lightMapIntensity!==void 0&&(d.lightMapIntensity=a.lightMapIntensity),a.aoMap!==void 0&&(d.aoMap=c(a.aoMap)),a.aoMapIntensity!==void 0&&(d.aoMapIntensity=a.aoMapIntensity),a.gradientMap!==void 0&&(d.gradientMap=c(a.gradientMap)),a.clearcoatMap!==void 0&&(d.clearcoatMap=c(a.clearcoatMap)),a.clearcoatRoughnessMap!==void 0&&(d.clearcoatRoughnessMap=c(a.clearcoatRoughnessMap)),a.clearcoatNormalMap!==void 0&&(d.clearcoatNormalMap=c(a.clearcoatNormalMap)),a.clearcoatNormalScale!==void 0&&(d.clearcoatNormalScale=new N().fromArray(a.clearcoatNormalScale)),d},setTextures:function(a){return this.textures=a,this}});const uk={decodeText:function(a){if(typeof TextDecoder!=="undefined")return new TextDecoder().decode(a);let b="";for(let c=0,d=a.length;c<d;c++)b+=String.fromCharCode(a[c]);try{return decodeURIComponent(escape(b))}catch(c){return b}},extractUrlBase:function(a){const b=a.lastIndexOf("/");return b===-1?"./":a.substr(0,b+1)}};function Cg(){fa.call(this),this.type="InstancedBufferGeometry",this.instanceCount=Infinity}Cg.prototype=Object.assign(Object.create(fa.prototype),{constructor:Cg,isInstancedBufferGeometry:!0,copy:function(a){return fa.prototype.copy.call(this,a),this.instanceCount=a.instanceCount,this},clone:function(){return new this.constructor().copy(this)},toJSON:function(){const a=fa.prototype.toJSON.call(this);return a.instanceCount=this.instanceCount,a.isInstancedBufferGeometry=!0,a}});function pi(a,b,c,d){typeof c==="number"&&(d=c,c=!1,console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.")),qa.call(this,a,b,c),this.meshPerAttribute=d||1}pi.prototype=Object.assign(Object.create(qa.prototype),{constructor:pi,isInstancedBufferAttribute:!0,copy:function(a){return qa.prototype.copy.call(this,a),this.meshPerAttribute=a.meshPerAttribute,this},toJSON:function(){const a=qa.prototype.toJSON.call(this);return a.meshPerAttribute=this.meshPerAttribute,a.isInstancedBufferAttribute=!0,a}});function qi(a){Ja.call(this,a)}qi.prototype=Object.assign(Object.create(Ja.prototype),{constructor:qi,load:function(a,b,c,d){const e=this,f=new Yb(e.manager);f.setPath(e.path),f.load(a,function(g){try{b(e.parse(JSON.parse(g)))}catch(h){d?d(h):console.error(h),e.manager.itemError(a)}},c,d)},parse:function(a){const b={},c={};function d(n,m){if(b[m]!==void 0)return b[m];const o=n.interleavedBuffers,s=o[m],r=e(n,s.buffer),p=new Dg[s.type](r),q=new Kb(p,s.stride);return q.uuid=s.uuid,b[m]=q,q}function e(n,m){if(c[m]!==void 0)return c[m];const o=n.arrayBuffers,s=o[m],r=new Uint32Array(s).buffer;return c[m]=r,r}const f=a.isInstancedBufferGeometry?new Cg():new fa(),g=a.data.index;if(g!==void 0){const n=new Dg[g.type](g.array);f.setIndex(new qa(n,1))}const h=a.data.attributes;for(const n in h){const m=h[n];let o;if(m.isInterleavedBufferAttribute){const s=d(a.data,m.data);o=new Xc(s,m.itemSize,m.offset,m.normalized)}else{const s=new Dg[m.type](m.array),r=m.isInstancedBufferAttribute?pi:qa;o=new r(s,m.itemSize,m.normalized)}m.name!==void 0&&(o.name=m.name),f.setAttribute(n,o)}const i=a.data.morphAttributes;if(i)for(const n in i){const m=i[n],o=[];for(let s=0,r=m.length;s<r;s++){const p=m[s];let q;if(p.isInterleavedBufferAttribute){const u=d(a.data,p.data);q=new Xc(u,p.itemSize,p.offset,p.normalized)}else{const u=new Dg[p.type](p.array);q=new qa(u,p.itemSize,p.normalized)}p.name!==void 0&&(q.name=p.name),o.push(q)}f.morphAttributes[n]=o}const j=a.data.morphTargetsRelative;j&&(f.morphTargetsRelative=!0);const l=a.data.groups||a.data.drawcalls||a.data.offsets;if(l!==void 0)for(let n=0,m=l.length;n!==m;++n){const o=l[n];f.addGroup(o.start,o.count,o.materialIndex)}const k=a.data.boundingSphere;if(k!==void 0){const n=new v();k.center!==void 0&&n.fromArray(k.center),f.boundingSphere=new hc(n,k.radius)}return a.name&&(f.name=a.name),a.userData&&(f.userData=a.userData),f}});const Dg={Int8Array,Uint8Array,Uint8ClampedArray:typeof Uint8ClampedArray!=="undefined"?Uint8ClampedArray:Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function ri(a){Ja.call(this,a)}ri.prototype=Object.assign(Object.create(Ja.prototype),{constructor:ri,load:function(a,b,c,d){const e=this,f=this.path===""?uk.extractUrlBase(a):this.path;this.resourcePath=this.resourcePath||f;const g=new Yb(e.manager);g.setPath(this.path),g.load(a,function(h){let i=null;try{i=JSON.parse(h)}catch(l){d!==void 0&&d(l),console.error("THREE:ObjectLoader: Can't parse "+a+".",l.message);return}const j=i.metadata;if(j===void 0||j.type===void 0||j.type.toLowerCase()==="geometry"){console.error("THREE.ObjectLoader: Can't load "+a);return}e.parse(i,b)},c,d)},parse:function(a,b){const c=this.parseShape(a.shapes),d=this.parseGeometries(a.geometries,c),e=this.parseImages(a.images,function(){b!==void 0&&b(h)}),f=this.parseTextures(a.textures,e),g=this.parseMaterials(a.materials,f),h=this.parseObject(a.object,d,g);return a.animations&&(h.animations=this.parseAnimations(a.animations)),(a.images===void 0||a.images.length===0)&&(b!==void 0&&b(h)),h},parseShape:function(a){const b={};if(a!==void 0)for(let c=0,d=a.length;c<d;c++){const e=new $c().fromJSON(a[c]);b[e.uuid]=e}return b},parseGeometries:function(a,b){const c={};let d;if(a!==void 0){const e=new qi();for(let f=0,g=a.length;f<g;f++){let h;const i=a[f];switch(i.type){case"PlaneGeometry":case"PlaneBufferGeometry":h=new pb[i.type](i.width,i.height,i.widthSegments,i.heightSegments);break;case"BoxGeometry":case"BoxBufferGeometry":case"CubeGeometry":h=new pb[i.type](i.width,i.height,i.depth,i.widthSegments,i.heightSegments,i.depthSegments);break;case"CircleGeometry":case"CircleBufferGeometry":h=new pb[i.type](i.radius,i.segments,i.thetaStart,i.thetaLength);break;case"CylinderGeometry":case"CylinderBufferGeometry":h=new pb[i.type](i.radiusTop,i.radiusBottom,i.height,i.radialSegments,i.heightSegments,i.openEnded,i.thetaStart,i.thetaLength);break;case"ConeGeometry":case"ConeBufferGeometry":h=new pb[i.type](i.radius,i.height,i.radialSegments,i.heightSegments,i.openEnded,i.thetaStart,i.thetaLength);break;case"SphereGeometry":case"SphereBufferGeometry":h=new pb[i.type](i.radius,i.widthSegments,i.heightSegments,i.phiStart,i.phiLength,i.thetaStart,i.thetaLength);break;case"DodecahedronGeometry":case"DodecahedronBufferGeometry":case"IcosahedronGeometry":case"IcosahedronBufferGeometry":case"OctahedronGeometry":case"OctahedronBufferGeometry":case"TetrahedronGeometry":case"TetrahedronBufferGeometry":h=new pb[i.type](i.radius,i.detail);break;case"RingGeometry":case"RingBufferGeometry":h=new pb[i.type](i.innerRadius,i.outerRadius,i.thetaSegments,i.phiSegments,i.thetaStart,i.thetaLength);break;case"TorusGeometry":case"TorusBufferGeometry":h=new pb[i.type](i.radius,i.tube,i.radialSegments,i.tubularSegments,i.arc);break;case"TorusKnotGeometry":case"TorusKnotBufferGeometry":h=new pb[i.type](i.radius,i.tube,i.tubularSegments,i.radialSegments,i.p,i.q);break;case"TubeGeometry":case"TubeBufferGeometry":h=new pb[i.type](new gi[i.path.type]().fromJSON(i.path),i.tubularSegments,i.radius,i.radialSegments,i.closed);break;case"LatheGeometry":case"LatheBufferGeometry":h=new pb[i.type](i.points,i.segments,i.phiStart,i.phiLength);break;case"PolyhedronGeometry":case"PolyhedronBufferGeometry":h=new pb[i.type](i.vertices,i.indices,i.radius,i.details);break;case"ShapeGeometry":case"ShapeBufferGeometry":d=[];for(let l=0,k=i.shapes.length;l<k;l++){const n=b[i.shapes[l]];d.push(n)}h=new pb[i.type](d,i.curveSegments);break;case"ExtrudeGeometry":case"ExtrudeBufferGeometry":d=[];for(let l=0,k=i.shapes.length;l<k;l++){const n=b[i.shapes[l]];d.push(n)}const j=i.options.extrudePath;j!==void 0&&(i.options.extrudePath=new gi[j.type]().fromJSON(j)),h=new pb[i.type](d,i.options);break;case"BufferGeometry":case"InstancedBufferGeometry":h=e.parse(i);break;case"Geometry":console.error('THREE.ObjectLoader: Loading "Geometry" is not supported anymore.');break;default:console.warn('THREE.ObjectLoader: Unsupported geometry type "'+i.type+'"');continue}h.uuid=i.uuid,i.name!==void 0&&(h.name=i.name),h.isBufferGeometry===!0&&i.userData!==void 0&&(h.userData=i.userData),c[i.uuid]=h}}return c},parseMaterials:function(a,b){const c={},d={};if(a!==void 0){const e=new oi();e.setTextures(b);for(let f=0,g=a.length;f<g;f++){const h=a[f];if(h.type==="MultiMaterial"){const i=[];for(let j=0;j<h.materials.length;j++){const l=h.materials[j];c[l.uuid]===void 0&&(c[l.uuid]=e.parse(l)),i.push(c[l.uuid])}d[h.uuid]=i}else c[h.uuid]===void 0&&(c[h.uuid]=e.parse(h)),d[h.uuid]=c[h.uuid]}}return d},parseAnimations:function(a){const b=[];for(let c=0;c<a.length;c++){const d=a[c],e=Rb.parse(d);d.uuid!==void 0&&(e.uuid=d.uuid),b.push(e)}return b},parseImages:function(a,b){const c=this,d={};let e;function f(g){return c.manager.itemStart(g),e.load(g,function(){c.manager.itemEnd(g)},void 0,function(){c.manager.itemError(g),c.manager.itemEnd(g)})}if(a!==void 0&&a.length>0){const g=new pk(b);e=new Xe(g),e.setCrossOrigin(this.crossOrigin);for(let h=0,i=a.length;h<i;h++){const j=a[h],l=j.url;if(Array.isArray(l)){d[j.uuid]=[];for(let k=0,n=l.length;k<n;k++){const m=l[k],o=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(m)?m:c.resourcePath+m;d[j.uuid].push(f(o))}}else{const k=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(j.url)?j.url:c.resourcePath+j.url;d[j.uuid]=f(k)}}}return d},parseTextures:function(a,b){function c(e,f){return typeof e==="number"?e:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",e),f[e])}const d={};if(a!==void 0)for(let e=0,f=a.length;e<f;e++){const g=a[e];g.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',g.uuid),b[g.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",g.image);let h;Array.isArray(b[g.image])?h=new Dc(b[g.image]):h=new La(b[g.image]),h.needsUpdate=!0,h.uuid=g.uuid,g.name!==void 0&&(h.name=g.name),g.mapping!==void 0&&(h.mapping=c(g.mapping,Rr)),g.offset!==void 0&&h.offset.fromArray(g.offset),g.repeat!==void 0&&h.repeat.fromArray(g.repeat),g.center!==void 0&&h.center.fromArray(g.center),g.rotation!==void 0&&(h.rotation=g.rotation),g.wrap!==void 0&&(h.wrapS=c(g.wrap[0],vk),h.wrapT=c(g.wrap[1],vk)),g.format!==void 0&&(h.format=g.format),g.type!==void 0&&(h.type=g.type),g.encoding!==void 0&&(h.encoding=g.encoding),g.minFilter!==void 0&&(h.minFilter=c(g.minFilter,wk)),g.magFilter!==void 0&&(h.magFilter=c(g.magFilter,wk)),g.anisotropy!==void 0&&(h.anisotropy=g.anisotropy),g.flipY!==void 0&&(h.flipY=g.flipY),g.premultiplyAlpha!==void 0&&(h.premultiplyAlpha=g.premultiplyAlpha),g.unpackAlignment!==void 0&&(h.unpackAlignment=g.unpackAlignment),d[g.uuid]=h}return d},parseObject:function(a,b,c){let d;function e(i){return b[i]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",i),b[i]}function f(i){if(i===void 0)return;if(Array.isArray(i)){const j=[];for(let l=0,k=i.length;l<k;l++){const n=i[l];c[n]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",n),j.push(c[n])}return j}return c[i]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",i),c[i]}let g,h;switch(a.type){case"Scene":d=new rd(),a.background!==void 0&&(Number.isInteger(a.background)&&(d.background=new da(a.background))),a.fog!==void 0&&(a.fog.type==="Fog"?d.fog=new Kh(a.fog.color,a.fog.near,a.fog.far):a.fog.type==="FogExp2"&&(d.fog=new Jh(a.fog.color,a.fog.density)));break;case"PerspectiveCamera":d=new Ya(a.fov,a.aspect,a.near,a.far),a.focus!==void 0&&(d.focus=a.focus),a.zoom!==void 0&&(d.zoom=a.zoom),a.filmGauge!==void 0&&(d.filmGauge=a.filmGauge),a.filmOffset!==void 0&&(d.filmOffset=a.filmOffset),a.view!==void 0&&(d.view=Object.assign({},a.view));break;case"OrthographicCamera":d=new af(a.left,a.right,a.top,a.bottom,a.near,a.far),a.zoom!==void 0&&(d.zoom=a.zoom),a.view!==void 0&&(d.view=Object.assign({},a.view));break;case"AmbientLight":d=new cf(a.color,a.intensity);break;case"DirectionalLight":d=new bf(a.color,a.intensity);break;case"PointLight":d=new ki(a.color,a.intensity,a.distance,a.decay);break;case"RectAreaLight":d=new mi(a.color,a.intensity,a.width,a.height);break;case"SpotLight":d=new ii(a.color,a.intensity,a.distance,a.angle,a.penumbra,a.decay);break;case"HemisphereLight":d=new $e(a.color,a.groundColor,a.intensity);break;case"LightProbe":d=new Tb().fromJSON(a);break;case"SkinnedMesh":console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");case"Mesh":g=e(a.geometry),h=f(a.material),d=new Ha(g,h);break;case"InstancedMesh":g=e(a.geometry),h=f(a.material);const i=a.count,j=a.instanceMatrix;d=new Ph(g,h,i),d.instanceMatrix=new qa(new Float32Array(j.array),16);break;case"LOD":d=new Wf();break;case"Line":d=new wb(e(a.geometry),f(a.material),a.mode);break;case"LineLoop":d=new Qh(e(a.geometry),f(a.material));break;case"LineSegments":d=new bb(e(a.geometry),f(a.material));break;case"PointCloud":case"Points":d=new Sh(e(a.geometry),f(a.material));break;case"Sprite":d=new Mh(f(a.material));break;case"Group":d=new Ce();break;default:d=new $()}d.uuid=a.uuid,a.name!==void 0&&(d.name=a.name),a.matrix!==void 0?(d.matrix.fromArray(a.matrix),a.matrixAutoUpdate!==void 0&&(d.matrixAutoUpdate=a.matrixAutoUpdate),d.matrixAutoUpdate&&d.matrix.decompose(d.position,d.quaternion,d.scale)):(a.position!==void 0&&d.position.fromArray(a.position),a.rotation!==void 0&&d.rotation.fromArray(a.rotation),a.quaternion!==void 0&&d.quaternion.fromArray(a.quaternion),a.scale!==void 0&&d.scale.fromArray(a.scale)),a.castShadow!==void 0&&(d.castShadow=a.castShadow),a.receiveShadow!==void 0&&(d.receiveShadow=a.receiveShadow),a.shadow&&(a.shadow.bias!==void 0&&(d.shadow.bias=a.shadow.bias),a.shadow.normalBias!==void 0&&(d.shadow.normalBias=a.shadow.normalBias),a.shadow.radius!==void 0&&(d.shadow.radius=a.shadow.radius),a.shadow.mapSize!==void 0&&d.shadow.mapSize.fromArray(a.shadow.mapSize),a.shadow.camera!==void 0&&(d.shadow.camera=this.parseObject(a.shadow.camera))),a.visible!==void 0&&(d.visible=a.visible),a.frustumCulled!==void 0&&(d.frustumCulled=a.frustumCulled),a.renderOrder!==void 0&&(d.renderOrder=a.renderOrder),a.userData!==void 0&&(d.userData=a.userData),a.layers!==void 0&&(d.layers.mask=a.layers);if(a.children!==void 0){const i=a.children;for(let j=0;j<i.length;j++)d.add(this.parseObject(i[j],b,c))}if(a.type==="LOD"){a.autoUpdate!==void 0&&(d.autoUpdate=a.autoUpdate);const i=a.levels;for(let j=0;j<i.length;j++){const l=i[j],k=d.getObjectByProperty("uuid",l.object);k!==void 0&&d.addLevel(k,l.distance)}}return d}});const Rr={UVMapping:Wg,CubeReflectionMapping:Xg,CubeRefractionMapping:Yg,EquirectangularReflectionMapping:Vi,EquirectangularRefractionMapping:Zg,CubeUVReflectionMapping:ie,CubeUVRefractionMapping:_g},vk={RepeatWrapping:pf,ClampToEdgeWrapping:tb,MirroredRepeatWrapping:qf},wk={NearestFilter:gb,NearestMipmapNearestFilter:$g,NearestMipmapLinearFilter:ah,LinearFilter:lb,LinearMipmapNearestFilter:Wi,LinearMipmapLinearFilter:rf};function xk(a){typeof createImageBitmap==="undefined"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch==="undefined"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),Ja.call(this,a),this.options={premultiplyAlpha:"none"}}xk.prototype=Object.assign(Object.create(Ja.prototype),{constructor:xk,isImageBitmapLoader:!0,setOptions:function a(b){return this.options=b,this},load:function(a,b,c,d){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const e=this,f=ae.get(a);if(f!==void 0)return e.manager.itemStart(a),setTimeout(function(){b&&b(f),e.manager.itemEnd(a)},0),f;fetch(a).then(function(g){return g.blob()}).then(function(g){return createImageBitmap(g,e.options)}).then(function(g){ae.add(a,g),b&&b(g),e.manager.itemEnd(a)}).catch(function(g){d&&d(g),e.manager.itemError(a),e.manager.itemEnd(a)}),e.manager.itemStart(a)}});function yk(){this.type="ShapePath",this.color=new da(),this.subPaths=[],this.currentPath=null}Object.assign(yk.prototype,{moveTo:function(a,b){return this.currentPath=new bc(),this.subPaths.push(this.currentPath),this.currentPath.moveTo(a,b),this},lineTo:function(a,b){return this.currentPath.lineTo(a,b),this},quadraticCurveTo:function(a,b,c,d){return this.currentPath.quadraticCurveTo(a,b,c,d),this},bezierCurveTo:function(a,b,c,d,e,f){return this.currentPath.bezierCurveTo(a,b,c,d,e,f),this},splineThru:function(a){return this.currentPath.splineThru(a),this},toShapes:function(a,b){function c(p){const q=[];for(let u=0,t=p.length;u<t;u++){const w=p[u],A=new $c();A.curves=w.curves,q.push(A)}return q}function d(p,q){const u=q.length;let t=!1;for(let w=u-1,A=0;A<u;w=A++){let B=q[w],L=q[A],C=L.x-B.x,U=L.y-B.y;if(Math.abs(U)>Number.EPSILON){U<0&&(B=q[A],C=-C,L=q[w],U=-U);if(p.y<B.y||p.y>L.y)continue;if(p.y===B.y){if(p.x===B.x)return!0}else{const I=U*(p.x-B.x)-C*(p.y-B.y);if(I===0)return!0;if(I<0)continue;t=!t}}else{if(p.y!==B.y)continue;if(L.x<=p.x&&p.x<=B.x||B.x<=p.x&&p.x<=L.x)return!0}}return t}const e=Gc.isClockWise,f=this.subPaths;if(f.length===0)return[];if(b===!0)return c(f);let g,h,i,j=[];if(f.length===1)return h=f[0],i=new $c(),i.curves=h.curves,j.push(i),j;let l=!e(f[0].getPoints());l=a?!l:l;const k=[],n=[];let m=[],o=0,s;n[o]=void 0,m[o]=[];for(let p=0,q=f.length;p<q;p++)h=f[p],s=h.getPoints(),g=e(s),g=a?!g:g,g?(!l&&n[o]&&o++,n[o]={s:new $c(),p:s},n[o].s.curves=h.curves,l&&o++,m[o]=[]):m[o].push({h,p:s[0]});if(!n[0])return c(f);if(n.length>1){let p=!1;const q=[];for(let u=0,t=n.length;u<t;u++)k[u]=[];for(let u=0,t=n.length;u<t;u++){const w=m[u];for(let A=0;A<w.length;A++){const B=w[A];let L=!0;for(let C=0;C<n.length;C++)d(B.p,n[C].p)&&(u!==C&&q.push({froms:u,tos:C,hole:A}),L?(L=!1,k[C].push(B)):p=!0);L&&k[u].push(B)}}q.length>0&&(p||(m=k))}let r;for(let p=0,q=n.length;p<q;p++){i=n[p].s,j.push(i),r=m[p];for(let u=0,t=r.length;u<t;u++)i.holes.push(r[u].h)}return j}});function zk(a){this.type="Font",this.data=a}Object.assign(zk.prototype,{isFont:!0,generateShapes:function(a,b){b===void 0&&(b=100);const c=[],d=Sr(a,b,this.data);for(let e=0,f=d.length;e<f;e++)Array.prototype.push.apply(c,d[e].toShapes());return c}});function Sr(a,b,c){const d=Array.from?Array.from(a):String(a).split(""),e=b/c.resolution,f=(c.boundingBox.yMax-c.boundingBox.yMin+c.underlineThickness)*e,g=[];let h=0,i=0;for(let j=0;j<d.length;j++){const l=d[j];if(l===`
`)h=0,i-=f;else{const k=Tr(l,e,h,i,c);h+=k.offsetX,g.push(k.path)}}return g}function Tr(a,b,c,d,e){const f=e.glyphs[a]||e.glyphs["?"];if(!f){console.error('THREE.Font: character "'+a+'" does not exists in font family '+e.familyName+".");return}const g=new yk();let h,i,j,l,k,n,m,o;if(f.o){const s=f._cachedOutline||(f._cachedOutline=f.o.split(" "));for(let r=0,p=s.length;r<p;){const q=s[r++];switch(q){case"m":h=s[r++]*b+c,i=s[r++]*b+d,g.moveTo(h,i);break;case"l":h=s[r++]*b+c,i=s[r++]*b+d,g.lineTo(h,i);break;case"q":j=s[r++]*b+c,l=s[r++]*b+d,k=s[r++]*b+c,n=s[r++]*b+d,g.quadraticCurveTo(k,n,j,l);break;case"b":j=s[r++]*b+c,l=s[r++]*b+d,k=s[r++]*b+c,n=s[r++]*b+d,m=s[r++]*b+c,o=s[r++]*b+d,g.bezierCurveTo(k,n,m,o,j,l);break}}}return{offsetX:f.ha*b,path:g}}function Ak(a){Ja.call(this,a)}Ak.prototype=Object.assign(Object.create(Ja.prototype),{constructor:Ak,load:function(a,b,c,d){const e=this,f=new Yb(this.manager);f.setPath(this.path),f.load(a,function(g){let h;try{h=JSON.parse(g)}catch(j){console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead."),h=JSON.parse(g.substring(65,g.length-2))}const i=e.parse(h);b&&b(i)},c,d)},parse:function(a){return new zk(a)}});let Eg;const Bk={getContext:function(){return Eg===void 0&&(Eg=new(window.AudioContext||window.webkitAudioContext)()),Eg},setContext:function(a){Eg=a}};function si(a){Ja.call(this,a)}si.prototype=Object.assign(Object.create(Ja.prototype),{constructor:si,load:function(a,b,c,d){const e=this,f=new Yb(e.manager);f.setResponseType("arraybuffer"),f.setPath(e.path),f.load(a,function(g){try{const h=g.slice(0),i=Bk.getContext();i.decodeAudioData(h,function(j){b(j)})}catch(h){d?d(h):console.error(h),e.manager.itemError(a)}},c,d)}});function Ck(a,b,c){Tb.call(this,void 0,c);const d=new da().set(a),e=new da().set(b),f=new v(d.r,d.g,d.b),g=new v(e.r,e.g,e.b),h=Math.sqrt(Math.PI),i=h*Math.sqrt(.75);this.sh.coefficients[0].copy(f).add(g).multiplyScalar(h),this.sh.coefficients[1].copy(f).sub(g).multiplyScalar(i)}Ck.prototype=Object.assign(Object.create(Tb.prototype),{constructor:Ck,isHemisphereLightProbe:!0,copy:function(a){return Tb.prototype.copy.call(this,a),this},toJSON:function(a){const b=Tb.prototype.toJSON.call(this,a);return b}});function Dk(a,b){Tb.call(this,void 0,b);const c=new da().set(a);this.sh.coefficients[0].set(c.r,c.g,c.b).multiplyScalar(2*Math.sqrt(Math.PI))}Dk.prototype=Object.assign(Object.create(Tb.prototype),{constructor:Dk,isAmbientLightProbe:!0,copy:function(a){return Tb.prototype.copy.call(this,a),this},toJSON:function(a){const b=Tb.prototype.toJSON.call(this,a);return b}});const Ek=new za(),Fk=new za();function Ur(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Ya(),this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Ya(),this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}Object.assign(Ur.prototype,{update:function(a){const b=this._cache,c=b.focus!==a.focus||b.fov!==a.fov||b.aspect!==a.aspect*this.aspect||b.near!==a.near||b.far!==a.far||b.zoom!==a.zoom||b.eyeSep!==this.eyeSep;if(c){b.focus=a.focus,b.fov=a.fov,b.aspect=a.aspect*this.aspect,b.near=a.near,b.far=a.far,b.zoom=a.zoom,b.eyeSep=this.eyeSep;const d=a.projectionMatrix.clone(),e=b.eyeSep/2,f=e*b.near/b.focus,g=b.near*Math.tan(va.DEG2RAD*b.fov*.5)/b.zoom;let h,i;Fk.elements[12]=-e,Ek.elements[12]=e,h=-g*b.aspect+f,i=g*b.aspect+f,d.elements[0]=2*b.near/(i-h),d.elements[8]=(i+h)/(i-h),this.cameraL.projectionMatrix.copy(d),h=-g*b.aspect-f,i=g*b.aspect-f,d.elements[0]=2*b.near/(i-h),d.elements[8]=(i+h)/(i-h),this.cameraR.projectionMatrix.copy(d)}this.cameraL.matrixWorld.copy(a.matrixWorld).multiply(Fk),this.cameraR.matrixWorld.copy(a.matrixWorld).multiply(Ek)}});function Gk(a){this.autoStart=a!==void 0?a:!0,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}Object.assign(Gk.prototype,{start:function(){this.startTime=(typeof performance==="undefined"?Date:performance).now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0},stop:function(){this.getElapsedTime(),this.running=!1,this.autoStart=!1},getElapsedTime:function(){return this.getDelta(),this.elapsedTime},getDelta:function(){let a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const b=(typeof performance==="undefined"?Date:performance).now();a=(b-this.oldTime)/1e3,this.oldTime=b,this.elapsedTime+=a}return a}});const ad=new v(),Hk=new hb(),Vr=new v(),bd=new v();function Ik(){$.call(this),this.type="AudioListener",this.context=Bk.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Gk()}Ik.prototype=Object.assign(Object.create($.prototype),{constructor:Ik,getInput:function(){return this.gain},removeFilter:function(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this},getFilter:function(){return this.filter},setFilter:function(a){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=a,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this},getMasterVolume:function(){return this.gain.gain.value},setMasterVolume:function(a){return this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01),this},updateMatrixWorld:function(a){$.prototype.updateMatrixWorld.call(this,a);const b=this.context.listener,c=this.up;this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(ad,Hk,Vr),bd.set(0,0,-1).applyQuaternion(Hk);if(b.positionX){const d=this.context.currentTime+this.timeDelta;b.positionX.linearRampToValueAtTime(ad.x,d),b.positionY.linearRampToValueAtTime(ad.y,d),b.positionZ.linearRampToValueAtTime(ad.z,d),b.forwardX.linearRampToValueAtTime(bd.x,d),b.forwardY.linearRampToValueAtTime(bd.y,d),b.forwardZ.linearRampToValueAtTime(bd.z,d),b.upX.linearRampToValueAtTime(c.x,d),b.upY.linearRampToValueAtTime(c.y,d),b.upZ.linearRampToValueAtTime(c.z,d)}else b.setPosition(ad.x,ad.y,ad.z),b.setOrientation(bd.x,bd.y,bd.z,c.x,c.y,c.z)}});function df(a){$.call(this),this.type="Audio",this.listener=a,this.context=a.context,this.gain=this.context.createGain(),this.gain.connect(a.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.sourceType="empty",this._startedAt=0,this._progress=0,this.filters=[]}df.prototype=Object.assign(Object.create($.prototype),{constructor:df,getOutput:function(){return this.gain},setNodeSource:function(a){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=a,this.connect(),this},setMediaElementSource:function(a){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(a),this.connect(),this},setMediaStreamSource:function(a){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(a),this.connect(),this},setBuffer:function(a){return this.buffer=a,this.sourceType="buffer",this.autoplay&&this.play(),this},play:function(a){a===void 0&&(a=0);if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+a;const b=this.context.createBufferSource();return b.buffer=this.buffer,b.loop=this.loop,b.loopStart=this.loopStart,b.loopEnd=this.loopEnd,b.onended=this.onEnded.bind(this),b.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=b,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()},pause:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this},stop:function(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source.stop(),this.source.onended=null,this.isPlaying=!1,this},connect:function(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let a=1,b=this.filters.length;a<b;a++)this.filters[a-1].connect(this.filters[a]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this},disconnect:function(){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let a=1,b=this.filters.length;a<b;a++)this.filters[a-1].disconnect(this.filters[a]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this},getFilters:function(){return this.filters},setFilters:function(a){return a||(a=[]),this.isPlaying===!0?(this.disconnect(),this.filters=a,this.connect()):this.filters=a,this},setDetune:function(a){return this.detune=a,this.source.detune===void 0?void 0:(this.isPlaying===!0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this)},getDetune:function(){return this.detune},getFilter:function(){return this.getFilters()[0]},setFilter:function(a){return this.setFilters(a?[a]:[])},setPlaybackRate:function(a){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=a,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this},getPlaybackRate:function(){return this.playbackRate},onEnded:function(){this.isPlaying=!1},getLoop:function(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop},setLoop:function(a){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=a,this.isPlaying===!0&&(this.source.loop=this.loop),this},setLoopStart:function(a){return this.loopStart=a,this},setLoopEnd:function(a){return this.loopEnd=a,this},getVolume:function(){return this.gain.gain.value},setVolume:function(a){return this.gain.gain.setTargetAtTime(a,this.context.currentTime,.01),this}});const cd=new v(),Jk=new hb(),Wr=new v(),dd=new v();function Kk(a){df.call(this,a),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}Kk.prototype=Object.assign(Object.create(df.prototype),{constructor:Kk,getOutput:function(){return this.panner},getRefDistance:function(){return this.panner.refDistance},setRefDistance:function(a){return this.panner.refDistance=a,this},getRolloffFactor:function(){return this.panner.rolloffFactor},setRolloffFactor:function(a){return this.panner.rolloffFactor=a,this},getDistanceModel:function(){return this.panner.distanceModel},setDistanceModel:function(a){return this.panner.distanceModel=a,this},getMaxDistance:function(){return this.panner.maxDistance},setMaxDistance:function(a){return this.panner.maxDistance=a,this},setDirectionalCone:function(a,b,c){return this.panner.coneInnerAngle=a,this.panner.coneOuterAngle=b,this.panner.coneOuterGain=c,this},updateMatrixWorld:function(a){$.prototype.updateMatrixWorld.call(this,a);if(this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(cd,Jk,Wr),dd.set(0,0,1).applyQuaternion(Jk);const b=this.panner;if(b.positionX){const c=this.context.currentTime+this.listener.timeDelta;b.positionX.linearRampToValueAtTime(cd.x,c),b.positionY.linearRampToValueAtTime(cd.y,c),b.positionZ.linearRampToValueAtTime(cd.z,c),b.orientationX.linearRampToValueAtTime(dd.x,c),b.orientationY.linearRampToValueAtTime(dd.y,c),b.orientationZ.linearRampToValueAtTime(dd.z,c)}else b.setPosition(cd.x,cd.y,cd.z),b.setOrientation(dd.x,dd.y,dd.z)}});function Lk(a,b){this.analyser=a.context.createAnalyser(),this.analyser.fftSize=b!==void 0?b:2048,this.data=new Uint8Array(this.analyser.frequencyBinCount),a.getOutput().connect(this.analyser)}Object.assign(Lk.prototype,{getFrequencyData:function(){return this.analyser.getByteFrequencyData(this.data),this.data},getAverageFrequency:function(){let a=0;const b=this.getFrequencyData();for(let c=0;c<b.length;c++)a+=b[c];return a/b.length}});function Mk(a,b,c){this.binding=a,this.valueSize=c;let d,e,f;switch(b){case"quaternion":d=this._slerp,e=this._slerpAdditive,f=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(c*6),this._workIndex=5;break;case"string":case"bool":d=this._select,e=this._select,f=this._setAdditiveIdentityOther,this.buffer=new Array(c*5);break;default:d=this._lerp,e=this._lerpAdditive,f=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(c*5)}this._mixBufferRegion=d,this._mixBufferRegionAdditive=e,this._setIdentity=f,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}Object.assign(Mk.prototype,{accumulate:function(a,b){const c=this.buffer,d=this.valueSize,e=a*d+d;let f=this.cumulativeWeight;if(f===0){for(let g=0;g!==d;++g)c[e+g]=c[g];f=b}else{f+=b;const g=b/f;this._mixBufferRegion(c,e,0,g,d)}this.cumulativeWeight=f},accumulateAdditive:function(a){const b=this.buffer,c=this.valueSize,d=c*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(b,d,0,a,c),this.cumulativeWeightAdditive+=a},apply:function(a){const b=this.valueSize,c=this.buffer,d=a*b+b,e=this.cumulativeWeight,f=this.cumulativeWeightAdditive,g=this.binding;this.cumulativeWeight=0,this.cumulativeWeightAdditive=0;if(e<1){const h=b*this._origIndex;this._mixBufferRegion(c,d,h,1-e,b)}f>0&&this._mixBufferRegionAdditive(c,d,this._addIndex*b,1,b);for(let h=b,i=b+b;h!==i;++h)if(c[h]!==c[h+b]){g.setValue(c,d);break}},saveOriginalState:function(){const a=this.binding,b=this.buffer,c=this.valueSize,d=c*this._origIndex;a.getValue(b,d);for(let e=c,f=d;e!==f;++e)b[e]=b[d+e%c];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0},restoreOriginalState:function(){const a=this.valueSize*3;this.binding.setValue(this.buffer,a)},_setAdditiveIdentityNumeric:function(){const a=this._addIndex*this.valueSize,b=a+this.valueSize;for(let c=a;c<b;c++)this.buffer[c]=0},_setAdditiveIdentityQuaternion:function(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*4+3]=1},_setAdditiveIdentityOther:function(){const a=this._origIndex*this.valueSize,b=this._addIndex*this.valueSize;for(let c=0;c<this.valueSize;c++)this.buffer[b+c]=this.buffer[a+c]},_select:function(a,b,c,d,e){if(d>=.5)for(let f=0;f!==e;++f)a[b+f]=a[c+f]},_slerp:function(a,b,c,d){hb.slerpFlat(a,b,a,b,a,c,d)},_slerpAdditive:function(a,b,c,d,e){const f=this._workIndex*e;hb.multiplyQuaternionsFlat(a,f,a,b,a,c),hb.slerpFlat(a,b,a,b,a,f,d)},_lerp:function(a,b,c,d,e){const f=1-d;for(let g=0;g!==e;++g){const h=b+g;a[h]=a[h]*f+a[c+g]*d}},_lerpAdditive:function(a,b,c,d,e){for(let f=0;f!==e;++f){const g=b+f;a[g]=a[g]+a[c+f]*d}}});const ti="\\[\\]\\.:\\/",Xr=new RegExp("["+ti+"]","g"),ui="[^"+ti+"]",Yr="[^"+ti.replace("\\.","")+"]",Zr=/((?:WC+[\/:])*)/.source.replace("WC",ui),_r=/(WCOD+)?/.source.replace("WCOD",Yr),$r=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ui),as=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ui),bs=new RegExp("^"+Zr+_r+$r+as+"$"),cs=["material","materials","bones"];function Nk(a,b,c){const d=c||rb.parseTrackName(b);this._targetGroup=a,this._bindings=a.subscribe_(b,d)}Object.assign(Nk.prototype,{getValue:function(a,b){this.bind();const c=this._targetGroup.nCachedObjects_,d=this._bindings[c];d!==void 0&&d.getValue(a,b)},setValue:function(a,b){const c=this._bindings;for(let d=this._targetGroup.nCachedObjects_,e=c.length;d!==e;++d)c[d].setValue(a,b)},bind:function(){const a=this._bindings;for(let b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].bind()},unbind:function(){const a=this._bindings;for(let b=this._targetGroup.nCachedObjects_,c=a.length;b!==c;++b)a[b].unbind()}});function rb(a,b,c){this.path=b,this.parsedPath=c||rb.parseTrackName(b),this.node=rb.findNode(a,this.parsedPath.nodeName)||a,this.rootNode=a}Object.assign(rb,{Composite:Nk,create:function(a,b,c){return a&&a.isAnimationObjectGroup?new rb.Composite(a,b,c):new rb(a,b,c)},sanitizeNodeName:function(a){return a.replace(/\s/g,"_").replace(Xr,"")},parseTrackName:function(a){const b=bs.exec(a);if(!b)throw new Error("PropertyBinding: Cannot parse trackName: "+a);const c={nodeName:b[2],objectName:b[3],objectIndex:b[4],propertyName:b[5],propertyIndex:b[6]},d=c.nodeName&&c.nodeName.lastIndexOf(".");if(d!==void 0&&d!==-1){const e=c.nodeName.substring(d+1);cs.indexOf(e)!==-1&&(c.nodeName=c.nodeName.substring(0,d),c.objectName=e)}if(c.propertyName===null||c.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+a);return c},findNode:function(a,b){if(!b||b===""||b==="."||b===-1||b===a.name||b===a.uuid)return a;if(a.skeleton){const c=a.skeleton.getBoneByName(b);if(c!==void 0)return c}if(a.children){const c=function(e){for(let f=0;f<e.length;f++){const g=e[f];if(g.name===b||g.uuid===b)return g;const h=c(g.children);if(h)return h}return null},d=c(a.children);if(d)return d}return null}});Object.assign(rb.prototype,{_getValue_unavailable:function(){},_setValue_unavailable:function(){},BindingType:{Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Versioning:{None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},GetterByBindingType:[function a(b,c){b[c]=this.node[this.propertyName]},function a(b,c){const d=this.resolvedProperty;for(let e=0,f=d.length;e!==f;++e)b[c++]=d[e]},function a(b,c){b[c]=this.resolvedProperty[this.propertyIndex]},function a(b,c){this.resolvedProperty.toArray(b,c)}],SetterByBindingTypeAndVersioning:[[function a(b,c){this.targetObject[this.propertyName]=b[c]},function a(b,c){this.targetObject[this.propertyName]=b[c],this.targetObject.needsUpdate=!0},function a(b,c){this.targetObject[this.propertyName]=b[c],this.targetObject.matrixWorldNeedsUpdate=!0}],[function a(b,c){const d=this.resolvedProperty;for(let e=0,f=d.length;e!==f;++e)d[e]=b[c++]},function a(b,c){const d=this.resolvedProperty;for(let e=0,f=d.length;e!==f;++e)d[e]=b[c++];this.targetObject.needsUpdate=!0},function a(b,c){const d=this.resolvedProperty;for(let e=0,f=d.length;e!==f;++e)d[e]=b[c++];this.targetObject.matrixWorldNeedsUpdate=!0}],[function a(b,c){this.resolvedProperty[this.propertyIndex]=b[c]},function a(b,c){this.resolvedProperty[this.propertyIndex]=b[c],this.targetObject.needsUpdate=!0},function a(b,c){this.resolvedProperty[this.propertyIndex]=b[c],this.targetObject.matrixWorldNeedsUpdate=!0}],[function a(b,c){this.resolvedProperty.fromArray(b,c)},function a(b,c){this.resolvedProperty.fromArray(b,c),this.targetObject.needsUpdate=!0},function a(b,c){this.resolvedProperty.fromArray(b,c),this.targetObject.matrixWorldNeedsUpdate=!0}]],getValue:function a(b,c){this.bind(),this.getValue(b,c)},setValue:function a(b,c){this.bind(),this.setValue(b,c)},bind:function(){let a=this.node,b=this.parsedPath,c=b.objectName,d=b.propertyName,e=b.propertyIndex;a||(a=rb.findNode(this.rootNode,b.nodeName)||this.rootNode,this.node=a),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable;if(!a){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(c){let i=b.objectIndex;switch(c){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let j=0;j<a.length;j++)if(a[j].name===i){i=j;break}break;default:if(a[c]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[c]}if(i!==void 0){if(a[i]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[i]}}const f=a[d];if(f===void 0){const i=b.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+i+"."+d+" but it wasn't found.",a);return}let g=this.Versioning.None;this.targetObject=a,a.needsUpdate!==void 0?g=this.Versioning.NeedsUpdate:a.matrixWorldNeedsUpdate!==void 0&&(g=this.Versioning.MatrixWorldNeedsUpdate);let h=this.BindingType.Direct;if(e!==void 0){if(d==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(a.geometry.isBufferGeometry){if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}a.morphTargetDictionary[e]!==void 0&&(e=a.morphTargetDictionary[e])}else{console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences on THREE.Geometry. Use THREE.BufferGeometry instead.",this);return}}h=this.BindingType.ArrayElement,this.resolvedProperty=f,this.propertyIndex=e}else f.fromArray!==void 0&&f.toArray!==void 0?(h=this.BindingType.HasFromToArray,this.resolvedProperty=f):Array.isArray(f)?(h=this.BindingType.EntireArray,this.resolvedProperty=f):this.propertyName=d;this.getValue=this.GetterByBindingType[h],this.setValue=this.SetterByBindingTypeAndVersioning[h][g]},unbind:function(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}});Object.assign(rb.prototype,{_getValue_unbound:rb.prototype.getValue,_setValue_unbound:rb.prototype.setValue});function ds(){this.uuid=va.generateUUID(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const a={};this._indicesByUUID=a;for(let c=0,d=arguments.length;c!==d;++c)a[arguments[c].uuid]=c;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const b=this;this.stats={objects:{get total(){return b._objects.length},get inUse(){return this.total-b.nCachedObjects_}},get bindingsPerObject(){return b._bindings.length}}}Object.assign(ds.prototype,{isAnimationObjectGroup:!0,add:function(){const a=this._objects,b=this._indicesByUUID,c=this._paths,d=this._parsedPaths,e=this._bindings,f=e.length;let g,h=a.length,i=this.nCachedObjects_;for(let j=0,l=arguments.length;j!==l;++j){const k=arguments[j],n=k.uuid;let m=b[n];if(m===void 0){m=h++,b[n]=m,a.push(k);for(let o=0,s=f;o!==s;++o)e[o].push(new rb(k,c[o],d[o]))}else if(m<i){g=a[m];const o=--i,s=a[o];b[s.uuid]=m,a[m]=s,b[n]=o,a[o]=k;for(let r=0,p=f;r!==p;++r){const q=e[r],u=q[o];let t=q[m];q[m]=u,t===void 0&&(t=new rb(k,c[r],d[r])),q[o]=t}}else a[m]!==g&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=i},remove:function(){const a=this._objects,b=this._indicesByUUID,c=this._bindings,d=c.length;let e=this.nCachedObjects_;for(let f=0,g=arguments.length;f!==g;++f){const h=arguments[f],i=h.uuid,j=b[i];if(j!==void 0&&j>=e){const l=e++,k=a[l];b[k.uuid]=j,a[j]=k,b[i]=l,a[l]=h;for(let n=0,m=d;n!==m;++n){const o=c[n],s=o[l],r=o[j];o[j]=s,o[l]=r}}}this.nCachedObjects_=e},uncache:function(){const a=this._objects,b=this._indicesByUUID,c=this._bindings,d=c.length;let e=this.nCachedObjects_,f=a.length;for(let g=0,h=arguments.length;g!==h;++g){const i=arguments[g],j=i.uuid,l=b[j];if(l!==void 0){delete b[j];if(l<e){const k=--e,n=a[k],m=--f,o=a[m];b[n.uuid]=l,a[l]=n,b[o.uuid]=k,a[k]=o,a.pop();for(let s=0,r=d;s!==r;++s){const p=c[s],q=p[k],u=p[m];p[l]=q,p[k]=u,p.pop()}}else{const k=--f,n=a[k];b[n.uuid]=l,a[l]=n,a.pop();for(let m=0,o=d;m!==o;++m){const s=c[m];s[l]=s[k],s.pop()}}}}this.nCachedObjects_=e},subscribe_:function(a,b){let c=this._bindingsIndicesByPath,d=c[a],e=this._bindings;if(d!==void 0)return e[d];const f=this._paths,g=this._parsedPaths,h=this._objects,i=h.length,j=this.nCachedObjects_,l=new Array(i);d=e.length,c[a]=d,f.push(a),g.push(b),e.push(l);for(let k=j,n=h.length;k!==n;++k){const m=h[k];l[k]=new rb(m,a,b)}return l},unsubscribe_:function(a){const b=this._bindingsIndicesByPath,c=b[a];if(c!==void 0){const d=this._paths,e=this._parsedPaths,f=this._bindings,g=f.length-1,h=f[g],i=a[g];b[i]=c,f[c]=h,f.pop(),e[c]=e[g],e.pop(),d[c]=d[g],d.pop()}}});function Ok(a,b,c,d){this._mixer=a,this._clip=b,this._localRoot=c||null,this.blendMode=d||b.blendMode;const e=b.tracks,f=e.length,g=new Array(f),h={endingStart:kd,endingEnd:kd};for(let i=0;i!==f;++i){const j=e[i].createInterpolant(null);g[i]=j,j.settings=h}this._interpolantSettings=h,this._interpolants=g,this._propertyBindings=new Array(f),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Tm,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=Infinity,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}Object.assign(Ok.prototype,{play:function(){return this._mixer._activateAction(this),this},stop:function(){return this._mixer._deactivateAction(this),this.reset()},reset:function(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()},isRunning:function(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)},isScheduled:function(){return this._mixer._isActiveAction(this)},startAt:function(a){return this._startTime=a,this},setLoop:function(a,b){return this.loop=a,this.repetitions=b,this},setEffectiveWeight:function(a){return this.weight=a,this._effectiveWeight=this.enabled?a:0,this.stopFading()},getEffectiveWeight:function(){return this._effectiveWeight},fadeIn:function(a){return this._scheduleFading(a,0,1)},fadeOut:function(a){return this._scheduleFading(a,1,0)},crossFadeFrom:function(a,b,c){a.fadeOut(b),this.fadeIn(b);if(c){const d=this._clip.duration,e=a._clip.duration,f=e/d,g=d/e;a.warp(1,f,b),this.warp(g,1,b)}return this},crossFadeTo:function(a,b,c){return a.crossFadeFrom(this,b,c)},stopFading:function(){let a=this._weightInterpolant;return a!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this},setEffectiveTimeScale:function(a){return this.timeScale=a,this._effectiveTimeScale=this.paused?0:a,this.stopWarping()},getEffectiveTimeScale:function(){return this._effectiveTimeScale},setDuration:function(a){return this.timeScale=this._clip.duration/a,this.stopWarping()},syncWith:function(a){return this.time=a.time,this.timeScale=a.timeScale,this.stopWarping()},halt:function(a){return this.warp(this._effectiveTimeScale,0,a)},warp:function(a,b,c){const d=this._mixer,e=d.time,f=this.timeScale;let g=this._timeScaleInterpolant;g===null&&(g=d._lendControlInterpolant(),this._timeScaleInterpolant=g);const h=g.parameterPositions,i=g.sampleValues;return h[0]=e,h[1]=e+c,i[0]=a/f,i[1]=b/f,this},stopWarping:function(){let a=this._timeScaleInterpolant;return a!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this},getMixer:function(){return this._mixer},getClip:function(){return this._clip},getRoot:function(){return this._localRoot||this._mixer._root},_update:function(a,b,c,d){if(!this.enabled){this._updateWeight(a);return}const e=this._startTime;if(e!==null){const h=(a-e)*c;if(h<0||c===0)return;this._startTime=null,b=c*h}b*=this._updateTimeScale(a);const f=this._updateTime(b),g=this._updateWeight(a);if(g>0){const h=this._interpolants,i=this._propertyBindings;switch(this.blendMode){case fj:for(let j=0,l=h.length;j!==l;++j)h[j].evaluate(f),i[j].accumulateAdditive(g);break;case ch:default:for(let j=0,l=h.length;j!==l;++j)h[j].evaluate(f),i[j].accumulate(d,g)}}},_updateWeight:function(a){let b=0;if(this.enabled){b=this.weight;const c=this._weightInterpolant;if(c!==null){const d=c.evaluate(a)[0];b*=d,a>c.parameterPositions[1]&&(this.stopFading(),d===0&&(this.enabled=!1))}}return this._effectiveWeight=b,b},_updateTimeScale:function(a){let b=0;if(!this.paused){b=this.timeScale;const c=this._timeScaleInterpolant;if(c!==null){const d=c.evaluate(a)[0];b*=d,a>c.parameterPositions[1]&&(this.stopWarping(),b===0?this.paused=!0:this.timeScale=b)}}return this._effectiveTimeScale=b,b},_updateTime:function(a){const b=this._clip.duration,c=this.loop;let d=this.time+a,e=this._loopCount;const f=c===Um;if(a===0)return e===-1?d:f&&(e&1)===1?b-d:d;if(c===Sm){e===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));fe:{if(d>=b)d=b;else if(d<0)d=0;else{this.time=d;break fe}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=d,this._mixer.dispatchEvent({type:"finished",action:this,direction:a<0?-1:1})}}else{e===-1&&(a>=0?(e=0,this._setEndings(!0,this.repetitions===0,f)):this._setEndings(this.repetitions===0,!0,f));if(d>=b||d<0){const g=Math.floor(d/b);d-=b*g,e+=Math.abs(g);const h=this.repetitions-e;if(h<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,d=a>0?b:0,this.time=d,this._mixer.dispatchEvent({type:"finished",action:this,direction:a>0?1:-1});else{if(h===1){const i=a<0;this._setEndings(i,!i,f)}else this._setEndings(!1,!1,f);this._loopCount=e,this.time=d,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:g})}}else this.time=d;if(f&&(e&1)===1)return b-d}return d},_setEndings:function(a,b,c){const d=this._interpolantSettings;c?(d.endingStart=ld,d.endingEnd=ld):(a?d.endingStart=this.zeroSlopeAtStart?ld:kd:d.endingStart=xf,b?d.endingEnd=this.zeroSlopeAtEnd?ld:kd:d.endingEnd=xf)},_scheduleFading:function(a,b,c){const d=this._mixer,e=d.time;let f=this._weightInterpolant;f===null&&(f=d._lendControlInterpolant(),this._weightInterpolant=f);const g=f.parameterPositions,h=f.sampleValues;return g[0]=e,h[0]=b,g[1]=e+a,h[1]=c,this}});function Pk(a){this._root=a,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}Pk.prototype=Object.assign(Object.create(ec.prototype),{constructor:Pk,_bindAction:function(a,b){const c=a._localRoot||this._root,d=a._clip.tracks,e=d.length,f=a._propertyBindings,g=a._interpolants,h=c.uuid,i=this._bindingsByRootAndName;let j=i[h];j===void 0&&(j={},i[h]=j);for(let l=0;l!==e;++l){const k=d[l],n=k.name;let m=j[n];if(m!==void 0)f[l]=m;else{m=f[l];if(m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,h,n));continue}const o=b&&b._propertyBindings[l].binding.parsedPath;m=new Mk(rb.create(c,n,o),k.ValueTypeName,k.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,h,n),f[l]=m}g[l].resultBuffer=m.buffer}},_activateAction:function(a){if(!this._isActiveAction(a)){if(a._cacheIndex===null){const c=(a._localRoot||this._root).uuid,d=a._clip.uuid,e=this._actionsByClip[d];this._bindAction(a,e&&e.knownActions[0]),this._addInactiveAction(a,d,c)}const b=a._propertyBindings;for(let c=0,d=b.length;c!==d;++c){const e=b[c];e.useCount++===0&&(this._lendBinding(e),e.saveOriginalState())}this._lendAction(a)}},_deactivateAction:function(a){if(this._isActiveAction(a)){const b=a._propertyBindings;for(let c=0,d=b.length;c!==d;++c){const e=b[c];--e.useCount===0&&(e.restoreOriginalState(),this._takeBackBinding(e))}this._takeBackAction(a)}},_initMemoryManager:function(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}},_isActiveAction:function(a){const b=a._cacheIndex;return b!==null&&b<this._nActiveActions},_addInactiveAction:function(a,b,c){const d=this._actions,e=this._actionsByClip;let f=e[b];if(f===void 0)f={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,e[b]=f;else{const g=f.knownActions;a._byClipCacheIndex=g.length,g.push(a)}a._cacheIndex=d.length,d.push(a),f.actionByRoot[c]=a},_removeInactiveAction:function(a){const b=this._actions,c=b[b.length-1],d=a._cacheIndex;c._cacheIndex=d,b[d]=c,b.pop(),a._cacheIndex=null;const e=a._clip.uuid,f=this._actionsByClip,g=f[e],h=g.knownActions,i=h[h.length-1],j=a._byClipCacheIndex;i._byClipCacheIndex=j,h[j]=i,h.pop(),a._byClipCacheIndex=null;const l=g.actionByRoot,k=(a._localRoot||this._root).uuid;delete l[k],h.length===0&&delete f[e],this._removeInactiveBindingsForAction(a)},_removeInactiveBindingsForAction:function(a){const b=a._propertyBindings;for(let c=0,d=b.length;c!==d;++c){const e=b[c];--e.referenceCount===0&&this._removeInactiveBinding(e)}},_lendAction:function(a){const b=this._actions,c=a._cacheIndex,d=this._nActiveActions++,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_takeBackAction:function(a){const b=this._actions,c=a._cacheIndex,d=--this._nActiveActions,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_addInactiveBinding:function(a,b,c){const d=this._bindingsByRootAndName,e=this._bindings;let f=d[b];f===void 0&&(f={},d[b]=f),f[c]=a,a._cacheIndex=e.length,e.push(a)},_removeInactiveBinding:function(a){const b=this._bindings,c=a.binding,d=c.rootNode.uuid,e=c.path,f=this._bindingsByRootAndName,g=f[d],h=b[b.length-1],i=a._cacheIndex;h._cacheIndex=i,b[i]=h,b.pop(),delete g[e],Object.keys(g).length===0&&delete f[d]},_lendBinding:function(a){const b=this._bindings,c=a._cacheIndex,d=this._nActiveBindings++,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_takeBackBinding:function(a){const b=this._bindings,c=a._cacheIndex,d=--this._nActiveBindings,e=b[d];a._cacheIndex=d,b[d]=a,e._cacheIndex=c,b[c]=e},_lendControlInterpolant:function(){const a=this._controlInterpolants,b=this._nActiveControlInterpolants++;let c=a[b];return c===void 0&&(c=new zg(new Float32Array(2),new Float32Array(2),1,this._controlInterpolantsResultBuffer),c.__cacheIndex=b,a[b]=c),c},_takeBackControlInterpolant:function(a){const b=this._controlInterpolants,c=a.__cacheIndex,d=--this._nActiveControlInterpolants,e=b[d];a.__cacheIndex=d,b[d]=a,e.__cacheIndex=c,b[c]=e},_controlInterpolantsResultBuffer:new Float32Array(1),clipAction:function(a,b,c){const d=b||this._root,e=d.uuid;let f=typeof a==="string"?Rb.findByName(d,a):a;const g=f!==null?f.uuid:a;let h=this._actionsByClip[g],i=null;c===void 0&&(f!==null?c=f.blendMode:c=ch);if(h!==void 0){const l=h.actionByRoot[e];if(l!==void 0&&l.blendMode===c)return l;i=h.knownActions[0],f===null&&(f=i._clip)}if(f===null)return null;const j=new Ok(this,f,b,c);return this._bindAction(j,i),this._addInactiveAction(j,g,e),j},existingAction:function(a,b){const c=b||this._root,d=c.uuid,e=typeof a==="string"?Rb.findByName(c,a):a,f=e?e.uuid:a,g=this._actionsByClip[f];return g!==void 0?g.actionByRoot[d]||null:null},stopAllAction:function(){const a=this._actions,b=this._nActiveActions;for(let c=b-1;c>=0;--c)a[c].stop();return this},update:function(a){a*=this.timeScale;const b=this._actions,c=this._nActiveActions,d=this.time+=a,e=Math.sign(a),f=this._accuIndex^=1;for(let i=0;i!==c;++i){const j=b[i];j._update(d,a,e,f)}const g=this._bindings,h=this._nActiveBindings;for(let i=0;i!==h;++i)g[i].apply(f);return this},setTime:function(a){this.time=0;for(let b=0;b<this._actions.length;b++)this._actions[b].time=0;return this.update(a)},getRoot:function(){return this._root},uncacheClip:function(a){const b=this._actions,c=a.uuid,d=this._actionsByClip,e=d[c];if(e!==void 0){const f=e.knownActions;for(let g=0,h=f.length;g!==h;++g){const i=f[g];this._deactivateAction(i);const j=i._cacheIndex,l=b[b.length-1];i._cacheIndex=null,i._byClipCacheIndex=null,l._cacheIndex=j,b[j]=l,b.pop(),this._removeInactiveBindingsForAction(i)}delete d[c]}},uncacheRoot:function(a){const b=a.uuid,c=this._actionsByClip;for(const f in c){const g=c[f].actionByRoot,h=g[b];h!==void 0&&(this._deactivateAction(h),this._removeInactiveAction(h))}const d=this._bindingsByRootAndName,e=d[b];if(e!==void 0)for(const f in e){const g=e[f];g.restoreOriginalState(),this._removeInactiveBinding(g)}},uncacheAction:function(a,b){const c=this.existingAction(a,b);c!==null&&(this._deactivateAction(c),this._removeInactiveAction(c))}});function vi(a){typeof a==="string"&&(console.warn("THREE.Uniform: Type parameter is no longer needed."),a=arguments[1]),this.value=a}vi.prototype.clone=function(){return new vi(this.value.clone===void 0?this.value:this.value.clone())};function Qk(a,b,c){Kb.call(this,a,b),this.meshPerAttribute=c||1}Qk.prototype=Object.assign(Object.create(Kb.prototype),{constructor:Qk,isInstancedInterleavedBuffer:!0,copy:function(a){return Kb.prototype.copy.call(this,a),this.meshPerAttribute=a.meshPerAttribute,this},clone:function(a){const b=Kb.prototype.clone.call(this,a);return b.meshPerAttribute=this.meshPerAttribute,b},toJSON:function(a){const b=Kb.prototype.toJSON.call(this,a);return b.isInstancedInterleavedBuffer=!0,b.meshPerAttribute=this.meshPerAttribute,b}});function Fg(a,b,c,d){this.ray=new vd(a,b),this.near=c||0,this.far=d||Infinity,this.camera=null,this.layers=new gh(),this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}},Object.defineProperties(this.params,{PointCloud:{get:function(){return console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points."),this.Points}}})}function Rk(a,b){return a.distance-b.distance}function wi(a,b,c,d){a.layers.test(b.layers)&&a.raycast(b,c);if(d===!0){const e=a.children;for(let f=0,g=e.length;f<g;f++)wi(e[f],b,c,!0)}}Object.assign(Fg.prototype,{set:function(a,b){this.ray.set(a,b)},setFromCamera:function(a,b){b&&b.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(b.matrixWorld),this.ray.direction.set(a.x,a.y,.5).unproject(b).sub(this.ray.origin).normalize(),this.camera=b):b&&b.isOrthographicCamera?(this.ray.origin.set(a.x,a.y,(b.near+b.far)/(b.near-b.far)).unproject(b),this.ray.direction.set(0,0,-1).transformDirection(b.matrixWorld),this.camera=b):console.error("THREE.Raycaster: Unsupported camera type.")},intersectObject:function(a,b,c){const d=c||[];return wi(a,this,d,b),d.sort(Rk),d},intersectObjects:function(a,b,c){const d=c||[];if(Array.isArray(a)===!1)return console.warn("THREE.Raycaster.intersectObjects: objects is not an Array."),d;for(let e=0,f=a.length;e<f;e++)wi(a[e],this,d,b);return d.sort(Rk),d}});function es(a,b,c){return this.radius=a!==void 0?a:1,this.phi=b!==void 0?b:0,this.theta=c!==void 0?c:0,this}Object.assign(es.prototype,{set:function(a,b,c){return this.radius=a,this.phi=b,this.theta=c,this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this},makeSafe:function(){const a=1e-6;return this.phi=Math.max(a,Math.min(Math.PI-a,this.phi)),this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){return this.radius=Math.sqrt(a*a+b*b+c*c),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(a,c),this.phi=Math.acos(va.clamp(b/this.radius,-1,1))),this}});function fs(a,b,c){return this.radius=a!==void 0?a:1,this.theta=b!==void 0?b:0,this.y=c!==void 0?c:0,this}Object.assign(fs.prototype,{set:function(a,b,c){return this.radius=a,this.theta=b,this.y=c,this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.radius=a.radius,this.theta=a.theta,this.y=a.y,this},setFromVector3:function(a){return this.setFromCartesianCoords(a.x,a.y,a.z)},setFromCartesianCoords:function(a,b,c){return this.radius=Math.sqrt(a*a+c*c),this.theta=Math.atan2(a,c),this.y=b,this}});const Sk=new N();function Tk(a,b){this.min=a!==void 0?a:new N(Infinity,Infinity),this.max=b!==void 0?b:new N(-Infinity,-Infinity)}Object.assign(Tk.prototype,{set:function(a,b){return this.min.copy(a),this.max.copy(b),this},setFromPoints:function(a){this.makeEmpty();for(let b=0,c=a.length;b<c;b++)this.expandByPoint(a[b]);return this},setFromCenterAndSize:function(a,b){const c=Sk.copy(b).multiplyScalar(.5);return this.min.copy(a).sub(c),this.max.copy(a).add(c),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.min.copy(a.min),this.max.copy(a.max),this},makeEmpty:function(){return this.min.x=this.min.y=Infinity,this.max.x=this.max.y=-Infinity,this},isEmpty:function(){return this.max.x<this.min.x||this.max.y<this.min.y},getCenter:function(a){return a===void 0&&(console.warn("THREE.Box2: .getCenter() target is now required"),a=new N()),this.isEmpty()?a.set(0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)},getSize:function(a){return a===void 0&&(console.warn("THREE.Box2: .getSize() target is now required"),a=new N()),this.isEmpty()?a.set(0,0):a.subVectors(this.max,this.min)},expandByPoint:function(a){return this.min.min(a),this.max.max(a),this},expandByVector:function(a){return this.min.sub(a),this.max.add(a),this},expandByScalar:function(a){return this.min.addScalar(-a),this.max.addScalar(a),this},containsPoint:function(a){return a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y?!1:!0},containsBox:function(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y},getParameter:function(a,b){return b===void 0&&(console.warn("THREE.Box2: .getParameter() target is now required"),b=new N()),b.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y))},intersectsBox:function(a){return a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y?!1:!0},clampPoint:function(a,b){return b===void 0&&(console.warn("THREE.Box2: .clampPoint() target is now required"),b=new N()),b.copy(a).clamp(this.min,this.max)},distanceToPoint:function(a){const b=Sk.copy(a).clamp(this.min,this.max);return b.sub(a).length()},intersect:function(a){return this.min.max(a.min),this.max.min(a.max),this},union:function(a){return this.min.min(a.min),this.max.max(a.max),this},translate:function(a){return this.min.add(a),this.max.add(a),this},equals:function(a){return a.min.equals(this.min)&&a.max.equals(this.max)}});const Uk=new v(),Gg=new v();function Vk(a,b){this.start=a!==void 0?a:new v(),this.end=b!==void 0?b:new v()}Object.assign(Vk.prototype,{set:function(a,b){return this.start.copy(a),this.end.copy(b),this},clone:function(){return new this.constructor().copy(this)},copy:function(a){return this.start.copy(a.start),this.end.copy(a.end),this},getCenter:function(a){return a===void 0&&(console.warn("THREE.Line3: .getCenter() target is now required"),a=new v()),a.addVectors(this.start,this.end).multiplyScalar(.5)},delta:function(a){return a===void 0&&(console.warn("THREE.Line3: .delta() target is now required"),a=new v()),a.subVectors(this.end,this.start)},distanceSq:function(){return this.start.distanceToSquared(this.end)},distance:function(){return this.start.distanceTo(this.end)},at:function(a,b){return b===void 0&&(console.warn("THREE.Line3: .at() target is now required"),b=new v()),this.delta(b).multiplyScalar(a).add(this.start)},closestPointToPointParameter:function(a,b){Uk.subVectors(a,this.start),Gg.subVectors(this.end,this.start);const c=Gg.dot(Gg),d=Gg.dot(Uk);let e=d/c;return b&&(e=va.clamp(e,0,1)),e},closestPointToPoint:function(a,b,c){const d=this.closestPointToPointParameter(a,b);return c===void 0&&(console.warn("THREE.Line3: .closestPointToPoint() target is now required"),c=new v()),this.delta(c).multiplyScalar(d).add(this.start)},applyMatrix4:function(a){return this.start.applyMatrix4(a),this.end.applyMatrix4(a),this},equals:function(a){return a.start.equals(this.start)&&a.end.equals(this.end)}});function Hg(a){$.call(this),this.material=a,this.render=function(){},this.hasPositions=!1,this.hasNormals=!1,this.hasColors=!1,this.hasUvs=!1,this.positionArray=null,this.normalArray=null,this.colorArray=null,this.uvArray=null,this.count=0}Hg.prototype=Object.create($.prototype);Hg.prototype.constructor=Hg;Hg.prototype.isImmediateRenderObject=!0;const Wk=new v();function ef(a,b){$.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.color=b;const c=new fa(),d=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let f=0,g=1,h=32;f<h;f++,g++){const i=f/h*Math.PI*2,j=g/h*Math.PI*2;d.push(Math.cos(i),Math.sin(i),1,Math.cos(j),Math.sin(j),1)}c.setAttribute("position",new aa(d,3));const e=new Qa({fog:!1,toneMapped:!1});this.cone=new bb(c,e),this.add(this.cone),this.update()}ef.prototype=Object.create($.prototype);ef.prototype.constructor=ef;ef.prototype.dispose=function(){this.cone.geometry.dispose(),this.cone.material.dispose()};ef.prototype.update=function(){this.light.updateMatrixWorld();const a=this.light.distance?this.light.distance:1e3,b=a*Math.tan(this.light.angle);this.cone.scale.set(b,b,a),Wk.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(Wk),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)};const Kc=new v(),Ig=new za(),xi=new za();function Xk(a){const b=[];a&&a.isBone&&b.push(a);for(let c=0;c<a.children.length;c++)b.push.apply(b,Xk(a.children[c]));return b}function be(a){const b=Xk(a),c=new fa(),d=[],e=[],f=new da(0,0,1),g=new da(0,1,0);for(let i=0;i<b.length;i++){const j=b[i];j.parent&&j.parent.isBone&&(d.push(0,0,0),d.push(0,0,0),e.push(f.r,f.g,f.b),e.push(g.r,g.g,g.b))}c.setAttribute("position",new aa(d,3)),c.setAttribute("color",new aa(e,3));const h=new Qa({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});bb.call(this,c,h),this.type="SkeletonHelper",this.root=a,this.bones=b,this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1}be.prototype=Object.create(bb.prototype);be.prototype.constructor=be;be.prototype.isSkeletonHelper=!0;be.prototype.updateMatrixWorld=function(a){const b=this.bones,c=this.geometry,d=c.getAttribute("position");xi.getInverse(this.root.matrixWorld);for(let e=0,f=0;e<b.length;e++){const g=b[e];g.parent&&g.parent.isBone&&(Ig.multiplyMatrices(xi,g.matrixWorld),Kc.setFromMatrixPosition(Ig),d.setXYZ(f,Kc.x,Kc.y,Kc.z),Ig.multiplyMatrices(xi,g.parent.matrixWorld),Kc.setFromMatrixPosition(Ig),d.setXYZ(f+1,Kc.x,Kc.y,Kc.z),f+=2)}c.getAttribute("position").needsUpdate=!0,$.prototype.updateMatrixWorld.call(this,a)};function ff(a,b,c){this.light=a,this.light.updateMatrixWorld(),this.color=c;const d=new Hc(b,4,2),e=new Ab({wireframe:!0,fog:!1,toneMapped:!1});Ha.call(this,d,e),this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}ff.prototype=Object.create(Ha.prototype);ff.prototype.constructor=ff;ff.prototype.dispose=function(){this.geometry.dispose(),this.material.dispose()};ff.prototype.update=function(){this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)};const gs=new v(),Yk=new da(),Zk=new da();function gf(a,b,c){$.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.color=c;const d=new Od(b);d.rotateY(Math.PI*.5),this.material=new Ab({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const e=d.getAttribute("position"),f=new Float32Array(e.count*3);d.setAttribute("color",new qa(f,3)),this.add(new Ha(d,this.material)),this.update()}gf.prototype=Object.create($.prototype);gf.prototype.constructor=gf;gf.prototype.dispose=function(){this.children[0].geometry.dispose(),this.children[0].material.dispose()};gf.prototype.update=function(){const a=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const b=a.geometry.getAttribute("color");Yk.copy(this.light.color),Zk.copy(this.light.groundColor);for(let c=0,d=b.count;c<d;c++){const e=c<d/2?Yk:Zk;b.setXYZ(c,e.r,e.g,e.b)}b.needsUpdate=!0}a.lookAt(gs.setFromMatrixPosition(this.light.matrixWorld).negate())};function yi(a,b,c,d){a=a||10,b=b||10,c=new da(c!==void 0?c:4473924),d=new da(d!==void 0?d:8947848);const e=b/2,f=a/b,g=a/2,h=[],i=[];for(let k=0,n=0,m=-g;k<=b;k++,m+=f){h.push(-g,0,m,g,0,m),h.push(m,0,-g,m,0,g);const o=k===e?c:d;o.toArray(i,n),n+=3,o.toArray(i,n),n+=3,o.toArray(i,n),n+=3,o.toArray(i,n),n+=3}const j=new fa();j.setAttribute("position",new aa(h,3)),j.setAttribute("color",new aa(i,3));const l=new Qa({vertexColors:!0,toneMapped:!1});bb.call(this,j,l),this.type="GridHelper"}yi.prototype=Object.assign(Object.create(bb.prototype),{constructor:yi,copy:function(a){return bb.prototype.copy.call(this,a),this.geometry.copy(a.geometry),this.material.copy(a.material),this},clone:function(){return new this.constructor().copy(this)}});function zi(a,b,c,d,e,f){a=a||10,b=b||16,c=c||8,d=d||64,e=new da(e!==void 0?e:4473924),f=new da(f!==void 0?f:8947848);const g=[],h=[];for(let l=0;l<=b;l++){const k=l/b*(Math.PI*2),n=Math.sin(k)*a,m=Math.cos(k)*a;g.push(0,0,0),g.push(n,0,m);const o=l&1?e:f;h.push(o.r,o.g,o.b),h.push(o.r,o.g,o.b)}for(let l=0;l<=c;l++){const k=l&1?e:f,n=a-a/c*l;for(let m=0;m<d;m++){let o=m/d*(Math.PI*2),s=Math.sin(o)*n,r=Math.cos(o)*n;g.push(s,0,r),h.push(k.r,k.g,k.b),o=(m+1)/d*(Math.PI*2),s=Math.sin(o)*n,r=Math.cos(o)*n,g.push(s,0,r),h.push(k.r,k.g,k.b)}}const i=new fa();i.setAttribute("position",new aa(g,3)),i.setAttribute("color",new aa(h,3));const j=new Qa({vertexColors:!0,toneMapped:!1});bb.call(this,i,j),this.type="PolarGridHelper"}zi.prototype=Object.create(bb.prototype);zi.prototype.constructor=zi;const _k=new v(),Jg=new v(),$k=new v();function hf(a,b,c){$.call(this),this.light=a,this.light.updateMatrixWorld(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.color=c,b===void 0&&(b=1);let d=new fa();d.setAttribute("position",new aa([-b,b,0,b,b,0,b,-b,0,-b,-b,0,-b,b,0],3));const e=new Qa({fog:!1,toneMapped:!1});this.lightPlane=new wb(d,e),this.add(this.lightPlane),d=new fa(),d.setAttribute("position",new aa([0,0,0,0,0,1],3)),this.targetLine=new wb(d,e),this.add(this.targetLine),this.update()}hf.prototype=Object.create($.prototype);hf.prototype.constructor=hf;hf.prototype.dispose=function(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()};hf.prototype.update=function(){_k.setFromMatrixPosition(this.light.matrixWorld),Jg.setFromMatrixPosition(this.light.target.matrixWorld),$k.subVectors(Jg,_k),this.lightPlane.lookAt(Jg),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Jg),this.targetLine.scale.z=$k.length()};const Kg=new v(),Va=new lc();function Lg(a){const b=new fa(),c=new Qa({color:16777215,vertexColors:!0,toneMapped:!1}),d=[],e=[],f={},g=new da(16755200),h=new da(16711680),i=new da(43775),j=new da(16777215),l=new da(3355443);k("n1","n2",g),k("n2","n4",g),k("n4","n3",g),k("n3","n1",g),k("f1","f2",g),k("f2","f4",g),k("f4","f3",g),k("f3","f1",g),k("n1","f1",g),k("n2","f2",g),k("n3","f3",g),k("n4","f4",g),k("p","n1",h),k("p","n2",h),k("p","n3",h),k("p","n4",h),k("u1","u2",i),k("u2","u3",i),k("u3","u1",i),k("c","t",j),k("p","c",l),k("cn1","cn2",l),k("cn3","cn4",l),k("cf1","cf2",l),k("cf3","cf4",l);function k(m,o,s){n(m,s),n(o,s)}function n(m,o){d.push(0,0,0),e.push(o.r,o.g,o.b),f[m]===void 0&&(f[m]=[]),f[m].push(d.length/3-1)}b.setAttribute("position",new aa(d,3)),b.setAttribute("color",new aa(e,3)),bb.call(this,b,c),this.type="CameraHelper",this.camera=a,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=f,this.update()}Lg.prototype=Object.create(bb.prototype);Lg.prototype.constructor=Lg;Lg.prototype.update=function(){const a=this.geometry,b=this.pointMap,c=1,d=1;Va.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Za("c",b,a,Va,0,0,-1),Za("t",b,a,Va,0,0,1),Za("n1",b,a,Va,-c,-d,-1),Za("n2",b,a,Va,c,-d,-1),Za("n3",b,a,Va,-c,d,-1),Za("n4",b,a,Va,c,d,-1),Za("f1",b,a,Va,-c,-d,1),Za("f2",b,a,Va,c,-d,1),Za("f3",b,a,Va,-c,d,1),Za("f4",b,a,Va,c,d,1),Za("u1",b,a,Va,c*.7,d*1.1,-1),Za("u2",b,a,Va,-c*.7,d*1.1,-1),Za("u3",b,a,Va,0,d*2,-1),Za("cf1",b,a,Va,-c,0,1),Za("cf2",b,a,Va,c,0,1),Za("cf3",b,a,Va,0,-d,1),Za("cf4",b,a,Va,0,d,1),Za("cn1",b,a,Va,-c,0,-1),Za("cn2",b,a,Va,c,0,-1),Za("cn3",b,a,Va,0,-d,-1),Za("cn4",b,a,Va,0,d,-1),a.getAttribute("position").needsUpdate=!0};function Za(a,b,c,d,e,f,g){Kg.set(e,f,g).unproject(d);const h=b[a];if(h!==void 0){const i=c.getAttribute("position");for(let j=0,l=h.length;j<l;j++)i.setXYZ(h[j],Kg.x,Kg.y,Kg.z)}}const Mg=new Ib();function ed(a,b){this.object=a,b===void 0&&(b=16776960);const c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=new Float32Array(8*3),e=new fa();e.setIndex(new qa(c,1)),e.setAttribute("position",new qa(d,3)),bb.call(this,e,new Qa({color:b,toneMapped:!1})),this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}ed.prototype=Object.create(bb.prototype);ed.prototype.constructor=ed;ed.prototype.update=function(a){a!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Mg.setFromObject(this.object);if(Mg.isEmpty())return;const b=Mg.min,c=Mg.max,d=this.geometry.attributes.position,e=d.array;e[0]=c.x,e[1]=c.y,e[2]=c.z,e[3]=b.x,e[4]=c.y,e[5]=c.z,e[6]=b.x,e[7]=b.y,e[8]=c.z,e[9]=c.x,e[10]=b.y,e[11]=c.z,e[12]=c.x,e[13]=c.y,e[14]=b.z,e[15]=b.x,e[16]=c.y,e[17]=b.z,e[18]=b.x,e[19]=b.y,e[20]=b.z,e[21]=c.x,e[22]=b.y,e[23]=b.z,d.needsUpdate=!0,this.geometry.computeBoundingSphere()};ed.prototype.setFromObject=function(a){return this.object=a,this.update(),this};ed.prototype.copy=function(a){return bb.prototype.copy.call(this,a),this.object=a.object,this};ed.prototype.clone=function(){return new this.constructor().copy(this)};function Ng(a,b){this.type="Box3Helper",this.box=a,b=b||16776960;const c=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),d=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],e=new fa();e.setIndex(new qa(c,1)),e.setAttribute("position",new aa(d,3)),bb.call(this,e,new Qa({color:b,toneMapped:!1})),this.type="Box3Helper",this.geometry.computeBoundingSphere()}Ng.prototype=Object.create(bb.prototype);Ng.prototype.constructor=Ng;Ng.prototype.updateMatrixWorld=function(a){const b=this.box;if(b.isEmpty())return;b.getCenter(this.position),b.getSize(this.scale),this.scale.multiplyScalar(.5),$.prototype.updateMatrixWorld.call(this,a)};function Og(a,b,c){this.plane=a,this.size=b===void 0?1:b;const d=c!==void 0?c:16776960,e=[1,-1,1,-1,1,1,-1,-1,1,1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,1,0,0,1,0,0,0],f=new fa();f.setAttribute("position",new aa(e,3)),f.computeBoundingSphere(),wb.call(this,f,new Qa({color:d,toneMapped:!1})),this.type="PlaneHelper";const g=[1,1,1,-1,1,1,-1,-1,1,1,1,1,-1,-1,1,1,-1,1],h=new fa();h.setAttribute("position",new aa(g,3)),h.computeBoundingSphere(),this.add(new Ha(h,new Ab({color:d,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}Og.prototype=Object.create(wb.prototype);Og.prototype.constructor=Og;Og.prototype.updateMatrixWorld=function(a){let b=-this.plane.constant;Math.abs(b)<1e-8&&(b=1e-8),this.scale.set(.5*this.size,.5*this.size,b),this.children[0].material.side=b<0?fb:Oc,this.lookAt(this.plane.normal),$.prototype.updateMatrixWorld.call(this,a)};const al=new v();let Pg,Ai;function Lc(a,b,c,d,e,f){$.call(this),this.type="ArrowHelper",a===void 0&&(a=new v(0,0,1)),b===void 0&&(b=new v(0,0,0)),c===void 0&&(c=1),d===void 0&&(d=16776960),e===void 0&&(e=.2*c),f===void 0&&(f=.2*e),Pg===void 0&&(Pg=new fa(),Pg.setAttribute("position",new aa([0,0,0,0,1,0],3)),Ai=new Ic(0,.5,1,5,1),Ai.translate(0,-.5,0)),this.position.copy(b),this.line=new wb(Pg,new Qa({color:d,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Ha(Ai,new Ab({color:d,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(a),this.setLength(c,e,f)}Lc.prototype=Object.create($.prototype);Lc.prototype.constructor=Lc;Lc.prototype.setDirection=function(a){if(a.y>.99999)this.quaternion.set(0,0,0,1);else if(a.y<-.99999)this.quaternion.set(1,0,0,0);else{al.set(a.z,0,-a.x).normalize();const b=Math.acos(a.y);this.quaternion.setFromAxisAngle(al,b)}};Lc.prototype.setLength=function(a,b,c){b===void 0&&(b=.2*a),c===void 0&&(c=.2*b),this.line.scale.set(1,Math.max(1e-4,a-b),1),this.line.updateMatrix(),this.cone.scale.set(c,b,c),this.cone.position.y=a,this.cone.updateMatrix()};Lc.prototype.setColor=function(a){this.line.material.color.set(a),this.cone.material.color.set(a)};Lc.prototype.copy=function(a){return $.prototype.copy.call(this,a,!1),this.line.copy(a.line),this.cone.copy(a.cone),this};Lc.prototype.clone=function(){return new this.constructor().copy(this)};function Bi(a){a=a||1;const b=[0,0,0,a,0,0,0,0,0,0,a,0,0,0,0,0,0,a],c=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],d=new fa();d.setAttribute("position",new aa(b,3)),d.setAttribute("color",new aa(c,3));const e=new Qa({vertexColors:!0,toneMapped:!1});bb.call(this,d,e),this.type="AxesHelper"}Bi.prototype=Object.create(bb.prototype);Bi.prototype.constructor=Bi;const ce=4,Mc=8,cc=Math.pow(2,Mc),bl=[.125,.215,.35,.446,.526,.582],cl=Mc-ce+1+bl.length,de=20,dc={[ub]:0,[yf]:1,[dh]:2,[gj]:3,[hj]:4,[ij]:5,[me]:6},Ci=new af(),{_lodPlanes:jf,_sizeLods:dl,_sigmas:Qg}=is();let Di=null;const fd=(1+Math.sqrt(5))/2,ee=1/fd,el=[new v(1,1,1),new v(-1,1,1),new v(1,1,-1),new v(-1,1,-1),new v(0,fd,ee),new v(0,fd,-ee),new v(ee,0,fd),new v(-ee,0,fd),new v(fd,ee,0),new v(-fd,ee,0)];function fl(a){this._renderer=a,this._pingPongRenderTarget=null,this._blurMaterial=js(de),this._equirectShader=null,this._cubemapShader=null,this._compileMaterial(this._blurMaterial)}fl.prototype={constructor:fl,fromScene:function(a,b=0,c=.1,d=100){Di=this._renderer.getRenderTarget();const e=this._allocateTargets();return this._sceneToCubeUV(a,c,d,e),b>0&&this._blur(e,0,0,b),this._applyPMREM(e),this._cleanup(e),e},fromEquirectangular:function(a){return this._fromTexture(a)},fromCubemap:function(a){return this._fromTexture(a)},compileCubemapShader:function(){this._cubemapShader===null&&(this._cubemapShader=il(),this._compileMaterial(this._cubemapShader))},compileEquirectangularShader:function(){this._equirectShader===null&&(this._equirectShader=hl(),this._compileMaterial(this._equirectShader))},dispose:function(){this._blurMaterial.dispose(),this._cubemapShader!==null&&this._cubemapShader.dispose(),this._equirectShader!==null&&this._equirectShader.dispose();for(let a=0;a<jf.length;a++)jf[a].dispose()},_cleanup:function(a){this._pingPongRenderTarget.dispose(),this._renderer.setRenderTarget(Di),a.scissorTest=!1,Rg(a,0,0,a.width,a.height)},_fromTexture:function(a){Di=this._renderer.getRenderTarget();const b=this._allocateTargets(a);return this._textureToCubeUV(a,b),this._applyPMREM(b),this._cleanup(b),b},_allocateTargets:function(a){const b={magFilter:gb,minFilter:gb,generateMipmaps:!1,type:je,format:hm,encoding:hs(a)?a.encoding:dh,depthBuffer:!1,stencilBuffer:!1},c=gl(b);return c.depthBuffer=a?!1:!0,this._pingPongRenderTarget=gl(b),c},_compileMaterial:function(a){const b=new Ha(jf[0],a);this._renderer.compile(b,Ci)},_sceneToCubeUV:function(a,b,c,d){const e=90,f=1,g=new Ya(e,f,b,c),h=[1,-1,1,1,1,1],i=[1,1,1,-1,-1,-1],j=this._renderer,l=j.outputEncoding,k=j.toneMapping,n=j.getClearColor(),m=j.getClearAlpha();j.toneMapping=id,j.outputEncoding=ub;let o=a.background;if(o&&o.isColor){o.convertSRGBToLinear();const s=Math.max(o.r,o.g,o.b),r=Math.min(Math.max(Math.ceil(Math.log2(s)),-128),127);o=o.multiplyScalar(Math.pow(2,-r));const p=(r+128)/255;j.setClearColor(o,p),a.background=null}for(let s=0;s<6;s++){const r=s%3;r==0?(g.up.set(0,h[s],0),g.lookAt(i[s],0,0)):r==1?(g.up.set(0,0,h[s]),g.lookAt(0,i[s],0)):(g.up.set(0,h[s],0),g.lookAt(0,0,i[s])),Rg(d,r*cc,s>2?cc:0,cc,cc),j.setRenderTarget(d),j.render(a,g)}j.toneMapping=k,j.outputEncoding=l,j.setClearColor(n,m)},_textureToCubeUV:function(a,b){const c=this._renderer;a.isCubeTexture?this._cubemapShader==null&&(this._cubemapShader=il()):this._equirectShader==null&&(this._equirectShader=hl());const d=a.isCubeTexture?this._cubemapShader:this._equirectShader,e=new Ha(jf[0],d),f=d.uniforms;f.envMap.value=a,a.isCubeTexture||f.texelSize.value.set(1/a.image.width,1/a.image.height),f.inputEncoding.value=dc[a.encoding],f.outputEncoding.value=dc[b.texture.encoding],Rg(b,0,0,3*cc,2*cc),c.setRenderTarget(b),c.render(e,Ci)},_applyPMREM:function(a){const b=this._renderer,c=b.autoClear;b.autoClear=!1;for(let d=1;d<cl;d++){const e=Math.sqrt(Qg[d]*Qg[d]-Qg[d-1]*Qg[d-1]),f=el[(d-1)%el.length];this._blur(a,d-1,d,e,f)}b.autoClear=c},_blur:function(a,b,c,d,e){const f=this._pingPongRenderTarget;this._halfBlur(a,f,b,c,d,"latitudinal",e),this._halfBlur(f,a,c,c,d,"longitudinal",e)},_halfBlur:function(a,b,c,d,e,f,g){const h=this._renderer,i=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const j=3,l=new Ha(jf[d],i),k=i.uniforms,n=dl[c]-1,m=isFinite(e)?Math.PI/(2*n):2*Math.PI/(2*de-1),o=e/m,s=isFinite(e)?1+Math.floor(j*o):de;s>de&&console.warn(`sigmaRadians, ${e}, is too large and will clip, as it requested ${s} samples when the maximum is set to ${de}`);const r=[];let p=0;for(let w=0;w<de;++w){const A=w/o,B=Math.exp(-A*A/2);r.push(B),w==0?p+=B:w<s&&(p+=2*B)}for(let w=0;w<r.length;w++)r[w]=r[w]/p;k.envMap.value=a.texture,k.samples.value=s,k.weights.value=r,k.latitudinal.value=f==="latitudinal",g&&(k.poleAxis.value=g),k.dTheta.value=m,k.mipInt.value=Mc-c,k.inputEncoding.value=dc[a.texture.encoding],k.outputEncoding.value=dc[a.texture.encoding];const q=dl[d],u=3*Math.max(0,cc-2*q),t=(d===0?0:2*cc)+2*q*(d>Mc-ce?d-Mc+ce:0);Rg(b,u,t,3*q,2*q),h.setRenderTarget(b),h.render(l,Ci)}};function hs(a){return a===void 0||a.type!==je?!1:a.encoding===ub||a.encoding===yf||a.encoding===me}function is(){const a=[],b=[],c=[];let d=Mc;for(let e=0;e<cl;e++){const f=Math.pow(2,d);b.push(f);let g=1/f;e>Mc-ce?g=bl[e-Mc+ce-1]:e==0&&(g=0),c.push(g);const h=1/(f-1),i=-h/2,j=1+h/2,l=[i,i,j,i,j,j,i,i,j,j,i,j],k=6,n=6,m=3,o=2,s=1,r=new Float32Array(m*n*k),p=new Float32Array(o*n*k),q=new Float32Array(s*n*k);for(let t=0;t<k;t++){const w=t%3*2/3-1,A=t>2?0:-1,B=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];r.set(B,m*n*t),p.set(l,o*n*t);const L=[t,t,t,t,t,t];q.set(L,s*n*t)}const u=new fa();u.setAttribute("position",new qa(r,m)),u.setAttribute("uv",new qa(p,o)),u.setAttribute("faceIndex",new qa(q,s)),a.push(u),d>ce&&d--}return{_lodPlanes:a,_sizeLods:b,_sigmas:c}}function gl(a){const b=new Hb(3*cc,3*cc,a);return b.texture.mapping=ie,b.texture.name="PMREM.cubeUv",b.scissorTest=!0,b}function Rg(a,b,c,d,e){a.viewport.set(b,c,d,e),a.scissor.set(b,c,d,e)}function js(a){const b=new Float32Array(a),c=new v(0,1,0),d=new Lb({name:"SphericalGaussianBlur",defines:{n:a},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:b},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c},inputEncoding:{value:dc[ub]},outputEncoding:{value:dc[ub]}},vertexShader:Ei(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform int samples;
uniform float weights[n];
uniform bool latitudinal;
uniform float dTheta;
uniform float mipInt;
uniform vec3 poleAxis;

${Fi()}

#define ENVMAP_TYPE_CUBE_UV
#include <cube_uv_reflection_fragment>

vec3 getSample(float theta, vec3 axis) {
	float cosTheta = cos(theta);
	// Rodrigues' axis-angle rotation
	vec3 sampleDirection = vOutputDirection * cosTheta
		+ cross(axis, vOutputDirection) * sin(theta)
		+ axis * dot(axis, vOutputDirection) * (1.0 - cosTheta);
	return bilinearCubeUV(envMap, sampleDirection, mipInt);
}

void main() {
	vec3 axis = latitudinal ? poleAxis : cross(poleAxis, vOutputDirection);
	if (all(equal(axis, vec3(0.0))))
		axis = vec3(vOutputDirection.z, 0.0, - vOutputDirection.x);
	axis = normalize(axis);
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb += weights[0] * getSample(0.0, axis);
	for (int i = 1; i < n; i++) {
		if (i >= samples)
			break;
		float theta = dTheta * float(i);
		gl_FragColor.rgb += weights[i] * getSample(-1.0 * theta, axis);
		gl_FragColor.rgb += weights[i] * getSample(theta, axis);
	}
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:tc,depthTest:!1,depthWrite:!1});return d}function hl(){const a=new N(1,1),b=new Lb({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null},texelSize:{value:a},inputEncoding:{value:dc[ub]},outputEncoding:{value:dc[ub]}},vertexShader:Ei(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform sampler2D envMap;
uniform vec2 texelSize;

${Fi()}

#include <common>

void main() {
	gl_FragColor = vec4(0.0);
	vec3 outputDirection = normalize(vOutputDirection);
	vec2 uv = equirectUv( outputDirection );
	vec2 f = fract(uv / texelSize - 0.5);
	uv -= f * texelSize;
	vec3 tl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x += texelSize.x;
	vec3 tr = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.y += texelSize.y;
	vec3 br = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	uv.x -= texelSize.x;
	vec3 bl = envMapTexelToLinear(texture2D(envMap, uv)).rgb;
	vec3 tm = mix(tl, tr, f.x);
	vec3 bm = mix(bl, br, f.x);
	gl_FragColor.rgb = mix(tm, bm, f.y);
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:tc,depthTest:!1,depthWrite:!1});return b}function il(){const a=new Lb({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},inputEncoding:{value:dc[ub]},outputEncoding:{value:dc[ub]}},vertexShader:Ei(),fragmentShader:`
precision mediump float;
precision mediump int;
varying vec3 vOutputDirection;
uniform samplerCube envMap;

${Fi()}

void main() {
	gl_FragColor = vec4(0.0);
	gl_FragColor.rgb = envMapTexelToLinear(textureCube(envMap, vec3( - vOutputDirection.x, vOutputDirection.yz ))).rgb;
	gl_FragColor = linearToOutputTexel(gl_FragColor);
}
		`,blending:tc,depthTest:!1,depthWrite:!1});return a}function Ei(){return`
precision mediump float;
precision mediump int;
attribute vec3 position;
attribute vec2 uv;
attribute float faceIndex;
varying vec3 vOutputDirection;

// RH coordinate system; PMREM face-indexing convention
vec3 getDirection(vec2 uv, float face) {
	uv = 2.0 * uv - 1.0;
	vec3 direction = vec3(uv, 1.0);
	if (face == 0.0) {
		direction = direction.zyx; // ( 1, v, u ) pos x
	} else if (face == 1.0) {
		direction = direction.xzy;
		direction.xz *= -1.0; // ( -u, 1, -v ) pos y
	} else if (face == 2.0) {
		direction.x *= -1.0; // ( -u, v, 1 ) pos z
	} else if (face == 3.0) {
		direction = direction.zyx;
		direction.xz *= -1.0; // ( -1, v, -u ) neg x
	} else if (face == 4.0) {
		direction = direction.xzy;
		direction.xy *= -1.0; // ( -u, -1, v ) neg y
	} else if (face == 5.0) {
		direction.z *= -1.0; // ( u, v, -1 ) neg z
	}
	return direction;
}

void main() {
	vOutputDirection = getDirection(uv, faceIndex);
	gl_Position = vec4( position, 1.0 );
}
	`}function Fi(){return`
uniform int inputEncoding;
uniform int outputEncoding;

#include <encodings_pars_fragment>

vec4 inputTexelToLinear(vec4 value){
	if(inputEncoding == 0){
		return value;
	}else if(inputEncoding == 1){
		return sRGBToLinear(value);
	}else if(inputEncoding == 2){
		return RGBEToLinear(value);
	}else if(inputEncoding == 3){
		return RGBMToLinear(value, 7.0);
	}else if(inputEncoding == 4){
		return RGBMToLinear(value, 16.0);
	}else if(inputEncoding == 5){
		return RGBDToLinear(value, 256.0);
	}else{
		return GammaToLinear(value, 2.2);
	}
}

vec4 linearToOutputTexel(vec4 value){
	if(outputEncoding == 0){
		return value;
	}else if(outputEncoding == 1){
		return LinearTosRGB(value);
	}else if(outputEncoding == 2){
		return LinearToRGBE(value);
	}else if(outputEncoding == 3){
		return LinearToRGBM(value, 7.0);
	}else if(outputEncoding == 4){
		return LinearToRGBM(value, 16.0);
	}else if(outputEncoding == 5){
		return LinearToRGBD(value, 256.0);
	}else{
		return LinearToGamma(value, 2.2);
	}
}

vec4 envMapTexelToLinear(vec4 color) {
	return inputTexelToLinear(color);
}
	`}ja.create=function(a,b){return console.log("THREE.Curve.create() has been deprecated"),a.prototype=Object.create(ja.prototype),a.prototype.constructor=a,a.prototype.getPoint=b,a};Object.assign(Jc.prototype,{createPointsGeometry:function(a){console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const b=this.getPoints(a);return this.createGeometry(b)},createSpacedPointsGeometry:function(a){console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const b=this.getSpacedPoints(a);return this.createGeometry(b)},createGeometry:function(a){console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");const b=new ra();for(let c=0,d=a.length;c<d;c++){const e=a[c];b.vertices.push(new v(e.x,e.y,e.z||0))}return b}});Object.assign(bc.prototype,{fromPoints:function(a){return console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints()."),this.setFromPoints(a)}});function ks(a){console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),qb.call(this,a),this.type="catmullrom",this.closed=!0}ks.prototype=Object.create(qb.prototype);function ls(a){console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead."),qb.call(this,a),this.type="catmullrom"}ls.prototype=Object.create(qb.prototype);function jl(a){console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead."),qb.call(this,a),this.type="catmullrom"}jl.prototype=Object.create(qb.prototype);Object.assign(jl.prototype,{initFromArray:function(){console.error("THREE.Spline: .initFromArray() has been removed.")},getControlPointsArray:function(){console.error("THREE.Spline: .getControlPointsArray() has been removed.")},reparametrizeByArcLength:function(){console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.")}});yi.prototype.setColors=function(){console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.")};be.prototype.update=function(){console.error("THREE.SkeletonHelper: update() no longer needs to be called.")};Object.assign(Ja.prototype,{extractUrlBase:function(a){return console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead."),uk.extractUrlBase(a)}});Ja.Handlers={add:function(){console.error("THREE.Loader: Handlers.add() has been removed. Use LoadingManager.addHandler() instead.")},get:function(){console.error("THREE.Loader: Handlers.get() has been removed. Use LoadingManager.getHandler() instead.")}};Object.assign(ri.prototype,{setTexturePath:function(a){return console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath()."),this.setResourcePath(a)}});Object.assign(Tk.prototype,{center:function(a){return console.warn("THREE.Box2: .center() has been renamed to .getCenter()."),this.getCenter(a)},empty:function(){return console.warn("THREE.Box2: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(a){return console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},size:function(a){return console.warn("THREE.Box2: .size() has been renamed to .getSize()."),this.getSize(a)}});Object.assign(Ib.prototype,{center:function(a){return console.warn("THREE.Box3: .center() has been renamed to .getCenter()."),this.getCenter(a)},empty:function(){return console.warn("THREE.Box3: .empty() has been renamed to .isEmpty()."),this.isEmpty()},isIntersectionBox:function(a){return console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},isIntersectionSphere:function(a){return console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)},size:function(a){return console.warn("THREE.Box3: .size() has been renamed to .getSize()."),this.getSize(a)}});Object.assign(hc.prototype,{empty:function(){return console.warn("THREE.Sphere: .empty() has been renamed to .isEmpty()."),this.isEmpty()}});xe.prototype.setFromMatrix=function(a){return console.warn("THREE.Frustum: .setFromMatrix() has been renamed to .setFromProjectionMatrix()."),this.setFromProjectionMatrix(a)};Vk.prototype.center=function(a){return console.warn("THREE.Line3: .center() has been renamed to .getCenter()."),this.getCenter(a)};Object.assign(va,{random16:function(){return console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead."),Math.random()},nearestPowerOfTwo:function(a){return console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo()."),va.floorPowerOfTwo(a)},nextPowerOfTwo:function(a){return console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo()."),va.ceilPowerOfTwo(a)}});Object.assign(ob.prototype,{flattenToArrayOffset:function(a,b){return console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,b)},multiplyVector3:function(a){return console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},multiplyVector3Array:function(){console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.")},applyToBufferAttribute:function(a){return console.warn("THREE.Matrix3: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix3( matrix ) instead."),a.applyMatrix3(this)},applyToVector3Array:function(){console.error("THREE.Matrix3: .applyToVector3Array() has been removed.")}});Object.assign(za.prototype,{extractPosition:function(a){return console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition()."),this.copyPosition(a)},flattenToArrayOffset:function(a,b){return console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead."),this.toArray(a,b)},getPosition:function(){return console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead."),new v().setFromMatrixColumn(this,3)},setRotationFromQuaternion:function(a){return console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion()."),this.makeRotationFromQuaternion(a)},multiplyToArray:function(){console.warn("THREE.Matrix4: .multiplyToArray() has been removed.")},multiplyVector3:function(a){return console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},multiplyVector4:function(a){return console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},multiplyVector3Array:function(){console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.")},rotateAxis:function(a){console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead."),a.transformDirection(this)},crossVector:function(a){return console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},translate:function(){console.error("THREE.Matrix4: .translate() has been removed.")},rotateX:function(){console.error("THREE.Matrix4: .rotateX() has been removed.")},rotateY:function(){console.error("THREE.Matrix4: .rotateY() has been removed.")},rotateZ:function(){console.error("THREE.Matrix4: .rotateZ() has been removed.")},rotateByAxis:function(){console.error("THREE.Matrix4: .rotateByAxis() has been removed.")},applyToBufferAttribute:function(a){return console.warn("THREE.Matrix4: .applyToBufferAttribute() has been removed. Use attribute.applyMatrix4( matrix ) instead."),a.applyMatrix4(this)},applyToVector3Array:function(){console.error("THREE.Matrix4: .applyToVector3Array() has been removed.")},makeFrustum:function(a,b,c,d,e,f){return console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead."),this.makePerspective(a,b,d,c,e,f)}});Vb.prototype.isIntersectionLine=function(a){return console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine()."),this.intersectsLine(a)};hb.prototype.multiplyVector3=function(a){return console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead."),a.applyQuaternion(this)};Object.assign(vd.prototype,{isIntersectionBox:function(a){return console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox()."),this.intersectsBox(a)},isIntersectionPlane:function(a){return console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane()."),this.intersectsPlane(a)},isIntersectionSphere:function(a){return console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere()."),this.intersectsSphere(a)}});Object.assign(kb.prototype,{area:function(){return console.warn("THREE.Triangle: .area() has been renamed to .getArea()."),this.getArea()},barycoordFromPoint:function(a,b){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),this.getBarycoord(a,b)},midpoint:function(a){return console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint()."),this.getMidpoint(a)},normal:function(a){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),this.getNormal(a)},plane:function(a){return console.warn("THREE.Triangle: .plane() has been renamed to .getPlane()."),this.getPlane(a)}});Object.assign(kb,{barycoordFromPoint:function(a,b,c,d,e){return console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord()."),kb.getBarycoord(a,b,c,d,e)},normal:function(a,b,c,d){return console.warn("THREE.Triangle: .normal() has been renamed to .getNormal()."),kb.getNormal(a,b,c,d)}});Object.assign($c.prototype,{extractAllPoints:function(a){return console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead."),this.extractPoints(a)},extrude:function(a){return console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead."),new Rd(this,a)},makeGeometry:function(a){return console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead."),new Sd(this,a)}});Object.assign(N.prototype,{fromAttribute:function(a,b,c){return console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){return console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},lengthManhattan:function(){return console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(v.prototype,{setEulerFromRotationMatrix:function(){console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.")},setEulerFromQuaternion:function(){console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.")},getPositionFromMatrix:function(a){return console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition()."),this.setFromMatrixPosition(a)},getScaleFromMatrix:function(a){return console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale()."),this.setFromMatrixScale(a)},getColumnFromMatrix:function(a,b){return console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn()."),this.setFromMatrixColumn(b,a)},applyProjection:function(a){return console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead."),this.applyMatrix4(a)},fromAttribute:function(a,b,c){return console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,b,c)},distanceToManhattan:function(a){return console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo()."),this.manhattanDistanceTo(a)},lengthManhattan:function(){return console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(Ia.prototype,{fromAttribute:function(a,b,c){return console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute()."),this.fromBufferAttribute(a,b,c)},lengthManhattan:function(){return console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength()."),this.manhattanLength()}});Object.assign(ra.prototype,{computeTangents:function(){console.error("THREE.Geometry: .computeTangents() has been removed.")},computeLineDistances:function(){console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.")},applyMatrix:function(a){return console.warn("THREE.Geometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)}});Object.assign($.prototype,{getChildByName:function(a){return console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName()."),this.getObjectByName(a)},renderDepth:function(){console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.")},translate:function(a,b){return console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead."),this.translateOnAxis(b,a)},getWorldRotation:function(){console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.")},applyMatrix:function(a){return console.warn("THREE.Object3D: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)}});Object.defineProperties($.prototype,{eulerOrder:{get:function(){return console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order},set:function(a){console.warn("THREE.Object3D: .eulerOrder is now .rotation.order."),this.rotation.order=a}},useQuaternion:{get:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")},set:function(){console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.")}}});Object.assign(Ha.prototype,{setDrawMode:function(){console.error("THREE.Mesh: .setDrawMode() has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}});Object.defineProperties(Ha.prototype,{drawMode:{get:function(){return console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode."),Vm},set:function(){console.error("THREE.Mesh: .drawMode has been removed. The renderer now always assumes THREE.TrianglesDrawMode. Transform your geometry via BufferGeometryUtils.toTrianglesDrawMode() if necessary.")}}});Object.defineProperties(Wf.prototype,{objects:{get:function(){return console.warn("THREE.LOD: .objects has been renamed to .levels."),this.levels}}});Object.defineProperty(Oh.prototype,"useVertexTexture",{get:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")},set:function(){console.warn("THREE.Skeleton: useVertexTexture has been removed.")}});Nh.prototype.initBones=function(){console.error("THREE.SkinnedMesh: initBones() has been removed.")};Object.defineProperty(ja.prototype,"__arcLengthDivisions",{get:function(){return console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions},set:function(a){console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions."),this.arcLengthDivisions=a}});Ya.prototype.setLens=function(a,b){console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup."),b!==void 0&&(this.filmGauge=b),this.setFocalLength(a)};Object.defineProperties(Na.prototype,{onlyShadow:{set:function(){console.warn("THREE.Light: .onlyShadow has been removed.")}},shadowCameraFov:{set:function(a){console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov."),this.shadow.camera.fov=a}},shadowCameraLeft:{set:function(a){console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left."),this.shadow.camera.left=a}},shadowCameraRight:{set:function(a){console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right."),this.shadow.camera.right=a}},shadowCameraTop:{set:function(a){console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top."),this.shadow.camera.top=a}},shadowCameraBottom:{set:function(a){console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom."),this.shadow.camera.bottom=a}},shadowCameraNear:{set:function(a){console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near."),this.shadow.camera.near=a}},shadowCameraFar:{set:function(a){console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far."),this.shadow.camera.far=a}},shadowCameraVisible:{set:function(){console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.")}},shadowBias:{set:function(a){console.warn("THREE.Light: .shadowBias is now .shadow.bias."),this.shadow.bias=a}},shadowDarkness:{set:function(){console.warn("THREE.Light: .shadowDarkness has been removed.")}},shadowMapWidth:{set:function(a){console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width."),this.shadow.mapSize.width=a}},shadowMapHeight:{set:function(a){console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height."),this.shadow.mapSize.height=a}}});Object.defineProperties(qa.prototype,{length:{get:function(){return console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead."),this.array.length}},dynamic:{get:function(){return console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.usage===ne},set:function(){console.warn("THREE.BufferAttribute: .dynamic has been deprecated. Use .usage instead."),this.setUsage(ne)}}});Object.assign(qa.prototype,{setDynamic:function(a){return console.warn("THREE.BufferAttribute: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?ne:zf),this},copyIndicesArray:function(){console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.")},setArray:function(){console.error("THREE.BufferAttribute: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(fa.prototype,{addIndex:function(a){console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex()."),this.setIndex(a)},addAttribute:function(a,b){return console.warn("THREE.BufferGeometry: .addAttribute() has been renamed to .setAttribute()."),!(b&&b.isBufferAttribute)&&!(b&&b.isInterleavedBufferAttribute)?(console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute )."),this.setAttribute(a,new qa(arguments[1],arguments[2]))):a==="index"?(console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute."),this.setIndex(b),this):this.setAttribute(a,b)},addDrawCall:function(a,b,c){c!==void 0&&console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset."),console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup()."),this.addGroup(a,b)},clearDrawCalls:function(){console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups()."),this.clearGroups()},computeTangents:function(){console.warn("THREE.BufferGeometry: .computeTangents() has been removed.")},computeOffsets:function(){console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.")},removeAttribute:function(a){return console.warn("THREE.BufferGeometry: .removeAttribute() has been renamed to .deleteAttribute()."),this.deleteAttribute(a)},applyMatrix:function(a){return console.warn("THREE.BufferGeometry: .applyMatrix() has been renamed to .applyMatrix4()."),this.applyMatrix4(a)}});Object.defineProperties(fa.prototype,{drawcalls:{get:function(){return console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups."),this.groups}},offsets:{get:function(){return console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups."),this.groups}}});Object.defineProperties(Cg.prototype,{maxInstancedCount:{get:function(){return console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount},set:function(a){console.warn("THREE.InstancedBufferGeometry: .maxInstancedCount has been renamed to .instanceCount."),this.instanceCount=a}}});Object.defineProperties(Fg.prototype,{linePrecision:{get:function(){return console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold},set:function(a){console.warn("THREE.Raycaster: .linePrecision has been deprecated. Use .params.Line.threshold instead."),this.params.Line.threshold=a}}});Object.defineProperties(Kb.prototype,{dynamic:{get:function(){return console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.usage===ne},set:function(a){console.warn("THREE.InterleavedBuffer: .length has been deprecated. Use .usage instead."),this.setUsage(a)}}});Object.assign(Kb.prototype,{setDynamic:function(a){return console.warn("THREE.InterleavedBuffer: .setDynamic() has been deprecated. Use .setUsage() instead."),this.setUsage(a===!0?ne:zf),this},setArray:function(){console.error("THREE.InterleavedBuffer: .setArray has been removed. Use BufferGeometry .setAttribute to replace/resize attribute buffers")}});Object.assign(nc.prototype,{getArrays:function(){console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.")},addShapeList:function(){console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.")},addShape:function(){console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.")}});Object.defineProperties(vi.prototype,{dynamic:{set:function(){console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.")}},onUpdate:{value:function(){return console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead."),this}}});Object.defineProperties(pa.prototype,{wrapAround:{get:function(){console.warn("THREE.Material: .wrapAround has been removed.")},set:function(){console.warn("THREE.Material: .wrapAround has been removed.")}},overdraw:{get:function(){console.warn("THREE.Material: .overdraw has been removed.")},set:function(){console.warn("THREE.Material: .overdraw has been removed.")}},wrapRGB:{get:function(){return console.warn("THREE.Material: .wrapRGB has been removed."),new da()}},shading:{get:function(){console.error("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead.")},set:function(a){console.warn("THREE."+this.type+": .shading has been removed. Use the boolean .flatShading instead."),this.flatShading=a===Ni}},stencilMask:{get:function(){return console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask},set:function(a){console.warn("THREE."+this.type+": .stencilMask has been removed. Use .stencilFuncMask instead."),this.stencilFuncMask=a}}});Object.defineProperties(_c.prototype,{metal:{get:function(){return console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead."),!1},set:function(){console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead")}}});Object.defineProperties(vb.prototype,{derivatives:{get:function(){return console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives},set:function(a){console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives."),this.extensions.derivatives=a}}});Object.assign(Jd.prototype,{clearTarget:function(a,b,c,d){console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead."),this.setRenderTarget(a),this.clear(b,c,d)},animate:function(a){console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop()."),this.setAnimationLoop(a)},getCurrentRenderTarget:function(){return console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget()."),this.getRenderTarget()},getMaxAnisotropy:function(){return console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy()."),this.capabilities.getMaxAnisotropy()},getPrecision:function(){return console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision."),this.capabilities.precision},resetGLState:function(){return console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset()."),this.state.reset()},supportsFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' )."),this.extensions.get("OES_texture_float")},supportsHalfFloatTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' )."),this.extensions.get("OES_texture_half_float")},supportsStandardDerivatives:function(){return console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' )."),this.extensions.get("OES_standard_derivatives")},supportsCompressedTextureS3TC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' )."),this.extensions.get("WEBGL_compressed_texture_s3tc")},supportsCompressedTexturePVRTC:function(){return console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' )."),this.extensions.get("WEBGL_compressed_texture_pvrtc")},supportsBlendMinMax:function(){return console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' )."),this.extensions.get("EXT_blend_minmax")},supportsVertexTextures:function(){return console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures."),this.capabilities.vertexTextures},supportsInstancedArrays:function(){return console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' )."),this.extensions.get("ANGLE_instanced_arrays")},enableScissorTest:function(a){console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest()."),this.setScissorTest(a)},initMaterial:function(){console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.")},addPrePlugin:function(){console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.")},addPostPlugin:function(){console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.")},updateShadowMap:function(){console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.")},setFaceCulling:function(){console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.")},allocTextureUnit:function(){console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.")},setTexture:function(){console.warn("THREE.WebGLRenderer: .setTexture() has been removed.")},setTexture2D:function(){console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.")},setTextureCube:function(){console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.")},getActiveMipMapLevel:function(){return console.warn("THREE.WebGLRenderer: .getActiveMipMapLevel() is now .getActiveMipmapLevel()."),this.getActiveMipmapLevel()}});Object.defineProperties(Jd.prototype,{shadowMapEnabled:{get:function(){return this.shadowMap.enabled},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled."),this.shadowMap.enabled=a}},shadowMapType:{get:function(){return this.shadowMap.type},set:function(a){console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type."),this.shadowMap.type=a}},shadowMapCullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.")}},context:{get:function(){return console.warn("THREE.WebGLRenderer: .context has been removed. Use .getContext() instead."),this.getContext()}},vr:{get:function(){return console.warn("THREE.WebGLRenderer: .vr has been renamed to .xr"),this.xr}},gammaInput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead."),!1},set:function(){console.warn("THREE.WebGLRenderer: .gammaInput has been removed. Set the encoding for textures via Texture.encoding instead.")}},gammaOutput:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),!1},set:function(a){console.warn("THREE.WebGLRenderer: .gammaOutput has been removed. Set WebGLRenderer.outputEncoding instead."),this.outputEncoding=a===!0?yf:ub}},toneMappingWhitePoint:{get:function(){return console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed."),1},set:function(){console.warn("THREE.WebGLRenderer: .toneMappingWhitePoint has been removed.")}}});Object.defineProperties(Tj.prototype,{cullFace:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.")}},renderReverseSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.")}},renderSingleSided:{get:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");return},set:function(){console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.")}}});Object.defineProperties(Hb.prototype,{wrapS:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS."),this.texture.wrapS=a}},wrapT:{get:function(){return console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT},set:function(a){console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT."),this.texture.wrapT=a}},magFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter."),this.texture.magFilter=a}},minFilter:{get:function(){return console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter},set:function(a){console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter."),this.texture.minFilter=a}},anisotropy:{get:function(){return console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy},set:function(a){console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy."),this.texture.anisotropy=a}},offset:{get:function(){return console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset},set:function(a){console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset."),this.texture.offset=a}},repeat:{get:function(){return console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat},set:function(a){console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat."),this.texture.repeat=a}},format:{get:function(){return console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format},set:function(a){console.warn("THREE.WebGLRenderTarget: .format is now .texture.format."),this.texture.format=a}},type:{get:function(){return console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type},set:function(a){console.warn("THREE.WebGLRenderTarget: .type is now .texture.type."),this.texture.type=a}},generateMipmaps:{get:function(){return console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps},set:function(a){console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps."),this.texture.generateMipmaps=a}}});Object.defineProperties(df.prototype,{load:{value:function(a){console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");const b=this,c=new si();return c.load(a,function(d){b.setBuffer(d)}),this}},startTime:{set:function(){console.warn("THREE.Audio: .startTime is now .play( delay ).")}}});Lk.prototype.getData=function(){return console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData()."),this.getFrequencyData()};ve.prototype.updateCubeMap=function(a,b){return console.warn("THREE.CubeCamera: .updateCubeMap() is now .update()."),this.update(a,b)};Qc.crossOrigin=void 0;Qc.loadTexture=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");const e=new bi();e.setCrossOrigin(this.crossOrigin);const f=e.load(a,c,void 0,d);return b&&(f.mapping=b),f};Qc.loadTextureCube=function(a,b,c,d){console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");const e=new ai();e.setCrossOrigin(this.crossOrigin);const f=e.load(a,c,void 0,d);return b&&(f.mapping=b),f};Qc.loadCompressedTexture=function(){console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.")};Qc.loadCompressedTextureCube=function(){console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.")};typeof __THREE_DEVTOOLS__!=="undefined"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:fe}}));class sb{}sb.ANIMATION_DURATION=400,sb.DAMPING_DURATION=2e3,sb.MOUSE_BUTTON={LEFT:0,MIDDLE:1,RIGHT:2},sb.AUTOROTATION_SPEED=1e-4;class _a{static clamp(a,b,c){return a<=b?b:a>=c?c:a}static getRandomBetween(a,b){return Math.random()*(b-a)+a}static domCoordinatesToNDC(a,b,c){return{x:(a/c.offsetWidth-.5)*2,y:-(b/c.offsetHeight-.5)*2}}}var Gb;(function(a){a[a.EASE_OUT=0]="EASE_OUT",a[a.EASE_IN_OUT=1]="EASE_IN_OUT"})(Gb||(Gb={}));class Fb{constructor(a,b,c=0,d=sb.ANIMATION_DURATION,e=!0){this._timeStampAtSetEnd=0;this._min=-Infinity;this._max=Infinity;this._hasChanged=!1;this._prevDeltaValue=0;this._prevTimeStamp=1;this._prevDeltaTime=1;this._easing=0;this._timeoutId=-1;this._originalStart=a,this._start=a,this._originalEnd=b,this._end=b,this._value=this._start,this._originalAnimationDuration=this._animationDuration=d,this._easing=c,this._triggerRender=e}static removeFromActiveOnes(a){Fb._activeInstances=Fb._activeInstances.filter(b=>b!==a)}static addToActiveOnes(a){Fb._activeInstances.includes(a)||Fb._activeInstances.push(a)}static updateActiveOnes(a){let b=!1;for(const c of Fb._activeInstances)b=b||c._triggerRender,c.update(a);return b}smoothStep(a){if(a<this._animationDuration){const b=a/this._animationDuration;return _a.clamp(b**2*(3-2*b)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=_a.clamp(this._end,this._min,this._max),this._end}exponentialOut(a){if(a<this._animationDuration){const b=a/this._animationDuration;return _a.clamp((1-2**(-10*b))*(1024/1023)*(this._end-this._start)+this._start,this._min,this._max)}else return this._end=_a.clamp(this._end,this._min,this._max),this._end}getNextValue(a){return this._easing===1?this.smoothStep(a):this.exponentialOut(a)}increaseEndBy(a,b=!1){this.setEnd(this._end+a,b)}decreaseEndBy(a,b=!1){this.setEnd(this._end-a,b)}setEnd(a,b=!1,c=this._originalAnimationDuration){this._animationDuration=c;const d=b?_a.clamp(a,this._min,this._max):a;Fb.addToActiveOnes(this),this._start=this._value,this._end=d,this._timeStampAtSetEnd=db.timeStamp,b||(clearTimeout(this._timeoutId),this._timeoutId=setTimeout(()=>{this._end=_a.clamp(this._end,this._min,this._max)},this._animationDuration))}reset(a,b,c=this._originalAnimationDuration){this._animationDuration=c,Fb.addToActiveOnes(this),this._start=a!=null?a:this._originalStart,this._end=b!=null?b:this._originalEnd,this._timeStampAtSetEnd=db.timeStamp}update(a){this._prevDeltaTime=a-this._prevTimeStamp;const b=a-this._timeStampAtSetEnd,c=this._value;this._value=this.getNextValue(b),this._prevDeltaValue=this._value-c,this._prevTimeStamp=a,this._value===c?(this._start=this._end,this._hasChanged=!1,Fb.removeFromActiveOnes(this)):this._hasChanged=!0}get animationDuration(){return this._animationDuration}get originalAnimationDuration(){return this._originalAnimationDuration}get start(){return this._start}get value(){return this._value}get end(){return this._end}get hasChangedSinceLastTick(){return this._hasChanged}get prevDeltaValue(){return this._prevDeltaValue}get prevDeltaTime(){return this._prevDeltaTime}get derivateAt0(){return this._easing===0?6.938247437862991:0}}Fb._activeInstances=[];class kf extends Fb{constructor(a,b,c,d,e=Gb.EASE_OUT,f=sb.ANIMATION_DURATION,g=!0){super(a,b,e,f,g);this._originalMin=this._min=c,this._originalMax=this._max=d}get min(){return this._min}get max(){return this._max}get originalMin(){return this._originalMin}get originalMax(){return this._originalMax}setMin(a){this._min=a;const b=_a.clamp(this._start,this._min,this._max),c=_a.clamp(this._end,this._min,this._max);super.reset(b,c)}setMax(a){this._max=a;const b=_a.clamp(this._start,this._min,this._max),c=_a.clamp(this._end,this._min,this._max);super.reset(b,c)}reset(a,b,c,d,e=!1){this._min=c!=null?c:this._min,this._max=d!=null?d:this._max;const f=a!=null?a:this._originalStart,g=e?_a.clamp(f,this._min,this._max):f,h=b!=null?b:this._originalEnd,i=e?_a.clamp(h,this._min,this._max):h;super.reset(g,i)}isPlaying(){return this.value!==this.end}}class gd{static lengthOfSquared(a){let b=0;for(const c of a)b+=c*c;return b}static lengthOf(a){return Math.sqrt(gd.lengthOfSquared(a))}static normalize(a){const b=gd.lengthOf(a);for(let c=0;c<a.length;++c)a[c]/=b;return a}static getWorldPositionFromUV(a,b){const c=[Math.cos(a)*Math.sin(b),Math.cos(b),Math.sin(a)*Math.sin(b)];return gd.normalize(c)}}class ml{constructor(a,b){this._isPointerDown=!1;this._mouseMoved=!0;this._triggerClickThreshold={deltaCursor:3,deltaTime:1e3};this._pointer={downTimeStamp:null,startX:null,startY:null,prevX:null,prevY:null,prevDeltaX:0,prevDeltaY:0,prevTimeStamp:0,prevDeltaTime:1,triggerClickOnPointerUp:!1};this._u=new kf(0,0,-Infinity,Infinity,Gb.EASE_OUT,sb.DAMPING_DURATION);this._v=new kf(Math.PI/2,Math.PI/2,.01,3.14,Gb.EASE_OUT,sb.DAMPING_DURATION);this._pinch={startValue:{touchDistance:null,distanceValue:null},currentValue:{touchDistance:null,distanceValue:null}};this._cameraNormalizedPosition=gd.normalize([-1,.3,0]);this._timeoutID=null;this._dampOnPointerUp=!1;this._enabled=!1;this.SENSITIVITY=5;this._prevSpeed=[];this.onWheel=a=>{a.preventDefault();const b=1.1,c=this._sceneManager.distance,d=Math.sign(-a.deltaY)>0?c.end/b:c.end*b;c.setEnd(d,!0)};this.onMouseDown=a=>{a.button===sb.MOUSE_BUTTON.LEFT&&this.onPointerDown(a.clientX,a.clientY)};this.onTouchStart=a=>{a.preventDefault(),a.touches.length===1?this.onPointerDown(a.touches[0].clientX,a.touches[0].clientY):a.touches.length===2?(this._isPointerDown=!1,this._pinch.startValue.touchDistance=this.getTouchDistance(a),this._pinch.startValue.distanceValue=this._sceneManager.distance.value):this.onPointerUp(a)};this.onMouseMove=a=>{this.onPointerMove(a.clientX,a.clientY)};this.onTouchMove=a=>{a.touches.length===1?this.onPointerMove(a.touches[0].clientX,a.touches[0].clientY):a.touches.length===2&&this._pinch.startValue.touchDistance?(this._pinch.currentValue.touchDistance=this.getTouchDistance(a),this._pinch.currentValue.distanceValue=this._pinch.startValue.touchDistance/this._pinch.currentValue.touchDistance*this._pinch.startValue.distanceValue,this._sceneManager.distance.setEnd(this._pinch.currentValue.distanceValue)):this.onPointerUp(a)};this.onPointerUp=a=>{if(this._isPointerDown){const b=performance.now();this._domElement.classList.remove("rotating");const c=this._prevSpeed,d=gd.lengthOfSquared(c);if(this._dampOnPointerUp&&!isNaN(d)&&0<d&&d<Infinity){this._dampOnPointerUp=!1;const e=this._u.derivateAt0,f=this._u.originalAnimationDuration,g=[f*c[0]/e,f*c[1]/e];this._u.setEnd(this._u.value+g[0]),this._v.setEnd(this._v.value+g[1])}this._triggerClickThreshold.deltaTime<b-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.triggerClickOnPointerUp}this._isPointerDown=!1,this._pointer.triggerClickOnPointerUp=!1,this._pointer.downTimeStamp=null,this._pointer.startX=null,this._pointer.startY=null,this._pointer.prevX=null,this._pointer.prevY=null,this._pointer.prevTimeStamp=0,this._pointer.prevDeltaX=0,this._pointer.prevDeltaY=0,this._pointer.prevDeltaTime=1,this._pinch.startValue.touchDistance=this._pinch.startValue.distanceValue=this._pinch.currentValue.touchDistance=this._pinch.currentValue.distanceValue=null};this.cancelDamping=()=>{this._dampOnPointerUp=!1};this._domElement=a,this._sceneManager=b}getTouchDistance(a){const b={x:a.touches[0].clientX,y:a.touches[0].clientY},c={x:a.touches[1].clientX,y:a.touches[1].clientY},d={x:c.x-b.x,y:c.y-b.y},e=Math.sqrt(d.x*d.x+d.y*d.y);return e}onPointerDown(a,b){this.stopRotating(),this._isPointerDown=!0,this._mouseMoved=!1,this._pointer.startX=this._pointer.prevX=a,this._pointer.startY=this._pointer.prevY=b,this._pointer.downTimeStamp=performance.now(),this._pointer.prevTimeStamp=this._pointer.downTimeStamp,this._pointer.triggerClickOnPointerUp=!0,this._domElement.classList.add("rotating"),this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}onPointerMove(a,b){if(this._isPointerDown){this._mouseMoved=a!==this._pointer.prevX||b!==this._pointer.prevY;if(this._mouseMoved){this._domElement.classList.add("rotating");if(this._pointer.prevX!=null&&this._pointer.prevY!=null){const d=this._pointer.prevX-a,e=b-this._pointer.prevY,f=d*this.SENSITIVITY/window.innerHeight,g=e*this.SENSITIVITY/window.innerHeight,h=this._pointer.startX-a,i=this._pointer.startY-b;(this._triggerClickThreshold.deltaCursor<Math.abs(h)||this._triggerClickThreshold.deltaCursor<Math.abs(i))&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaX=this._pointer.prevX-a,this._pointer.prevDeltaY=b-this._pointer.prevY,this._u.reset(this._u.end-f,this._u.end-f),this._v.reset(this._v.end-g,this._v.end-g)}this._pointer.prevX=a,this._pointer.prevY=b;const c=performance.now();this._triggerClickThreshold.deltaTime<c-this._pointer.downTimeStamp&&(this._pointer.triggerClickOnPointerUp=!1),this._pointer.prevDeltaTime=c-this._pointer.prevTimeStamp,this._pointer.prevTimeStamp=c,this._dampOnPointerUp=!0,clearTimeout(this._timeoutID),this._timeoutID=setTimeout(this.cancelDamping,100)}}}setUVFromSphereSufracePoint(a){const b=Math.PI-Math.atan2(a[2],a[0]);this._u.reset(b,b);const c=Math.PI/2-Math.asin(a[1]);this._v.reset(c,c)}activate(){this._enabled||(this._enabled=!0,this.setUVFromSphereSufracePoint(this._cameraNormalizedPosition),this._domElement.addEventListener("mousedown",this.onMouseDown),this._domElement.addEventListener("touchstart",this.onTouchStart),this._domElement.addEventListener("wheel",this.onWheel),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("mouseup",this.onPointerUp),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp))}deactivate(){this._enabled&&(this._enabled=!1,this._isPointerDown=!1,this._domElement.classList.remove("rotating"),this._domElement.removeEventListener("mousedown",this.onMouseDown),this._domElement.removeEventListener("touchstart",this.onTouchStart),this._domElement.removeEventListener("wheel",this.onWheel),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("mouseup",this.onPointerUp),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp))}stopRotating(){this._u.reset(this._u.value,this._u.value),this._v.reset(this._v.value,this._v.value)}update(){if(this._enabled)return(this._u.hasChangedSinceLastTick||this._v.hasChangedSinceLastTick)&&(this._prevSpeed[0]=this._u.prevDeltaValue/this._u.prevDeltaTime,this._prevSpeed[1]=this._v.prevDeltaValue/this._v.prevDeltaTime,this._cameraNormalizedPosition=gd.getWorldPositionFromUV(this._u.value,this._v.value),this._sceneManager.needsRender=!0),this._cameraNormalizedPosition}}class ql{constructor(a){a=a||{};const b=a.geometry||new Cc(2,2),c=new Lb({vertexShader:`#define GLSLIFY 1
attribute vec3 position;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec2 vUv;
void main() {
  gl_Position = vec4(position, 1.0);
  vUv = vec2(position.x, position.y) * 0.5 + 0.5;
}`,fragmentShader:`precision mediump float;
#define GLSLIFY 1
//
// GLSL textureless classic 3D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-10-11
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec3 mod289_1604150559(vec3 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1604150559(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1604150559(vec4 x)
{
  return mod289_1604150559(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1604150559(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec3 fade_1604150559(vec3 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise_1604150559(vec3 P, vec3 rep)
{
  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period
  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period
  Pi0 = mod289_1604150559(Pi0);
  Pi1 = mod289_1604150559(Pi1);
  vec3 Pf0 = fract(P); // Fractional part for interpolation
  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
  vec4 iy = vec4(Pi0.yy, Pi1.yy);
  vec4 iz0 = Pi0.zzzz;
  vec4 iz1 = Pi1.zzzz;

  vec4 ixy = permute_1604150559(permute_1604150559(ix) + iy);
  vec4 ixy0 = permute_1604150559(ixy + iz0);
  vec4 ixy1 = permute_1604150559(ixy + iz1);

  vec4 gx0 = ixy0 * (1.0 / 7.0);
  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;
  gx0 = fract(gx0);
  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
  vec4 sz0 = step(gz0, vec4(0.0));
  gx0 -= sz0 * (step(0.0, gx0) - 0.5);
  gy0 -= sz0 * (step(0.0, gy0) - 0.5);

  vec4 gx1 = ixy1 * (1.0 / 7.0);
  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;
  gx1 = fract(gx1);
  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
  vec4 sz1 = step(gz1, vec4(0.0));
  gx1 -= sz1 * (step(0.0, gx1) - 0.5);
  gy1 -= sz1 * (step(0.0, gy1) - 0.5);

  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

  vec4 norm0 = taylorInvSqrt_1604150559(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
  g000 *= norm0.x;
  g010 *= norm0.y;
  g100 *= norm0.z;
  g110 *= norm0.w;
  vec4 norm1 = taylorInvSqrt_1604150559(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
  g001 *= norm1.x;
  g011 *= norm1.y;
  g101 *= norm1.z;
  g111 *= norm1.w;

  float n000 = dot(g000, Pf0);
  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
  float n111 = dot(g111, Pf1);

  vec3 fade_xyz = fade_1604150559(Pf0);
  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);
  return 2.2 * n_xyz;
}

//
// Description : Array and textureless GLSL 2D/3D/4D simplex
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_1117569599(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289_1117569599(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_1117569599(vec4 x) {
     return mod289_1117569599(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1117569599(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise_1117569599(vec3 v)
  {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D_1117569599 = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g_1117569599 = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g_1117569599;
  vec3 i1 = min( g_1117569599.xyz, l.zxy );
  vec3 i2 = max( g_1117569599.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D_1117569599.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289_1117569599(i);
  vec4 p = permute_1117569599( permute_1117569599( permute_1117569599(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D_1117569599.wyz - D_1117569599.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1_1117569599 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0_1117569599 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1_1117569599.xy,h.z);
  vec3 p3 = vec3(a1_1117569599.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt_1117569599(vec4(dot(p0_1117569599,p0_1117569599), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0_1117569599 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0_1117569599,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
  }

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame, float multiplier) {
    vec2 mult = texCoord * resolution;
    float offset = snoise_1117569599(vec3(mult / multiplier, frame));
    float n1 = pnoise_1604150559(vec3(mult, offset), vec3(1.0/texCoord * resolution, 1.0));
    return n1 / 2.0 + 0.5;
}

float grain_2281831123(vec2 texCoord, vec2 resolution, float frame) {
    return grain_2281831123(texCoord, resolution, frame, 2.5);
}

float grain_2281831123(vec2 texCoord, vec2 resolution) {
    return grain_2281831123(texCoord, resolution, 0.0);
}

vec3 blendSoftLight_1540259130(vec3 base, vec3 blend) {
    return mix(
        sqrt(base) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend), 
        2.0 * base * blend + base * base * (1.0 - 2.0 * blend), 
        step(base, vec3(0.5))
    );
}

// Using conditionals
// vec3 blendSoftLight(vec3 base, vec3 blend) {
//     return vec3(
//         ((blend.r < 0.5) ? (2.0 * base.r * blend.r + base.r * base.r * (1.0 - 2.0 * blend.r)) : (sqrt(base.r) * (2.0 * blend.r - 1.0) + 2.0 * base.r * (1.0 - blend.r))),
//         ((blend.g < 0.5) ? (2.0 * base.g * blend.g + base.g * base.g * (1.0 - 2.0 * blend.g)) : (sqrt(base.g) * (2.0 * blend.g - 1.0) + 2.0 * base.g * (1.0 - blend.g))),
//         ((blend.b < 0.5) ? (2.0 * base.b * blend.b + base.b * base.b * (1.0 - 2.0 * blend.b)) : (sqrt(base.b) * (2.0 * blend.b - 1.0) + 2.0 * base.b * (1.0 - blend.b)))
//     );
// }

uniform vec3 color1;
uniform vec3 color2;
uniform float aspect;
uniform vec2 offset;
uniform vec2 scale;
uniform float noiseAlpha;
uniform bool aspectCorrection;
uniform float grainScale;
uniform float grainTime;
uniform vec2 smooth;

varying vec2 vUv;

void main() {
  vec2 q = vec2(vUv - 0.5);
  if (aspectCorrection) {
    q.x *= aspect;
  }
  q /= scale;
  q -= offset;
  float dst = length(q);
  dst = smoothstep(smooth.x, smooth.y, dst);
  vec3 color = mix(color1, color2, dst);
  
  if (noiseAlpha > 0.0 && grainScale > 0.0) {
    float gSize = 1.0 / grainScale;
    float g = grain_2281831123(vUv, vec2(gSize * aspect, gSize), grainTime);
    vec3 noiseColor = blendSoftLight_1540259130(color, vec3(g));
    gl_FragColor.rgb = mix(color, noiseColor, noiseAlpha);
  } else {
    gl_FragColor.rgb = color;
  }
  gl_FragColor.a = 1.0;
}`,side:Oc,uniforms:{aspectCorrection:{value:!1},aspect:{value:1},grainScale:{value:.005},grainTime:{value:0},noiseAlpha:{value:.25},offset:{value:new N(0,0)},scale:{value:new N(1,1)},smooth:{value:new N(0,1)},color1:{value:new da("#fff")},color2:{value:new da("#283844")}},depthTest:!1}),d=new Ha(b,c);d.frustumCulled=!1,d.style=e,a&&d.style(a),this._mesh=d;function e(g){g=g||{};if(Array.isArray(g.colors)){const l=g.colors.map(function(k){return typeof k==="string"||typeof k==="number"?new da(k):k});c.uniforms.color1.value.copy(l[0]),c.uniforms.color2.value.copy(l[1])}typeof g.aspect==="number"&&(c.uniforms.aspect.value=g.aspect),typeof g.grainScale==="number"&&(c.uniforms.grainScale.value=g.grainScale),typeof g.grainTime==="number"&&(c.uniforms.grainTime.value=g.grainTime);if(g.smooth){var h=f(g.smooth,N);c.uniforms.smooth.value.copy(h)}if(g.offset){var i=f(g.offset,N);c.uniforms.offset.value.copy(i)}typeof g.noiseAlpha==="number"&&(c.uniforms.noiseAlpha.value=g.noiseAlpha);if(typeof g.scale!=="undefined"){var j=g.scale;typeof j==="number"&&(j=[j,j]),j=f(j,N),c.uniforms.scale.value.copy(j)}typeof g.aspectCorrection!=="undefined"&&(c.uniforms.aspectCorrection.value=Boolean(g.aspectCorrection))}const f=(g,h)=>Array.isArray(g)?new h().fromArray(g):g}get mesh(){return this._mesh}}class Gi{static getArrayFromColor(a,b=1){const{r:c,g:d,b:e,a:f}=Gi.hex2rgb(a,b);return[c/255,d/255,e/255,f]}static hex2rgb(a,b=1){let c,d,e;return typeof a==="string"?(a.charAt(0)==="#"&&(a=a.substr(1)),a.length===3&&(a=a.substr(0,1)+a.substr(0,1)+a.substr(1,2)+a.substr(1,2)+a.substr(2,3)+a.substr(2,3)),c=a.charAt(0)+a.charAt(1),d=a.charAt(2)+a.charAt(3),e=a.charAt(4)+a.charAt(5),c=parseInt(c,16),d=parseInt(d,16),e=parseInt(e,16)):(c=a>>16&255,d=a>>8&255,e=a&255),{r:c,g:d,b:e,a:b}}}class ol extends Lb{constructor(a,b){super();this._color1={type:"3fv",value:[]};this._color2={type:"3fv",value:[]};this._vertexShader=`precision highp float;\r
\r
uniform mat4 modelViewMatrix;\r
uniform mat4 projectionMatrix;\r
\r
attribute vec3 position;\r
attribute vec2 uv;\r
uniform vec3 color1;\r
uniform vec3 color2;\r
\r
varying vec3 vColor;\r
\r
void main()\r
{\r
	float gradientScale = 0.4;\r
	float minThreshold = (1.0 - gradientScale) / 2.0;\r
	float maxThreshold = (1.0 + gradientScale) / 2.0;\r
	float mixFactor = smoothstep(minThreshold, maxThreshold, 1.0 - uv.y);\r
\r
	vColor = mix(color1, color2, mixFactor);\r
	gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
}\r
`;this._fragmentShader=`precision highp float;\r
\r
varying vec3 vColor;\r
\r
void main()\r
{\r
	gl_FragColor = vec4(vColor.rgb, 1.0);\r
}\r
`;this.onBeforeCompile=a=>{a.vertexShader=this._vertexShader,a.fragmentShader=this._fragmentShader,a.uniforms={color1:this._color1,color2:this._color2}};this._color1.value=this.getArrayFromColor(a),this._color2.value=this.getArrayFromColor(b)}getArrayFromColor(a){return Gi.getArrayFromColor(a).slice(0,3)}}class pl{constructor(){this._geometry=new Hc(1,32,16)}doesSphereCollideWithSpheres(a,b){for(const c of b)if(a.position.distanceTo(c.position)<a.radius+c.radius)return!0;return!1}getNewPlanetPosition(a,b,c){const d=new v(),e={position:d,radius:b};do d.set(_a.getRandomBetween(-1,1),_a.getRandomBetween(-1,1),_a.getRandomBetween(-1,1)).normalize(),d.multiplyScalar(Math.random()*a);while(this.doesSphereCollideWithSpheres(e,c));return d}createClusterOfPlanets(a,b,c,d){const e=new $(),f=6,g=new ol(a,b),h=[];for(let k=0;k<d;++k){const n=_a.getRandomBetween(.15,1.5),m=new Ha(this._geometry,g);m.scale.set(n,n,n);const o=this.getNewPlanetPosition(f,n,h);m.position.copy(o),m.name=`${c} - ${k}`,h.push({position:m.position,radius:n}),m.rotation.z=.1,e.add(m)}const i=new Ib().setFromObject(e),j=new Cd(i.max.x-i.min.x,i.max.y-i.min.y,i.max.z-i.min.z),l=new Ha(j,new Ab({color:65280,transparent:!0,opacity:0}));return l.position.set((i.min.x+i.max.x)/2,(i.min.y+i.max.y)/2,(i.min.z+i.max.z)/2),l.name="boundingBox",l.userData.name=`${c} cluster`,e.add(l),e}}class nl{constructor(a,b,c){this._enabled=!1;this._clientX=null;this._clientY=null;this._raycaster=new Fg();this._intersects=[];this._infoBubble=document.getElementById("infoBubble");this.onPointerUp=()=>{this._clientX=null,this._clientY=null};this.onMouseMove=a=>{const{clientX:b,clientY:c}=a;this.onPointerMove(b,c)};this.onTouchMove=a=>{const{clientX:b,clientY:c}=a.touches[0];this.onPointerMove(b,c)};this._domElement=a,this._camera=b,this._intersectables=c}activate(){this._enabled||(this._enabled=!0,window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("touchmove",this.onTouchMove),window.addEventListener("touchend",this.onPointerUp),window.addEventListener("touchcancel",this.onPointerUp))}deactivate(){this._enabled&&(this._enabled=!1,this._domElement.classList.remove("rotating"),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("touchmove",this.onTouchMove),window.removeEventListener("touchend",this.onPointerUp),window.removeEventListener("touchcancel",this.onPointerUp))}onPointerMove(a,b){this._clientX=a,this._clientY=b}update(){if(this._clientX!=null&&this._clientY!=null){const a=_a.domCoordinatesToNDC(this._clientX,this._clientY,this._domElement);this._raycaster.setFromCamera(a,this._camera),this._intersects.length=0,this._raycaster.intersectObjects(this._intersectables,!1,this._intersects);if(this._intersects.length>0){const b=this._intersects[0];this._infoBubble.classList.remove("hidden"),this._infoBubble.textContent=b.object.userData.name,this._infoBubble.style.transform=`translate(${this._clientX+20}px, ${this._clientY}px) translateY(-100%)`}else this._infoBubble.classList.add("hidden")}else this._infoBubble.classList.add("hidden")}}class db{constructor(){this._canvas=document.getElementById("myCanvas");this._scene=new rd();this._camera=new Ya(60,window.innerWidth/window.innerHeight,.05,1e3);this._distance=new kf(50,50,1,500,Gb.EASE_OUT,sb.ANIMATION_DURATION);this._normalizedCameraPosition=[0,0,1];this._planetFactory=new pl();this._clusters=[];this._planetSystemRadius=20;this.needsRender=!0;this.onWindowResize=()=>{this._canvas.width=0,this._canvas.height=0;const a=window.innerWidth,b=window.innerHeight;this._renderer.setSize(a,b),this._camera.aspect=a/b,this._camera.updateProjectionMatrix()};this.onContextLost=a=>{a.preventDefault(),alert("Unfortunately WebGL has crashed. Please reload the page to continue!")};this.update=a=>{db._timeStamp=performance.now(),db._deltaFrame=db._timeStamp-db._prevTimeStamp,db._prevTimeStamp=db._timeStamp,this._cursorTool.update(),this.needsRender=Fb.updateActiveOnes(db._timeStamp)||this.needsRender,this.updatePlanetTransformations(),this.needsRender&&(this._normalizedCameraPosition=this._controls.update(),this._camera.position.set(this._normalizedCameraPosition[0]*this._distance.value,this._normalizedCameraPosition[1]*this._distance.value,this._normalizedCameraPosition[2]*this._distance.value),this._camera.lookAt(0,0,0),this._renderer.render(this._scene,this._camera),this.needsRender=!1)};this.animate=a=>{this.update(a),this._renderer.setAnimationLoop(this.update)};this.initBackground(),this.initRenderer(),this.initMeshes(),this.initControls(),this.onWindowResize(),this.animate(0)}initBackground(){const a=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream;this._scene.add(new ql({aspect:this._camera.aspect,grainScale:a?0:.001,colors:["#ffffff","#353535"]}).mesh)}initLights(){const a=new cf(16777215,.1),b=new bf(16777215,.1);b.position.set(.5,0,.866);const c=new $e(16777147,526368,.8);this._scene.add(a,b,c)}initControls(){this._controls=new ml(this._canvas.parentElement,this),this._controls.activate();const a=this._clusters.map(b=>b.getObjectByName("boundingBox"));this._cursorTool=new nl(this._canvas.parentElement,this._camera,a),this._cursorTool.activate()}initEllipse(){const a=new xb(0,0,this._planetSystemRadius,this._planetSystemRadius,0,2*Math.PI,!1,0),b=a.getPoints(100),c=new fa().setFromPoints(b);c.rotateX(Math.PI/2);const d=new Qa({color:8947848}),e=new wb(c,d);this._scene.add(e)}initMeshes(){this.initEllipse(),this._clusters.push(this._planetFactory.createClusterOfPlanets(65535,3761834,"Cyan",8)),this._clusters.push(this._planetFactory.createClusterOfPlanets(16776960,3761834,"Yellow",6)),this._clusters.push(this._planetFactory.createClusterOfPlanets(16711680,3761834,"Red",4)),this._clusters.push(this._planetFactory.createClusterOfPlanets(255,3761834,"Blue",8)),this._clusters.push(this._planetFactory.createClusterOfPlanets(65280,3761834,"Green",7)),this._clusters.push(this._planetFactory.createClusterOfPlanets(16711935,3761834,"Magenta",5)),this._clusters.push(this._planetFactory.createClusterOfPlanets(16753920,3761834,"Orange",7));for(const a of this._clusters)this._scene.add(a)}initRenderer(){const a={alpha:!1,antialias:!0},b=this._canvas.getContext("webgl2",a)||this._canvas.getContext("experimental-webgl2",a);this._renderer=new Jd(sl({canvas:this._canvas,context:b},a)),this._renderer.setPixelRatio(window.devicePixelRatio),this._renderer.setClearColor(15530239),this._renderer.outputEncoding=me,this._canvas.addEventListener("webglcontextlost",this.onContextLost),window.addEventListener("resize",this.onWindowResize)}get scene(){return this._scene}updatePlanetTransformations(){for(let a=0;a<this._clusters.length;++a){const b=this._clusters[a],c=a/this._clusters.length*2*Math.PI+db.timeStamp*sb.AUTOROTATION_SPEED,d=Math.cos(c)*this._planetSystemRadius,e=Math.sin(c)*this._planetSystemRadius;b.position.setX(d),b.position.setZ(e),b.rotation.y=db.timeStamp*1e-4}this.needsRender=!0}static get timeStamp(){return db._timeStamp}static get deltaFrame(){return db._deltaFrame}get distance(){return this._distance}}db._prevTimeStamp=0,db._timeStamp=0,db._deltaFrame=1e3;class ll{constructor(){}}kl();})();
