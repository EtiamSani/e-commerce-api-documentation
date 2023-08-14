# Test Unitaires

Pour réaliser des tests unitaires complets et efficaces dans notre application, nous avons fait usage d'une variété d'outils et de frameworks qui ont grandement facilité le processus de test et assuré la qualité du code. Parmi les outils clés que nous avons utilisés, citons :

Pour réaliser des tests unitaires complets et efficaces dans notre application, nous avons fait usage d'une variété d'outils et de frameworks qui ont grandement facilité le processus de test et assuré la qualité du code. Parmi les outils clés que nous avons utilisés, citons :

JUnit 5 : Nous avons choisi JUnit 5 comme framework de test unitaire principal. Il offre une approche moderne et flexible pour l'écriture de tests, prenant en charge les annotations, les assertions et les assertions conditionnelles qui simplifient la vérification des résultats attendus.

Mockito : Mockito est un framework de simulation (mocking) qui nous a permis de créer des simulateurs de dépendances pour isoler les unités de code en cours de test. Nous avons pu simuler le comportement des services et des repositories, contrôlant ainsi les retours de données et les interactions avec les dépendances.

Spring Boot Test : Pour les tests d'intégration, nous avons utilisé les fonctionnalités de test intégrées de Spring Boot, notamment l'annotation @SpringBootTest. Cela nous a permis de démarrer l'application Spring Boot et d'effectuer des tests d'intégration avec le contexte d'application complet.

MockMvc : Pour tester les contrôleurs REST, nous avons utilisé MockMvc, une classe fournie par Spring Boot Test qui nous a permis de simuler les requêtes HTTP et de vérifier les réponses obtenues. Cela nous a permis de tester les points de terminaison API de manière isolée.

Hamcrest : Hamcrest est une bibliothèque de correspondances (matchers) qui s'intègre bien avec JUnit. Elle offre des assertions plus expressives et lisibles que celles de base de JUnit, ce qui a contribué à améliorer la clarté et la compréhension de nos tests.

ObjectMapper (Jackson) : Nous avons utilisé ObjectMapper de Jackson pour convertir les objets Java en JSON et vice versa. Cela nous a permis de créer des données JSON pour les requêtes et de vérifier les réponses JSON lors de nos tests.