import { useState } from "react"
import './Jogo.css'

function Jogo() {
    const[emoji, setEmoji] = useState('👌')
    // let emojis = ['😂', '😫', '😁', '😘', '💕', '🎶', '🤷‍♂️', '😎', '😛', '😱']
    let emojis = [
  // Seus emojis originais
  '😂', '😫', '😁', '😘', '💕', '🎶', '🤷‍♂️', '😎', '😛', '😱',

  // Personagens e Seres (30)
  '👑', '🤴', '👸', '🧙‍♂️️', '🧝‍♀️', '🧛‍♂️', 'Zombie', '🤖', '👽', 'Superhero',
  '🕵️‍♂️', '🥷', '🏴‍☠️', '🤠', '👨‍🚀', '👸', '👨‍🚒', '👮‍♂️', '👻', '👹',
  '🧌', '🧜‍♀️️', '🧚‍♀️', '👶', '👴', '👼', '👰', '🦹‍♂️', '🤡', '🤴',

  // Animais e Criaturas (20)
  '🐉', '🦄', '🐺', '🦁', '🦉', '🐍', '🦅', '🦈', '🐱', '🐶',
  '🦇', '🕷️', '🐙', '🦕', '🦊', '🐸', '🐝', '🐒', '🐗', '🐎',

  // Lugares, Construções e Cenários (20)
  '🏰', '🏚️', '⛺', '🚀', '⛵', 'Island', '🌲', '🌋', '🏥', '🏫',
  '🎪', '🏛️', '🌌', '🏙️', '🕋', '🎡', '⛩️', '🏜️', '⚓', '🛸',

  // Objetos, Ferramentas e Relíquias (35)
  '🗝️', '🗡️', '🛡️', '📜', '💎', '👑', '🔮', '🧪', '💣', '🗺️',
  '🧰', '🔦', '🚪', '📦', '💰', '👑', '📜', '🕯️', '📱', '💻',
  '⏳', '🧭', '💍', '🎁', '🎈', '🎭', '🎨', '🔍', '🔐', '📸',
  '📖', '💌', '🧩', '🏆', '💉',

  // Clima, Natureza e Elementos (25)
  '🔥', '⚡', '❄️', '🌊', '🌪️', '🌟', '🌙', '☀️', '🌈', '☄️',
  '🍃', '🍄', '🌸', '🕸️', '🌑', '💥', '💧', '🌫️', '🥀', '🪐',
  '🌾', '❄️', '🌋', '✨', '⚡',

  // Ações, Eventos e Reviravoltas (20)
  '💥', '🏃‍♂️', '👁️‍🗨️', '🚪', '🔮', '🚨', '❓', '❗', '🛑', '☠️',
  '🩸', ' footprint ', '🗣️', '💭', '🤝', '🔒', '👀', '⏳', '🎯', '💫'
];
    function sortear(){
        let i = Math.floor(Math.random()*10) 
        setEmoji(emojis[i])
    }
  return (
    <div className="jogo">
        <button className="bt-emoji" onClick={sortear}>
            <p className="p-emoji">{emoji}</p>
        </button>   
    </div>
  )
}
export default Jogo