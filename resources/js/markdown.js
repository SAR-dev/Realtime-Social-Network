const rules = [
    [/([^\n]+\n)/g, '<div>$1</div>'],
    [/@spoiler\s?([^\*]+)\*/g, '<span class="spoiler">$1</span>'],
    [/@bold\s?([^\*]+)\*/g, '<b>$1</b>'],
    [/@italic\s?([^\*]+)\*/g, '<i>$1</i>'],
    [/@link\s?([^\*]+)\*/g, '<a href="$1" target="_blank" style="text-decoration: none">$1</a>'],
    [/@image\s?([^\*]+)\*/g, '<div class="my-1"><img src="$1" style="max-height: 200px"></div>'],
]
export default {
    bind(el){
        let html = el.textContent;
        rules.forEach(([rule, template]) => {
            html = html.replace(rule, template);
        })
        el.innerHTML = html;
    }
}