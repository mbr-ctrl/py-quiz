export const Questions = {
    python: [
        {
            "question": "Qu'est-ce qu'une fonction lambda en Python ?",
            "answers": ["Une fonction qui accepte un nombre variable d'arguments", 'Une fonction anonyme définie en une seule ligne', 'Une fonction utilisée pour la programmation orientée objet'],
            "correct": 'Une fonction anonyme définie en une seule ligne'
        },
        {
            "question": "Quelle est la différence entre une liste et un tuple en Python ?",
            "answers": [ "Une liste est ordonnée, tandis qu'un tuple ne l'est pas", "Une liste peut contenir des éléments de types différents, tandis qu'un tuple ne peut pas", "Une liste est mutable, tandis qu'un tuple est immuable"],
            "correct": 'Une liste est mutable, tandis qu\'un tuple est immuable'
        },
        {
            "question": "Qu'est-ce qu'une exception en Python ?",
            "answers": [ 'Un avertissement indiquant un problème potentiel', "Une erreur qui se produit lors de l'exécution d'un programme", "Une méthode utilisée pour arrêter l'exécution d'un programme"],
            "correct": 'Une erreur qui se produit lors de l\'exécution d\'un programme'
        },
        {
            "question": "Quelle est la méthode pour créer une classe héritant d'une autre classe en Python ?",
            "answers": ['class MaClasse(ClasseParent):', 'class MaClasse extends ClasseParent:', 'class MaClasse implements ClasseParent:'],
            "correct": 'class MaClasse(ClasseParent):'
        },
        {
            "question": "Quelle est la méthode pour ouvrir un fichier en mode écriture en Python ?",
            "answers": [ 'open("fichier.txt", "r")', 'open("fichier.txt", "w")', 'open("fichier.txt", "a")'],
            "correct": 'open("fichier.txt", "w")'
        },
        {
            "question": "Quelle est la méthode pour trier une liste en utilisant une fonction de comparaison personnalisée en Python ?",
            "answers": [ 'sorted(liste, key=ma_fonction)', 'list.sort(key=ma_fonction)', 'sort(key=ma_fonction)'],
            "correct": 'sorted(liste, key=ma_fonction)'
        },
        {
            "question": "Quelle est la méthode pour générer une valeur unique et aléatoire en Python ?",
            "answers": ['random()', 'randint()', 'uuid.uuid4()'],
            "correct": 'uuid.uuid4()'
        },
        {
            "question": "Qu'est-ce qu'une expression régulière en Python ?",
            "answers": ['Un modèle de texte utilisé pour rechercher et manipuler des chaînes de caractères', 'Une opération mathématique effectuée sur des nombres', 'Une fonction intégrée pour évaluer des expressions logiques'],
            "correct": 'Un modèle de texte utilisé pour rechercher et manipuler des chaînes de caractères'
        },
        {
            "question": "Quelle est la méthode pour gérer des threads en Python ?",
            "answers": [ 'concurrent.futures', 'threading', 'asyncio'],
            "correct": 'threading'
        },
        {
            "question": "Quelle est la méthode pour mesurer le temps d'exécution d'un morceau de code en Python ?",
            "answers": [ 'timer', 'timeit', 'clock'],
            "correct": 'timeit'
        }
    ],
    javascript: [
        {
            "question": "Quelle est la syntaxe pour afficher du texte dans la console ?",
            "answers": ['alert("Hello, World!")', 'print("Hello, World!")', 'console.log("Hello, World!")', ],
            "correct": 'console.log("Hello, World!")'
        },
        {
            "question": "Comment déclarer une variable en JavaScript ?",
            "answers": [ 'let x = 5', 'var x = 5', 'x = 5'],
            "correct": 'let x = 5'
        },
        {
            "question": "Quelle est la méthode pour obtenir la longueur d'une chaîne de caractères en JavaScript ?",
            "answers": [ 'size()', 'length()', 'len()'],
            "correct": 'length()'
        },
        {
            "question": "Comment commenter une ligne de code en JavaScript ?",
            "answers": [ '# Commentaire', '/* Commentaire */', '// Commentaire'],
            "correct": '// Commentaire'
        },
        {
            "question": "Quelle est la syntaxe pour une boucle 'for' en JavaScript ?",
            "answers": ['for i in range(5):', 'for i = 0; i < 5; i++', 'for (let i = 0; i < 5; i++)'],
            "correct": 'for (let i = 0; i < 5; i++)'
        },
        {
            "question": "Quelle est la méthode pour convertir une chaîne de caractères en entier en JavaScript ?",
            "answers": ['int()', 'convert()', 'parseInt()',],
            "correct": 'parseInt()'
        },
        {
            "question": "Comment importer un module en JavaScript ?",
            "answers": ['import module', 'require module', 'include module'],
            "correct": 'import module'
        },
        {
            "question": "Quelle est la méthode pour ajouter un élément à un tableau en JavaScript ?",
            "answers": ['array.add()', 'array.push()', 'array.insert()'],
            "correct": 'array.push()'
        },
        {
            "question": "Comment définir une fonction en JavaScript ?",
            "answers": ['function myFunction() { }', 'def myFunction():', 'void myFunction() { }'],
            "correct": 'function myFunction() { }'
        },
        {
            "question": "Quelle est la méthode pour lire l'entrée de l'utilisateur en JavaScript ?",
            "answers": ['prompt()', 'input()', 'readline()'],
            "correct": 'prompt()'
        }
    ],
    django: [
        {
            "question": "Qu'est-ce que Django ?",
            "answers": ['Un framework de développement web en Python', 'Un langage de programmation', 'Un gestionnaire de base de données'],
            "correct": 'Un framework de développement web en Python'
        },
        {
            "question": "Quelle est la commande pour créer un nouveau projet Django ?",
            "answers": ['django startproject', 'django createproject', 'django-admin startproject'],
            "correct": 'django-admin startproject'
        },
        {
            "question": "Quelle est la structure de répertoires par défaut d'un projet Django ?",
            "answers": ['models.py, views.py, templates/', 'src/, main.py, static/', 'settings.py, urls.py, templates/'],
            "correct": 'settings.py, urls.py, templates/'
        },
        {
            "question": "Comment définir un modèle (Model) dans Django ?",
            "answers": ['class ModelName(models.Model):', 'def model_name():', 'class ModelName():'],
            "correct": 'class ModelName(models.Model):'
        },
        {
            "question": "Quelle est la commande pour exécuter les migrations Django ?",
            "answers": ['python manage.py migrate', 'python runserver', 'python manage.py makemigrations'],
            "correct": 'python manage.py migrate'
        },
        {
            "question": "Quelle est la méthode pour créer une nouvelle vue (view) dans Django ?",
            "answers": ['def new_view(request):', 'class NewView(View):', 'def new_view():'],
            "correct": 'def new_view(request):'
        },
        {
            "question": "Quelle est la syntaxe pour définir une URL dans Django ?",
            "answers": ['path("/url/", view_name, name="view_name")', 'url("/url/", view_name, name="view_name")', 'route("/url/", view_name, name="view_name")'],
            "correct": 'path("/url/", view_name, name="view_name")'
        },
        {
            "question": "Quelle est la méthode pour afficher une variable dans un template Django ?",
            "answers": ['{{ variable }}', '{% variable %}', '$variable'],
            "correct": '{{ variable }}'
        },
        {
            "question": "Quelle est la commande pour démarrer le serveur de développement Django ?",
            "answers": ['python manage.py runserver', 'python startserver', 'django runserver'],
            "correct": 'python manage.py runserver'
        },
        {
            "question": "Quelle est la méthode pour effectuer des requêtes à la base de données dans Django ?",
            "answers": ['Model.objects.get()', 'Model.find()', 'Model.query()'],
            "correct": 'Model.objects.get()'
        }
    ],
    react: [
        {
            "question": "Qu'est-ce que React ?",
            "answers": ["Une bibliothèque JavaScript pour la construction d'interfaces utilisateur", 'Un framework de développement web en Python', 'Un langage de programmation'],
            "correct": "Une bibliothèque JavaScript pour la construction d'interfaces utilisateur"
        },
        {
            "question": "Comment crée-t-on un composant fonctionnel (functional component) dans React ?",
            "answers": ['function MyComponent() { }', 'class MyComponent extends Component { }', 'const MyComponent = () => { }'],
            "correct": 'const MyComponent = () => { }'
        },
        {
            "question": "Quelle est la méthode pour passer des données d'un composant parent à un composant enfant dans React ?",
            "answers": ['props', 'state', 'data'],
            "correct": 'props'
        },
        {
            "question": "Comment met-on à jour l'état (state) d'un composant dans React ?",
            "answers": ['this.setState()', 'this.updateState()', 'this.state = {}'],
            "correct": 'this.setState()'
        },
        {
            "question": "Quelle est la méthode pour effectuer une requête HTTP dans React ?",
            "answers": ['fetch()', 'axios()', 'http()'],
            "correct": 'fetch()'
        },
        {
            "question": "Quelle est la méthode pour gérer les événements dans React ?",
            "answers": ['onClick', 'onEvent', 'handleEvent'],
            "correct": 'onClick'
        },
        {
            "question": "Quelle est la méthode pour itérer sur une liste et générer des éléments dans React ?",
            "answers": ['map()', 'forEach()', 'render()'],
            "correct": 'map()'
        },
        {
            "question": "Quelle est la commande pour créer une nouvelle application React à l'aide de Create React App ?",
            "answers": ['create-react-app', 'new-react-app', 'react-create-app'],
            "correct": 'create-react-app'
        },
        {
            "question": "Quelle est la méthode pour rendre du contenu conditionnel dans React ?",
            "answers": ['if-else', 'switch-case', 'ternary operator'],
            "correct": 'ternary operator'
        },
        {
            "question": "Quelle est la méthode pour ajouter des styles CSS à un composant React ?",
            "answers": ['className', 'style', 'css'],
            "correct": 'className'
        },
    ],
    php: [
            {
                "question": "Qu'est-ce que PHP ?",
                "answers": ['Un langage de script côté serveur', 'Un langage de programmation orienté objet', 'Un framework de développement web'],
                "correct": 'Un langage de script côté serveur'
            },
            {
                "question": "Comment déclare-t-on une variable en PHP ?",
                "answers": ['$variable = 5;', 'var variable = 5;', 'let variable = 5;'],
                "correct": '$variable = 5;'
            },
            {
                "question": "Quelle est la méthode pour afficher du texte dans le navigateur en PHP ?",
                "answers": ['echo "Hello, World!";', 'print("Hello, World!");', 'console.log("Hello, World!");'],
                "correct": 'echo "Hello, World!";'
            },
            {
                "question": "Quelle est la syntaxe pour une boucle 'for' en PHP ?",
                "answers": ['for ($i = 0; $i < 5; $i++)', 'for i in range(5):', 'for ($i = 0; $i < 5; i++)'],
                "correct": 'for ($i = 0; $i < 5; $i++)'
            },
            {
                "question": "Comment inclut-on un fichier externe en PHP ?",
                "answers": ['include "filename.php";', 'import "filename.php";', 'require "filename.php";'],
                "correct": 'include "filename.php";'
            },
            {
                "question": "Quelle est la méthode pour obtenir la longueur d'une chaîne de caractères en PHP ?",
                "answers": ['strlen()', 'length()', 'size()'],
                "correct": 'strlen()'
            },
            {
                "question": "Comment commenter une ligne de code en PHP ?",
                "answers": ['// Commentaire', '# Commentaire', '/* Commentaire */'],
                "correct": '// Commentaire'
            },
            {
                "question": "Quelle est la méthode pour vérifier si un fichier existe en PHP ?",
                "answers": ['file_exists()', 'is_file()', 'exists_file()'],
                "correct": 'file_exists()'
            },
            {
                "question": "Quelle est la méthode pour envoyer des données à un formulaire en utilisant la méthode POST en PHP ?",
                "answers": ['$_POST', '$_GET', '$_REQUEST'],
                "correct": '$_POST'
            },
            {
                "question": "Comment définir une fonction en PHP ?",
                "answers": ['function myFunction() { }', 'def myFunction():', 'void myFunction() { }'],
                "correct": 'function myFunction() { }'
            }
    ]
};
