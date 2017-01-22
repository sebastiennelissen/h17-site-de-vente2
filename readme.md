# h17-site-de-vente2

Pour mettre en place le projet, veuillez vous assurer d'avoir node et npm installés sur vos machines.

Afin d'importer les librairies, il faut exécuter :
```
npm install
```

Vous pouvez voir les packages utilisés dans le fichier *package.json*.

###_dependencies_ indique les librairies utiles à l'execussion

- express : Est le module de serveur HTTP  

###_devDependencies_ indique les librairies utiles à l'environnement de développement

- bootstrap-sass: Est une version de Bootstrap en SASS qui est donc inclue au code SCSS développé puis compilé.
- minifier : Permet de transformer un fichier css en min.css. Il pourrait être utilisé pour compresser le code JavaScript côté client.
- node-sass : Est une implémentation de SASS en nodeJS plutôt qu'en Ruby.
- nodemon : Est un utilitaire permettant d'automatiser le processus de développement.

## Serveur

Les fichiers relatifs au serveur sont situés dans _server_.
Une fois la mise en place du projet fait, vous pouvez lancer le serveur avec la commande suivante :

```
npm start
```

Il sagit du seul diminutif que peut faire npm pour les commandes identifiées dans la section _scripts_ du fichier *package.json*. Ces commandes utilisent des logiciles de ligne de commandes disponibles sur l'ordinateur ou encode installé via NPM, d'où la définition de _devDependencies_.

## Client

Les fichiers relatifs au client sont situés dans _public_.

Pour le développement SASS trois commandes sont définies. 


Pour compiler le fichier *main.scss* en CSS de _public/stylesheets/scss/main.scss_ à _public/stylesheets/css/styles.css_ :
```
npm run build-sass
```


Pour observer tout changements dans le dossier _public/stylesheets/scss_ :
_Pour tout changement dans ce dossier les commandes *build-sass* puis *minify-css* seront appelées_
```
npm run watch-sass
```


Pour minifier le code CSS de _public/stylesheets/css/styles.css_ à _public/stylesheets/css/styles.min.css_ :
```
npm run minify-css
```
