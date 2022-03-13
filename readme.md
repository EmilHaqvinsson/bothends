#Webbserverprogrammering 1

### Planering

Jag har främst använt mig av trello (utöver mitt minne) för planering, men jag märker att jag fortfarande har en lång sträcka att gå när det kommer till det att hålla en projektplan uppdaterad och i fas med projektet. Mycket är det för att jag ju jobbar ensam och då _känns_ inte behovet för att hålla en projektplan uppdaterad lika stort. Det är iallafall en note to self att öva på den biten, för jag kan absolut tänka mig att det är till stor hjälp när man väl får in rutin på det! 

Jag har som vanligt främst haft problem med frontenden, tycker verkligen att React kan vara ruggigt svårt ibland. Jag känner att jag har mycket bättre koll nu än vad jag hade i slutet av förra kursen, och i takt med att jag lär mig mer blir det också roligare. Jag behöver verkligen träna på de olika "use"-funktionerna (UseEffect osv), för jag ser hur dom verkligen kan vara kraftiga om dom används på rätt sätt! Men, det var verkligen en struggle att lyckas få till att listan över alla items inte gick in i en evighetsloop, och ska jag vara ärlig så är jag fortfarande inte hundra procent säker på att jag fattar hur jag fick till det. 

Backend-biten dock flöt stort sett som en porlande vårbäck - och det glädjer mig massor att jag har börjat känna mig så trygg med vanilla js nu! Allt jag kan av JavaScript har jag lärt mig under senaste året, så det är kul att känna att man får lite "valuta för pengarna"!

#### Utbytta lösningar etc

Jag har byggt om frontend två gånger från grunden, och jag vet fortfarande inte vad som orsakade problemet det någon av gångerna. Det som hände var att när jag startade upp frontend så stog den en bra stund (en minut, två?) och tuggade, ingen data varken skickades eller togs emot (jag har glassWire på maskinen så jag loggade trafiken där), och tillslut så gav webbläsaren upp och gav mig "Connection timed out". Inga felmedelanden varken i VSCode eller Jetbrains-programmen (jag testade att starta upp projektet med alla IDE's jag har), och inte heller i devTools i någon av de 4 webbläsare jag testade. Men, inget ont som inte för något gott med sig - nu känner jag till de olika 'Local history'-verktygen som finns, betydligt mycket bättre än jag gjorde förr...

Annars - sökfunktionen på backend fungerar inte helt optimalt men den fungerar. Det finns heller inga automatiska tester i projektet, men jag har bifogat en insomnia-config där det finns tester på alla endpoints.

Jag har också haft enorma problem med att försöka få någon form av "edit-mode" att fungera. Kan mycket väl vara så att jag tog mig vatten över huvudet när jag gav mig på det, men jag känner fortfarande att det - iallfall rent teoretiskt - inte borde vara så svårt..

Det jag ville åstadkomma var att på samma sätt som man kan markera sina items som "done" genom att klicka på checkmarken på dess Card, så skulle man komma åt ett slags edit-mode genom att trycka på t.ex. en skiftnyckel (eller någon annan bra 'edit-symbol'). Jag planerade lite löst att försöka ordna det med ett slags conditional rendering - något i stil med `{!editMode ? {title} : <input type='text' placeholder={title} />` - men det visade sig vara lite för komplext för att jag skulle lyckas med det. 

Jag har för avsikt att fortsätta skriva på programmet, absolut minst tills jag känner mig nöjd med det, men jag har också lite lösa planer på att försöka bygga ut den till något slags dashboard-liknande projekt.