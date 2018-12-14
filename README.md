# HtmlStarter
# How to get started
1. Open a command line in the folder where you want to place the new project
2. Run the following syntax  <pre><code>git clone https://github.com/AzimutDotNet/HtmlStarter.git </pre></code>
3. Step into the newly created folder <pre><code> cd HtmlStarter </pre></code>
4. Run the following command <pre><code> git checkout -b users/your_name/initial or any name </pre></code>
5. Open Visual Studio Code with the command <pre><code>code . </pre></code> and you are good to go.
6. Next use Visual studio to commit and push

<strong>Below we have the emmet syntax to generate a html page that we will use in our next lesson.</strong>

<p><b>Step 1: <b></p>
<pre><code>
html>head>meta[charset=utf-8]+link+title{Azimut-Travel diaries}^body>div[id=main_wrapper]>div[id=header]>div[id=main_title]>img[src][alt="Logo de Azimut"][id=logo]>h1{Azimut}^h2{Travel Diaries}^nav>ul>li*4>a^^^^div[banner_image]>div[id=banner_description]{Reflections on my holiday througth the HTML world...}>a.red_button{See article}>img^^^section>article>h1>img{I'm a great traveller}^p>lorem^^aside>h1{About the author}+img[id=arrow]+p[zozor_picture]>img^p{Let me introduce myself}+p{A bit messy}+p>img>img>img^^^^^footer>div[id=tweet]>h1{My last tweet}+p{Hee-haw!}+p{13/12/2018 17:03}^div[id=my_pictures]>h1{My pictures}+p>img+img+img+img^^div[id=myfriends]>h1{My friends}+ul>li*4>a{Update 1}^^ul>li*4>a{second update}
</pre></code>
  
  <p> <b>Step 2: <b></p>
  Replace <pre><code>div id="header"</pre></code> with <pre><code>header</pre></code> and update the <pre><code>header</pre></code> closing tag as well.