import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import image from "../image/asık.png";
import image1 from "../image/mutlu.png";
import image2 from "../image/agliyor.png";
import image3 from "../image/cilgin.png";
import image4 from "../image/kizgin.png";
import image5 from "../image/uzgun.png";
import image6 from "../image/WhatsApp Image 2019-05-02 at 14.53.35.jpeg";
import logoImage from "../image/logo.png";

import imagea from "../image/Background-Narrow.jpg";
import imageaa from "../image/game-of-thrones-character-poster.jpg";

import '../App.css';
import {BrowserRouter as Router,Route, Link } from 'react-router-dom';
import App from '../App.js';

var giris = 0;
var gid;

var Iid = new Array(6);
var Ifilm = new Array(6);
var Ipuan = new Array(6);
var Imetin = new Array(6);
var Iicerik = new Array(6);

var films = new Array(3);
var puans = new Array(3);
var metins = new Array(3);
var iceriks = new Array(3);

export default class User extends Component {
  constructor(props){
  super(props);
  this.state = {
    modlar:[
      
    {
      id:"1",
      film : ['Aynı Yıldızın Altında','Titanik','Senden Önce Ben'],
      
      puan : ['7,7','7,8','7,4'],
      
      metin : ['16 yaşındaki Hazel üç yıldır tiroid kanseriyle boğuşmaktadır ve kanser akciğerlerine de sıçradığı için yanında bir oksijen tüpüyle gezmektedir. Kanserli hastalar için oluşturulan destek grubunun bir terapi seansı esnasında Augustus isimli bir gençle tanışır. Augustus da beyin tümörüyle savaşmış ve bu yolda bir bacağını kaybetmiştir. İkili birlikte zaman geçirdikçe birbirlerine aşık olurlar. Akciğer tedavisi için hastaneye yatırılan Hazelın yanından bir an dahi ayrılmayan Augustus, sevgilisinin çok istediği bir hayali gerçekleştirmek için onunla birlikte yola çıkar. Planlarına göre Amsterdama gidecek ve Hazelın en sevdiği yazar olan Peter Van Houteni bulmaya çalışacaklardır.Josh Boone un yönetmenliğini üstlendiği film, John Green in romanından Scott Neustadter ve Michael H. Weber tarafından uyarlandı. Filmin başrollerindeyse Shailene Woodley, Ansel Elgort ve Willem Dafoe yer alıyor.',
      'Dünyanın hatırlamak istemediği türden felaketlerden olan Titanik faciası, dev prodüksiyonların yönetmeni James Cameron tarafından çekilen görkemli bir film.Teknolojinin son sürat ilerlediği bir dönemde, insanlar üstesinden gelemeyecekleri hiç bir sorun olamayacağına inanmaya başlamışlardır. Titanic adlı dev transatlantik ise, insanlığın doğaya karşı gövde gösterisi gibidir. Bu Düşler Gemisi nin yolcuları arasında Avrupa`da birkaç yıl geçirdikten sonra Amerikaya dönmekte olan, Jack adlı genç bir ressam ile nişanlısı ve annesiyle Philadelphia`ya giden Rose adlı genç bir kız da vardır. İki genç, şans eseri tanışacak, aralarındaki sınıf farkına aldırmaksızın birbirlerine yakınlaşacaktır. Bu arada doğa insanoğlunun günden güne artan kibirine bir nokta koymayı planlamaktadır. Yola çıkılmasından dört buçuk gün sonra, 10 Nisan 1912de, Titanic iki saat kırk dakika süren ve sulara gömülmesiyle son bulan, hazin olayların başlamasına neden olacak buz dağına çarpacaktır.James Cameron un, seyirciye bir zaman makinesiyle yolculuk ettiği hissini uyandırırcasına gerçeğe yakın filmi Titanic tam 14 dalda Oscar adayı olarak En İyi Film dahil 11 ödülü kazanmıştı.' ,
      'Tekerlekli sandalyeye bağlı olarak yaşamını sürdürmek zorunda olan yarı felçli genç adam, bakıcı olarak küçük bir kasabada yetişmiş genç kadını istihdam ettir. Bu genç adam ve kadının bir araya gelişi hayatlarını yeni bir yola sürükleyecektir. İlk başta birbirlerinden hoşlanmayan ikili farklılıklarının fazlalığından yakınsa da zamanla hayatla ilgili bilmedikleri şeyleri birbirlerine öğretmeye başlarlar. Birbirlerine aşık olan karakterleri şimdi daha da zorlu bir sınav beklemektedir...Jojo Moyes in 2012 yılında yazdığı romandan uyarlanan aynı adlı filmin yönetmen koltuğunda İngiliz yönetme Thea Sharrock oturuyor. Kamera arkasında, yaratıcı ekibin içerisinde Oscar adayı görüntü yönetmeni Remi Adefarasin, yapım tasarımcısı Andrew McAlpine, editör John Wilson ve kostüm tasarımcısı Jill Taylor iş başında. Filmin oyuncu kadrosunda Emilia Clarke, Sam Claflin, Jenna Coleman gibi isimler yer alıyor.'],
      
      icerik : ['https://www.youtube.com/embed/aQnlngjZG48',
      'https://www.youtube.com/embed/BulFcN7DLAc',
      'https://www.youtube.com/embed/4F6T52u1cgo']
    },
    {
      id:"2",
      film : ['Umudunu Kaybetme','Amélie','Saksı Olmanın Faydaları'],
      
      puan : ['8,0','8,4','8,0'],
      
      metin : ['İyi bir baba olan Chris Gardner, işinde sorunlar yaşayan, maddi açıdan sarsıntıda olan ve aynı zamanda iyi bir eş olan bir adamdır. Ancak ne yazık ki eşi sıkıntılara daha fazla katlanamayacağına karar vererek onu terk eder. Christopher adındaki oğulları da babasının yanında kalır. Karısının terk edişi de yetmezmiş gibi bir de ev sahibi dışarı atar baba –oğulu. Sokaklarda kalıp, tuvaletlerde, düşkünler evinde çalışarak ayakta durmaya çalışır. Oğlunun sevgisi bu mücadeleci baba için her şeydir. Ve sevgiye eklenen bir var olma savaşı hiç şüphesiz, vakti geldiğinde en mükemmel kapıları açacaktır.',
      'Anne ve babasını kaybetmiş olan Amelie, kendini başkalarının hayatlarını tamir etmeye, onları mutlu kılmaya adamıştır; bu adanmışlığı fark ettirmeden, bu durumdan bihaber olan insanların hayatlarını kolaylaştırmaya yönelik yapmaktadır. Peki başkalarının mutluluğu için çabalayan Amelie, yalnızlığının farkına vardığı an kendi mutluluğu için de çabalamaya başlayacak mıdır?',
      'Duygusal ve utangaç olan Charlie, bir yandan değişen çevresini gözlemlerken bir yandan da en iyi arkadaşı Michael ın yakın zamandaki intiharıyla uğraşmaktadır. İngilizce öğretmeni Bill, ona okuması için fazladan kitaplar vererek hayata katılmayı öğretmeye çalışır ve Bill in çabaları Charlie nin deneyimleriyle açığa çıkacaktır.'],

      icerik : ['https://www.youtube.com/embed/DMOBlEcRuw8',
      'https://www.youtube.com/embed/LyzDuc46cDQ',
      'https://www.youtube.com/embed/jcMuPMmAj9g']
    },
    {
      id:"3",
      film : ['Ben, Robot','Babam ve Oğlum ','İncir Reçeli'],
      
      puan : ['7,1','8,4','6,5'],
      
      metin : ['Üç Robot Yasası: Kural 1 - Bir robot asla bir insana zarar vermez ya da bir insanın zarar görmesine izin vermez. Kural 2 - Bir robot insanlara mutlaka ve her koşulda itaat etmelidir. Kural 3 - Bir robot birinci ve ikinci kurala karşı gelmemek kaydı ile varlığını muhafaza etmekten sorumludur. 2035 yılına gelindiğinde robotlar artık gündelik yaşamın ayrılmaz bir parçası haline gelmişlerdir. İnsanların robotlara olan güveni tamdır. Bir kişi hariç. Hafif paranoyak bir dedektif olan Del Spooner işlenen bir suçun robotlar tarafından yapıldığını düşünmektedir.',
      'Sadık memleketinden üniversite eğitimi için ayrılmıştır. Babası ise onun ziraat mühendisliği okuyup çiftliklerinin idaresini almasını istemektedir. Sadıkın politikayla aktif olarak ilgilendiğini öğrenen babası Hüseyin oğlunu evlatlıktan reddeder. Sadık yıllar sonra ölümcül hastalığından ötürü oğlu Denizi bırakmak için baba evine geri döner.',
      'Metin 30’lu yaşlarında hayatını TV’lere skeç yazarak kazanan bir adamdır. Yazdığı senaryoları reddedilen bir gün gittiği barda, hayatını tümüyle değiştiren Duygu’yla tanışır. Duygu ve Metin bir masala başlarlar ama sonu başından belli bir masaldır bu.'],
      
      icerik : ['https://www.youtube.com/embed/rL6RRIOZyCM',
      'https://www.youtube.com/embed/bCusFTBs_0o',
      'https://www.youtube.com/embed/uUSrHisXjVw']
    },
    {
      id:"4",
      film : ['Deadpool','G.O.R.A.','3 Aptal'],
      
      puan : ['8,0','8,0','8,4'],
      
      metin : ['Eski bir özel kuvvetler görevlisi olan Wade Wilson ordudan ayrıldıktan sonra kendi çöplüğünde, kendi kurallarına göre takılan, kötünün iyisi bir adamdır. Hayatına yeni giren Vanessa ile harika bir uyumu varken bir şeylerin tam da yolunda gittiğni düşünürken, kanser olduğu gerçeğiyle yüz yüze kalır. Sevdiği kadını bu acılı süreci izlemekten kurtarmak için onu terk eden Wade, kendisine tedavi umudu sunan bir bilimsel projeye katılır. Fakat bu proje sadece bir yan etki olarak kansere tedavi olacaktır. Asıl amaç birtakım DNA ları tetiklemektir. Akla gelmeyecek acılara göğüs geren Wade, her şey sona erdiğinde üstün yetenkelere sahip olur. Fakat tüm bu özellikleriyle tek bir amacı vardır, Ajax "Francis"ten intikam almak! Hayatından kimi kesitleri de bizlerle paylaşan kahramanın intikam öyküsünde Profesör X in ekibinden erdemli Colossus ve ergenlik çağındaki Negasonic Teenage Warhead de ona eşlik ediyor. Anti-kahraman Deadpool karakteri kendi filminde, X Men Origins: Wolverine de karşımıza çıkan Deadpool dan daha farklı bir yapıya sahip. Marvel Stüdyoları nın hayata geçirdiği projede yönetmenliği Tim Miller üstlenirken, senaryo Rhett Reese ve Paul Wernick ikilisine ait. Filmde Wade Wilson / Deadpool karakterini canlandıran isimse Ryan Reynolds. Kadroda kendisine Morena Baccarin, Gina Carano, Ed Skrein, Brianna Hildebrand ve T.J. Miller da bulunuyor.',
      'Kurnaz ve genç bir adam olan Arif, bir kasabada halı satarak yaşamını sürdürmektedir. Genelde yaşadığı bölgedeki insanlar, kendisini hafif üç kağıtçı bir tip olarak bilirler. Bir gün Arif’in dükkanına gelen yabancı müşteriler, ona hayal bile edemeyeceği bir deneyim yaşatır. Gelenler aslen uzaylılardır ve bu uzaylılar tarafından kaçırılan Arif, bambaşka bir gezegene götürülür. Arif, karakterine uygun bir biçimde bu gezegenden kaçıp kurtulabilmenin türlü yollarını aramaya başlar. Ancak yaşayacağı maceralar, onun bu gezegende aşk ile burun buruna gelmesine de neden olacaktır. Cem Yılmaz’dan kahkaha dolu dakikalar.',
      '3 Aptal da Rancho Chhanched, Farhan Qureshi ve Raju Rastogi Hindistan ın en önemli bir okulunda mühendislik okuyan ve okulun yurdunda aynı odada kalan üç öğrencidir. Raju ailesini fakirlikten kurtarma gibi bir ideale sahipken Farhan ailesinin isteği doğrultunda bu bölümü seçmiştir. Rancho ise makinelere duyduğu tutku nedeniyle mühendis olmayı istemektedir. Bu üçlü ve profesörleri Viru arasında yaşananlar, dostluk kavramını beyaz perdeye yansıtırken eğitim sistemini de sert ve eğlenceli bir şekilde eleştirir niteliktedir. Son dönemin fazlasıyla dikkat çeken yapıtlarında biri olan film Hindistan ın en çok izlenen filmlerden biri olurken özellikle Amerika da da bir hayli dikkat çekmişti.'],
      
      icerik : ['https://www.youtube.com/embed/Yj-AnODg3GA',
      'https://www.youtube.com/embed/UTUiQ9NWZcM',
      'https://www.youtube.com/embed/FuIhqN54pCc']

    },
    {
      id:"5",
      film : ['Jurassic Park',' Kara Sövalye Yükseliyor','Yenilmezler'],
      
      puan : ['8,1','8,4','8,1'],
      
      metin : ['Jurassic Park ta fosilleşmiş bir sivrisinekten çıkarılan dinozor kanı, bilimadamlarına DNA ile yeniden dinozor yaratma imkanı verir. Dr. Hammond, bu DNA’dan yola çıkarak genetik olarak dinozorlar geliştirir ve bir tür hayvanat bahçesi açar. Çeşit çeşit dinozorların canlı olarak görülebileceği bu özel hayvanat bahçesinin ilk test ziyaretçileri ise bir avukat, bir matematikçi, bir dinozor uzmanı ve bir bitkibilimci ile Hammond’un torunlarıdır. Dinozor embriyolarını ele geçirmek isteyen biri güvenlik sistemini devre dışı bırakınca, bütün dinozorlar adada serbest kalırlar.Michael Crichton’un romanından uyarlanan filmin yönetmeni, sinemanın dahi çocuğu Steven Spielberg. Güçlü özel efektleriyle dikkat toplayan filmin gişede büyük başarı elde etmesi, 2 devam filmi çekilerek bir üçleme olmasını sağlamıştı.',
      'Kara Şövalye Yükseliyor da terörist lider Bane nin yaptığı gizli planları durdurmaya bu sefer ne Bruce Wayne nin ne de Batman in gücü yeter. Kedikadın Selina Kyle ı da kendi safına çeken Bane, Gotham kentini ve halkını ciddi bir tehditle karşı karşıya bırakacaktır. Ne yerel kuvvetler, ne kahraman Jim Gordon ne de ordu olacakların önüne geçemez. Batman ilk kez kendisinden daha güçlü bir rakibe karşı mücadele verecektir...Christopher Nolan yorumlu Batman efsanesinin son filminde, başrol Bruce Wayne/Batman olarak yine Christian Bale i, ezeli düşman Bane olarak Tom Hardy yi, Selina Kyle rolünde Anne Hathaway i ve John Blake olarak da Joseph Gordon-Levitt i seyrediyoruz. Marion Cotillard, Morgan Freeman, Gary Oldman gibi isimler de kadronun ağır topları arasında. Filmin senaryosunu Christopher Nolan ve Jonathan Nolan beraber kaleme alırken, filmin yapım ekibinde üçlemenin ilk iki filminde beraber çalıştığı isimler var. 3D ye her zaman ihtiyatlı yaklaşan yönetmen Nolan ın Başlangıç/Inception da olduğu gibi yine IMAX formatına özel son teknoloji IMAX kameralarla çekilen Kara Şövalye Yükseliyor filminin müzikleri de Oscarlı müzisyen Hans Zimmer a ait...',
      'Yenilmezler, Marvel’in en çok iz bırakan kahramanlarını bünyesinde topluyor: Demir Adam, Hulk, Thor, Kaptan Amerika, Hawkeye ve Black Widow. Beklenmedik bir düşman su yüzüne çıkıp dünyanın güvenliğini tehdit etmeye başlıyor. S.H.I.E.L.D. adıyla bilinen uluslararası barışı koruma teşkilâtının yöneticisi olan Nick Fury, dünyayı böylesi bir felâketten kurtarmak için bir takıma ihtiyacı olduğunu anlıyor. Takıma adam seçmek için dünyanın dört bir yanını gezmeye başlıyor. Başrollerini Robert Downey Jr., Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner ve Tom Hiddleston’un paylaştığı bu ekibe Stelan Skarsgard’la Samuel L. Jackson eşklik ediyor. Joss Whedon’un Zak Penn ile birlikte yazdığı hikayeden senaryolşatırdığı ve yönettiği Yenilmezler, ilki 1963 yılında basılan ve o günden beri Marvel’in en sevilen çizgi roman serilerinden biri olan “The Avengers”tan uyarlandı. Aksiyon ve olağanüstü özel efektlerle dolu, muhteşem bir filme hazır olun.'],
      
      icerik : ['https://www.youtube.com/embed/lc0UehYemQA',
      'https://www.youtube.com/embed/WzU32YlU2WI',
      'https://www.youtube.com/embed/ElIc_kSgEWM']

    },
    {
      id:"6",
      film : ['Canım Kardeşim','Yeşil Yol','Hachiko: Bir Kopegin Hikayesi'],
      
      puan : ['8,6','8,5','8,2'],
      
      metin : ['Küçük Kahraman, ağabeyi ve ağabeyinin sadık arkadaşı Halit,birlikte yoksul ama neşeli bir hayat sürdürmektedir. Devamlı bir işleri olmayan ve günlerini daha çok aylaklıkla geçiren bu ikilinin tek amacı Küçük Kahramanın okuması ve hayatını kurtarmasıdır. Parasızlığa rağmen keyifli bir hayat geçiren bu küçük ailenin mutluluğu öğretmenin Kahraman la ilgili bir gerçeği ortaya çıkarmasıyla son bulur. Yapılan sağlık taramalarının ardından kan kanseri olduğu anlaşılan Kahramanın en büyük isteği ise bir televizyondur. Halit ve ağabey bundan sonra tüm güçlerini bir televizyon alabilmek için harcayacaktır.',
      'Mucizeler hiç beklemediğiniz yerlerde gerçekleşebilir, hatta Cold Mountain Cezaevinin bir hücresinde bile...John Coffey, doğaüstü güçlere sahip bir mahkumdur. Tom Hanks ise bu hapishanede görevlidir. Yeşil Yol, hastalık, ölüm, iyilik ve kötülük üzerine etkileyici bir öyküyle King in güçlü kalemini ve Tom Hanks ın oyunculuğunu birleştiren, duygu yüklü bir film. Yönetmen Darabont, romana sadık kalarak öykünün büyülü duygusallığını beyaz perdeye taşıyor. Bu film, dört dalda Oscar ödüllerine aday gösterilmişti.',
      'Profesör Parker Wilson (Richard Gere) tren istasyonunda terk edilmiş bir köpek bulur. Köpeğin bir sahibi yoktur. Profesör, Hachiko adlı bu şirin köpeği koruması altına alır ve evine götürür. Zaman içinde ikili arasında benzersiz bir dostluk kurulur.'],
      
      icerik : ['https://www.youtube.com/embed/m63GeE2HYXI',
      'https://www.youtube.com/embed/ZqB1lVb-aYk',
      'https://www.youtube.com/embed/l-gbOMYnQjU']

    }
    ]
  }
} 


