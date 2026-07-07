import {useEffect,useState} from "react";
import {motion,useScroll,useTransform} from "framer-motion";
import {ArrowRight,Play,Menu} from "lucide-react";

const orange="#f26a2e";
const logo="/LOGO.svg";
const videosLink="https://drive.google.com/drive/folders/1soDm7qsbGqJjsVUlH5A-KGZNt1smP-mx?usp=sharing";
const insta="https://www.instagram.com/alt.comunic/";
const linkedin="https://www.linkedin.com/company/alt-comunic/about/?viewAsMember=true";
const appsScriptUrl="https://script.google.com/macros/s/AKfycbznzRZUtxhncHDloFvd4pff1m2LE2VTvelFSFDUr16mS__wG1ngCaBwi50Petyl0KbJqQ/exec";
const heroVideo="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4";
const contactVideo="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4";

const problems=[
["Conteúdo sem estratégia","Publicações sem narrativa não constroem autoridade nem intenção de compra."],
["Tráfego sem funil","Campanhas sem oferta, CRM e processo viram custo difícil de defender."],
["Leads sem acompanhamento","Oportunidades esfriam quando marketing e comercial não trabalham juntos."],
["Marca sem diferenciação","Quando a percepção é genérica, a negociação tende a cair em preço."]
];

const ecosystem=[
["Branding","Posicionamento, identidade e percepção de valor."],
["Conteúdo","Roteiros, vídeos e narrativas que geram autoridade."],
["Performance","Campanhas e testes para gerar demanda qualificada."],
["CRM","Relacionamento, funil e acompanhamento comercial."],
["Dados","Decisão orientada por indicadores e aprendizado contínuo."],
["Growth","Melhoria, escala e crescimento previsível."]
];

const method=[
["01","Diagnóstico","Leitura de cenário, mercado, concorrência, canais e oportunidades."],
["02","Posicionamento","Construção da narrativa, diferenciação, oferta e percepção de valor."],
["03","Produção","Conteúdos, vídeos, criativos, páginas e ativos comerciais."],
["04","Distribuição","Ativação de canais, mídia, CRM e pontos de contato."],
["05","Inteligência","Análise dos dados, funil, conversões e gargalos."],
["06","Escala","Otimização do que funciona e ampliação das oportunidades."]
];

