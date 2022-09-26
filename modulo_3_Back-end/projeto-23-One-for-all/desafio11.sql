SELECT cancao_nome AS nome_musica,
    CASE
		WHEN cancao_nome LIKE '%Amar%'THEN REPLACE(cancao_nome, 'Amar', 'Code Review')
        WHEN cancao_nome LIKE '%SUPERSTAR%'THEN REPLACE(cancao_nome, 'SUPERSTAR', 'SUPERDEV')
        WHEN cancao_nome LIKE '%Bard%'THEN REPLACE(cancao_nome, 'Bard', 'QA')
        WHEN cancao_nome LIKE '%SOUL%'THEN REPLACE(cancao_nome, 'SOUL', 'CODE')
        WHEN cancao_nome LIKE '%Pais%'THEN REPLACE(cancao_nome, 'Pais', 'Pull Requests')
	END AS novo_nome
    FROM SpotifyClone.cancoes
    HAVING novo_nome <> ''
    ORDER BY cancao_nome DESC;