 onClickLa(gid){

    if(giris==3){
      giris=0;
    }
  {
  this.state.modlar.map((item,index) =>(
  Iid[item.id-1] = item.id,
  Ifilm[item.id-1] = item.film,
  Ipuan[item.id-1] = item.puan,
  Imetin[item.id-1] = item.metin,
  Iicerik[item.id-1] = item.icerik
  ))
  }
  for(var i=0;i<6;i++){
  if(Iid[i] == gid)
  {
    console.log(Iid[i])
    films = Ifilm[i]
    puans = Ipuan[i]
    metins = Imetin[i]
    iceriks = Iicerik[i]
  }
 }

    console.log(films)
    console.log(puans)
    console.log(metins)
    console.log(iceriks)

    ReactDOM.render(
      <div className="App">
      <div className="connta">
      <div className = "gösterim">
          <img className = "ikinciSayfa" src={imagea} width="1400px" height="1700px" alt=""></img>
          <iframe className = "icerik" width="560" height="315" src={iceriks[giris]} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p className="filmİsim">{films[giris]}</p>
          <p className="filmPuani">Puan : {puans[giris]}</p>
          <p className="filmBilgi"><b>Açıklama : </b>{metins[giris]}</p>
        <div className = "butonlar">
         
          <input  className="buton" type="button" onClick={this.onClickLa.bind(this)} value={"GEÇ"}></input>
          <a href="./User.js"><input className="buton2" type="button" value={"MODLAR"}></input></a>
        </div>
        <img className="zemin"  src={image6 } width="100%" height="100%" alt=""></img>
  
      </div>
      </div>
      </div>
      , document.getElementById('root'));
    giris++;
}



