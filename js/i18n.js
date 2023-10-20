const lngs = {
    en: { nativeName: '🇺🇸' },
    de: { nativeName: '🇩🇪' },
    it: { nativeName: '🇮🇹' },
    es: { nativeName: '🇪🇸' },
  };
  
const rerender = () => {
    // start localizing, details:
    // https://github.com/i18next/jquery-i18next#usage-of-selector-function
    $('body').localize();
}

$(function () {
    // use plugins and options as needed, for options, detail see
    // https://www.i18next.com
    i18next
      // detect user language
      // learn more: https://github.com/i18next/i18next-browser-languageDetector
      .use(i18nextBrowserLanguageDetector)
      // init i18next
      // for all options read: https://www.i18next.com/overview/configuration-options
      .init({
        debug: true,
        fallbackLng: 'de',
        resources: {
          de: {
            translation: {
                home: {
                    title: 'Home',
                    description: 'Wir steigern ihre Autarkie. Wir ermöglichen Ihnen durch erneuerbare Energien zu Ihrem eigenen Kraftwerk und Energiespeicher zu werden.'
                },
                aboutus: {
                    title: 'Über uns',
                    description: '11+ Jahre Erfahrung in Solar- und Erneuerbarer-Energie.',
                    claim: 'Wir sind seit über 11 Jahren erfolgreich auf dem deutschen Markt tätig und expandieren auf den italienischen und spanischen Markt.',
                    bullet1: 'Besuchen Sie uns in unserem Showroom.',
                    bullet2: 'Mehrsprachiges Backoffice.',
                    bullet3: 'Produkte mit Fokus auf Autarkie.'
                },
                projects: {
                    title: 'Projekte',
                    subtitle: 'Unsere Projekte',
                    ask: 'Werfen Sie einen Blick auf unsere Projekte',
                },
                whyus: {
                    title: 'Warum wir',
                    subtitle: 'Warum wir?',
                    ask: 'Ganzheitliche Solar-Systeme mit Fokus auf Autarkie',
                    claim: 'Wir sind der festen Überzeugung, dass unsere autarke Systeme auf dem Markt der erneuerbaren Energien ihr größter Vorteil sein werden.',
                    bullet1: {
                        attribute: 'Qualitative',
                        noun: 'Produkte',
                    },
                    bullet2: {
                        attribute: 'Professionelle',
                        noun: 'Distribution',
                    },
                    bullet3: {
                        attribute: 'Fokus auf',
                        noun: 'Autarkie',
                    },
                    bullet4: {
                        attribute: 'Mehrsprachiger',
                        noun: 'Support',
                    },
                },
                contact: {
                    title: 'Kontakt',
                    quote: 'Angebot anfragen',
                    doit: 'Kontaktieren',
                    subtitle: 'Unverbindlich anfragem',
                    ask: 'Solar Projekt jetzt starten',
                    claim: 'Sie haben Fragen zu einer Installation, unseren Produkten oder Distribution? Zögern Sie nicht mit uns in Kontakt zu treten und von uns zu hören.',
                    form: {
                        name: 'Vor- und Nachname',
                        email: 'E-Mail Adresse',
                        mobile: 'Handynummer',
                        subject: {
                            title: 'Betreff',
                            distribution: 'Distribution',
                            installation: 'Installation',
                            products: 'Produkte',
                            consultation: 'Beratung'
                        },
                        message: 'Ihre Nachricht',
                        submit: 'Absenden'
                    }
                },
                values: {
                    efficiency: {
                        title: 'Effizient',
                        description: 'Unsere Produkte zeichnen immer wieder aufs Neue durch hohe Effizienz aus.'
                    },
                    quality: {
                        title: 'Qualitativ',
                        description: 'Besonders stolz sind wir auf die hohe Qualität unserer häufig nachgefragten Produkte.'
                    },
                    certified: {
                        title: 'Zertifiziert',
                        description: 'Von nationalen Energieagenturen geforderte Dokumentation und Zertifizierung.'
                    },
                    value: {
                        title: 'Wertvoll',
                        description: 'Nicht nur unsere Liefergeschwindigkeit und Qualität, sondern auch unsere Preise sind wettbewerbsfähig.'
                    },
                },
                footer: {
                    address: 'Adresse',
                    quickaccess: 'Schnellzugriff'
                },
                imprint: {
                    title: 'Impressum'
                }
            }
          },
          en: {
            translation: {
                home: {
                    title: 'Home',
                    description: 'We increase your self-sufficiency. We enable you to become your own power plant and energy storage through renewable energy.'
                },
                aboutus: {
                    title: 'About us',
                    description: '11+ years of experience in solar and renewable energy.',
                    claim: 'We have been successfully operating in the German market for over 11 years and are expanding into the Italian and Spanish markets.',
                    bullet1: 'Come visit us in our showroom.',
                    bullet2: 'Multilingual backoffice.',
                    bullet3: 'Products with focus on self-sufficiency.'
                },
                projects: {
                    title: 'Projects',
                    subtitle: 'Our projects',
                    ask: 'Have a look at our recent projects',
                },
                whyus: {
                    title: 'Why us',
                    subtitle: 'Why us?',
                    ask: 'Holistic solar systems with focus on self-sufficiency',
                    claim: 'We firmly believe that our self-sufficient systems will be their greatest advantage in the renewable energy market.',
                    bullet1: {
                        attribute: 'Quality',
                        noun: 'Products',
                    },
                    bullet2: {
                        attribute: 'Professional',
                        noun: 'Distribution',
                    },
                    bullet3: {
                        attribute: 'Focus on',
                        noun: 'Self-sufficiency',
                    },
                    bullet4: {
                        attribute: 'Multilingual',
                        noun: 'Support',
                    },
                },
                contact: {
                    title: 'Contact',
                    quote: 'Request quote',
                    doit: 'Get in touch',
                    subtitle: 'Get in touch',
                    ask: 'Start your solar project now',
                    claim: 'Do you have questions about an installation, our products or distribution? Do not hesitate to contact us and hear from us.',
                    form: {
                        name: 'Name',
                        email: 'E-Mail Address',
                        mobile: 'Phone/Mobile',
                        subject: {
                            title: 'Subject',
                            distribution: 'Distribution',
                            installation: 'Installation',
                            products: 'Products',
                            consultation: 'Consultation'
                        },
                        message: 'Your message',
                        submit: 'Send'
                    }
                },
                values: {
                    efficiency: {
                        title: 'Efficiency',
                        description: 'Our products stand out again and again for their high efficiency.'
                    },
                    quality: {
                        title: 'Quality',
                        description: 'We are particularly proud of the high quality of our frequently requested products.'
                    },
                    certified: {
                        title: 'Certified',
                        description: 'Documentation and certification required by national energy agencies.'
                    },
                    value: {
                        title: 'Value',
                        description: 'Not only our delivery speed and quality, but also our prices are competitive.'
                    },
                },
                footer: {
                    address: 'Address',
                    quickaccess: 'Quick Access'
                },
                imprint: {
                    title: 'Legal & Imprint'
                }
            }
          },
          it: {
            translation: {
                home: {
                    title: 'Home',
                    description: 'Aumentiamo la vostra autosufficienza. Vi permettiamo di diventare la vostra centrale elettrica e il vostro deposito di energia grazie alle energie rinnovabili.'
                },
                aboutus: {
                    title: 'Chi siamo',
                    description: 'Oltre 11 anni di esperienza nel settore dell\'energia solare e rinnovabile.',
                    claim: 'Abbiamo avuto successo nel mercato tedesco per oltre 11 anni e ci stiamo espandendo nei mercati italiano e spagnolo.',
                    bullet1: 'Visitateci nel nostro showroom.',
                    bullet2: 'Back office multilingue.',
                    bullet3: 'Prodotti incentrati sull\'autosufficienza.'
                },
                projects: {
                    title: 'Progetti',
                    subtitle: 'I nostri progetti',
                    ask: 'Dai un\'occhiata ai nostri progetti',
                },
                whyus: {
                    title: 'Perché noi',
                    subtitle: 'Perché noi?',
                    ask: 'Sistemi solari olistici con particolare attenzione all\'autosufficienza',
                    claim: 'Crediamo fermamente che i nostri sistemi autosufficienti saranno il loro più grande vantaggio nel mercato delle energie rinnovabili.',
                    bullet1: {
                        attribute: 'Qualitativo',
                        noun: 'Prodotti',
                    },
                    bullet2: {
                        attribute: 'Professionale',
                        noun: 'Distribuzione',
                    },
                    bullet3: {
                        attribute: 'Concentrati su',
                        noun: 'Autosufficienza',
                    },
                    bullet4: {
                        attribute: 'Multilingua',
                        noun: 'Supporto',
                    },
                },
                contact: {
                    title: 'Contatto',
                    quote: 'Richiedi un preventivo',
                    doit: 'Contatto',
                    subtitle: 'Richiesta senza impegno',
                    ask: 'Avvia subito un progetto solare',
                    claim: 'Avete domande su un\'installazione, sui nostri prodotti o sulla distribuzione? Non esitare a contattarci e a sentire il nostro parere.',
                    form: {
                        name: 'Nome',
                        email: 'E-Mail',
                        mobile: 'Cellulare',
                        subject: {
                            title: 'oggetto',
                            distribution: 'Distribuzione',
                            installation: 'Installazione',
                            products: 'Prodotti',
                            consultation: 'Consultazione'
                        },
                        message: 'Messaggio',
                        submit: 'Invia'
                    }
                },
                values: {
                    efficiency: {
                        title: 'Efficiente',
                        description: 'I nostri prodotti si distinguono sempre per la loro elevata efficienza.'
                    },
                    quality: {
                        title: 'Qualitativo',
                        description: 'Siamo particolarmente orgogliosi dell\'alta qualità dei nostri prodotti più richiesti.'
                    },
                    certified: {
                        title: 'Certificato',
                        description: 'Documentazione e certificazione richieste dalle agenzie nazionali per l\'energia.'
                    },
                    value: {
                        title: 'Valore',
                        description: 'Non solo la nostra velocità di consegna e la qualità, ma anche i nostri prezzi sono competitivi.'
                    },
                },
                footer: {
                    address: 'Indirizzo',
                    quickaccess: 'Accesso rapido'
                },
                imprint: {
                    title: 'Impronta'
                }
            }
          },
          es: {
            translation: {
                home: {
                    title: 'Home',
                    description: 'Aumentamos tu autosuficiencia. Le permitimos convertirse en su propia central eléctrica y almacén de energía mediante energías renovables.'
                },
                aboutus: {
                    title: 'Sobre nosotros',
                    description: 'Más de 11 años de experiencia en energía solar y renovable.',
                    claim: 'Llevamos más de 11 años triunfando en el mercado alemán y nos estamos expandiendo a los mercados italiano y español.',
                    bullet1: 'Visítenos en nuestra sala de exposición.',
                    bullet2: 'Back office multilingüe.',
                    bullet3: 'Productos centrados en la autosuficiencia.'
                },
                projects: {
                    title: 'Proyectos',
                    subtitle: 'Nuestros proyectos',
                    ask: 'Eche un vistazo a nuestros proyectos',
                },
                whyus: {
                    title: 'Por qué nosotros',
                    subtitle: 'Por qué nosotros?',
                    ask: 'Sistemas solares holísticos centrados en la autosuficiencia',
                    claim: 'Creemos firmemente que nuestros sistemas autosuficientes serán su mayor ventaja en el mercado de las energías renovables.',
                    bullet1: {
                        attribute: 'Cualitativo',
                        noun: 'Productos',
                    },
                    bullet2: {
                        attribute: 'Profesional',
                        noun: 'Distribución',
                    },
                    bullet3: {
                        attribute: 'Centrarse',
                        noun: 'Autosuficiencia',
                    },
                    bullet4: {
                        attribute: 'Multilingüe',
                        noun: 'Apoyo',
                    },
                },
                contact: {
                    title: 'Contacto',
                    quote: 'Solicitar presupuesto',
                    doit: 'Contacto',
                    subtitle: 'Solicitar sin compromiso',
                    ask: 'Iniciar proyecto solar ahora',
                    claim: 'Tiene preguntas sobre una instalación, nuestros productos o la distribución? No dude en ponerse en contacto con nosotros y escucharnos.',
                    form: {
                        name: 'Nombre',
                        email: 'E-Mail',
                        mobile: 'Teléfono',
                        subject: {
                            title: 'Asunto',
                            distribution: 'Distribución',
                            installation: 'Instalación',
                            products: 'Productos',
                            consultation: 'Consulta'
                        },
                        message: 'Su mensaje',
                        submit: 'Enviar'
                    }
                },
                values: {
                    efficiency: {
                        title: 'Efficiente',
                        description: 'Nuestros productos destacan una y otra vez por su alta eficiencia.'
                    },
                    quality: {
                        title: 'Cualitativa',
                        description: 'Estamos especialmente orgullosos de la alta calidad de nuestros productos más solicitados.'
                    },
                    certified: {
                        title: 'Certificado',
                        description: 'Documentación y certificación exigidas por las agencias nacionales de energía.'
                    },
                    value: {
                        title: 'Valor',
                        description: 'No sólo nuestra velocidad de entrega y calidad, sino también nuestros precios son competitivos.'
                    },
                },
                footer: {
                    address: 'Dirección',
                    quickaccess: 'Acceso rápido'
                },
                imprint: {
                    title: 'Imprenta'
                }
            }
          }
        }
      }, (err, t) => {
        if (err) return console.error(err);
  
        // for options see
        // https://github.com/i18next/jquery-i18next#initialize-the-plugin
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
  
        // fill language switcher
        Object.keys(lngs).map((lng) => {
          const opt = new Option(lngs[lng].nativeName, lng);
          if (lng === i18next.resolvedLanguage) {
            opt.setAttribute("selected", "selected");
          }
          $('#languageSwitcher').append(opt);
        });
        $('#languageSwitcher').change((a, b, c) => {
          const chosenLng = $(this).find("option:selected").attr('value');
          i18next.changeLanguage(chosenLng, () => {
            rerender();
          });
        });
  
        rerender();
      });
  });