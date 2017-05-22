# React.Demo

**React ve Virtual DOM Mimarisi**

React, Facebook tarafindan gelistirilen kullanıcı arabirimlerini oluşturmayı kolaylaştıran bir JavaScript library’sidir.
React direk DOM uzerinde degisiklik yapmak yerine Virtual DOM uzerinde değişiklikleri yapıyor.DOM ile ugraşmak, DOM’a surekli yeni element’ler ekleyip cikarmak oldukca masraflı bir iş. Bu yuzden React bu tur islerin tamamini gercek DOM uzerinde degilde gercek DOM’un bir yansimasi olan sanal bir DOM uzerinde yapiyor.

React bir View library’sidir. Yani MVC’deki V’yi olusturur. React’i istediginiz Model ve Controller ile kullanabilirsiniz .React’in mimarisi React Component’leri uzerine kurulu ve bu component’ler Virtual DOM’unuzu olusturuyor. Virtual DOM uzerinde yapacaginiz butun islemleri bu component’ler sayesinde yapiyorsunuz. Fakat bazi durumlarda gercek DOM’a da dokunmaniz gerekebilir. Ne zaman ve nasil olmasi gerektigi[ şu yazida](https://facebook.github.io/react/docs/refs-and-the-dom.html) anlatiliyor.

React.Demo Projesi: Startup proje. Eğitim amaçlı başlatılan bir projedir.