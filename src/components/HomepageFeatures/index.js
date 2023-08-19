import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import UI from './UI';

const FeatureList = [
  {
    title: 'Simple d\'utilisation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
       L'API de vêtements en ligne peut être facilement intégrée dans vos sites web et applications,
        offrant une expérience d'achat transparente sans nécessiter de développement complexe.
      </>
    ),
  },
  {
    title: 'Des déscriptions en français !',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Obtenez des informations détaillées et authentiques sur chaque produit grâce à notre API.
        Consultez des descriptions complètes, des spécifications précises.
      </>
    ),
  },
  {
    title: '100 % gratuit',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <UI/>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
