/*!
* DevExtreme (dx.messages.de.js)
* Version: 20.2.7
* Build date: Thu Apr 22 2021
*
* Copyright (c) 2012 - 2021 Developer Express Inc. ALL RIGHTS RESERVED
* Read about DevExtreme licensing here: https://js.devexpress.com/Licensing/
*/
"use strict";

! function(root, factory) {
    if ("function" === typeof define && define.amd) {
        define(function(require) {
            factory(require("devextreme/localization"))
        })
    } else {
        if ("object" === typeof module && module.exports) {
            factory(require("devextreme/localization"))
        } else {
            factory(DevExpress.localization)
        }
    }
}(this, function(localization) {
    localization.loadMessages({
        de: {
            Yes: "Ja",
            No: "Nein",
            Cancel: "Abbrechen",
            Clear: "L\xf6schen",
            Done: "Fertig",
            Loading: "Laden...",
            Select: "Ausw\xe4hlen...",
            Search: "Suchen...",
            Back: "Zur\xfcck",
            OK: "OK",
            "dxCollectionWidget-noDataText": "Keine Daten verf\xfcgbar",
            "dxDropDownEditor-selectLabel": "Ausw\xe4hlen",
            "validation-required": "Pflichtfeld",
            "validation-required-formatted": "{0} ist ein Pflichtfeld",
            "validation-numeric": "Der Wert muss eine Zahl sein",
            "validation-numeric-formatted": "{0} muss eine Zahl sein",
            "validation-range": "Der Wert ist nicht im g\xfcltigen Bereich",
            "validation-range-formatted": "{0} ist nicht im g\xfcltigen Bereich",
            "validation-stringLength": "Die L\xe4nge des Wertes ist nicht korrekt",
            "validation-stringLength-formatted": "Die L\xe4nge von {0} ist nicht korrekt",
            "validation-custom": "Der Wert ist ung\xfcltig",
            "validation-custom-formatted": "{0} ist ung\xfcltig",
            "validation-async": "Der Wert ist ung\xfcltig",
            "validation-async-formatted": "{0} ist ung\xfcltig",
            "validation-compare": "Der Wert ist unpassend",
            "validation-compare-formatted": "{0} ist unpassend",
            "validation-pattern": "Der Wert passt nicht zum Muster",
            "validation-pattern-formatted": "{0} passt nicht zum Muster",
            "validation-email": "Die Email-Adresse ist ung\xfcltig",
            "validation-email-formatted": "{0} ist ung\xfcltig",
            "validation-mask": "Der Wert ist ung\xfcltig",
            "dxLookup-searchPlaceholder": "Minimale Anzahl Zeichen: {0}",
            "dxList-pullingDownText": "Zum Aktualisieren nach unten ziehen",
            "dxList-pulledDownText": "Zum Aktualisieren loslassen",
            "dxList-refreshingText": "Aktualisiere...",
            "dxList-pageLoadingText": "Laden...",
            "dxList-nextButtonText": "Mehr",
            "dxList-selectAll": "Alles ausw\xe4hlen",
            "dxListEditDecorator-delete": "Entfernen",
            "dxListEditDecorator-more": "Mehr",
            "dxScrollView-pullingDownText": "Zum Aktualisieren nach unten ziehen",
            "dxScrollView-pulledDownText": "Zum Aktualisieren loslassen",
            "dxScrollView-refreshingText": "Aktualisiere...",
            "dxScrollView-reachBottomText": "Laden...",
            "dxDateBox-simulatedDataPickerTitleTime": "Zeit ausw\xe4hlen",
            "dxDateBox-simulatedDataPickerTitleDate": "Datum ausw\xe4hlen",
            "dxDateBox-simulatedDataPickerTitleDateTime": "Datum und Zeit ausw\xe4hlen",
            "dxDateBox-validation-datetime": "Der Wert muss ein Datum oder eine Uhrzeit sein",
            "dxFileUploader-selectFile": "Datei ausw\xe4hlen",
            "dxFileUploader-dropFile": "oder hierher ziehen",
            "dxFileUploader-bytes": "Bytes",
            "dxFileUploader-kb": "kb",
            "dxFileUploader-Mb": "Mb",
            "dxFileUploader-Gb": "Gb",
            "dxFileUploader-upload": "Hochladen",
            "dxFileUploader-uploaded": "Hochgeladen",
            "dxFileUploader-readyToUpload": "Bereit zum hochladen",
            "dxFileUploader-uploadAbortedMessage": "Upload abgebrochen",
            "dxFileUploader-uploadFailedMessage": "Fehler beim hochladen",
            "dxFileUploader-invalidFileExtension": "Unzul\xe4ssiger Dateityp",
            "dxFileUploader-invalidMaxFileSize": "Datei ist zu gro\xdf",
            "dxFileUploader-invalidMinFileSize": "Datei ist zu klein",
            "dxRangeSlider-ariaFrom": "Von",
            "dxRangeSlider-ariaTill": "Bis",
            "dxSwitch-switchedOnText": "EIN",
            "dxSwitch-switchedOffText": "AUS",
            "dxForm-optionalMark": "optional",
            "dxForm-requiredMessage": "{0} ist ein Pflichtfeld",
            "dxNumberBox-invalidValueMessage": "Der Wert muss eine Zahl sein",
            "dxNumberBox-noDataText": "Keine Daten",
            "dxDataGrid-columnChooserTitle": "Spaltenauswahl",
            "dxDataGrid-columnChooserEmptyText": "Ziehen Sie Spalten hierhin, um sie zu verstecken",
            "dxDataGrid-groupContinuesMessage": "Weiter auf der n\xe4chsten Seite",
            "dxDataGrid-groupContinuedMessage": "Weiter von der vorherigen Seite",
            "dxDataGrid-groupHeaderText": "Nach dieser Spalte gruppieren",
            "dxDataGrid-ungroupHeaderText": "Gruppierung entfernen",
            "dxDataGrid-ungroupAllText": "Alle Gruppierungen entfernen",
            "dxDataGrid-editingEditRow": "Bearbeiten",
            "dxDataGrid-editingSaveRowChanges": "Speichern",
            "dxDataGrid-editingCancelRowChanges": "Abbrechen",
            "dxDataGrid-editingDeleteRow": "Entfernen",
            "dxDataGrid-editingUndeleteRow": "Wiederherstellen",
            "dxDataGrid-editingConfirmDeleteMessage": "Sind Sie sicher, dass Sie diesen Datensatz l\xf6schen wollen?",
            "dxDataGrid-validationCancelChanges": "\xc4nderungen verwerfen",
            "dxDataGrid-groupPanelEmptyText": "Ziehen Sie eine Spalte hierhin, um danach zu gruppieren",
            "dxDataGrid-noDataText": "Keine Daten",
            "dxDataGrid-searchPanelPlaceholder": "Suchen...",
            "dxDataGrid-filterRowShowAllText": "(Alle)",
            "dxDataGrid-filterRowResetOperationText": "Zur\xfccksetzen",
            "dxDataGrid-filterRowOperationEquals": "Ist gleich",
            "dxDataGrid-filterRowOperationNotEquals": "Ist nicht gleich",
            "dxDataGrid-filterRowOperationLess": "Kleiner als",
            "dxDataGrid-filterRowOperationLessOrEquals": "Kleiner oder gleich",
            "dxDataGrid-filterRowOperationGreater": "Gr\xf6\xdfer als",
            "dxDataGrid-filterRowOperationGreaterOrEquals": "Gr\xf6\xdfer oder gleich",
            "dxDataGrid-filterRowOperationStartsWith": "Beginnt mit",
            "dxDataGrid-filterRowOperationContains": "Enth\xe4lt",
            "dxDataGrid-filterRowOperationNotContains": "Enth\xe4lt nicht",
            "dxDataGrid-filterRowOperationEndsWith": "Endet mit",
            "dxDataGrid-filterRowOperationBetween": "Zwischen",
            "dxDataGrid-filterRowOperationBetweenStartText": "Anfang",
            "dxDataGrid-filterRowOperationBetweenEndText": "Ende",
            "dxDataGrid-applyFilterText": "Filter anwenden",
            "dxDataGrid-trueText": "wahr",
            "dxDataGrid-falseText": "falsch",
            "dxDataGrid-sortingAscendingText": "Aufsteigend sortieren",
            "dxDataGrid-sortingDescendingText": "Absteigend sortieren",
            "dxDataGrid-sortingClearText": "Sortierung aufheben",
            "dxDataGrid-editingSaveAllChanges": "\xc4nderungen speichern",
            "dxDataGrid-editingCancelAllChanges": "\xc4nderungen verwerfen",
            "dxDataGrid-editingAddRow": "Neue Zeile",
            "dxDataGrid-summaryMin": "Min: {0}",
            "dxDataGrid-summaryMinOtherColumn": "Minimum von {1} ist {0}",
            "dxDataGrid-summaryMax": "Max: {0}",
            "dxDataGrid-summaryMaxOtherColumn": "Maximum von {1} ist {0}",
            "dxDataGrid-summaryAvg": "\xd8: {0}",
            "dxDataGrid-summaryAvgOtherColumn": "Durchschnitt von {1} ist {0}",
            "dxDataGrid-summarySum": "Summe: {0}",
            "dxDataGrid-summarySumOtherColumn": "Summe von {1} ist {0}",
            "dxDataGrid-summaryCount": "Anzahl: {0}",
            "dxDataGrid-columnFixingFix": "Fixieren",
            "dxDataGrid-columnFixingUnfix": "L\xf6sen",
            "dxDataGrid-columnFixingLeftPosition": "Nach links",
            "dxDataGrid-columnFixingRightPosition": "Nach rechts",
            "dxDataGrid-exportTo": "Exportieren",
            "dxDataGrid-exportToExcel": "Exportieren als Excel-Datei",
            "dxDataGrid-exporting": "Exportieren ...",
            "dxDataGrid-excelFormat": "Excel-Datei",
            "dxDataGrid-selectedRows": "Ausgew\xe4hlte Zeilen",
            "dxDataGrid-exportAll": "Alle Daten exportieren",
            "dxDataGrid-exportSelectedRows": "Ausgew\xe4hlte Zeilen exportieren",
            "dxDataGrid-headerFilterEmptyValue": "(Leerwerte)",
            "dxDataGrid-headerFilterOK": "OK",
            "dxDataGrid-headerFilterCancel": "Abbrechen",
            "dxDataGrid-ariaAdaptiveCollapse": "Zus\xe4tzliche Spalten verstecken",
            "dxDataGrid-ariaAdaptiveExpand": "Zus\xe4tzliche Spalten anzeigen",
            "dxDataGrid-ariaColumn": "Spalte",
            "dxDataGrid-ariaValue": "Wert",
            "dxDataGrid-ariaFilterCell": "Filterzelle",
            "dxDataGrid-ariaCollapse": "Zusammenklappen",
            "dxDataGrid-ariaExpand": "Aufklappen",
            "dxDataGrid-ariaDataGrid": "Datentabelle",
            "dxDataGrid-ariaSearchInGrid": "Suchen in der Datentabelle",
            "dxDataGrid-ariaSelectAll": "Alle ausw\xe4hlen",
            "dxDataGrid-ariaSelectRow": "Zeile ausw\xe4hlen",
            "dxDataGrid-ariaToolbar": "Symbolleiste der Datentabelle",
            "dxDataGrid-filterBuilderPopupTitle": "Filter-Generator",
            "dxDataGrid-filterPanelCreateFilter": "Filter erzeugen",
            "dxDataGrid-filterPanelClearFilter": "Zur\xfccksetzen",
            "dxDataGrid-filterPanelFilterEnabledHint": "Filter aktivieren",
            "dxTreeList-ariaTreeList": "Strukturliste",
            "dxTreeList-ariaSearchInGrid": "Suchen in der Strukturliste",
            "dxTreeList-ariaToolbar": "Symbolleiste der Strukturliste",
            "dxTreeList-editingAddRowToNode": "Hinzuf\xfcgen",
            "dxPager-infoText": "Seite {0} von {1} ({2} Elemente)",
            "dxPager-pagesCountText": "von",
            "dxPager-pageSizesAllText": "Alle",
            "dxPivotGrid-grandTotal": "Gesamt",
            "dxPivotGrid-total": "{0} Gesamt",
            "dxPivotGrid-fieldChooserTitle": "Feldauswahl",
            "dxPivotGrid-showFieldChooser": "Feldauswahl anzeigen",
            "dxPivotGrid-expandAll": "Alle aufklappen",
            "dxPivotGrid-collapseAll": "Alle zusammenklappen",
            "dxPivotGrid-sortColumnBySummary": '"{0}" nach dieser Spalte sortieren',
            "dxPivotGrid-sortRowBySummary": '"{0}" nach dieser Zeile sortieren',
            "dxPivotGrid-removeAllSorting": "Sortierungen entfernen",
            "dxPivotGrid-dataNotAvailable": "Entf.",
            "dxPivotGrid-rowFields": "Zeilenfelder",
            "dxPivotGrid-columnFields": "Spaltenfelder",
            "dxPivotGrid-dataFields": "Datenfelder",
            "dxPivotGrid-filterFields": "Filterfelder",
            "dxPivotGrid-allFields": "Alle Felder",
            "dxPivotGrid-columnFieldArea": "Spaltenfelder hierher ziehen",
            "dxPivotGrid-dataFieldArea": "Datenfelder hierher ziehen",
            "dxPivotGrid-rowFieldArea": "Zeilenfelder hierher ziehen",
            "dxPivotGrid-filterFieldArea": "Filterfelder hierher ziehen",
            "dxScheduler-editorLabelTitle": "Betreff",
            "dxScheduler-editorLabelStartDate": "Anfangszeit",
            "dxScheduler-editorLabelEndDate": "Endzeit",
            "dxScheduler-editorLabelDescription": "Beschreibung",
            "dxScheduler-editorLabelRecurrence": "Wiederholen",
            "dxScheduler-openAppointment": "Termin \xf6ffnen",
            "dxScheduler-recurrenceNever": "Nie",
            "dxScheduler-recurrenceMinutely": "Min\xfctlich",
            "dxScheduler-recurrenceHourly": "St\xfcndlich",
            "dxScheduler-recurrenceDaily": "T\xe4glich",
            "dxScheduler-recurrenceWeekly": "W\xf6chentlich",
            "dxScheduler-recurrenceMonthly": "Monatlich",
            "dxScheduler-recurrenceYearly": "J\xe4hrlich",
            "dxScheduler-recurrenceRepeatEvery": "Wiederholen alle",
            "dxScheduler-recurrenceRepeatOn": "Wiederholen an",
            "dxScheduler-recurrenceEnd": "Wiederholungsende",
            "dxScheduler-recurrenceAfter": "Nach",
            "dxScheduler-recurrenceOn": "Am",
            "dxScheduler-recurrenceRepeatMinutely": "Minute(n)",
            "dxScheduler-recurrenceRepeatHourly": "Stunde(n)",
            "dxScheduler-recurrenceRepeatDaily": "Tag(e)",
            "dxScheduler-recurrenceRepeatWeekly": "Woche(n)",
            "dxScheduler-recurrenceRepeatMonthly": "Monat(e)",
            "dxScheduler-recurrenceRepeatYearly": "Jahr(e)",
            "dxScheduler-switcherDay": "Tag",
            "dxScheduler-switcherWeek": "Woche",
            "dxScheduler-switcherWorkWeek": "Arbeitswoche",
            "dxScheduler-switcherMonth": "Monat",
            "dxScheduler-switcherTimelineDay": "Zeitstrahl Tag",
            "dxScheduler-switcherTimelineWeek": "Zeitstrahl Woche",
            "dxScheduler-switcherTimelineWorkWeek": "Zeitstrahl Arbeitswoche",
            "dxScheduler-switcherTimelineMonth": "Zeitstrahl Monat",
            "dxScheduler-switcherAgenda": "Agenda",
            "dxScheduler-recurrenceRepeatOnDate": "am Datum",
            "dxScheduler-recurrenceRepeatCount": "Ereignisse",
            "dxScheduler-allDay": "Ganzt\xe4gig",
            "dxScheduler-confirmRecurrenceEditMessage": "M\xf6chten Sie nur diesen Termin bearbeiten, oder die gesamte Serie?",
            "dxScheduler-confirmRecurrenceDeleteMessage": "M\xf6chten Sie nur diesen Termin l\xf6schen, oder die gesamte Serie?",
            "dxScheduler-confirmRecurrenceEditSeries": "Serie bearbeiten",
            "dxScheduler-confirmRecurrenceDeleteSeries": "Serie l\xf6schen",
            "dxScheduler-confirmRecurrenceEditOccurrence": "Termin bearbeiten",
            "dxScheduler-confirmRecurrenceDeleteOccurrence": "Termin l\xf6schen",
            "dxScheduler-noTimezoneTitle": "Keine Zeitzone",
            "dxScheduler-moreAppointments": "{0} weitere",
            "dxCalendar-todayButtonText": "Heute",
            "dxCalendar-ariaWidgetName": "Kalendar",
            "dxColorView-ariaRed": "Rot",
            "dxColorView-ariaGreen": "Gr\xfcn",
            "dxColorView-ariaBlue": "Blau",
            "dxColorView-ariaAlpha": "Transparenz",
            "dxColorView-ariaHex": "Farbwert",
            "dxTagBox-selected": "{0} ausgew\xe4hlt",
            "dxTagBox-allSelected": "Alle ausgew\xe4hlt ({0})",
            "dxTagBox-moreSelected": "{0} weitere",
            "vizExport-printingButtonText": "Drucken",
            "vizExport-titleMenuText": "Export/Druck",
            "vizExport-exportButtonText": "{0}-Datei",
            "dxFilterBuilder-and": "Und",
            "dxFilterBuilder-or": "Oder",
            "dxFilterBuilder-notAnd": "Nicht Und",
            "dxFilterBuilder-notOr": "Nicht Oder",
            "dxFilterBuilder-addCondition": "Bedingung hinzuf\xfcgen",
            "dxFilterBuilder-addGroup": "Gruppe hinzuf\xfcgen",
            "dxFilterBuilder-enterValueText": "<Wert eingeben>",
            "dxFilterBuilder-filterOperationEquals": "Ist gleich",
            "dxFilterBuilder-filterOperationNotEquals": "Ist nicht gleich",
            "dxFilterBuilder-filterOperationLess": "Kleiner als",
            "dxFilterBuilder-filterOperationLessOrEquals": "Kleiner oder gleich",
            "dxFilterBuilder-filterOperationGreater": "Gr\xf6\xdfer als",
            "dxFilterBuilder-filterOperationGreaterOrEquals": "Gr\xf6\xdfer oder gleich",
            "dxFilterBuilder-filterOperationStartsWith": "Beginnt mit",
            "dxFilterBuilder-filterOperationContains": "Enth\xe4lt",
            "dxFilterBuilder-filterOperationNotContains": "Enth\xe4lt nicht",
            "dxFilterBuilder-filterOperationEndsWith": "Endet mit",
            "dxFilterBuilder-filterOperationIsBlank": "Ist leer",
            "dxFilterBuilder-filterOperationIsNotBlank": "Ist nicht leer",
            "dxFilterBuilder-filterOperationBetween": "Zwischen",
            "dxFilterBuilder-filterOperationAnyOf": "Ist enthalten in",
            "dxFilterBuilder-filterOperationNoneOf": "Ist nicht enthalten in",
            "dxHtmlEditor-dialogColorCaption": "Schriftfarbe \xe4ndern",
            "dxHtmlEditor-dialogBackgroundCaption": "Hintergrundfarbe \xe4ndern",
            "dxHtmlEditor-dialogLinkCaption": "Link hinzuf\xfcgen",
            "dxHtmlEditor-dialogLinkUrlField": "URL",
            "dxHtmlEditor-dialogLinkTextField": "Text",
            "dxHtmlEditor-dialogLinkTargetField": "Link in neuem Fenster \xf6ffnen",
            "dxHtmlEditor-dialogImageCaption": "Bild hinzuf\xfcgen",
            "dxHtmlEditor-dialogImageUrlField": "URL",
            "dxHtmlEditor-dialogImageAltField": "Alternativer Text",
            "dxHtmlEditor-dialogImageWidthField": "Breite (px)",
            "dxHtmlEditor-dialogImageHeightField": "Bildh\xf6he (px)",
            "dxHtmlEditor-dialogInsertTableRowsField": "Zeilen",
            "dxHtmlEditor-dialogInsertTableColumnsField": "Spalten",
            "dxHtmlEditor-dialogInsertTableCaption": "Tabelle einf\xfcgen",
            "dxHtmlEditor-heading": "\xdcberschrift",
            "dxHtmlEditor-normalText": "Normaler Text",
            "dxFileManager-newDirectoryName": "Ohne Titel",
            "dxFileManager-rootDirectoryName": "Dateien",
            "dxFileManager-errorNoAccess": "Zugriff verweigert. Die Operation kann nicht durchgef\xfchrt werden.",
            "dxFileManager-errorDirectoryExistsFormat": "Ordner {0} existiert bereits.",
            "dxFileManager-errorFileExistsFormat": "Datei {0} existiert bereits.",
            "dxFileManager-errorFileNotFoundFormat": "Datei {0} wurde nicht gefunden.",
            "dxFileManager-errorDirectoryNotFoundFormat": "Verzeichnis '{0}' nicht gefunden.",
            "dxFileManager-errorWrongFileExtension": "Dateierweiterung ist nicht erlaubt.",
            "dxFileManager-errorMaxFileSizeExceeded": "Die Dateigr\xf6\xdfe \xfcbersteigt die maximal erlaubte Gr\xf6\xdfe.",
            "dxFileManager-errorInvalidSymbols": "Der Dateiname enth\xe4lt ung\xfcltige Zeichen.",
            "dxFileManager-errorDefault": "Unbekannter Fehler",
            "dxFileManager-errorDirectoryOpenFailed": "Das Verzeichnis kann nicht ge\xf6ffnet werden",
            "dxFileManager-commandCreate": "Neues Verzeichnis",
            "dxFileManager-commandRename": "Umbenennen",
            "dxFileManager-commandMove": "Verschieben nach",
            "dxFileManager-commandCopy": "Kopieren nach",
            "dxFileManager-commandDelete": "L\xf6schen",
            "dxFileManager-commandDownload": "Herunterladen",
            "dxFileManager-commandUpload": "Dateien hochladen",
            "dxFileManager-commandRefresh": "Aktualisieren",
            "dxFileManager-commandThumbnails": "Miniaturansicht",
            "dxFileManager-commandDetails": "Detailansicht",
            "dxFileManager-commandClearSelection": "Auswahl aufheben",
            "dxFileManager-commandShowNavPane": "Navigationsbereich ein-/ausschalten",
            "dxFileManager-dialogDirectoryChooserMoveTitle": "Verschieben nach",
            "dxFileManager-dialogDirectoryChooserMoveButtonText": "Verschieben",
            "dxFileManager-dialogDirectoryChooserCopyTitle": "Kopieren nach",
            "dxFileManager-dialogDirectoryChooserCopyButtonText": "Kopieren",
            "dxFileManager-dialogRenameItemTitle": "Umbenennen",
            "dxFileManager-dialogRenameItemButtonText": "Speichern",
            "dxFileManager-dialogCreateDirectoryTitle": "Neues Verzeichnis",
            "dxFileManager-dialogCreateDirectoryButtonText": "Erstellen",
            "dxFileManager-dialogDeleteItemTitle": "L\xf6schen",
            "dxFileManager-dialogDeleteItemButtonText": "L\xf6schen",
            "dxFileManager-dialogDeleteItemSingleItemConfirmation": "Sind Sie sicher, dass Sie {0} l\xf6schen m\xf6chten?",
            "dxFileManager-dialogDeleteItemMultipleItemsConfirmation": "Sind Sie sicher, dass Sie {0} Elemente l\xf6schen m\xf6chten?",
            "dxFileManager-dialogButtonCancel": "Abbrechen",
            "dxFileManager-editingCreateSingleItemProcessingMessage": "Ein Verzeichnis wird in {0} erstellt",
            "dxFileManager-editingCreateSingleItemSuccessMessage": "Ein Verzeichnis wurde in {0} erstellt",
            "dxFileManager-editingCreateSingleItemErrorMessage": "Verzeichnis wurde nicht erstellt",
            "dxFileManager-editingCreateCommonErrorMessage": "Verzeichnis wurde nicht erstellt",
            "dxFileManager-editingRenameSingleItemProcessingMessage": "Ein Element in {0} wird umbenannt",
            "dxFileManager-editingRenameSingleItemSuccessMessage": "Ein Element in {0} wurde umbenannt",
            "dxFileManager-editingRenameSingleItemErrorMessage": "Element wurde nicht umbenannt",
            "dxFileManager-editingRenameCommonErrorMessage": "Element wurde nicht umbenannt",
            "dxFileManager-editingDeleteSingleItemProcessingMessage": "Ein Element aus {0} wird gel\xf6scht",
            "dxFileManager-editingDeleteMultipleItemsProcessingMessage": "{0} Elemente aus {1} werden gel\xf6scht",
            "dxFileManager-editingDeleteSingleItemSuccessMessage": "Ein Element aus {0} wurde gel\xf6scht",
            "dxFileManager-editingDeleteMultipleItemsSuccessMessage": "{0} Elemente aus {1} wurden gel\xf6scht",
            "dxFileManager-editingDeleteSingleItemErrorMessage": "Element wurde nicht gel\xf6scht",
            "dxFileManager-editingDeleteMultipleItemsErrorMessage": "{0} Elemente wurden nicht gel\xf6scht",
            "dxFileManager-editingDeleteCommonErrorMessage": "Einige Elemente wurden nicht gel\xf6scht",
            "dxFileManager-editingMoveSingleItemProcessingMessage": "Ein Element wird nach {0} verschoben",
            "dxFileManager-editingMoveMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} verschoben",
            "dxFileManager-editingMoveSingleItemSuccessMessage": "Ein Element wurde nach {0} verschoben",
            "dxFileManager-editingMoveMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} verschoben",
            "dxFileManager-editingMoveSingleItemErrorMessage": "Element wurde nicht verschoben",
            "dxFileManager-editingMoveMultipleItemsErrorMessage": "{0} Elemente wurden nicht verschoben",
            "dxFileManager-editingMoveCommonErrorMessage": "Einige Elemente wurden nicht verschoben",
            "dxFileManager-editingCopySingleItemProcessingMessage": "Ein Element wird nach {0} kopiert",
            "dxFileManager-editingCopyMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} kopiert",
            "dxFileManager-editingCopySingleItemSuccessMessage": "Ein Element wurde nach {0} kopiert",
            "dxFileManager-editingCopyMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} kopiert",
            "dxFileManager-editingCopySingleItemErrorMessage": "Element wurde nicht kopiert",
            "dxFileManager-editingCopyMultipleItemsErrorMessage": "{0} Elemente wurden nicht kopiert",
            "dxFileManager-editingCopyCommonErrorMessage": "Einige Elemente wurden nicht kopiert",
            "dxFileManager-editingUploadSingleItemProcessingMessage": "Ein Element wird nach {0} hochgeladen",
            "dxFileManager-editingUploadMultipleItemsProcessingMessage": "{0} Elemente werden nach {1} hochgeladen",
            "dxFileManager-editingUploadSingleItemSuccessMessage": "Ein Element wurde nach {0} hochgeladen",
            "dxFileManager-editingUploadMultipleItemsSuccessMessage": "{0} Elemente wurden nach {1} hochgeladen",
            "dxFileManager-editingUploadSingleItemErrorMessage": "Element wurde nicht hochgeladen",
            "dxFileManager-editingUploadMultipleItemsErrorMessage": "{0} Elemente wurden nicht hochgeladen",
            "dxFileManager-editingUploadCanceledMessage": "Abgebrochen",
            "dxFileManager-listDetailsColumnCaptionName": "Name",
            "dxFileManager-listDetailsColumnCaptionDateModified": "Zuletzt ge\xe4ndert am",
            "dxFileManager-listDetailsColumnCaptionFileSize": "Dateigr\xf6\xdfe",
            "dxFileManager-listThumbnailsTooltipTextSize": "Gr\xf6\xdfe",
            "dxFileManager-listThumbnailsTooltipTextDateModified": "Zuletzt ge\xe4ndert am",
            "dxFileManager-notificationProgressPanelTitle": "Fortschritt",
            "dxFileManager-notificationProgressPanelEmptyListText": "Keine Vorg\xe4nge",
            "dxFileManager-notificationProgressPanelOperationCanceled": "Abgebrochen",
            "dxDiagram-categoryGeneral": "Allgemein",
            "dxDiagram-categoryFlowchart": "Flussdiagramm",
            "dxDiagram-categoryOrgChart": "Organisationsdiagramm",
            "dxDiagram-categoryContainers": "Container",
            "dxDiagram-categoryCustom": "Benutzerdefiniert",
            "dxDiagram-commandExportToSvg": "Export als SVG",
            "dxDiagram-commandExportToPng": "Export als PNG",
            "dxDiagram-commandExportToJpg": "Export als JPEG",
            "dxDiagram-commandUndo": "R\xfcckg\xe4ngig",
            "dxDiagram-commandRedo": "Wiederherstellen",
            "dxDiagram-commandFontName": "Schriftartname",
            "dxDiagram-commandFontSize": "Schriftgr\xf6\xdfe",
            "dxDiagram-commandBold": "Fett",
            "dxDiagram-commandItalic": "Kursiv",
            "dxDiagram-commandUnderline": "Unterstrichen",
            "dxDiagram-commandTextColor": "Textfarbe",
            "dxDiagram-commandLineColor": "Linienfarbe",
            "dxDiagram-commandLineWidth": "Linienst\xe4rke",
            "dxDiagram-commandLineStyle": "Linienart",
            "dxDiagram-commandLineStyleSolid": "Durchgezogen",
            "dxDiagram-commandLineStyleDotted": "Gepunktet",
            "dxDiagram-commandLineStyleDashed": "Gestrichelt",
            "dxDiagram-commandFillColor": "F\xfcllfarbe",
            "dxDiagram-commandAlignLeft": "Linksb\xfcndig",
            "dxDiagram-commandAlignCenter": "Zentriert",
            "dxDiagram-commandAlignRight": "Rechtsb\xfcndig",
            "dxDiagram-commandConnectorLineType": "Konnektor Linienart",
            "dxDiagram-commandConnectorLineStraight": "Gerade",
            "dxDiagram-commandConnectorLineOrthogonal": "Rechtwinklig",
            "dxDiagram-commandConnectorLineStart": "Konnektor Linienanfang",
            "dxDiagram-commandConnectorLineEnd": "Konnektor Linienende",
            "dxDiagram-commandConnectorLineNone": "Keine",
            "dxDiagram-commandConnectorLineArrow": "Pfeil",
            "dxDiagram-commandFullscreen": "Vollbild",
            "dxDiagram-commandUnits": "Einheiten",
            "dxDiagram-commandPageSize": "Seitengr\xf6\xdfe",
            "dxDiagram-commandPageOrientation": "Seitenausrichtung",
            "dxDiagram-commandPageOrientationLandscape": "Querformat",
            "dxDiagram-commandPageOrientationPortrait": "Hochformat",
            "dxDiagram-commandPageColor": "Seitenfarbe",
            "dxDiagram-commandShowGrid": "Raster anzeigen",
            "dxDiagram-commandSnapToGrid": "Am Raster ausrichten",
            "dxDiagram-commandGridSize": "Rastergr\xf6\xdfe",
            "dxDiagram-commandZoomLevel": "Vergr\xf6\xdferungsstufe",
            "dxDiagram-commandAutoZoom": "Automatische Vergr\xf6\xdferung",
            "dxDiagram-commandFitToContent": "An Inhalt anpassen",
            "dxDiagram-commandFitToWidth": "An Breite anpassen",
            "dxDiagram-commandAutoZoomByContent": "Automatisch an Inhalt anpassen",
            "dxDiagram-commandAutoZoomByWidth": "Automatisch an Breite anpassen",
            "dxDiagram-commandSimpleView": "Einfache Ansicht",
            "dxDiagram-commandCut": "Ausschneiden",
            "dxDiagram-commandCopy": "Kopieren",
            "dxDiagram-commandPaste": "Einf\xfcgen",
            "dxDiagram-commandSelectAll": "Alles ausw\xe4hlen",
            "dxDiagram-commandDelete": "L\xf6schen",
            "dxDiagram-commandBringToFront": "In den Vordergrund",
            "dxDiagram-commandSendToBack": "In den Hintergrund",
            "dxDiagram-commandLock": "Sperren",
            "dxDiagram-commandUnlock": "Entsperren",
            "dxDiagram-commandInsertShapeImage": "Bild einf\xfcgen...",
            "dxDiagram-commandEditShapeImage": "Bild bearbeiten...",
            "dxDiagram-commandDeleteShapeImage": "Bild l\xf6schen",
            "dxDiagram-commandLayoutLeftToRight": "Von links nach rechts",
            "dxDiagram-commandLayoutRightToLeft": "Von rechts nach links",
            "dxDiagram-commandLayoutTopToBottom": "Von oben nach unten",
            "dxDiagram-commandLayoutBottomToTop": "Von unten nach oben",
            "dxDiagram-unitIn": "in",
            "dxDiagram-unitCm": "cm",
            "dxDiagram-unitPx": "px",
            "dxDiagram-dialogButtonOK": "OK",
            "dxDiagram-dialogButtonCancel": "Abbrechen",
            "dxDiagram-dialogInsertShapeImageTitle": "Bild einf\xfcgen",
            "dxDiagram-dialogEditShapeImageTitle": "Bild bearbeiten",
            "dxDiagram-dialogEditShapeImageSelectButton": "Bild ausw\xe4hlen",
            "dxDiagram-dialogEditShapeImageLabelText": "oder Datei hier ablegen",
            "dxDiagram-uiExport": "Export",
            "dxDiagram-uiProperties": "Eigenschaften",
            "dxDiagram-uiSettings": "Einstellungen",
            "dxDiagram-uiShowToolbox": "Toolbox anzeigen",
            "dxDiagram-uiSearch": "Suchen",
            "dxDiagram-uiStyle": "Stil",
            "dxDiagram-uiLayout": "Layout",
            "dxDiagram-uiLayoutTree": "Baum",
            "dxDiagram-uiLayoutLayered": "Mehrschichtig",
            "dxDiagram-uiDiagram": "Diagramm",
            "dxDiagram-uiText": "Text",
            "dxDiagram-uiObject": "Objekt",
            "dxDiagram-uiConnector": "Verbindung",
            "dxDiagram-uiPage": "Seite",
            "dxDiagram-shapeText": "Text",
            "dxDiagram-shapeRectangle": "Rechteck",
            "dxDiagram-shapeEllipse": "Ellipse",
            "dxDiagram-shapeCross": "Kreuz",
            "dxDiagram-shapeTriangle": "Dreieck",
            "dxDiagram-shapeDiamond": "Raute",
            "dxDiagram-shapeHeart": "Herz",
            "dxDiagram-shapePentagon": "F\xfcnfeck",
            "dxDiagram-shapeHexagon": "Sechseck",
            "dxDiagram-shapeOctagon": "Achteck",
            "dxDiagram-shapeStar": "Stern",
            "dxDiagram-shapeArrowLeft": "Pfeil nach links",
            "dxDiagram-shapeArrowUp": "Pfeil nach oben",
            "dxDiagram-shapeArrowRight": "Pfeil nach rechts",
            "dxDiagram-shapeArrowDown": "Pfeil nach unten",
            "dxDiagram-shapeArrowUpDown": "Pfeil nach oben und unten",
            "dxDiagram-shapeArrowLeftRight": "Pfeil nach links und rechts",
            "dxDiagram-shapeProcess": "Prozess",
            "dxDiagram-shapeDecision": "Entscheidung",
            "dxDiagram-shapeTerminator": "Abschluss",
            "dxDiagram-shapePredefinedProcess": "Vordefinierter Prozess",
            "dxDiagram-shapeDocument": "Dokument",
            "dxDiagram-shapeMultipleDocuments": "Mehrere Dokumente",
            "dxDiagram-shapeManualInput": "Manuelle Eingabe",
            "dxDiagram-shapePreparation": "Vorbereitung",
            "dxDiagram-shapeData": "Daten",
            "dxDiagram-shapeDatabase": "Datenbank",
            "dxDiagram-shapeHardDisk": "Festplatte",
            "dxDiagram-shapeInternalStorage": "Lokaler Speicher",
            "dxDiagram-shapePaperTape": "Lochstreifen",
            "dxDiagram-shapeManualOperation": "Manuelle Verarbeitung",
            "dxDiagram-shapeDelay": "Verz\xf6gerung",
            "dxDiagram-shapeStoredData": "Gespeicherte Daten",
            "dxDiagram-shapeDisplay": "Anzeige",
            "dxDiagram-shapeMerge": "Zusammenf\xfchren",
            "dxDiagram-shapeConnector": "Verbinder",
            "dxDiagram-shapeOr": "Oder",
            "dxDiagram-shapeSummingJunction": "Summierungsknoten",
            "dxDiagram-shapeContainerDefaultText": "Container",
            "dxDiagram-shapeVerticalContainer": "Vertikaler Container",
            "dxDiagram-shapeHorizontalContainer": "Horizontaler Container",
            "dxDiagram-shapeCardDefaultText": "Name der Person",
            "dxDiagram-shapeCardWithImageOnLeft": "Karte mit Bild links",
            "dxDiagram-shapeCardWithImageOnTop": "Karte mit Bild oben",
            "dxDiagram-shapeCardWithImageOnRight": "Karte mit Bild rechts",
            "dxGantt-dialogTitle": "Titel",
            "dxGantt-dialogStartTitle": "Beginn",
            "dxGantt-dialogEndTitle": "Ende",
            "dxGantt-dialogProgressTitle": "Fortschritt",
            "dxGantt-dialogResourcesTitle": "Ressourcen",
            "dxGantt-dialogResourceManagerTitle": "Ressourcen-Manager",
            "dxGantt-dialogTaskDetailsTitle": "Aufgabendetails",
            "dxGantt-dialogEditResourceListHint": "Ressourcenliste bearbeiten",
            "dxGantt-dialogEditNoResources": "Keine Ressourcen",
            "dxGantt-dialogButtonAdd": "Hinzuf\xfcgen",
            "dxGantt-contextMenuNewTask": "Neue Aufgabe",
            "dxGantt-contextMenuNewSubtask": "Neue Teilaufgabe",
            "dxGantt-contextMenuDeleteTask": "Aufgabe l\xf6schen",
            "dxGantt-contextMenuDeleteDependency": "Abh\xe4ngigkeit entfernen",
            "dxGantt-dialogTaskDeleteConfirmation": "Abh\xe4ngigkeiten und Teilaufgaben werden zusammen mit dieser Aufgabe gel\xf6scht. M\xf6chten Sie diese Aufgabe l\xf6schen?",
            "dxGantt-dialogDependencyDeleteConfirmation": "M\xf6chten Sie die Abh\xe4ngigkeit von der Aufgabe entfernen?",
            "dxGantt-dialogResourcesDeleteConfirmation": "Wenn Sie diese Ressource l\xf6schen, wird sie von allen Aufgaben entfernt. M\xf6chten Sie die Ressource l\xf6schen? Ressource: {0}",
            "dxGantt-dialogConstraintCriticalViolationMessage": "Die Aufgabe, die Sie verschieben m\xf6chten, ist mit einer zweiten Aufgabe durch eine Abh\xe4ngigkeit verbunden. Die \xc4nderung w\xfcrde gegen Abh\xe4ngigkeitsregeln verstossen. Wie m\xf6chten Sie fortfahren?",
            "dxGantt-dialogConstraintViolationMessage": "Die Aufgabe, die Sie verschieben m\xf6chten, ist mit einer zweiten Aufgabe durch eine Abh\xe4ngigkeit verbunden. Wie m\xf6chten Sie fortfahren?",
            "dxGantt-dialogCancelOperationMessage": "Vorgang abbrechen",
            "dxGantt-dialogDeleteDependencyMessage": "Abh\xe4ngigkeit l\xf6schen",
            "dxGantt-dialogMoveTaskAndKeepDependencyMessage": "Aufgabe verschieben und Abh\xe4ngigkeit beibehalten",
            "dxGantt-undo": "R\xfcckg\xe4ngig",
            "dxGantt-redo": "Wiederherstellen",
            "dxGantt-expandAll": "Alle erweitern",
            "dxGantt-collapseAll": "Alle reduzieren",
            "dxGantt-addNewTask": "Neue Aufgabe hinzuf\xfcgen",
            "dxGantt-deleteSelectedTask": "Ausgew\xe4hlte Aufgabe l\xf6schen",
            "dxGantt-zoomIn": "Vergr\xf6\xdfern",
            "dxGantt-zoomOut": "Verkleinern",
            "dxGantt-fullScreen": "Vollbildmodus"
        }
    })
});
