# Stack technologiczny

- Backend
	- Fastify https://www.fastify.io/  
	- OpenAPI/Swagger
	- MongoDB (lub jakaś baza SQL)
	- Docker / Docker-Compose
- Frontend
	- Web components (https://developer.mozilla.org/en-US/docs/Web/Web_Components)
	- Edytor MD: https://github.com/benweet/stackedit/ (lub inny)

# Opis

Do wykonania serwis typu REST zapewniający przechowywanie i katalogowanie notatek. Notatki mogą być dodawane, edytowane, usuwane, ukrywane oraz umieszczane w koszu. Notatki można oznaczać różnymi tagami. Do zrobienia także drzewko kategorii. Notatka może być przypisana do jednej lub więcej kategorii. Kategoria jest polem opcjonalnym.

W uproszczeniu: Notatki i kategorie są jak system plików. Pliki (notatki) znajdują się w katalogach (kategoriach). Różnica polega na tym, że notatka może znajdować się w wielu kategoriach.

Do wykonania także frontend w technologii Web Components

# Drzewko kategorii

Kategoria posiada pola:
- Nazwa
- Id Kategorii nadrzędnej (kategoria główna root nie posiada tu żadnej wartości)

# Notatka

Notatka posiada pola:
- Nazwa
- Status: Enum: ukryta, w_koszu
- Tagi: Array, tagi
- Treść: długie pole tekstowe umożliwiające przechowanie dokumentu w formacie MarkDown
- Id Kategorii: Array, ponieważ notatka może należeć do wielu kategorii


# Wyszukiwarka

Należy przygotować endpoint, który umożliwi wyszukiwanie notatek. Podstawowy parametr do fragment tekstu, którego szukamy. Dodatkowe parametry to ustawienia filtra (np. gdzie chcemy szukać: Nazwa, Treść. Tagi). Domyślnie, gdy nie przekażemy dodatkowego parametru oznacza to, że chcemy wyszukać wszędzie (Nazwa, Treść, Tagi). Endpoint powinien zwracać tablicę odnalezionych notatek.