const cases=[
{client:"Meso Arquitetura",type:"Branding / Social / Direção Visual",desc:"Construção de presença premium, estética e narrativa visual para fortalecer percepção de valor.",bg:"https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1800&auto=format&fit=crop",link:"https://www.instagram.com/meso_arquitetura/"},
{client:"EnForce Engenharia",type:"Identidade / Conteúdo / Engenharia",desc:"Sistema visual técnico e institucional para uma marca de engenharia com posicionamento consistente.",bg:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1800&auto=format&fit=crop",link:"https://www.instagram.com/en.forceengenharia/"},
{client:"Grupo Saga",type:"Automotivo / Campanhas / Vendas",desc:"Planejamento, conteúdo comercial e inteligência de campanhas para operações de venda.",bg:"https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1800&auto=format&fit=crop",link:"https://www.instagram.com/sagavolkswagengoiania/"}
];

const results=[["10+","anos de experiência"],["50+","marcas e projetos"],["100k+","leads e oportunidades"],["360°","marca, mídia e comercial"]];

function Logo({className="",style}){return <img src={logo} className={className} style={style} onError={e=>e.currentTarget.src="/Logo-Alt.png"} alt="ALT Comunicação"/>}
function SectionTitle({kicker,title,text}){return <div><div className="kicker">{kicker}</div><h2 className="section-title">{title}</h2>{text&&<p className="lead">{text}</p>}</div>}

function Cursor(){
 const[pos,setPos]=useState({x:-100,y:-100});
 useEffect(()=>{const m=e=>setPos({x:e.clientX,y:e.clientY});window.addEventListener("mousemove",m);return()=>window.removeEventListener("mousemove",m)},[]);
 return <><motion.div className="cursor-dot" animate={{x:pos.x-6,y:pos.y-6}} transition={{type:"spring",stiffness:700,damping:36}}/><motion.div className="cursor-ring" animate={{x:pos.x-22,y:pos.y-22}} transition={{type:"spring",stiffness:220,damping:28}}/></>
}

function Loading({show}){if(!show)return null;return <motion.div className="loading" initial={{opacity:1}} animate={{opacity:1}} exit={{opacity:0}}><motion.div initial={{opacity:0,y:18,scale:.96}} animate={{opacity:1,y:0,scale:1}} transition={{duration:.7,ease:"easeOut"}}><div style={{display:"flex",justifyContent:"center"}}><Logo className="loading-logo" style={{height:76,width:"auto",opacity:.92}}/></div><div className="loading-line" style={{width:220,marginTop:28}}><span/></div><div className="loading-text" style={{marginTop:18,letterSpacing:".28em",fontSize:10,color:"rgba(255,255,255,.52)"}}>Carregando oportunidades...</div></motion.div></motion.div>}

function Navbar(){return <header className="navbar"><div className="container navbar-inner"><a href="#home"><Logo className="logo"/></a><nav className="nav-links"><a href="#problema">Problema</a><a href="#ecossistema">Ecossistema</a><a href="#metodo">Método</a><a href="#cases">Cases</a><a href="#resultados">Resultados</a><a href={videosLink} target="_blank">Vídeos</a><a href="#contato" className="nav-cta">Diagnóstico</a></nav><a href="#contato" className="mobile-menu"><Menu size={20}/></a></div></header>}

function Hero(){
 const{scrollYProgress}=useScroll(); const y=useTransform(scrollYProgress,[0,.35],[0,160]); const scale=useTransform(scrollYProgress,[0,.35],[1,1.12]);
 return <section id="home" className="hero"><motion.video className="hero-video" style={{y,scale}} autoPlay muted loop playsInline><source src={heroVideo} type="video/mp4"/></motion.video><div className="grid-bg"/>
 <div className="container hero-content"><div><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} className="kicker">Branding • Performance • Growth</motion.div><motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.1}}>Marketing sem achismo.<span className="orange"> Resultado que converte.</span></motion.h1><motion.p initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{delay:.2}}>Branding, conteúdo, tráfego e inteligência comercial integrados para transformar atenção em faturamento.</motion.p><motion.div className="hero-actions" initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{delay:.3}}><a href="#contato" className="btn btn-primary">Diagnóstico Gratuito <ArrowRight size={17}/></a><a href="#cases" className="btn btn-outline">Ver Cases <ArrowRight size={17}/></a><a href={videosLink} target="_blank" className="btn btn-outline"><Play size={16}/> Vídeos</a></motion.div></div>
 <motion.aside className="hero-card" initial={{opacity:0,x:40}} animate={{opacity:1,x:0}}><div className="hero-card-inner"><div><Logo className="hero-logo"/><h2>Não criamos posts. Construímos sistemas de aquisição.</h2></div><div className="hero-tags"><span>Brand</span><span>Growth</span><span>CRM</span><span>Mídia</span></div></div></motion.aside></div></section>
}

function Problems(){return <section id="problema" className="section"><div className="container"><SectionTitle kicker="01 — O problema" title="Sua empresa está crescendo ou apenas postando?" text="Quando marca, conteúdo, mídia e comercial não trabalham juntos, o marketing perde força e as oportunidades deixam de virar negócio."/><div className="problem-grid">{problems.map(([title,text],i)=><motion.article key={title} className="problem-card" initial={{opacity:0,y:24}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.05}}><div className="bar"/><h3>{title}</h3><p>{text}</p></motion.article>)}</div></div></section>}

function Ecosystem(){return <section id="ecossistema" className="section"><div className="container ecosystem-wrap"><SectionTitle kicker="02 — Ecossistema ALT" title="Uma operação completa para transformar atenção em crescimento." text="Não entregamos serviços isolados. Construímos um sistema onde posicionamento, conteúdo, mídia, CRM e dados trabalham conectados."/><div className="ecosystem-map"><div className="orbit"/><div className="orbit"/><div className="eco-center">ALT</div>{ecosystem.map(([title,text],i)=><motion.div key={title} className={`eco-item glass-card eco-${i}`} initial={{opacity:0,scale:.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.06}}><h3>{title}</h3><p>{text}</p></motion.div>)}</div></div></section>}

