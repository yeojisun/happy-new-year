import styled from "styled-components";

const Styled = styled.div`
.div_button{
    position: relative;
    padding: 40px;
    text-align: center;
}
.button {
    display: inline-block;
    color: #fff;
    text-shadow: 0 0 2px rgba(0,0,0,.3);
    font-family: sans-serif;
    box-shadow:
        inset 0 0 2px 0 rgba(255,255,255,.4),
        inset 0 0 3px 0 rgba(0,0,0,.4),
        inset 0 0 3px 5px rgba(0,0,0,.05),
        2px 2px 4px 0 rgba(0,0,0,.25);
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 12px;
    line-height: 14px;
    position: relative;
}
a:hover {
    cursor:pointer;
   }
.button.red { background: #EA3D33; }
.button:before {
    top: 0;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    background: rgba(255,255,255,.6);
    box-shadow: 0 1px 2px 0 rgba(255,255,255,.6);
}
.button:after {
    bottom: 0;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    background: rgba(0,0,0,.15);
    box-shadow: 0 -1px 2px 0 rgba(0,0,0,.15);
}
.frame{
    height:100vh;
}
.main-frame{
    min-height: 100%;
    max-width: 350px;
    margin: 0 auto;
}
.slick-next:before, .slick-prev:before {
    color: #000;
}
.list-item img{
    
  height: calc(50vh - 100px);
  width: auto;
  margin: 0 auto; /* it centers any block level element */
}
.list_title{
    padding-top:30px;
    padding-bottom:10px;
}

.user-wrap {
	width: 100%;
	margin: 10px auto;
	position: relative;
}
.user-wrap img {
	width: 100%;
	vertical-align: middle;
}
.user-text {
    font-size: 20px;
    font-family: 'ypseo';
    text-align:center;
	position: absolute;
	top: 40%;
	left: 50%;
	width: 100%;
	transform: translate( -50%, -50% );
}


@font-face {
    font-family: 'ypseo';
    src: url('/assets/font/ypseo.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }

background-image: url("/assets/img/sub_bg.jpg");
background-size: 400px;
-- background-repeat: no-repeat ;
background-position: top center; 
width:100vw;
min-height:100%;
`;
export default Styled;