  render() {
    return (
    
    <Router>
       <div className="Container">
          <div className="baslik">
            <img className="logo" src={logoImage} width="700px" height="90px" alt=""></img>
          </div>
          <p className="slogan">FİLM BULMAK ZOR MU GELİYOR? SİZİN İÇİN BİZ BULALIM :)</p>
          <p className="yazi">MODUNU SEÇ!</p>
           <div className="row">
           
              <div id="1" className="col-md-2 col-xs-4">
                <img onClick={this.onClickLa.bind(this,1)} src={image} width="120px" height="120px" alt=""></img>
              </div>
               <div id="2" className="col-md-2 col-xs-4">
               <img   onClick={this.onClickLa.bind(this,2)} src={image1} width="120px" height="120px" alt=""></img>
             </div>
             <div id="3" className="col-md-2 col-xs-4">
               <img   onClick={this.onClickLa.bind(this,3)} src={image2 } width="120px" height="120px" alt=""></img>
             </div>
        
             <div id="4" className="col-md-2 col-xs-4">
                 <img  onClick={this.onClickLa.bind(this,4)} src={image3 } width="120px" height="120px" alt=""></img>
             </div>
             <div id="5" className="col-md-2 col-xs-4">
                 <img  onClick={this.onClickLa.bind(this,5)} src={image4 } width="120px" height="120px" alt=""></img>
             </div>
             <div id="6" className="col-md-2 col-xs-4">
                 <img  onClick={this.onClickLa.bind(this,6)} src={image5 } width="120px" height="120px" alt=""></img> 
             </div>
              
             
              </div>  
          
       </div>
       <img className="zemin"  src={image6 } width="100%" height="100%" alt=""></img>
      
      <Route /> 
    </Router>

    )
  }
}
