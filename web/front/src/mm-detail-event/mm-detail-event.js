Polymer({
    is: 'mm-detail-event',
    properties: {},

    handleClickDetail(e) {
        e.preventDefault();
        gvc.goToPath('detail', {
            uri: window.encodeURIComponent(e.currentTarget.getAttribute('rel'))
        });
    },

    attached() {
        GVCarto.ready(() => {
            gvc.initElementGlobals(this);
        });
        // Raw values.
        $.extend(this, this.data.properties);
        //this.representedBy = this.data.representedBy;
        this.hasInterest = this.data.hasInterest;
        this.organizedBy = this.data.organizedBy;
        this.hasParticipant = this.data.properties.hasParticipant;
        this.hasSubject = this.data.hasSubject;

        //this.buildingTitle = gvc.buildings[this.data.properties.building].title;
        if (this.startDate) {
            let startDate = new Date(this.startDate);
            this.startDate = startDate.getDate() + '/' + (startDate.getMonth() + 1) + '/' + startDate.getFullYear() + ' ' + startDate.getHours() + ' H ' + startDate.getMinutes() + ' min';
        }
        if (this.endDate) {
            let endDate = new Date(this.endDate);
            this.endDate = endDate.getDate() + '/' + (endDate.getMonth() + 1) + '/' + endDate.getFullYear() + ' ' + endDate.getHours() + ' H ' + endDate.getMinutes() + ' min';
        }
    },

    onClickThematic(e){
        e.preventDefault();
        let searchThemeFilter = document.getElementById('searchThemeFilter');
        searchThemeFilter.value = e.target.rel;
        gvc.goSearch();
    }

});
