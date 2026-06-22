(function(api) {

    api.sectionConstructor['artist-art-gallery-upsell'] = api.Section.extend({
        attachEvents: function() {},
        isContextuallyActive: function() {
            return true;
        }
    });

})(wp.customize);