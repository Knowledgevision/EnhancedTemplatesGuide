/**
 * Design Helper v1.1
 * Alex Kieft
 * 4/17/15
 *
 * This script generates the HTML code that the HTML5 Player produces automatically
 * for the component elements in the template. The script depends on JQuery.
 *
 * Change log:
 * v1.1 - Updated to include assessments (4/17/15)
 * v1.0 - First version
 *
 * Usage:
 * <!-- Start: Design Helper -->
 *     <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
 *     <script src="http://dev.knowledgevision.com/scripts/design-helper-v1.js"></script>
 * <!-- End: Design Helper -->
 *
 */

$(document).ready(function(){

    // Load the default stylesheet
    $('head').append('<link rel="stylesheet" type="text/css" href="http://present.knowledgevision.com/player/HTML5/tmp/css/kvcss.css">');

    // Define templates to replace each custom KnowledgeVision component
    var componentTemplates = [
        {
            'element' : 'combo-player',
            'template' : '<div><div style="background-image: url(\'http://present.knowledgevision.com/player/HTML5/img/playButton.png\'); width: 100%; height: 100%;background-repeat: no-repeat; background-position: center; -webkit-transition: background-color 100ms linear; -moz-transition: background-color 100ms linear; -o-transition: background-color 100ms linear; -ms-transition: background-color 100ms linear; transition: background-color 100ms linear;)" onmouseover="(function(el){$(el).css(\'background-color\',\'rgba(0, 0, 0, 0.2)\');})(this)" onmouseout="(function(el){$(el).css(\'background-color\',\'rgba(0, 0, 0, 0)\');})(this)" onclick="$(\'.combo-player\').addClass(\'one-pixel\');$(\'.assessment\').show();"></div></div>',
            'className' : 'combo-player'
        },
        {
            'element' : 'attachments',
            'template' : '<ul><li class="attachments-item"><a href="#">Attachment File Name 1</a></li><li class="attachments-item"><a href="#">Attachment File Name 2</a></li><li class="attachments-item"><a href="#">Attachment File Name 3</a></li><li class="attachments-item"><a href="#">Attachment File Name 4</a></li><li class="attachments-item"><a href="#">Attachment File Name 5</a></li><li class="attachments-item"><a href="#">Attachment File Name 6</a></li><li class="attachments-item"><a href="#">Attachment File Name 7</a></li><li class="attachments-item"><a href="#">Attachment File Name 8</a></li><li class="attachments-item"><a href="#">Attachment File Name 9</a></li><li class="attachments-item"><a href="#">Attachment File Name 10</a></li><li class="attachments-item"><a href="#">Attachment File Name 11</a></li><li class="attachments-item"><a href="#">Attachment File Name 12</a></li><li class="attachments-item"><a href="#">Attachment File Name 13</a></li><li class="attachments-item"><a href="#">Attachment File Name 14</a></li><li class="attachments-item"><a href="#">Attachment File Name 15</a></li></ul>',
            'className' : 'attachments'
        },
        {
            'element' : 'chapter-navigator',
            'template' : '<ul><li class="chapter-navigator-item-selected"><a href="#">Chapter Title 1</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 2</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 3</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 4</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 5</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 6</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 7</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 8</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 9</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 10</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 11</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 12</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 13</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 14</a></li><li class="chapter-navigator-item"><a href="#">Chapter Title 15</a></li></ul>',
            'className' : 'chapter-navigator'
        },
        {
            'element' : 'footnotes',
            'template' : '<div>Footnotes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut justo est. Curabitur a vehicula orci. Morbi ligula tortor, sodales ac rhoncus eget, vestibulum et velit. Donec vitae rhoncus risus.<p></p><p>Sample paragraph text: Nullam at dapibus justo. Aenean et vehicula nunc, in ornare odio. Curabitur rhoncus lorem a neque tincidunt luctus.</p><i>Sample italicized text.</i> <b>Sample bold text.</b><p></p><a href="#">Sample link text.</a> <b><a href="#">Sample bold link text.</a></b><p></p><ul><li>Sample list item 1</li><li>Sample list item 2</li><li>Sample list item 3</li></ul></div>',
            'className' : 'footnotes'
        },
        {
            'element' : 'playlist-navigator',
            'template' : '<ul><li class="playlist-navigator-item playlist-navigator-item-selected"><a href="#">Video Display Name 1</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 2</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 3</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 4</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 5</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 6</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 7</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 8</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 9</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 10</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 11</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 12</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 13</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 14</a></li><li class="playlist-navigator-item"><a href="#">Video Display Name 15</a></li></ul>',
            'className' : 'playlist-navigator'
        },
        {
            'element' : 'presentation-description',
            'template' : '<p>Presentation description: Aenean venenatis enim ut scelerisque pretium. Donec quam urna, molestie non odio at, cursus iaculis orci. Cras semper ullamcorper risus. Morbi a tortor vel velit convallis pretium et et neque. Nulla sagittis mi laoreet nulla scelerisque, nec laoreet massa volutpat. Maecenas sed erat vel nunc rhoncus fringilla.</p>',
            'className' : 'presentation-description'
        },
        {
            'element' : 'presentation-title',
            'template' : '<div>Presentation Title: Lorem Ipsum Dolor Sit Amet</div>',
            'className' : 'presentation-title'
        },
        {
            'element' : 'thumbnail-navigator',
            'template' : '<div><img class="thumbnail-navigator-item selected" id="0" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide01.png"><img class="thumbnail-navigator-item" id="2" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide02.png"><img class="thumbnail-navigator-item" id="3" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide03.png"><img class="thumbnail-navigator-item" id="4" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide04.png"><img class="thumbnail-navigator-item" id="5" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide05.png"><img class="thumbnail-navigator-item" id="6" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide06.png"><img class="thumbnail-navigator-item" id="7" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide07.png"><img class="thumbnail-navigator-item" id="8" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide08.png"><img class="thumbnail-navigator-item" id="9" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide09.png"><img class="thumbnail-navigator-item" id="10" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide10.png"><img class="thumbnail-navigator-item" id="11" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide11.png"><img class="thumbnail-navigator-item" id="12" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide12.png"><img class="thumbnail-navigator-item" id="13" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide13.png"><img class="thumbnail-navigator-item" id="14" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide14.png"><img class="thumbnail-navigator-item" id="15" src="http://present.knowledgevision.com/account/demo11/assets/slides/HyperNet@1392236199772/file/Slide15.png"></div>',
            'className' : 'thumbnail-navigator'
        },
        {
            'element' : 'transcript',
            'template' : '<div><span data-time="0" class="transcript_0">Transcript: </span><span data-time="0" class="transcript_0 selected">Lorem</span><span data-time="0" class="transcript_0">ipsum</span><span data-time="0" class="transcript_0">dolor</span><span data-time="0" class="transcript_0">sit</span><span data-time="0" class="transcript_0">amet,</span><span data-time="0" class="transcript_0">consectetur</span><span data-time="0" class="transcript_0">adipiscing</span><span data-time="0" class="transcript_0">elit.</span><span data-time="0" class="transcript_0">In</span><span data-time="0" class="transcript_0">ut</span><span data-time="0" class="transcript_0">justo</span><span data-time="0" class="transcript_0">est.</span><span data-time="0" class="transcript_0">Curabitur</span><span data-time="0" class="transcript_0">a</span><span data-time="0" class="transcript_0">vehicula</span><span data-time="0" class="transcript_0">orci.</span><span data-time="0" class="transcript_0">Morbi</span><span data-time="0" class="transcript_0">ligula</span><span data-time="0" class="transcript_0">tortor,</span><span data-time="0" class="transcript_0">sodales</span><span data-time="0" class="transcript_0">ac</span><span data-time="0" class="transcript_0">rhoncus</span><span data-time="0" class="transcript_0">eget,</span><span data-time="0" class="transcript_0">vestibulum</span><span data-time="0" class="transcript_0">et</span><span data-time="0" class="transcript_0">velit.</span><span data-time="0" class="transcript_0">Donec</span><span data-time="0" class="transcript_0">vitae</span><span data-time="0" class="transcript_0">rhoncus</span><span data-time="0" class="transcript_0">risus.</span><span data-time="0" class="transcript_0">Nullam</span><span data-time="0" class="transcript_0">at</span><span data-time="0" class="transcript_0">dapibus</span><span data-time="0" class="transcript_0">justo.</span><span data-time="0" class="transcript_0">Aenean</span><span data-time="0" class="transcript_0">et</span><span data-time="0" class="transcript_0">vehicula</span><span data-time="0" class="transcript_0">nunc,</span><span data-time="0" class="transcript_0">in</span><span data-time="0" class="transcript_0">ornare</span><span data-time="0" class="transcript_0">odio.</span><span data-time="0" class="transcript_0">Curabitur</span><span data-time="0" class="transcript_0">rhoncus</span><span data-time="0" class="transcript_0">lorem</span><span data-time="0" class="transcript_0">a</span><span data-time="0" class="transcript_0">neque</span><span data-time="0" class="transcript_0">tincidunt</span><span data-time="0" class="transcript_0">luctus.</span><span data-time="0" class="transcript_0">Quisque</span><span data-time="0" class="transcript_0">et</span><span data-time="0" class="transcript_0">lacus</span><span data-time="0" class="transcript_0">lacinia,</span><span data-time="0" class="transcript_0">tincidunt</span><span data-time="0" class="transcript_0">neque</span><span data-time="0" class="transcript_0">ac,</span><span data-time="0" class="transcript_0">rhoncus</span><span data-time="0" class="transcript_0">massa.</span><span data-time="0" class="transcript_0">Duis</span><span data-time="0" class="transcript_0">facilisis</span><span data-time="0" class="transcript_0">molestie</span><span data-time="0" class="transcript_0">metus,</span><span data-time="0" class="transcript_0">vitae</span><span data-time="0" class="transcript_0">porta</span><span data-time="0" class="transcript_0">diam</span><span data-time="0" class="transcript_0">molestie</span><span data-time="0" class="transcript_0">vitae.</span><p></p><span data-time="0" class="transcript_0">Duis</span><span data-time="0" class="transcript_0">scelerisque</span><span data-time="0" class="transcript_0">mi</span><span data-time="0" class="transcript_0">dui,</span><span data-time="0" class="transcript_0">sed</span><span data-time="0" class="transcript_0">vulputate</span><span data-time="0" class="transcript_0">diam</span><span data-time="0" class="transcript_0">imperdiet</span><span data-time="0" class="transcript_0">vel.</span><span data-time="0" class="transcript_0">Vestibulum</span><span data-time="0" class="transcript_0">iaculis</span><span data-time="0" class="transcript_0">scelerisque</span><span data-time="0" class="transcript_0">odio,</span><span data-time="0" class="transcript_0">eu</span><span data-time="0" class="transcript_0">ullamcorper</span><span data-time="0" class="transcript_0">felis</span><span data-time="0" class="transcript_0">accumsan</span><span data-time="0" class="transcript_0">sit</span><span data-time="0" class="transcript_0">amet.</span><span data-time="0" class="transcript_0">In</span><span data-time="0" class="transcript_0">hendrerit,</span><span data-time="0" class="transcript_0">tellus</span><span data-time="0" class="transcript_0">et</span><span data-time="0" class="transcript_0">faucibus</span><span data-time="0" class="transcript_0">volutpat,</span><span data-time="0" class="transcript_0">metus</span><span data-time="0" class="transcript_0">quam</span><span data-time="0" class="transcript_0">laoreet</span><span data-time="0" class="transcript_0">sem,</span><span data-time="0" class="transcript_0">faucibus</span><span data-time="0" class="transcript_0">rutrum</span><span data-time="0" class="transcript_0">sem</span><span data-time="0" class="transcript_0">felis</span><span data-time="0" class="transcript_0">id</span><span data-time="0" class="transcript_0">neque.</span><span data-time="0" class="transcript_0">In</span><span data-time="0" class="transcript_0">viverra</span><span data-time="0" class="transcript_0">ac</span><span data-time="0" class="transcript_0">sem</span><span data-time="0" class="transcript_0">eu</span><span data-time="0" class="transcript_0">ornare.</span><span data-time="0" class="transcript_0">Vestibulum</span><span data-time="0" class="transcript_0">vestibulum</span><span data-time="0" class="transcript_0">orci</span><span data-time="0" class="transcript_0">consequat</span><span data-time="0" class="transcript_0">est</span><span data-time="0" class="transcript_0">laoreet</span><span data-time="0" class="transcript_0">iaculis.</span><span data-time="0" class="transcript_0">In</span><span data-time="0" class="transcript_0">elit</span><span data-time="0" class="transcript_0">enim,</span><span data-time="0" class="transcript_0">pharetra</span><span data-time="0" class="transcript_0">eu</span><span data-time="0" class="transcript_0">nulla</span><span data-time="0" class="transcript_0">non,</span><span data-time="0" class="transcript_0">sollicitudin</span><span data-time="0" class="transcript_0">feugiat</span><span data-time="0" class="transcript_0">eros.</span><span data-time="0" class="transcript_0">Donec</span><span data-time="0" class="transcript_0">dolor</span><span data-time="0" class="transcript_0">nisi,</span><span data-time="0" class="transcript_0">commodo</span><span data-time="0" class="transcript_0">nec</span><span data-time="0" class="transcript_0">nisl</span><span data-time="0" class="transcript_0">ut,</span><span data-time="0" class="transcript_0">pellentesque</span><span data-time="0" class="transcript_0">pellentesque</span><span data-time="0" class="transcript_0">nisi.</span><span data-time="0" class="transcript_0">Vivamus</span><span data-time="0" class="transcript_0">mollis,</span><span data-time="0" class="transcript_0">neque</span><span data-time="0" class="transcript_0">eget</span><span data-time="0" class="transcript_0">accumsan</span><span data-time="0" class="transcript_0">vulputate,</span><span data-time="0" class="transcript_0">leo</span><span data-time="0" class="transcript_0">augue</span><span data-time="0" class="transcript_0">pretium</span><span data-time="0" class="transcript_0">nunc,</span><span data-time="0" class="transcript_0">eget</span><span data-time="0" class="transcript_0">tempor</span><span data-time="0" class="transcript_0">nisl</span><span data-time="0" class="transcript_0">ipsum</span><span data-time="0" class="transcript_0">ut</span><span data-time="0" class="transcript_0">tellus.</span><span data-time="0" class="transcript_0">Suspendisse</span><span data-time="0" class="transcript_0">convallis</span><span data-time="0" class="transcript_0">faucibus</span><span data-time="0" class="transcript_0">ornare.</span><span data-time="0" class="transcript_0">Nam</span><span data-time="0" class="transcript_0">eleifend</span><span data-time="0" class="transcript_0">tempus</span><span data-time="0" class="transcript_0">tincidunt.</span></div>',
            'className' : 'transcript'
        },
        {
            'element' : 'transcript-search',
            'template' : '<div><input type="text" placeholder="Search transcript..." onfocus="(function(el){$(el).next().css(\'display\',\'block\');})(this)" onblur="(function(el){$(el).next().css(\'display\',\'none\');})(this)"><ul class="typeahead dropdown-menu" style="display: none; top: 43px; left: 162px;"><li class="active"><a>00:14 - User <strong>Interface</strong> Engineering, and...</a></li><li><a>39:55 - command-line <strong>interface</strong> to a...</a></li><li><a>39:59 - user <strong>interface</strong> that no...</a></li><li><a>40:34 - user <strong>interface</strong> thing. It...</a></li></ul></div>',
            'className' : 'transcript-search'
        },
        {
            'element' : 'zoom-control',
            'template' : '<input type="range">',
            'className' : 'zoom-control'
        }
    ];

    // Define assessment template
    var assessment = {
        'element' : 'assessment',
        'template' : '<div class="assessment" id="assessment" onclick="$(\'.combo-player\').removeClass(\'one-pixel\');$(\'.assessment\').hide();" style="display: none"><style type="text/css">.question-number {width: 2em;float: left;}.question-number::after {content: ".";}.question-content {margin-left: 2em;}</style><div class="question-container container-fluid"><form role="form"><h3 class="question-title">Assessment Name</h3><div><div class="question-number">1</div><div class="question-content"><div class="question-text"><p><p>Question: Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut justo est. Curabitur a vehicula orci. Morbi ligula tortor, sodales ac rhoncus eget, vestibulum et velit. Donec vitae rhoncus risus?</p></p></div><div class="question-response form-group"><div class="well"><div class="radio"><label><input type="radio" value="2659045" name="question-response-options" class="question-response-options">A. Nullam at dapibus justo</label></div><div class="radio"><label><input type="radio" value="2659046" name="question-response-options" class="question-response-options">B: Aenean et vehicula nunc</label></div><div class="radio"><label><input type="radio" value="2659047" name="question-response-options" class="question-response-options">C: Curabitur rhoncus lorem a neque tincidunt luctus</label></div></div></div><div class="question-explanation form-group"><div role="alert" class="alert alert-success correct_explanation" style="display: none;">Correct</div><div role="alert" class="alert alert-danger incorrect_explanation" style="display: block;">Incorrect: Curabitur rhoncus lorem a neque tincidunt luctus</div><div role="alert" class="alert alert-danger server-error" style="display: none;"></div></div></div></div><div class="question-buttons form-group text-center"><button class="btn btn-primary submit-question" type="submit">Submit</button><button class="btn btn-primary get-next-question" type="submit" style="display: none;">Continue</button><button class="btn btn-primary skip-assessment" type="submit" style="display: none;">Skip Assessment</button><button class="btn btn-default skip-question" type="submit" style="display: none;">Skip</button></div></form></div></div>',
        'className' : 'assessment'
    }

    // Loop through custom components and replace each with the template
    $.each(componentTemplates, function(index, value){

        $(value.element).each(function(index) {

            var attributes = $(this).prop("attributes");
            var replacement = $(value.template);

            $.each(attributes, function() {
                replacement.attr(this.name, this.value);
            });

            replacement.addClass(value.className);

            // Add assessment after ComboPlayer
            if (value.element == "combo-player") {
                $(this).after(assessment.template);
            }

            $(this).replaceWith(replacement);

        });

    });

});