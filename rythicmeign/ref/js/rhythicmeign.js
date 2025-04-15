let rootURL = 'https://meta-glot.github.io/rythicmeign';

document.addEventListener("DOMContentLoaded", function(event) { /* begin "DOMContentLoaded" event */

    Vue.component( 'navbar', {
        template: `            
            <table width="1100" border="0" cellpadding="3" cellspacing="0" align="center" style="border:1px solid #151515;" bgcolor="#000000" class="opentable" id="navtable"> 
                <tbody>
                    <tr>
                        <td bgcolor="#141d26" align="left" height="35" width="78%">
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="House" title="House" href="${rootURL}" class="navheader">House</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Tasks" title="Tasks" href="https://meta-glot.github.io/rythicmeign" class="navheader">Tasks</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Domain" title="Domain" href="https://meta-glot.github.io/rythicmeign" class="navheader">Domain</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Sidon" title="Sidon" href="https://meta-glot.github.io/rythicmeign" class="navheader">Sidon</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Map" title="Map" href="https://meta-glot.github.io/rythicmeign" class="navheader">Map</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Battle" title="Battle" href="https://meta-glot.github.io/rythicmeign" class="navheader">Battle</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Community" title="Community" href="https://meta-glot.github.io/rythicmeign" class="navheader">Community (0)</a> &nbsp;&nbsp;&nbsp;&nbsp;
                            <a alt="Roleplay" title="Roleplay" href="https://meta-glot.github.io/rythicmeign" class="navheader">RP</a>
                        </td>
                        <td bgcolor="#141d26" align="right" height="35" width="22%">
                            <script type="text/javascript">
                                var auto_refresh = setInterval(
                                function () {
                                $('#loadicons').load('notifs3.php');
                                }, 20000); // refresh every 10000 milliseconds
                            </script>
                            <div align="center" id="container" style="overflow:auto; height:30px; width:220px; overflow-y:hidden; overflow-x:hidden;">
                            <div id="loadicons">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tbody>
                                        <tr>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv2" href="https://meta-glot.github.io/rythicmeign">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_news.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">
                                                            News
                                                        </font>
                                                    </div>
                                                </span>
                                            </a>
                                            <br>
                                            <small><font color="#000000">-</font></small>
                                        </td>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv" href="https://meta-glot.github.io/rythicmeign">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_global.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">Global</font>
                                                    </div>
                                                </span>
                                            </a>
                                            <br>
                                            <small><font color="#000000">-</font></small>
                                        </td>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv" href="https://meta-glot.github.io/rythicmeign">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_battle.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">Battles</font>
                                                    </div>
                                                </span>
                                            </a>
                                            <br>
                                            <small>New!</small> 
                                        </td>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv" href="https://meta-glot.github.io/rythicmeign">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_mail.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">Mail</font>
                                                    </div>
                                                </span>
                                            </a> 
                                            <br><small><font color="#000000">-</font></small>
                                        </td>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv" href="https://meta-glot.github.io/rythicmeign">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_settings.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">Settings</font>
                                                    </div>
                                                </span>
                                            </a> 
                                            <br>
                                            <small><font color="#000000">-</font></small>
                                        </td>
                                        <td width="17%" align="center" valign="top">
                                            <a class="texthoverdiv3" href="https://meta-glot.github.io/rythicmeign/index.html">
                                                <img border="0" src="../rythicmeign/ref/images/icon/n_mark.gif" width="30" height="30">
                                                <span>
                                                    <div align="left">
                                                        <font style="font-size:10px;">Help</font>
                                                    </div>
                                                </span>
                                            </a> 
                                            <br>
                                            <small><font color="#000000">-</font></small>
                                        </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        `,
        data() {
            return {
                locations: [],
            }
        }
    });

    new Vue({ el: '#rm' })

});
