function fixDimentions () {
    function setEqualHeight (o) {
        o.outerHeight ( "auto" );
        var maxHeight = 0;
        o.each( function () {
            if( $( this ).outerHeight() > maxHeight ) {
                maxHeight = $( this ).outerHeight();
            }
        })
        o.outerHeight( maxHeight );
    }
    setEqualHeight( $( '.sub_text' ) );
    setEqualHeight( $( '.topContents' ) );
}

$( document ).ready( function () {
    fixDimentions ();
})

window.onresize = function () {
    fixDimentions ();
};