(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{17:function(n,t,e){},18:function(n,t,e){},20:function(n,t,e){"use strict";e.r(t);var i=e(1),a=e.n(i),c=e(6),o=e.n(c),r=(e(17),e(7)),s=e(8),u=e(11),l=e(10),p=(e(18),e(9)),d=e(4),f=new Map([["pentatonic",{name:"Pentatonic Scale (6 strings)",positions:[[6,0],[6,3],[5,0],[5,2],[4,0],[4,2],[3,0],[3,2],[2,0],[2,3],[1,0],[1,3]]}]]),g=e(3);var m=e(0),b=function(n){Object(u.a)(e,n);var t=Object(l.a)(e);function e(n){var i;return Object(r.a)(this,e),(i=t.call(this,n)).download=function(){var n=i.state,t=n.type,e=n.rootNote,a=n.tempo,c=n.timeSig,o=function(n){var t=["E","F","F#","G","G#","A","A#","B","C","C#","D","D#"].indexOf(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"A");return f.get(n).positions.map((function(n){var e=Object(d.a)(n,2);return[e[0],e[1]+t]}))}(t,e),r="[Guitar Exercise] ".concat(e," ").concat(t," ").concat(a," bpm"),s=function(n,t,e,i){var a,c=(e=e.split("/").map((function(n){return+n})))[0],o=1,r=1,s="",u=Object(p.a)(i);try{for(u.s();!(a=u.n()).done;){var l=Object(d.a)(a.value,2),f=l[0],m=l[1];r>c&&(o++,r=1,s="".concat(s,'\n            </measure>\n            <measure number="').concat(o,'">')),r++;var b=g.Guitar.stringedTunings.get("Guitar").get(6)[0],h=g.Guitar.getNoteInfoFromFretboardPos(f,m,b);s="".concat(s,"\n            <note>\n                <pitch>\n                    <step>").concat(h.name,"</step>\n                    <octave>").concat(h.octave,"</octave>\n                </pitch>\n                <notations>\n                    <technical>\n                        <fret>").concat(m,"</fret>\n                        <string>").concat(f,"</string>\n                    </technical>\n                </notations>\n                <voice>1</voice>\n                <duration>960</duration>\n                <type>quarter</type>\n            </note>")}}catch(j){u.e(j)}finally{u.f()}return'<?xml version="1.0" encoding="UTF-8" standalone="no" ?>\n<score-partwise>\n    <work>\n        <work-title />\n    </work>\n    <identification>\n        <encoding>\n            <software>https://github.com/fheyen/guitar-exercise-generator</software>\n        </encoding>\n    </identification>\n    <part-list>\n        <score-part id="P1">\n            <part-name>'.concat(n,'</part-name>\n            <score-instrument id="P1-I1">\n                <instrument-name>Steel String Guitar 1</instrument-name>\n            </score-instrument>\n            <midi-instrument id="P1-I1">\n                <midi-channel>1</midi-channel>\n                <midi-program>26</midi-program>\n            </midi-instrument>\n        </score-part>\n    </part-list>\n    <part id="P1">\n        <measure number="1">\n            <attributes>\n                <divisions>960</divisions>\n                <key>\n                    <fifths>0</fifths>\n                    <mode>major</mode>\n                </key>\n                <clef>\n                    <sign>G</sign>\n                    <line>2</line>\n                </clef>\n                <time>\n                    <beats>').concat(e[0],"</beats>\n                    <beat-type>").concat(e[1],'</beat-type>\n                </time>\n                <staff-details>\n                    <staff-lines>6</staff-lines>\n                    <staff-tuning line="1">\n                        <tuning-step>E</tuning-step>\n                        <tuning-octave>3</tuning-octave>\n                    </staff-tuning>\n                    <staff-tuning line="2">\n                        <tuning-step>A</tuning-step>\n                        <tuning-octave>3</tuning-octave>\n                    </staff-tuning>\n                    <staff-tuning line="3">\n                        <tuning-step>D</tuning-step>\n                        <tuning-octave>4</tuning-octave>\n                    </staff-tuning>\n                    <staff-tuning line="4">\n                        <tuning-step>G</tuning-step>\n                        <tuning-octave>4</tuning-octave>\n                    </staff-tuning>\n                    <staff-tuning line="5">\n                        <tuning-step>B</tuning-step>\n                        <tuning-octave>4</tuning-octave>\n                    </staff-tuning>\n                    <staff-tuning line="6">\n                        <tuning-step>E</tuning-step>\n                        <tuning-octave>5</tuning-octave>\n                    </staff-tuning>\n                </staff-details>\n            </attributes>\n            <direction placement="above">\n                <sound tempo="').concat(t,'" />\n            </direction>\n           ').concat(s,"\n        </measure>\n    </part>\n</score-partwise>\n")}(r,a,c,o),u="".concat(r,".musicxml"),l=document.createElement("a");l.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(s)),l.setAttribute("download",u),l.style.display="none",document.body.appendChild(l),l.click(),document.body.removeChild(l)},i.state={type:"pentatonic",rootNote:"C",tempo:120,timeSig:"4/4"},i}return Object(s.a)(e,[{key:"render",value:function(){var n=this;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Guitar Exercise Generator"}),Object(m.jsx)("h2",{children:"Options"}),Object(m.jsxs)("div",{children:[Object(m.jsxs)("label",{children:["Type",Object(m.jsxs)("select",{onChange:function(t){return n.setState({type:t.target.value})},children:[Object(m.jsx)("option",{value:"pentatonic",children:"Pentatonic Scale"}),Object(m.jsx)("option",{value:"heptatonic",children:"Heptatonic Scale"})]})]}),Object(m.jsxs)("label",{children:["Root note",Object(m.jsx)("select",{onChange:function(t){return n.setState({rootNote:t.target.value})},children:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"].map((function(n){return Object(m.jsx)("option",{value:n,children:n},n)}))})]}),Object(m.jsxs)("label",{children:["Tempo (bpm)",Object(m.jsx)("input",{type:"number",min:"30",max:"200",value:"120",onInput:function(t){return n.setState({tempo:+t.target.value})}})]}),Object(m.jsxs)("label",{children:["Time signature",Object(m.jsx)("select",{onChange:function(t){return n.setState({timeSig:t.target.value})},children:["4/4","3/4","2/4"].map((function(n){return Object(m.jsx)("option",{value:n,children:n},n)}))})]})]}),Object(m.jsx)("h2",{children:"Output"}),Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:this.download,children:"Download MusicXML"})})]})}}]),e}(i.PureComponent);o.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(b,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.144087b4.chunk.js.map