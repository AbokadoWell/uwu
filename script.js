function dark (){ //Botão cor tema
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='dark.css'/><button onclick='light()'>Light</button>")
}
function light (){
    document.getElementById('cor').innerHTML = ("<link rel='stylesheet' type='text/css' href='light.css'/><button onclick='dark()'>Dark</button>")
}
function fechar() { //Clicar de novo para fechar
    document.getElementById('1').innerHTML = ("<button onclick='botaoPorLetra()'>Por Letra</button>")
    document.getElementById('2').innerHTML = ("<button onclick='botaoTodos()' id='todos'>Todos</button>")
    document.getElementById('3').innerHTML = ("<button onclick='botaoAnimes()' id='animes'>Animes</button>")
    document.getElementById('4').innerHTML = ("<button onclick='botaoFilmes()' id='filmes'>Filmes</button>")
    
    document.getElementById('botoes').innerHTML = ("")
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('todosanimes').innerHTML = ("")
    document.getElementById('osanimes').innerHTML = ("")
    document.getElementById('movies').innerHTML = ("")
}

var a, a1, b, b1, c, c1, d, d1, e, e1, f, f1, g, g1, h, h1, i, i1, j, j1, k, k1, l, l1, m, m1, n, n1, o, o1, p, p1, q, q1, r, r1, s, s1, t, t1, u, u1, v, v1, w, w1, x, x1, y, y1, z, z1, total, animes1, animes, filmes1, filmes //Variáveis (letras e quant. de animes por letra; total de animes; animes e quant.; filmes e quant.)
function botaoPorLetra(){ //Botão por letra
    document.getElementById('1').innerHTML = ("<button onclick='fechar()'>Por Letra</button>") //Clicar de novo para fechar
    document.getElementById('botoes').innerHTML = ("") //Desativar o que não está selecionado
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('todosanimes').innerHTML = ("")
    document.getElementById('todos').innerHTML = ("Todos")
    document.getElementById('osanimes').innerHTML = ("")
    document.getElementById('animes').innerHTML = ("Animes")
    document.getElementById('movies').innerHTML = ("")
    document.getElementById('filmes').innerHTML = ("Filmes")
    document.getElementById('2').innerHTML = ("<button onclick='botaoTodos()' id='todos'>Todos</button>")
    document.getElementById('3').innerHTML = ("<button onclick='botaoAnimes()' id='animes'>Animes</button>")
    document.getElementById('4').innerHTML = ("<button onclick='botaoFilmes()' id='filmes'>Filmes</button>")

    document.getElementById('botoes').innerHTML = ("<button onclick='letraa()' id='na'></button><button onclick='letrab()' id='nb'></button><button onclick='letrac()' id='nc'></button><button onclick='letrad()' id='nd'></button><button onclick='letrae()' id='ne'></button><button onclick='letraf()' id='nf'></button><button onclick='letrag()' id='ng'></button><button onclick='letrah()' id='nh'></button><button onclick='letrai()' id='ni'></button><button onclick='letraj()' id='nj'></button><button onclick='letrak()' id='nk'></button><button onclick='letral()' id='nl' class='noexist'></button><button onclick='letram()' id='nm'></button><button onclick='letran()' id='nn'></button><button onclick='letrao()' id='no'></button><button onclick='letrap()' id='np'></button><button onclick='letraq()' id='nq' class='noexist'></button><button onclick='letrar()' id='nr' class='noexist'></button><button onclick='letras()' id='ns'></button><button onclick='letrat()' id='nt'></button><button onclick='letrau()' id='nu' class='noexist'></button><button onclick='letrav()' id='nv'></button><button onclick='letraw()' id='nw'></button><button onclick='letrax()' id='nx' class='noexist'></button><button onclick='letray()' id='ny'></button><button onclick='letraz()' id='nz'></button>"); //Quando o botão "por letra" é selecionado, aparece botões, um com cada letra
    document.getElementById('letra').innerHTML = ("")
        document.getElementById('na').innerHTML = (`A (${a1})`) //Nomear os botões com suas respectivas letras com suas quant.
        document.getElementById('nb').innerHTML = (`B (${b1})`)
        document.getElementById('nc').innerHTML = (`C (${c1})`)
        document.getElementById('nd').innerHTML = (`D (${d1})`)
        document.getElementById('ne').innerHTML = (`E (${e1})`)
        document.getElementById('nf').innerHTML = (`F (${f1})`)
        document.getElementById('ng').innerHTML = (`G (${g1})`)
        document.getElementById('nh').innerHTML = (`H (${h1})`)
        document.getElementById('ni').innerHTML = (`I (${i1})`)
        document.getElementById('nj').innerHTML = (`J (${j1})`)
        document.getElementById('nk').innerHTML = (`K (${k1})`)
        document.getElementById('nl').innerHTML = (`L (${l1})`)
        document.getElementById('nm').innerHTML = (`M (${m1})`)
        document.getElementById('nn').innerHTML = (`N (${n1})`)
        document.getElementById('no').innerHTML = (`O (${o1})`)
        document.getElementById('np').innerHTML = (`P (${p1})`)
        document.getElementById('nq').innerHTML = (`Q (${q1})`)
        document.getElementById('nr').innerHTML = (`R (${r1})`)
        document.getElementById('ns').innerHTML = (`S (${s1})`)
        document.getElementById('nt').innerHTML = (`T (${t1})`)
        document.getElementById('nu').innerHTML = (`U (${u1})`)
        document.getElementById('nv').innerHTML = (`V (${v1})`)
        document.getElementById('nw').innerHTML = (`W (${w1})`)
        document.getElementById('nx').innerHTML = (`X (${x1})`)
        document.getElementById('ny').innerHTML = (`Y (${y1})`)
        document.getElementById('nz').innerHTML = (`Z (${z1})`)
}
function letraa(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${a}`);
}
function letrab(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${b}`);
}
function letrac(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${c}`);
}
function letrad(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${d}`);
}
function letrae(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${e}`);
}
function letraf(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${f}`);
}
function letrag(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${g}`);
}
function letrah(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${h}`);
}
function letrai(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${i}`);
}
function letraj(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${j}`);
}
function letrak(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${k}`);
}
function letral(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${l}`);
}
function letram(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${m}`);
}
function letran(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${n}`);
}
function letrao(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${o}`);
}
function letrap(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${p}`);
}
function letraq(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${q}`);
}
function letrar(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${r}`);
}
function letras(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${s}`);
}
function letrat(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${t}`);
}
function letrau(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${u}`);
}
function letrav(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${v}`);
}
function letraw(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${w}`);
}
function letrax(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${x}`);
}
function letray(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${y}`);
}
function letraz(){ //Botão que quando clicado exibe os animes com sua respectiva letra
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('letra').innerHTML = (`${z}`);
}

function botaoTodos(){ //Botão todos
    document.getElementById('2').innerHTML = ("<button onclick='fechar()' id='todos'>Todos</button>") //Clicar de novo para fechar
    document.getElementById('botoes').innerHTML = ("") //Desativar o que não está selecionado
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('todosanimes').innerHTML = ("")
    document.getElementById('todos').innerHTML = ("Todos")
    document.getElementById('osanimes').innerHTML = ("")
    document.getElementById('animes').innerHTML = ("Animes")
    document.getElementById('movies').innerHTML = ("")
    document.getElementById('filmes').innerHTML = ("Filmes")
    document.getElementById('1').innerHTML = ("<button onclick='botaoPorLetra()'>Por Letra</button>")
    document.getElementById('3').innerHTML = ("<button onclick='botaoAnimes()' id='animes'>Animes</button>")
    document.getElementById('4').innerHTML = ("<button onclick='botaoFilmes()' id='filmes'>Filmes</button>")

    document.getElementById('todos').innerHTML = (`Todos (${total1})`) //Quando clicado, exibe sua quant.
    document.getElementById('todosanimes').innerHTML = (`${total}`); //e todos os animes
}

function botaoAnimes(){ //Botão animes
    document.getElementById('3').innerHTML = ("<button onclick='fechar()' id='animes'>Todos</button>") //Clicar de novo para fechar
    document.getElementById('botoes').innerHTML = ("") //Desativar o que não está selecionado
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('todosanimes').innerHTML = ("")
    document.getElementById('todos').innerHTML = ("Todos")
    document.getElementById('osanimes').innerHTML = ("")
    document.getElementById('animes').innerHTML = ("Animes")
    document.getElementById('movies').innerHTML = ("")
    document.getElementById('filmes').innerHTML = ("Filmes")
    document.getElementById('1').innerHTML = ("<button onclick='botaoPorLetra()'>Por Letra</button>")
    document.getElementById('2').innerHTML = ("<button onclick='botaoTodos()' id='todos'>Todos</button>")
    document.getElementById('4').innerHTML = ("<button onclick='botaoFilmes()' id='filmes'>Filmes</button>")

    document.getElementById('animes').innerHTML = (`Animes (${animes1})`) //Quando clicado, exibe sua quant.
    document.getElementById('osanimes').innerHTML = (`${animes}`); //e os animes
}

function botaoFilmes(){ //Botão animes
    document.getElementById('4').innerHTML = ("<button onclick='fechar()' id='filmes'>Filmes</button>")  //Clicar de novo para fechar
    document.getElementById('botoes').innerHTML = ("") //Desativar o que não está selecionado
    document.getElementById('letra').innerHTML = ("")
    document.getElementById('todosanimes').innerHTML = ("")
    document.getElementById('todos').innerHTML = ("Todos")
    document.getElementById('osanimes').innerHTML = ("")
    document.getElementById('animes').innerHTML = ("Animes")
    document.getElementById('movies').innerHTML = ("")
    document.getElementById('filmes').innerHTML = ("Filmes")
    document.getElementById('1').innerHTML = ("<button onclick='botaoPorLetra()'>Por Letra</button>")
    document.getElementById('2').innerHTML = ("<button onclick='botaoTodos()' id='todos'>Todos</button>")
    document.getElementById('3').innerHTML = ("<button onclick='botaoAnimes()' id='animes'>Animes</button>")

    document.getElementById('filmes').innerHTML = (`Filmes (${filmes1})`) //Quando clicado, exibe sua quant.
    document.getElementById('movies').innerHTML = (`${filmes}`); //e os filmes
}

window.onload = function(){
    /* *letra* = [*anime1*, *anime2*, . . . *animeN*] (Pondo os animes em sua letra inicial) ("<ul><li></li></ul>" Pondo em formato de lista)
    *letra*1 = *letra*.length (Quant. de cada anime com essa letra)*/
    a = ['<ul><li>afro samurai', '</li><li>aho girl','</li><li>aiura',  '</li><li>akagami no shirayuki-hime', '</li><li>akame ga kill', '</li><li>akashic records', '</li><li>akkun to kanojo', '</li><li>alice to zouroku', '</li><li>angel beats!', '</li><li>anohana', '</li><li>another', '</li><li>ao haru ride', '</li><li>arakawa under the bridge', '</li><li>asobi asobase</li></ul>']; a1 = a.length;
    b = ['<ul><li>baccano!', '</li><li>bakemono no ko', '</li><li>banana fish', '</li><li>barakamon', '</li><li>beastars', '</li><li>black★rock shooter', '</li><li>blend-s', '</li><li>blood c', '</li><li>bloom into you', '</li><li>boku dake ga inai machi (erased)', '</li><li>boku wa tomodachi ga sukunai', '</li><li>bokuben', '</li><li>brotherhood: final fantasy xv', '</li><li>bunny girl', '</li><li>byousoku 5 senchimetoru</li></ul>']; b1 = b.length;
    c = ['<ul><li>charlotte', '</li><li>classroom of the elite', '</li><li>corpse party: tortured souls</li></ul>']; c1 = c.length
    d = ['<ul><li>d-frag!', '</li><li>danshi koukousei no nichijou', '</li><li>deadman wonderland', '</li><li>death note', '</li><li>death parade', '</li><li>devilman crybaby', '</li><li>diabolik lovers', '</li><li>dorohedoro</li></ul>']; d1 = d.length;
    e = ['<ul><li>elfen lied</li></ul>']; e1 = e.length;
    f = ['<ul><li>fireworks', '</li><li>flying witch', '</li><li>fukumenkei noise</li></ul>']; f1 = f.length;
    g = ['<ul><li>gakuen babysitters', '</li><li>gekkan shoujo nozaki-kun', '</li><li>given', '</li><li>golden boy', '</li><li>gun frontier</li></ul>']; g1 = g.length;
    h = ['<ul><li>hajimete no gal', '</li><li>hanayamata','</li><li>handa-kun', '</li><li>highschool of the dead', '</li><li>hauru no ugoku shiro', '</li><li>her blue sky', '</li><li>hinamatsuri', '</li><li>hitori bocchi no marumaru seikatsu', '</li><li>horimiya', '</li><li>hoshi wo ou kodomo', '</li><li>hotaru no haka', '</li><li>hotarubi no mori e', '</li><li>houkago teibou nisshi', '</li><li>hourou musuko', '</li><li>how to keep a mummy</li></ul>']; h1 = h.length;
    i = ['<ul><li>ijiranaide nagatoro-san', '</li><li>imouto sae ireba ii', '</li><li>inuyashiki', '</li><li>ito junji: collection</li></ul>']; i1 = i.length;
    j = ['<ul><li>jibaku shounen hanako-kun', '</li><li>jujutsu kaisen', '</li><li>just because</li></ul>']; j1 = j.length;
    k = ['<ul><li>kageki shoujo!!', '</li><li>kaguya sama', '</li><li>kakegurui', '</li><li>kanojo to kanojo no neko: everything flows', '</li><li>keppeki danshi! aoyama-kun', '</li><li>kill me baby', '</li><li>kime no suizou wo tabetai', '</li><li>kimetsu no yaiba', '</li><li>kimi no na wa', '</li><li>kimi to, nami ni noretara', '</li><li>kiseijuu (parasyte)', '</li><li>kiss him, not me', '</li><li>koe no katachi', '</li><li>koi to uso', '</li><li>kokoro connect', '</li><li>kokoro ga sakebitagatterunda', "</li><li>komi-san can't communicate", '</li><li>konosuba', '</li><li>kyoukai no kanata</li></ul>']; k1 = k.length;
    l = ['<ul><li>little witch academia', '</li><li>lovely★complex</li></ul>']; l1 = l.length;
    m = ['<ul><li>mahou shoujo site', '</li><li>maquia: when the promised flower blooms', '</li><li>masamune-kun no revenge', '</li><li>mononoke hime', '</li><li>my dress up darling', '</li><li>my roommate is a cat</li></ul>']; m1 = m.length;
    n = ['<ul><li>nakitai watashi wa neko wo kaburu', '</li><li>nanatsu no taizai', '</li><li>naruto classic', '</li><li>nichijou', '</li><li>no.6', '</li><li>noblesse</li></ul>']; n1 = n.length;
    o = ['<ul><li>odd taxi', '</li><li>one punch man', '</li><li>ookami kodomo no ame to yuki', '</li><li>orange', '</li><li>ore monogatari!!', '</li><li>oregairu', '</li><li>osake wa fuufu ni natte kara', '</li><li>oshiete! galko-chan</li></ul>']; o1 = o.length;
    p = ['<ul><li>perfect blue', '</li><li>plastic memories', '</li><li>platinum end', '</li><li>poputepipikku', '</li><li>prison school</li></ul>']; p1 = p.length;
    q = ['<ul><li>. . .</li></ul>']; q1 = 0;
    r = ['<ul><li>. . .</li></ul>']; r1 = 0;
    s = ['<ul><li>sakamoto desu ga?', '</li><li>sen to chihiro no kamikakushi', '</li><li>serial experiments lain', '</li><li>shigatsu wa kimi no uso', '</li><li>shimoneta', '</li><li>sk8', '</li><li>suki-tte li na yo', '</li><li>sword art online</li></ul>']; s1 = s.length;
    t = ['<ul><li>takt op. destiny', '</li><li>tamako market', '</li><li>tari tari', '</li><li>tejina-senpai', '</li><li>to be hero', '</li><li>toki wo kakeru shoujo', '</li><li>tokyo magnitude 8.0', '</li><li>tonari no kaibutsu-kun', '</li><li>tonari no seki-kun', '</li><li>tonari no totoro', '</li><li>tonikaku kawaii', '</li><li>toradora!', '</li><li>tsurezure children</li></ul>']; t1 = t.length;
    u = ['<ul><li>. . .</li></ul>']; u1 = 0;
    v = ['<ul><li>vinland saga', '</li><li>violet evergarden</li></ul>']; v1 = v.length;
    w = ['<ul><li>weathering with you', '</li><li>wonder egg priority', '</li><li>wotakoi</li></ul>']; w1 = w.length;
    x = ['<ul><li>. . .</li></ul>']; x1 = 0;
    y = ['<ul><li>yakusoku no neverland', '</li><li>yuri on ice</li></ul>']; y1 = y.length;
    z = ['<ul><li>zankyou no terror</li></ul>']; z1 = z.length; 

    total1 = (a1+b1+c1+d1+e1+f1+g1+h1+i1+j1+k1+l1+m1+n1+o1+p1+q1+r1+s1+t1+u1+v1+w1+x1+y1+z1) //Soma da quant. de todas as letras
    total = (a+b+c+d+e+f+g+h+i+j+k+l+m+n+o+p+s+t+v+w+y+z) //Junção dos nomes de todos os animes
    animes = ['<ul><li>afro samurai', '</li><li>aho girl', '</li><li>aiura','</li><li>akagami no shirayuki-hime',  '</li><li>akame ga kill', '</li><li>akashic records', '</li><li>akkun to kanojo', '</li><li>alice to zouroku', '</li><li>angel beats!', '</li><li>anohana', '</li><li>another', '</li><li>ao haru ride', '</li><li>arakawa under the bridge', '</li><li>asobi asobase', '</li><li>baccano!', '</li><li>banana fish', '</li><li>barakamon', '</li><li>beastars s1', '</li><li>black★rock shooter', '</li><li>blend-s', '</li><li>blood c', '</li><li>bloom into you', '</li><li>boku dake ga inai machi (erased)', '</li><li>boku wa tomodachi ga sukunai', '</li><li>bokuben', '</li><li>brotherhood: final fantasy xv', '</li><li>bunny girl', '</li><li>charlotte', '</li><li>classroom of the elite', '</li><li>corpse party: tortured souls', '</li><li>d-frag!', '</li><li>danshi koukousei no nichijou', '</li><li>deadman wonderland', '</li><li>death note', '</li><li>death parade', '</li><li>devilman crybaby', '</li><li>diabolik lovers', '</li><li>dorohedoro', '</li><li>elfen lied', '</li><li>flying witch', '</li><li>fukumenkei noise', '</li><li>gakuen babysitters', '</li><li>gekkan shoujo nozaki-kun', '</li><li>given', '</li><li>golden boy', '</li><li>gun frontier', '</li><li>hajimete no gal','</li><li>hanayamata', '</li><li>handa-kun', '</li><li>highschool of the dead', '</li><li>hinamatsuri', '</li><li>hitori bocchi no marumaru seikatsu', '</li><li>horimiya', '</li><li>houkago teibou nisshi', '</li><li>hourou musuko', '</li><li>how to keep a mummy', '</li><li>ijiranaide nagatoro-san', '</li><li>imouto sae ireba ii', '</li><li>inuyashiki', '</li><li>ito junji: collection', '</li><li>jibaku shounen hanako-kun', '</li><li>jujutsu kaisen', '</li><li>just because', '</li><li>kageki shoujo!!', '</li><li>kaguya sama', '</li><li>kakegurui', '</li><li>keppeki danshi! aoyama-kun', '</li><li>kill me baby', '</li><li>kimetsu no yaiba', '</li><li>kiseijuu (parasyte)', '</li><li>kiss him, not me', '</li><li>koi to uso', '</li><li>kokoro connect', "</li><li>komi-san can't communicate", '</li><li>konosuba', '</li><li>kyoukai no kanata', '</li><li>little witch academia', '</li><li>lovely★complex', '</li><li>mahou shoujo site', '</li><li>masamune-kun no revenge', '</li><li>my dress up darling', '</li><li>my roommate is a cat', '</li><li>nanatsu no taizai', '</li><li>naruto classic', '</li><li>nichijou', '</li><li>no.6', '</li><li>noblesse', '</li><li>odd taxi', '</li><li>one punch man', '</li><li>ore monogatari!!', '</li><li>orange', '</li><li>oregairu', '</li><li>osake wa fuufu ni natte kara', '</li><li>oshiete! galko-chan', '</li><li>plastic memories', '</li><li>platinum end', '</li><li>poputepipikku', '</li><li>prison school', '</li><li>sakamoto desu ga?', '</li><li>serial experiments lain', '</li><li>shigatsu wa kimi no uso', '</li><li>shimoneta', '</li><li>sk8', '</li><li>suki-tte li na yo', '</li><li>sword art online', '</li><li>takt op. destiny', '</li><li>tamako market', '</li><li>tari tari', '</li><li>tejina-senpai', '</li><li>to be hero', '</li><li>tokyo magnitude 8.0', '</li><li>tonari no kaibutsu-kun', '</li><li>tonari no seki-kun', '</li><li>tonikaku kawaii', '</li><li>toradora!', '</li><li>tsurezure children', '</li><li>vinland saga', '</li><li>violet evergarden', '</li><li>wonder egg priority', '</li><li>wotakoi', '</li><li>yakusoku no neverland', '</li><li>yuri on ice', '</li><li>zankyou no terror</li></ul>'];
    //Os animes
    animes1 = animes.length //Quant. de animes
    filmes = ['<ul><li>bakemono no ko', '</li><li>byousoku 5 senchimetoru', '</li><li>fireworks', '</li><li>hauru no ugoku shiro', '</li><li>her blue sky', '</li><li>hoshi wo ou kodomo', '</li><li>hotaru no haka', '</li><li>hotarubi no mori e', '</li><li>kanojo to kanojo no neko: everything flows', '</li><li>kime no suizou wo tabetai', '</li><li>kimi no na wa', '</li><li>kimi to, nami ni noretara', '</li><li>koe no katachi', '</li><li>kokoro ga sakebitagatterunda', '</li><li>maquia: when the promised flower blooms', '</li><li>mononoke hime', '</li><li>nakitai watashi wa neko wo kaburu', '</li><li>ookami kodomo no ame to yuki', '</li><li>perfect blue', '</li><li>sen to chihiro no kamikakushi', '</li><li>toki wo kakeru shoujo', '</li><li>tonari no totoro', '</li><li>weathering with you</li></ul>']; filmes1 = filmes.length //Os filmes e sua quant.
}
