import { useEffect } from "react";
import React from "react";
import "./Home.css";


export function Home({
    user, setUser, messages, setMessages, inputText, setInputText, menuAbierto, setMenuAbierto,
    menuVisible, setMenuVisible, cajaSeleccionada, setCajaSeleccionada, mostrarCajaNueva, 
    setMostrarCajaNueva, imagenesMostradas, setImagenesMostradas}) {

    const handleLogout = () => {
        setUser({});
             // Redireccionar al usuario al inicio de sesión
             window.location.href = './componentes/Formulario.jsx';
    };

    const handleUserInput = (e) => {
        setInputText(e.target.value);
      };
    
    const handleSendMessage = () => {
        if (inputText.trim() === '') return;
    
        const newMessage = { text: inputText, sender: 'user' };
        setMessages([...messages, newMessage, { sender: 'bot' }]);
        setInputText('');
    
        handleBotResponses(inputText.toLowerCase());
      };

    const handleBotResponses = (input) => {
        
        if (input.includes('lugares para cenar')) {
          const responseMessage = 'Aquí tienes algunos lugares recomendados para cenar en San Miguel de Tucumán:\n\n1. El Club de la Milanesa: Ofrece una variedad de milanesas gourmet y platos tradicionales argentinos en un ambiente acogedor.\n\n2. La Parolaccia Trattoria: Especializado en cocina italiana, perfecto para disfrutar de pastas caseras y sabores auténticos.\n\n3. Chicoana Restaurant: Conocido por su excelente carne a la parrilla y una amplia carta de vinos locales.\n\n4. Manjares de la Tierra: Ofrece cocina gourmet con ingredientes locales frescos y menús de degustación.\n\n5. El Molino Central: Ideal para disfrutar de platos típicos tucumanos como empanadas y locro en un ambiente histórico.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else if (input.includes('lugares para almorzar')) {
          const responseMessage = 'Estos son algunos lugares ideales para almorzar en San Miguel de Tucumán:\n\n1. Plaza Cervecería: Ofrece una combinación de cocina regional y platos internacionales en un ambiente moderno y relajado.\n\n2. La Bohème Restó: Especializado en cocina gourmet con menús de almuerzo ejecutivo y una excelente selección de vinos.\n\n3. Al Pan Pan: Conocido por sus opciones de sandwiches y ensaladas frescas con ingredientes locales.\n\n4. La Paisanita: Restaurante familiar que ofrece comida casera tucumana con opciones vegetarianas y veganas.\n\n5. La Posta de Tucumán: Destacado por sus parrillas y carnes a la brasa, perfecto para un almuerzo tradicional argentino.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else if (input.includes('lugares para desayunar')) {
          const responseMessage = 'Aquí tienes recomendaciones de lugares para desayunar en San Miguel de Tucumán:\n\n1. La Tucumanita: Conocido por sus tamales y empanadas tucumanas recién hechas en un ambiente acogedor.\n\n2. Almacén de Café: Ofrece una amplia variedad de cafés y opciones de desayuno con productos locales frescos.\n\n3. Chai Tea & Coffee: Especializado en tés y cafés gourmet con opciones saludables y vegetarianas para el desayuno.\n\n4. Las Delicias: Tradicional cafetería que ofrece medialunas y tortas caseras junto con café recién hecho.\n\n5. Kusko Coffee Bar: Ideal para desayunar con opciones de café de especialidad y brunch con ingredientes locales.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else if (input.includes('lugares para merendar')) {
          const responseMessage = 'Te recomiendo algunos lugares para merendar en San Miguel de Tucumán:\n\n1. San Miguel Plaza: Centro comercial con opciones de cafeterías y heladerías para disfrutar de meriendas dulces y saladas.\n\n2. Ñam Ñam: Ofrece opciones saludables y caseras como wraps, sandwiches y jugos naturales para la merienda.\n\n3. La Hostería: Conocida por sus tortas y dulces caseros, perfectos para una merienda tradicional.\n\n4. The Coffee Store: Especializado en café de especialidad y opciones gourmet para acompañar con tartas y pastelería artesanal.\n\n5. Cielito Lindo: Heladería artesanal con opciones de helados y postres para disfrutar en la tarde.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else if (input.includes('lugares para pasar la noche')) {
          const responseMessage = 'Aquí tienes recomendaciones de lugares donde puedes hospedarte en San Miguel de Tucumán:\n\n1. Hotel Hilton Garden Inn Tucumán: Hotel moderno con comodidades de lujo y ubicación céntrica.\n\n2. Sheraton Tucumán Hotel: Ofrece vistas panorámicas y servicios de spa y bienestar.\n\n3. Hotel Francia: Ubicado en el centro histórico, con encanto colonial y servicios completos.\n\n4. Amérian Tucumán Apart & Suites: Apartamentos con cocina completa y servicios de hotel en el corazón de la ciudad.\n\n5. Hotel Carlos V: Conocido por su hospitalidad y ubicación estratégica cerca de atracciones principales.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else if (input.includes('recomendame una ruta para recorrer tucuman')) {
          const responseMessage = 'Te recomiendo esta ruta para explorar Tucumán: Visita a la Casa Histórica de la Independencia en San Miguel de Tucumán, donde se declaró la independencia de Argentina.\n\n2. Recorrido por los Valles Calchaquíes, visitando pueblos como Cafayate y Cachi, conocidos por sus bodegas y paisajes impresionantes.\n\n3. Excursión al Parque Nacional El Cadillal para disfrutar de la naturaleza y actividades al aire libre.\n\n4. Paseo por el Cerro San Javier para vistas panorámicas y observación de aves.\n\n5. Visita al Museo Folklórico Provincial para explorar la cultura local y festivales.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        } else {
          const responseMessage = 'Lo siento, no entiendo esa petición.';
          const botMessage = { text: responseMessage, sender: 'bot' };
          setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
        }
      };

    const handleMenuOption = (option) => {
        const responseMessage = generateResponseForOption(option);
        const botMessage = { text: responseMessage, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage, { sender: 'bot' }]);
      };

    const generateResponseForOption = (option) => {
        switch (option) {
          case 'Naturaleza':
            return 'Para los amantes de la naturaleza, te recomiendo explorar Tucumán visitando el Parque Nacional El Cadillal para disfrutar de sus paisajes naturales y actividades al aire libre. También puedes explorar el Cerro San Javier, ideal para observar aves y tener vistas panorámicas. Otra opción es el Parque Sierra de San Javier, perfecto para hacer senderismo y disfrutar de la flora y fauna local.';
          case 'Ciudades':
            return 'Si te interesan las ciudades, no te pierdas San Miguel de Tucumán, la capital de la provincia, famosa por su arquitectura colonial y sitios históricos como la Casa Histórica de la Independencia y la Catedral de San Miguel. También puedes visitar Yerba Buena, conocida por sus parques y espacios verdes.';
          case 'Pueblos':
            return 'Los pueblos de Tucumán ofrecen una experiencia única. Recomiendo visitar Tafí del Valle, un encantador pueblo de montaña con vistas espectaculares y actividades al aire libre como trekking y cabalgatas. Otro pueblo interesante es Amaicha del Valle, famoso por su cultura y el Museo Pachamama.';
          case 'Circuitos':
            return 'Los circuitos turísticos en Tucumán son una excelente manera de explorar la diversidad de la provincia. Considera hacer el Circuito de los Valles Calchaquíes, que te llevará a través de paisajes impresionantes y pueblos pintorescos como Cafayate y Cachi. También puedes explorar el Circuito de las Yungas, ideal para observar la biodiversidad de la región.';
          case 'Cultura':
            return 'Para los interesados en la cultura, Tucumán ofrece una rica historia y patrimonio. Visita la Casa Histórica de la Independencia en San Miguel de Tucumán, donde se declaró la independencia de Argentina en 1816. También puedes explorar el Museo Folklórico Provincial y disfrutar de festivales culturales durante todo el año.';
          default:
            return 'Lo siento, no entiendo esa opción.';
        }
      };

        // Mensaje inicial del chatbot
        useEffect(() => {
            setMessages([{ text: 'Puedo ayudarte con información turística sobre Tucumán. ¿Qué te gustaría conocer?.', sender: 'bot' }]);
        }, []);

        const handleClearChat = () => {
            setMessages([{ text: 'Puedo ayudarte con información turística sobre Tucumán. ¿Qué te gustaría conocer?.', sender: 'bot' }]);
        };

        const handleClickCaja = (nombreCaja) => {
            if (nombreCaja === cajaSeleccionada) {
              setMostrarCajaNueva(!mostrarCajaNueva); // Alternar visibilidad si se hace clic en la misma caja
            } else {
              setCajaSeleccionada(nombreCaja);
              setMostrarCajaNueva(true); // Mostrar la nueva caja al hacer clic en una diferente
        
              switch (nombreCaja) {
                case "Lugares turísticos":
                  setImagenesMostradas([
                    { src: turis1, link: 'https://www.tripadvisor.com.ar/SmartDeals-g312827-Tafi_del_Valle_Province_of_Tucuman_Northern_Argentina-Hotel-Deals.html', descripcion: 'Tafí del Valle es un pintoresco pueblo ubicado en el noroeste de Tucumán, es un destino ideal para los amantes de la naturaleza y la tranquilidad.' },
                    { src: turis2, link: 'https://www.tucumanturismo.gob.ar/circuito-ciudad-historica/82/15251/iglesia-catedral', descripcion: 'La Catedral de San Miguel de Tucumán es un monumento histórico ubicado en el centro de la ciudad de San Miguel de Tucumán, en Argentina.' },
                    { src: turis3, link: 'https://casadelaindependencia.cultura.gob.ar/', descripcion: 'La Casa Histórica de Tucumán es un símbolo de gran importancia para Argentina, en ella se llevó a cabo la histórica declaración de la independencia el 9 de julio de 1816.' },
                    { src: turis4, link: 'https://www.bing.com/search?q=cerro+san+javier&cvid=2c7ee755ee0b46e4ab107ba0cf0fa71a&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIGCAEQABhAMgYIAhAAGEAyBggDEAAYQNIBCDQxNzVqMGo0qAIIsAIB&FORM=ANAB01&PC=U531', descripcion: 'El Cerro San Javier es una montaña cerca de San Miguel de Tucumán, famosa por sus vistas panorámicas y actividades al aire libre como senderismo y ciclismo.' }
                  ]);
                  break;
        
                case "Hospedaje":
                  setImagenesMostradas([
                    { src: hospe1, link: 'https://www.marriott.com/es/search/submitSearch.mi?pageType=advanced&searchType=NearAddress&destinationAddress.location=Sheraton+Tucuman+Hotel&nst=paid&cid=PAI_GLB0004N13_GLE000ARP2_GLF000M11I&ppc=ppc&pId=rztbppc&gclid=86cfb740b5e91cbe3039d1c3c1fb85c6&gclsrc=3p.ds&msclkid=86cfb740b5e91cbe3039d1c3c1fb85c6', descripcion: 'El Hotel Sheraton en Tucumán es una opción de alojamiento de lujo, de primera clase, ofrece una experiencia de hospedaje de alto nivel, y una ubicación conveniente para explorar los atractivos turísticos cercanos.' },
                    { src: hospe2, link: 'https://www.booking.com/hotel/ar/sol-san-javier.es.html?label=msn-_U*EhDzjfuYiL_c3qdbwFA-79989654810889%3Atikwd-79989755498778%3Aloc-8%3Aneo%3Amte%3Alp146373%3Adec%3Aqshotel+sol+san+javier&sid=29eaa0d014b7bf3c9114dd06459a1358&aid=2276248&ucfs=1&arphpl=1&dest_id=-1012635&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=bd9a18f769c5022f&srepoch=1719891181&from=searchresults', descripcion: 'El Hotel Sol San Javier es un destino popular en Tucumán. Ofrece una experiencia única con vistas impresionantes de las montañas y el entorno natural.' },
                    { src: hospe3, link: 'https://www.booking.com/hotel/ar/del-sol-san-miguel-de-tucuman.es-ar.html?label=metabing-link-propertypromotionadar-hotel-802094_dev-desktop_los-1_bw-47_dow-6_defdate-1_lang-ES_curr-ARS&sid=29eaa0d014b7bf3c9114dd06459a1358&utm_source=metabing&utm_medium=propertypromotionad&utm_term=hotel-802094&utm_content=los-1_bw-47_dow-6_lang-ES_curr-ARS&utm_campaign=ar&aid=2412364&ucfs=1&arphpl=1&checkin=2024-08-18&checkout=2024-08-19&dest_id=-1013611&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=b8961966d925000e&srepoch=1719891402&all_sr_blocks=80209406_385584245_0_0_0&highlighted_blocks=80209406_385584245_0_0_0&matching_block_id=80209406_385584245_0_0_0&sr_pri_blocks=80209406_385584245_0_0_0__9610&from_sustainable_property_sr=1&from=searchresults', descripcion: 'El Garden Plaza Hotel en Tucumán es reconocido por su estilo contemporáneo y comodidades modernas. Ubicado estratégicamente en el centro de la ciudad, ofrece a los huéspedes fácil acceso a atracciones locales y negocios. Es una opción popular tanto para turistas como para viajeros de negocios que buscan confort.' },
                    { src: hospe4, link: 'https://www.booking.com/hotel/ar/bicentenario-suites-and-spa.es.html?label=msn-cwjQcpM3U4zX2h3BFsbzDw-79989654682114%3Atikwd-79989753670651%3Aloc-146373%3Aneo%3Amte%3Alp146373%3Adec%3Aqshotel+bicentenario+tucum%C3%A1n&sid=29eaa0d014b7bf3c9114dd06459a1358&utm_source=bing&utm_medium=cpc&utm_term=cwjQcpM3U4zX2h3BFsbzDw&utm_campaign=Hotel+-+Argentina+-+San+Miguel+de+Tucuman+-+UFI%3A-1013611&aid=2276450&ucfs=1&arphpl=1&checkin=2024-08-18&checkout=2024-08-19&dest_id=-1013611&dest_type=city&group_adults=2&req_adults=2&no_rooms=1&group_children=0&req_children=0&hpos=1&hapos=1&sr_order=popularity&srpvid=01ee19a21e98019b&srepoch=1719891522&all_sr_blocks=41170004_371236313_0_1_0&highlighted_blocks=41170004_371236313_0_1_0&matching_block_id=41170004_371236313_0_1_0&sr_pri_blocks=41170004_371236313_0_1_0__8602&from_sustainable_property_sr=1&from=searchresults', descripcion: 'El Hotel Bicentenario en Tucumán es un establecimiento moderno y elegante que celebra la rica historia y cultura de Argentina. Situado en una ubicación céntrica, combina comodidades contemporáneas con detalles que honran el patrimonio nacional.' }
                  ]);
                  break;
        
                case "Atracciones":
                  setImagenesMostradas([
                    { src: atracc1, link: 'https://www.tripadvisor.com.ar/Attraction_Review-g312826-d3367400-Reviews-Aerosillas_El_Cadillal-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argenti.html', descripcion: 'Las aerosillas del Cadillal son una atracción turística en Tucumán, Argentina, que permite a los visitantes disfrutar de vistas panorámicas espectaculares mientras ascienden por las laderas del embalse El Cadillal. Es una experiencia popular para familias y amantes de la naturaleza, ofreciendo la oportunidad de observar el paisaje montañoso y el agua cristalina desde una perspectiva única y relajante.' },
                    { src: atracc2, link: 'https://www.lillo.org.ar/museo-lillo-de-ciencias-naturales', descripcion: 'El Museo Miguel Lillo es un destacado centro cultural y científico en San Miguel de Tucumán, Argentina. Fundado por el naturalista y científico Miguel Lillo, alberga una impresionante colección de especies de flora y fauna de la región, así como exhibiciones sobre geología y paleontología. Es un lugar ideal para aprender sobre la biodiversidad local y la historia natural de la zona, ofreciendo a los visitantes una experiencia educativa y enriquecedora.' },
                    { src: atracc3, link: 'https://www.reservahorcomolle.com.ar/', descripcion: 'La Reserva Natural Horco Molle es un santuario ecológico ubicado en Tucumán, Argentina, conocido por su biodiversidad y belleza natural. Ofrece a los visitantes la oportunidad de explorar senderos entre bosques nativos, observar una variedad de aves y disfrutar de cascadas y arroyos cristalinos. Es un destino ideal para actividades al aire libre como el trekking y el avistamiento de vida silvestre, proporcionando un escape tranquilo y rejuvenecedor en medio de la naturaleza.' },
                    { src: atracc4, link: 'https://www.rakitucuman.com/', descripcion: 'Rakitucumán es un parque temático y de aventuras ubicado en San Miguel de Tucumán, Argentina. Ofrece una variedad de actividades recreativas y deportivas al aire libre, como tirolesa, escalada en roca, y circuitos de cuerdas altas y bajas. Es un lugar popular para familias y grupos que buscan diversión y adrenalina.' }
                  ]);
                  break;
        
                case "Restaurantes":
                  setImagenesMostradas([
                    { src: rest1, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d4213209-Reviews-Mora_Bistro_Argentino-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentin.html', descripcion: 'El Bar Mora Bistro es un establecimiento gastronómico ubicado en Tucumán, Argentina, conocido por su ambiente acogedor y su propuesta culinaria variada. Ofrece una combinación de platos locales e internacionales, destacándose por sus opciones de cocina creativa y su atención personalizada. Es un lugar ideal tanto para disfrutar de una comida tranquila como para socializar en un ambiente relajado y moderno.' },
                    { src: rest2, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d14763439-Reviews-Los_Naranjos-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar Los Naranjos es un conocido establecimiento en Tucumán, Argentina, reconocido por su ambiente animado y su oferta de bebidas y comidas. Es un lugar popular tanto entre locales como turistas, ideal para disfrutar de tragos variados, música en vivo y una atmósfera vibrante. Ofrece también opciones de comida rápida y snacks, convirtiéndolo en un punto de encuentro popular en la ciudad.' },
                    { src: rest3, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d3833868-Reviews-Il_Postino-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar El Postino es un encantador establecimiento en Tucumán, Argentina, conocido por su ambiente acogedor y su estilo único inspirado en la cultura italiana. Es famoso por sus selecciones de vinos y cócteles, así como por su oferta gastronómica que incluye tapas y platos gourmet. Es un lugar ideal para disfrutar de una velada tranquila con amigos o pareja, combinando buena música y una excelente atención.' },
                    { src: rest4, link: 'https://www.tripadvisor.com.ar/Restaurant_Review-g312826-d3371177-Reviews-El_PORTAL-San_Miguel_de_Tucuman_Province_of_Tucuman_Northern_Argentina.html', descripcion: 'El Bar El Portal es un popular punto de encuentro en Tucumán, Argentina, conocido por su ambiente animado y su variada oferta de bebidas y comida. Es reconocido por su atención amigable y por ser un lugar ideal tanto para disfrutar de tragos con amigos como para socializar en un ambiente relajado.' }
                  ]);
                  break;
        
                default:
                  setImagenesMostradas([]);
                  break;
              }

              setMenuVisible(false); // Cerrar el menú al seleccionar una categoría
            }
          };
        
        const handleMenuClick = () => {
            setMenuVisible(!menuVisible);
        };
        
        const handleVolverClick = () => {
            setCajaSeleccionada(null);
            setMostrarCajaNueva(false);
            setImagenesMostradas([]);
        };

        const handleSobreNosotrosClick = () => {
            setCajaSeleccionada("Sobre Nosotros");
            setMostrarCajaNueva(true);
            setImagenesMostradas([]);
            setMenuVisible(false); // Cerrar el menú al seleccionar "Sobre Nosotros"
          };
        
        const handleresenasClick = () => {
            setCajaSeleccionada("Reseñas");
            setMostrarCajaNueva(true);
            setImagenesMostradas([]);
            setMenuVisible(false); // Cerrar el menú al seleccionar "Reseñas"
        };
        

        const sobreNosotrosText = `¡Bienvenido a nuestro mundo de la programación!
          Somos un equipo formado por tres apasionados estudiantes de programación unidos por nuestra 
          curiosidad y amor a la tecnología. Nuestros nombres son Malena, Lautaro y Facundo. Juntos, 
          estamos emocionados de compartir nuestro conocimiento y experiencia a través de esta plataforma.
      
          Como estudiantes de programación, hemos dedicado horas a dominar el lenguaje de JavaScript, 
          y nos encanta explorar nuevas tecnologías emergentes como inteligencia artificial y desarrollo web.
          Nuestra formación académica en la Universidad Tecnológica Nacional, nos ha equipado con las 
          bases sólidas necesarias para enfrentar desafíos técnicos complejos.
      
          Nos destacamos por nuestra capacidad para trabajar en equipo y nuestra pasión por la innovación.
          Creemos firmemente en la importancia de la calidad del código y la experiencia del usuario. 
          Cada proyecto que emprendemos es una oportunidad para mejorar nuestras habilidades y ofrecer 
          soluciones creativas y efectivas. Nuestra misión con esta página web es proporcionar una plataforma 
          intuitiva y útil para entusiastas de la tecnología y programación. Nos comprometemos a mantener 
          altos estándares de excelencia y a seguir aprendiendo y mejorando continuamente.
      
          ¡Únete a nosotros en este viaje! Estamos emocionados por el futuro y esperamos expandir nuestros 
          horizontes junto a nuestra creciente comunidad de desarrolladores y aficionados a la tecnología.`;
      

    return(
        <div>
            <div>
                <nav className="nav-left">
                    <div>
                        <h1>Bienvenido {user} a Explora Tuc</h1>
                    </div>

                    <details className="contOp" open={menuAbierto}>
                        <summary onClick={handleMenuClick}>Menú</summary>
                            <ul className={`rtl ${menuVisible ? 'visible' : 'oculto'}`}>
                                <li onClick={handleresenasClick}><a href="#">Reseñas</a></li>
                                <li onClick={() => handleClickCaja("Ayuda")}><a href="#">Ayuda</a> </li>
                                <li onClick={handleSobreNosotrosClick}><a href="#">Sobre Nosotros</a></li>
                            </ul>   
                    </details>
                </nav>
            </div>

            <div>
                <main>
                    {cajaSeleccionada && (
                        <div className={`caja-nueva ${mostrarCajaNueva ? 'visible' : 'oculto'}`}>
                        <h2>{cajaSeleccionada}</h2>
                        <button className='btnVolver' onClick={handleVolverClick}>Volver</button>
                        {cajaSeleccionada === "Sobre Nosotros" ? (
                            <div className="sobre-nosotros">
                            <p>{sobreNosotrosText}</p>
                            </div>

                        ) : cajaSeleccionada === "Reseñas" ? (
                            <div className="contenedor-tarjetas">

                            <div className='btnreseña'>
                                <button className='btnañadirReseña' type="submit">Añadir reseña</button>
                                <input type="text"
                                className="añadirTextoReseña" 
                                value={inputText} 
                                onChange={handleUserInput}
                                placeholder="Escribe aquí..."
                                />
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Casa historíca</h2>
                                <p className="descripcion">Conocer nuestra historia no tiene precio. Increíble lugar...fui muchas veces siempre salgo sorprendido.</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Catedral</h2>
                                <p className="descripcion">Un templo de Dios muy bien cuidado y limpio</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Garden plaza</h2>
                                <p className="descripcion">Realmente es un lugar mágico. La atención de todo el personal es increíble, muy cálido y amable. Súper recomendable. Gran experiencia. Las instalaciones son soñadas. Recomiendo el circuito de relax y el gimnasio. Las vistas son postales.</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Sheraton</h2>
                                <p className="descripcion">Excelente ubicación. Habitaciones hermosas. Personal siempre bien dispuesto.</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Aerosillas el cadillal</h2>
                                <p className="descripcion">Excelente lugar para pasear.....los mejores sándwich de milanesa.....</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Reserva de horco molle</h2>
                                <p className="descripcion">Hermoso lugar para hacer excursiones tanto para adultos como para niños. Se pueden visitar especies autóctonas y el lugar al pie de cerro es bellísimo. En las cercanías se puede pasear en bicicleta o hacer caminatas muy agradables. Lugar obligado para conocer en Tucumán.</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Mora Bistro</h2>
                                <p className="descripcion">Platos abundantes y gourmet, buena atención, el lugar es amplio y cómodo.
                                A excepción de que la empanada tenía de más aceitunas, estuvo todo bien 😁🙂</p>
                            </div>
                            <div className="tarjeta">
                                <h2 className="titulo">Bar el portal</h2>
                                <p className="descripcion">muy rico todo exelentes papas y  el chivito sigo sin comer otro igual de rico!</p>
                            </div>
                            </div>
                        ) : cajaSeleccionada === "Ayuda" ? (
                            <div className="chatbot-container">
                            <h2>Cuales son tus ámbitos preferidos</h2>
                            <div className="options-area">
                                <button className='btnop' onClick={() => handleMenuOption('Naturaleza')}>Naturaleza</button>
                                <button className='btnop' onClick={() => handleMenuOption('Ciudades')}>Ciudades</button>
                                <button className='btnop' onClick={() => handleMenuOption('Pueblos')}>Pueblos</button>
                                <button className='btnop' onClick={() => handleMenuOption('Circuitos')}>Circuitos</button>
                                <button className='btnop' onClick={() => handleMenuOption('Cultura')}>Cultura</button>
                            </div>

                            <div className="message-area">
                                {messages.map((message, index) => (
                                <div key={index}>{message.text}</div>
                                ))}
                            </div>

                            <div className="input-area">
                                <input
                                type="text"
                                value={inputText}
                                onChange={handleUserInput}
                                placeholder="Escribe aquí..."
                                />
                                <button onClick={handleSendMessage}>Enviar</button>
                            </div>

                            <div className="clear-chat-btn">
                                <button onClick={handleClearChat}>Limpiar Chat</button>
                            </div>
                            </div>
                        ) : (
                            <section>
                            {imagenesMostradas.map((imagen, index) => (
                                <div key={index} className="image-container">
                                <a href={imagen.link} target="_blank" rel="noopener noreferrer">
                                    <img src={imagen.src} alt={imagen.descripcion} />
                                </a>
                                <p className="description">{imagen.descripcion}</p>
                                </div>
                            ))}
                            </section>
                        )}
                        </div>
                    )}

                    {!cajaSeleccionada && (
                        <>
                        <div className="fila">
                            <div className="caja1" onClick={() => handleClickCaja("Lugares turísticos")}>
                            <h2>Lugares turísticos</h2>
                            </div>
                            <div className="caja2" onClick={() => handleClickCaja("Hospedaje")}>
                            <h2>Hospedaje</h2>
                            </div>
                        </div>
                        <div className="fila">
                            <div className="caja3" onClick={() => handleClickCaja("Atracciones")}>
                            <h2>Atracciones</h2>
                            </div>
                            <div className="caja4" onClick={() => handleClickCaja("Restaurantes")}>
                            <h2>Restaurantes</h2>
                            </div>
                        </div>
                        </>
                    )}
                </main>
            </div>

            <div>
                <footer>
                    <p>&copy; 2024 Mi Proyecto. Todos los derechos reservados a Messi.</p>
                    <button className="btncerrarSesion" onClick={handleLogout}>Cerrar Sesión</button>
                </footer>
            </div>

        </div>
    );
}