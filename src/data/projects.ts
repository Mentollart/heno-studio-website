export interface Project {
  slug: string;
  name: string;
  location: string;
  size?: string;
  type: 'mieszkanie' | 'dom';
  description: string;
  scope: string[];
  imageSrc: string;
  imageAlt: string;
  seoTitle: string;
  seoDescription: string;
}

export const projects: Project[] = [
  {
    slug: 'mieszkanie-68-we-wroclawiu',
    name: 'Mieszkanie 68m² we Wrocławiu',
    location: 'Wrocław',
    size: '68m²',
    type: 'mieszkanie',
    description:
      'Projekt wnętrza mieszkania o powierzchni 68m² w centrum Wrocławia. Klientom zależało na nowoczesnym, jasnym wnętrzu z wyraźnym charakterem. Otwarty salon z kuchnią tworzy serce mieszkania — funkcjonalną przestrzeń do codziennego życia i spotkań z przyjaciółmi. Ciepła paleta kolorów z akcentami naturalnego drewna nadaje wnętrzu przytulności.',
    scope: ['Projekt koncepcyjny', 'Wizualizacje 3D', 'Układ funkcjonalny', 'Lista zakupowa'],
    imageSrc: 'mieszkanie-68-wroclaw.png',
    imageAlt: 'Projekt wnętrza mieszkania 68m² we Wrocławiu — salon z kuchnią',
    seoTitle: 'Projekt mieszkania 68m² Wrocław | Heno Studio',
    seoDescription: 'Realizacja projektu wnętrza mieszkania 68m² we Wrocławiu. Nowoczesny salon z kuchnią, jasne wnętrze z drewnianymi akcentami. Zobacz wizualizacje 3D.',
  },
  {
    slug: 'mieszkanie-84-we-wroclawiu',
    name: 'Mieszkanie 84m² we Wrocławiu',
    location: 'Wrocław',
    size: '84m²',
    type: 'mieszkanie',
    description:
      'Przestronne mieszkanie 84m² we Wrocławiu zaprojektowane z myślą o rodzinie. Elegancki salon z czerwoną sofą jako centralnym punktem, połączony z nowoczesną kuchnią. Projekt łączy klasyczną elegancję z funkcjonalnymi rozwiązaniami — dużo miejsca do przechowywania, wygodna strefa pracy i przytulna sypialnia.',
    scope: ['Projekt kompleksowy', 'Rysunki techniczne', 'Wizualizacje 3D', 'Nadzór autorski'],
    imageSrc: 'mieszkanie-84-wroclaw.png',
    imageAlt: 'Projekt wnętrza mieszkania 84m² we Wrocławiu — elegancki salon',
    seoTitle: 'Projekt mieszkania 84m² Wrocław | Heno Studio',
    seoDescription: 'Projekt wnętrza mieszkania 84m² we Wrocławiu — elegancki salon, nowoczesna kuchnia, przytulna sypialnia. Realizacja Heno Studio z pełnym nadzorem.',
  },
  {
    slug: 'dom-w-trzebnicy',
    name: 'Dom w Trzebnicy',
    location: 'Trzebnica',
    type: 'dom',
    description:
      'Projekt wnętrza domu jednorodzinnego w Trzebnicy, pod Wrocławiem. Przestronne pomieszczenia z dużym doświetleniem naturalnym wymagały spójnej koncepcji łączącej strefę dzienną z prywatną. Naturalne materiały — drewno, kamień i lniane tkaniny — tworzą harmonijną całość inspirowaną okoliczną przyrodą.',
    scope: ['Projekt kompleksowy z nadzorem', 'Koordynacja wykonawców', 'Wizualizacje 3D'],
    imageSrc: 'dom-trzebnica.png',
    imageAlt: 'Projekt wnętrza domu w Trzebnicy — przestronny salon z naturalnym oświetleniem',
    seoTitle: 'Projekt wnętrza domu Trzebnica | Heno Studio Wrocław',
    seoDescription: 'Realizacja projektu wnętrza domu w Trzebnicy pod Wrocławiem. Naturalne materiały, spójna koncepcja stref dziennej i prywatnej. Portfolio Heno Studio.',
  },
  {
    slug: 'mieszkanie-inwestycyjne',
    name: 'Mieszkanie inwestycyjne we Wrocławiu',
    location: 'Wrocław',
    type: 'mieszkanie',
    description:
      'Projekt mieszkania inwestycyjnego we Wrocławiu — optymalizacja przestrzeni pod wynajem krótkoterminowy. Kluczowe było maksymalne wykorzystanie metrażu, trwałe materiały odporne na intensywne użytkowanie oraz atrakcyjny wizualnie wystrój, który wyróżni ofertę na platformach rezerwacyjnych.',
    scope: ['Projekt koncepcyjny', 'Optymalizacja układu', 'Lista zakupowa z budżetem'],
    imageSrc: 'mieszkanie-inwestycyjne.png',
    imageAlt: 'Projekt mieszkania inwestycyjnego we Wrocławiu — nowoczesne wnętrze pod wynajem',
    seoTitle: 'Projekt mieszkania inwestycyjnego Wrocław | Heno Studio',
    seoDescription: 'Projekt wnętrza mieszkania inwestycyjnego we Wrocławiu pod wynajem. Optymalizacja przestrzeni, trwałe materiały, atrakcyjny design. Heno Studio.',
  },
  {
    slug: 'mieszkanie-w-warszawie',
    name: 'Mieszkanie w Warszawie',
    location: 'Warszawa',
    type: 'mieszkanie',
    description:
      'Projekt wnętrza mieszkania w Warszawie — współpraca zdalna z klientami spoza Wrocławia. Nowoczesna, minimalistyczna estetyka z ciepłymi akcentami. Otwarty plan salonu z jadalnią i kuchnią, z naciskiem na naturalne światło i funkcjonalne przechowywanie.',
    scope: ['Projekt kompleksowy', 'Wizualizacje 3D', 'Współpraca zdalna'],
    imageSrc: 'mieszkanie-warszawa.png',
    imageAlt: 'Projekt wnętrza mieszkania w Warszawie — nowoczesny salon',
    seoTitle: 'Projekt mieszkania Warszawa | Heno Studio',
    seoDescription: 'Realizacja projektu wnętrza mieszkania w Warszawie. Nowoczesny minimalizm z ciepłymi akcentami. Heno Studio — współpraca zdalna z całą Polską.',
  },
  {
    slug: 'mieszkanie-54-we-wroclawiu',
    name: 'Mieszkanie 54m² we Wrocławiu',
    location: 'Wrocław',
    size: '54m²',
    type: 'mieszkanie',
    description:
      'Kompaktowe mieszkanie 54m² we Wrocławiu — wyzwanie polegało na stworzeniu przestronnego wrażenia w niewielkim metrażu. Salon połączony z kuchnią i korytarzem tworzy płynną, otwartą przestrzeń. Jasna kolorystyka z punktowymi akcentami kolorystycznymi optycznie powiększa wnętrze.',
    scope: ['Projekt koncepcyjny', 'Układ funkcjonalny', 'Wizualizacje 3D'],
    imageSrc: 'mieszkanie-54-wroclaw.png',
    imageAlt: 'Projekt wnętrza mieszkania 54m² we Wrocławiu — salon z kuchnią i korytarzem',
    seoTitle: 'Projekt małego mieszkania 54m² Wrocław | Heno Studio',
    seoDescription: 'Projekt wnętrza mieszkania 54m² we Wrocławiu. Optymalizacja małej przestrzeni — otwarty salon z kuchnią, jasna kolorystyka. Portfolio Heno Studio.',
  },
  {
    slug: 'dom-pod-wroclawiem',
    name: 'Dom pod Wrocławiem',
    location: 'okolice Wrocławia',
    type: 'dom',
    description:
      'Projekt wnętrza domu jednorodzinnego w okolicach Wrocławia. Elegancka łazienka przy sypialni głównej stanowi wizytówkę tego projektu — połączenie jasnych płytek z drewnianymi akcentami tworzy spa-like atmosferę. Cały dom utrzymany w spójnej, stonowanej palecie kolorów.',
    scope: ['Projekt kompleksowy', 'Wizualizacje 3D', 'Rysunki techniczne', 'Lista materiałów'],
    imageSrc: 'dom-pod-wroclawiem.png',
    imageAlt: 'Projekt wnętrza domu pod Wrocławiem — elegancka łazienka',
    seoTitle: 'Projekt wnętrza domu pod Wrocławiem | Heno Studio',
    seoDescription: 'Realizacja projektu wnętrza domu pod Wrocławiem. Elegancka łazienka, spójna kolorystyka, naturalne materiały. Architekt wnętrz — Heno Studio.',
  },
  {
    slug: 'dom-w-lubinie',
    name: 'Dom w Lubinie',
    location: 'Lubin',
    type: 'dom',
    description:
      'Projekt wnętrza domu w Lubinie — współpraca z klientami z Dolnego Śląska. Funkcjonalne wnętrze z wyraźnym, charakterystycznym stylem. Projekt obejmował wszystkie pomieszczenia z naciskiem na strefę dzienną i sypialnię główną.',
    scope: ['Projekt kompleksowy z nadzorem', 'Koordynacja dostaw', 'Współpraca z wykonawcami'],
    imageSrc: 'dom-lubin.png',
    imageAlt: 'Projekt wnętrza domu w Lubinie — strefa dzienna',
    seoTitle: 'Projekt wnętrza domu Lubin | Heno Studio Wrocław',
    seoDescription: 'Realizacja projektu wnętrza domu w Lubinie. Funkcjonalne wnętrze z charakterem — Heno Studio, architekt wnętrz z Wrocławia. Dolny Śląsk.',
  },
  {
    slug: 'mieszkanie-52m-we-wrocawiu',
    name: 'Mieszkanie 52m² we Wrocławiu',
    location: 'Wrocław',
    size: '52m²',
    type: 'mieszkanie',
    description:
      'Najbardziej kompaktowy projekt w naszym portfolio — mieszkanie 52m² we Wrocławiu. Każdy centymetr wykorzystany z głową. Przemyślany układ funkcjonalny pozwolił zmieścić pełnowymiarową kuchnię, wygodny salon i funkcjonalną sypialnię. Dowód, że małe mieszkanie może być piękne i wygodne.',
    scope: ['Projekt koncepcyjny', 'Wizualizacje 3D', 'Optymalizacja przestrzeni'],
    imageSrc: 'mieszkanie-52-wroclaw.jpg',
    imageAlt: 'Projekt wnętrza mieszkania 52m² we Wrocławiu — kuchnia',
    seoTitle: 'Projekt mieszkania 52m² Wrocław | Heno Studio',
    seoDescription: 'Projekt małego mieszkania 52m² we Wrocławiu. Optymalizacja każdego centymetra — funkcjonalna kuchnia, wygodny salon, sypialnia. Heno Studio.',
  },
];
