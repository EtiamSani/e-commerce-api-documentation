# Test Unitaires

Pour réaliser des tests unitaires complets et efficaces dans notre application, nous avons exploré un large éventail d'outils et de frameworks qui ont grandement facilité le processus de test et renforcé la qualité de notre code. Parmi les outils clés que nous avons rigoureusement exploités, se distinguent :

JUnit 5 : Nous avons opté pour JUnit 5 en tant que cadre de test unitaire principal. Il présente une approche moderne et souple pour la rédaction de tests, en intégrant des annotations, des assertions et des vérifications conditionnelles qui simplifient la validation des résultats attendus.

Mockito : Mockito a été un allié de choix en tant que framework de simulation (mocking), nous permettant de concevoir des simulateurs de dépendances pour isoler les unités de code sous test. Nous avons pu ainsi simuler le comportement des services et des référentiels, et exercer un contrôle précis sur les retours de données et les interactions avec les dépendances.

MockMvc : Lors de l'évaluation des contrôleurs REST, nous avons exploité MockMvc, une classe fournie par Spring Boot Test, qui nous a habilment permis de simuler les requêtes HTTP et d'examiner les réponses générées. Cette approche méthodique nous a conféré la capacité de tester de façon isolée les points d'extrémité de l'API.



