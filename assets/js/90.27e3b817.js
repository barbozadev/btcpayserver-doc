(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{676:function(t,s,a){"use strict";a.r(s);var e=a(26),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"forward-ports-with-a-reverse-ssh-tunnel"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#forward-ports-with-a-reverse-ssh-tunnel"}},[t._v("#")]),t._v(" Forward ports with a reverse SSH tunnel")]),t._v(" "),a("h2",{attrs:{id:"advantages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#advantages"}},[t._v("#")]),t._v(" Advantages")]),t._v(" "),a("ul",[a("li",[t._v("no port forwarding needed on the LAN of the host")]),t._v(" "),a("li",[t._v("encrypted connection")]),t._v(" "),a("li",[t._v("hides the IP of the host")])]),t._v(" "),a("h2",{attrs:{id:"requirements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirements"}},[t._v("#")]),t._v(" Requirements")]),t._v(" "),a("ul",[a("li",[t._v("a Virtual Private Server (VPS) - eg. a minimal package on Lunanode for ~3.5$/month")]),t._v(" "),a("li",[t._v("root access on the VPS - only root can forward ports under no. 1000")]),t._v(" "),a("li",[t._v("ssh access to the host computer (where the ports will be forwarded from)")])]),t._v(" "),a("h2",{attrs:{id:"setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setup"}},[t._v("#")]),t._v(" Setup")]),t._v(" "),a("h3",{attrs:{id:"on-the-host-computer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#on-the-host-computer"}},[t._v("#")]),t._v(" On the host computer")]),t._v(" "),a("p",[t._v("Check for an ssh public key:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/*.pub\n")])])]),a("p",[t._v("If there is none generate one (keep pressing ENTER):")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ssh-keygen -t rsa -b "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4096")]),t._v("\n")])])]),a("p",[t._v("Copy the ssh public key over to the VPS (fill in the "),a("code",[t._v("VPS_IP_ADDRESS")]),t._v(").\nYou will be prompted for the root password of the VPS.")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ssh-copy-id -i ~/.ssh/id_rsa.pub root@VPS_IP_ADDRESS\n")])])]),a("h3",{attrs:{id:"working-on-the-vps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#working-on-the-vps"}},[t._v("#")]),t._v(" Working on the VPS")]),t._v(" "),a("p",[t._v("Login as root or run:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("su")]),t._v(" -\n")])])]),a("p",[t._v("Edit the sshd config:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/ssh/sshd_config\n")])])]),a("p",[t._v("Make sure these entries are active (meaning there is no "),a("code",[t._v("#")]),t._v(" at the beggining of the line).\nAlternatively, you can just paste these on the end of the file:")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("RSAAuthentication yes\nPubkeyAuthentication yes\nGatewayPorts yes\nAllowTcpForwarding yes\nClientAliveInterval 60\n")])])]),a("p",[t._v("CTRL+O, ENTER to save, CTRL+X to exit.")]),t._v(" "),a("br"),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("You can lose access at this point if the sshd config is wrong. Please double-check!")])]),t._v(" "),a("p",[t._v("Restart the sshd service:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl restart sshd\n")])])]),a("h3",{attrs:{id:"back-to-the-host-computer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-to-the-host-computer"}},[t._v("#")]),t._v(" Back to the host computer")]),t._v(" "),a("h4",{attrs:{id:"set-up-a-systemd-service"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-systemd-service"}},[t._v("#")]),t._v(" Set up a systemd service")]),t._v(" "),a("p",[t._v("Create the service file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nano")]),t._v(" /etc/systemd/system/autossh-tunnel.service\n")])])]),a("p",[t._v("Paste the following and fill in the "),a("code",[t._v("VPS_IP_ADDRESS")]),t._v(".\nAdd or remove ports as required.")]),t._v(" "),a("div",{staticClass:"language-ini extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ini"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Unit]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("AutoSSH tunnel service")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("network.target")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Service]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Group")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("root")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("Environment")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v('"AUTOSSH_GATETIME=0"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v('/usr/bin/autossh -C -M 0 -v -N -o "ServerAliveInterval=60" -R 9735:localhost:9735 -R 443:localhost:443 -R 80:localhost:80 -R root@VPS_IP_ADDRESS')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("StandardOutput")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("journal")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[Install]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),t._v("multi-user.target")]),t._v("\n")])])]),a("p",[t._v("Enable and start the service:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" autossh-tunnel\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start autossh-tunnel\n")])])]),a("p",[t._v("The port forwarding with a reverse ssh-tunnel is now complete.\nYou should be able access the ports/services of the host computer through the IP of the VPS.")]),t._v(" "),a("h2",{attrs:{id:"monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#monitoring"}},[t._v("#")]),t._v(" Monitoring")]),t._v(" "),a("p",[t._v("Check if there are any errors on the host computer:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" journalctl -f -n "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("  -u autossh-tunnel\n")])])]),a("p",[t._v("To check if tunnel is active on the VPS:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tulpn\n")])])]),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[t._v("#")]),t._v(" Resources")]),t._v(" "),a("ul",[a("li",[t._v("Raspiblitz FAQ: "),a("a",{attrs:{href:"https://github.com/rootzoll/raspiblitz/blob/master/FAQ.md#how-to-setup-port-forwarding-with-a-ssh-tunnel",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to setup port-forwarding with a SSH tunnel?"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("RaspiBolt Docs: "),a("a",{attrs:{href:"https://stadicus.github.io/RaspiBolt/raspibolt_21_security.html#login-with-ssh-keys",target:"_blank",rel:"noopener noreferrer"}},[t._v("Login with SSH keys"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=r.exports}}]);