function Method(){return <section id="metodo" className="section"><div className="container"><SectionTitle kicker="03 — Método ALT" title="Do diagnóstico à escala: crescimento com direção."/><div className="method-list">{method.map(([num,title,text])=><article className="method-item" key={num}><div className="method-num">{num}</div><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>}

function Cases(){return <section id="cases" className="section"><div className="container"><div className="cases-head"><SectionTitle kicker="04 — Showcase de Projetos" title="Projetos que unem marca, conteúdo e visão comercial."/><a className="btn btn-outline" href="#contato">Construir meu case <ArrowRight size={16}/></a></div><div className="cases-track">{cases.map(item=><article className="case-card" key={item.client}><div className="case-bg" style={{backgroundImage:`url(${item.bg})`}}/><div className="case-content"><div className="case-type">{item.type}</div><div><h3>{item.client}</h3><p>{item.desc}</p><a href={item.link} target="_blank" className="btn btn-outline">Ver Projeto <ArrowRight size={16}/></a></div></div></article>)}</div></div></section>}

function Results(){return <section id="resultados" className="section"><div className="container"><SectionTitle kicker="05 — Resultados" title="A marca precisa ser bonita. Mas também precisa gerar negócio."/><div className="results-grid">{results.map(([value,label])=><div className="result-card" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>}

function Videos(){const list=[["Institucionais","Produções para reforçar autoridade e percepção de valor.","https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1400&auto=format&fit=crop"],["Comerciais","Criativos focados em demanda, oferta e conversão.","https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop"],["Cases","Histórias visuais para tangibilizar resultado e posicionamento.","https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1400&auto=format&fit=crop"]];return <section id="videos" className="section"><div className="container"><SectionTitle kicker="06 — Vídeos" title="Produções que geram conexão, autoridade e desejo." text="Conteúdo audiovisual para fortalecer presença digital e transformar a forma como o público percebe a marca."/><div className="video-grid">{list.map(([title,text,img])=><a className="video-card" key={title} href={videosLink} target="_blank"><div className="video-img" style={{backgroundImage:`url(${img})`}}/><div className="video-content"><h3>{title}</h3><p>{text}</p></div></a>)}</div><div style={{marginTop:32}}><a className="btn btn-primary" href={videosLink} target="_blank">Abrir Biblioteca <ArrowRight size={16}/></a></div></div></section>}

function Contact(){
 const[sending,setSending]=useState(false); const[form,setForm]=useState({nome:"",empresa:"",email:"",whatsapp:"",dor:""}); const update=(f,v)=>setForm(p=>({...p,[f]:v}));
 const handleSubmit=async e=>{e.preventDefault();setSending(true);try{await fetch(appsScriptUrl,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(form)});alert("Diagnóstico solicitado com sucesso. Nossa equipe entrará em contato.");setForm({nome:"",empresa:"",email:"",whatsapp:"",dor:""});}catch(error){console.error(error);alert("Erro ao enviar. Tente novamente.");}finally{setSending(false);}};
 return <section id="contato" className="section contact"><video className="contact-video" autoPlay muted loop playsInline><source src={contactVideo} type="video/mp4"/></video><div className="container contact-grid"><div><div className="kicker">07 — Diagnóstico Gratuito</div><h2 className="section-title">O futuro da sua marca começa com a decisão certa.</h2><p className="lead">Vamos entender seu cenário atual e identificar onde estão as maiores oportunidades de crescimento.</p></div><form className="form" onSubmit={handleSubmit}><input required placeholder="Nome" value={form.nome} onChange={e=>update("nome",e.target.value)}/><input placeholder="Empresa" value={form.empresa} onChange={e=>update("empresa",e.target.value)}/><input required type="email" placeholder="E-mail" value={form.email} onChange={e=>update("email",e.target.value)}/><input required placeholder="WhatsApp" value={form.whatsapp} onChange={e=>update("whatsapp",e.target.value)}/><textarea placeholder="Maior dor hoje" value={form.dor} onChange={e=>update("dor",e.target.value)}/><button className="btn btn-primary" type="submit" disabled={sending}>{sending?"Enviando...":"Quero meu diagnóstico"} <ArrowRight size={17}/></button></form></div></section>
}

function Footer(){return <footer className="footer"><div className="container footer-inner"><div><Logo className="footer-logo"/><p className="muted">Marketing sem achismo. Resultado que converte.</p></div><nav className="footer-links"><a href={insta} target="_blank">Instagram</a><a href={linkedin} target="_blank">LinkedIn</a><a href="#contato">Contato</a></nav></div></footer>}

export default function App(){
 const[loading,setLoading]=useState(true); const{scrollYProgress}=useScroll(); const progressWidth=useTransform(scrollYProgress,[0,1],["0%","100%"]);
 useEffect(()=>{const t=setTimeout(()=>setLoading(false),1400);return()=>clearTimeout(t)},[]);
 return <div className="page"><motion.div className="progress" style={{width:progressWidth}}/><Cursor/><Loading show={loading}/><Navbar/><main><Hero/><Problems/><Ecosystem/><Method/><Cases/><Results/><Videos/><Contact/></main><Footer/></div>
}
