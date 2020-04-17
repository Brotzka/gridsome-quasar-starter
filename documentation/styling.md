# Styling

Für dieses Projekt wird SCSS verwendet. Folgende Grundstruktur ist gegeben:

- [app.scss](src/assets/styles/app.scss): ist der Einstiegspunkt und die einzige Datei (abgesehen von Vue-Komponenten) die von der Anwendung geladen wird
- [_globals.scss](src/assets/styles/_globals.scss): beinhaltet globale SCSS-Variablen (Farben, Schriftarten etc etc). Hier können auch Variablen aus CSS-Frameworks überschrieben werden
- [partials](src/assets/styles/partials): hier werden spezifische Bereiche zusammengefasst (z.B. alles was Texte angeht in [_texts.scss](src/assets/styles/partials/_texts.scss)). Diese Partials müssen dann in [app.scss](src/assets/styles/app.scss) importiert werden

## Nutzung in Vue-Komponenten

SCSS und die globalen Variablen können in jeglicher Vue-Komponente verwendet werden. Dazu muss nur der ``style``-Tag entsprechend deklariert werden und die relevante SCSS-Datei eingebunden werden:

```vue
// andere Tags

<style lang="scss" scoped>
    @import "~/assets/styles/_globals.scss";

    h1 {
        color: $primary;    
    }
</style>
```