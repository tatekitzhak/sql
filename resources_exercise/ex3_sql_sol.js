SELECT lastname,firstname,Title
FROM listofartists join work
on listofartists.ArtistID = work.ArtistID;

select distinct lastname,firstname
FROM listofartists join work
using (ArtistID);

select lastname,firstname
from listofartists
where ArtistID in (select ArtistID
                   from work);
select lastname,firstname
from listofartists
where ArtistID not in (select ArtistID
                   from work);

SELECT Lastname,firstname 
FROM ListOfArtists,work,trans
WHERE work.artistID=listofartists.artistID AND
	  work.workID=trans.workID;

SELECT Lastname,firstname 
FROM ListOfArtists
WHERE ArtistID in (SELECT ArtistID
                   FROM work
				   WHERE WorkID in (SELECT WorkID
                                    FROM trans)); 
SELECT Lastname,firstname 
FROM ListOfArtists
WHERE ArtistID in (SELECT ArtistID
                   FROM work
				   WHERE WorkID not in (SELECT WorkID
                                        FROM trans)); 
SELECT Lastname,firstname 
FROM ListOfArtists,work
WHERE work.artistID=listofartists.artistID AND
	  workID not in  (SELECT WorkID
					  FROM trans); 

SELECT DISTINCT lastname 
FROM listofartists,customer_artist_int
WHERE customer_artist_int.artistID=listOfArtists.artistID;

SELECT DISTINCT lastname 
FROM listofartists join customer_artist_int
using(ArtistID);

select title
from work join customer_artist_int
     using(ArtistID) 
where WorkID not in (select WorkID
                     from trans); 