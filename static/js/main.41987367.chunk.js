(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(7),c=t.n(r),i=(t(13),t(1)),o=t(2),s=t(4),m=t(3),u=t(5),p=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{id:"home"},l.a.createElement("nav",{id:"nav-wrap"},l.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),l.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),l.a.createElement("ul",{id:"nav",className:"nav"},l.a.createElement("li",{className:"current"},l.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),l.a.createElement("li",null,l.a.createElement("a",{className:"smoothscroll",href:"#contact"},"Contact")))),l.a.createElement("div",{className:"row banner"},l.a.createElement("div",{className:"banner-text"},l.a.createElement("h1",{className:"responsive-headline"},e.name),l.a.createElement("h2",null,e.role),l.a.createElement("br",null),l.a.createElement("h3",null,e.roleDescription,l.a.createElement("br",null),e.roleDescription2),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",{key:e.name},l.a.createElement("a",{href:e.url,target:"_blank"},l.a.createElement("i",{className:e.className})))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#about"},l.a.createElement("i",{className:"icon-down-circle"})))))}}]),a}(n.Component),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"about"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"four columns"},l.a.createElement("img",{className:"profile-pic",src:"images/chrisrutgers.JPG",alt:""})),l.a.createElement("div",{className:"seven columns main-col"},l.a.createElement("h2",null,"About Me"),l.a.createElement("p",null,e.aboutme),l.a.createElement("p",null,e.moreaboutme))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#resume",align:"center"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),E=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"resume"},l.a.createElement("div",{className:"row education"},l.a.createElement("div",{className:"five columns main-col"},l.a.createElement("h1",null,l.a.createElement("span",null,"Education")),e.education&&e.education.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("h3",null,e.UniversityName,l.a.createElement("br",null)),l.a.createElement("em",{className:"date"},e.Achievements,e.MonthOfPassing,e.YearOfPassing),l.a.createElement("br",null),l.a.createElement("p",{className:"info"},e.specialization,l.a.createElement("br",null),e.specialization2,l.a.createElement("br",null),l.a.createElement("br",null))))})),l.a.createElement("h1",null,l.a.createElement("span",null,"Past Work Experience")),l.a.createElement("div",{className:"seven columns main-col"},e.work&&e.work.map(function(e){return l.a.createElement("div",{className:"row item"},l.a.createElement("div",{className:"twelve rows"},l.a.createElement("h3",null,e.CompanyName,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.MonthOfLeaving,e.YearOfLeaving)),l.a.createElement("p",{className:"info"}),l.a.createElement("h3",null,e.CompanyName2,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.MonthOfLeaving,e.YearOfLeaving)),l.a.createElement("p",{className:"info"}),l.a.createElement("h3",null,e.CompanyName3,l.a.createElement("span",null,"\u2022"),l.a.createElement("em",{className:"date"},e.MonthOfLeaving,e.YearOfLeaving)),l.a.createElement("p",{className:"info"})),l.a.createElement("ul",null,l.a.createElement("span",null,"\u2022"),e.specialization1,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),e.specialization2,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),e.specialization3,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),e.specialization4,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),e.specialization5,l.a.createElement("br",null),l.a.createElement("span",null,"\u2022"),e.specialization6,l.a.createElement("br",null)),l.a.createElement("p",null,e.Achievements))}))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#portfolio",align:"center"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),d=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"portfolio"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("h1",null,"Examples of My Work"),l.a.createElement("h3",null,"Games and Applications"),l.a.createElement("br",null),l.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-thirds s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map(function(e){return l.a.createElement("div",{className:"columns portfolio-item"},l.a.createElement("div",{className:"item-wrap"},l.a.createElement("a",{href:e.url},l.a.createElement("img",{src:"".concat(e.imgurl),className:"item-img"}),l.a.createElement("div",{className:"overlay"},l.a.createElement("div",{className:"portfolio-item-meta"},l.a.createElement("h5",null,e.name))))),l.a.createElement("p",null,e.description))})))),l.a.createElement("p",{className:"scrolldown"},l.a.createElement("a",{className:"smoothscroll",href:"#contact",align:"center"},l.a.createElement("i",{className:"icon-down-circle"}))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("section",{id:"contact"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns collapsed"},l.a.createElement("br",null),l.a.createElement("h2",null,"Address"),l.a.createElement("p",{className:"address"},l.a.createElement("span",null,e.address,l.a.createElement("br",null)),e.address2),l.a.createElement("br",null),l.a.createElement("h2",null,"Telephone"),l.a.createElement("p",{className:"phone"},l.a.createElement("span",null,e.phone)),l.a.createElement("br",null),l.a.createElement("h2",null,"E-Mail"),l.a.createElement("p",{className:"email"},l.a.createElement("span",null,e.email)))))}}]),a}(n.Component),v=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.resumeData;return l.a.createElement("footer",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"twelve columns"},l.a.createElement("ul",{className:"social-links"},e.socialLinks&&e.socialLinks.map(function(e){return l.a.createElement("li",null,l.a.createElement("a",{href:e.url},l.a.createElement("i",{className:e.className})))}))),l.a.createElement("div",{id:"go-top"},l.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},l.a.createElement("i",{className:"icon-up-open"})))))}}]),a}(n.Component),g={name:"Christopher Mangin",role:"Junior Full-Stack Web Developer",roleDescription:"HTML/CSS, JavaScript, jQuery, Node, Git, MySQL,",roleDescription2:"MongoDB, Express, React, and more",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/christopher-mangin-75a7021a/",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/cmangin87",className:"fa fa-github"}],aboutme:"Consistent and dependable collaborator with 10 years of experience in the social services sector excited to embark on a new career in full stack web development.",moreaboutme:"Independent self-starter with a passion for creative problem solving and the ability to balance a complex workload while managing and motivating a team.",address:"301 Branch Drive",address2:"Branchburg, NJ, 08853",phone:"(201) 306-3748",email:"mangin.christopher@gmail.com",education:[{UniversityName:"Rutgers Coding Bootcamp",specialization:"Web Development",specialization2:"General Programming",MonthOfPassing:"Dec ",YearOfPassing:"2019",Achievements:"Certification: "},{UniversityName:"Udemy",specialization:"The Complete JavaScript Course",specialization2:"An Introduction to Python Programming",MonthOfPassing:"Dec ",YearOfPassing:"2019",Achievements:"Certification: "},{UniversityName:"University of Delaware",specialization:"Psychology (Major)",specialization2:"Philosophy(Minor)",MonthOfPassing:"Jan ",YearOfPassing:"2009",Achievements:"Bachelor of Arts Degree: "}],work:[{CompanyName:"Our House, Inc. ",CompanyName2:"Comprehensive Behavioral Healthcare ",CompanyName3:"Community Hope ",specialization1:" Willing to take on challenging work and driven to accomplish goals",specialization2:" Independently motivated and quick to comprehend",specialization3:" Team player with experience navigating ambiguous and complex work environments",specialization4:" Experienced in leading others and delegating tasks amongst a team",specialization5:" Clear communicator and active listener",specialization6:" Trained crisis manager and problem solver",MonthOfLeaving:" Aug 2018 - Sept 2019 ",MonthOfLeaving2:" Oct 2012 - Aug 2018 ",MonthOfLeaving3:" Feb 2009 - Aug 2015 ",YearOfLeaving:"",YearOfLeaving2:"",YearOfLeaving3:"",Achievements:""}],portfolio:[{name:"Git Clash",description:"An innovative way to simplify the hiring process.. or to simply challenge your colleagues!  Also, a one stop shop for searching GitHub usernames for all relevant information.",imgurl:"images/portfolio/gitclashbutton.png",url:"http://git-clash.herokuapp.com/"},{name:"Dino in Space",description:"A side-scroller game where the player controls a dinosaur lost in space after a meteor crashed into Earth. Traverse through space by keeping the dinosaur suspended in the air using the arrow keys as he avoids obstacles in his path.",imgurl:"images/portfolio/dinoinspacebutton.png",url:"https://secure-lowlands-84653.herokuapp.com/"},{name:"Treat Yo Self",description:"Need a low-key date night idea but feeling indecisive?  Let us decide for you!  Choose your preferred cuisine and movie genre and we will generate a fitting combination just for you.",imgurl:"images/portfolio/treatyoselfbutton.png",url:"https://jacobwilder.github.io/Project-1/"}]},b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,{resumeData:g}),l.a.createElement(h,{resumeData:g}),l.a.createElement(E,{resumeData:g}),l.a.createElement(d,{resumeData:g}),l.a.createElement(f,{resumeData:g}),l.a.createElement(v,{resumeData:g}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,t){e.exports=t(15)}},[[8,2,1]]]);
//# sourceMappingURL=main.41987367.chunk.js.map