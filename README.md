## git con rama - master


Comandos Resumidos:

git checkout -b nombre-de-la-rama  -- creamos una rama
-- codificamos el Codigo en la rama
git add .  -- agregamos los cambios
git commit -m "Descripción del commit" -- creamos el mensaje del commit  
git push origin nombre-de-la-rama   -- subimos el cambio al origen de la rama
git checkout master  		-- nos pasamos al rama principal
git pull origin master  	-- descargamos los cambios actuales de la rama principal
git merge nombre-de-la-rama  	-- unir las ramas (creadas) con la principal
git push origin master 		-- subimos los cambios a la rama principal

-- revertir cambios:
git revert HEAD			-- revertir cambios
git push origin main		-- guarda los cambios en el main

-- revertir un cmabio especifico:
git log --oneline		-- busca el id del cambio
git revert d4e5f6		-- reversa el cambio según el id
git push origin main		-- guarda los cambios en el main

-- @harlericho2022
