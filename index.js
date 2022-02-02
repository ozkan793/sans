cconst Discord = require('discord.js');
const client  = new Discord.Client();
const işaret = require('./prefix.json');
const { Client, MessageEmbed } = require('discord.js');

var prefix = işaret.prefix

client.on('ready' , () => {
    console.log('Sunucuya Girdi Bot sunucu' + client.guilds.cache.size);
    client.user.setActivity('Star Development s!yardım | Beni Sunucuna Davet Et! (Sunucuya Ekle tuşuna basmayı unutma! <3)', { type: 'PLAYING' })
  .then(presence => console.log(`Durum ${presence.activities[0].name} oldu.`))
  .catch(console.error);
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === prefix + 'destek') {
        msg.author.send('Destek Sunucumuz: https://discord.gg/tkADDcDTEn ');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'sa') {
        msg.channel.send('Aleyküm selam, hoşgeldin.');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'naber') {
        msg.channel.send('İyidir, Senden Naber?');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'amk') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'yarrak') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
})

client.on('message' , msg => {
  if (msg.content.toLowerCase() === prefix + 'besle') {
    msg.react('😃')
      msg.channel.send('Beni besledin! Açlıktan ölmüştüm çok sağol. ');
  }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'mal') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'oc') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'oç') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'sg') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'sq') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'sik') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'orospu') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'ananı') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'orosbu') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'amına koyim') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'piç') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'aq') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === 'gerizekalı') {
        msg.delete()
        msg.channel.send('Sence Bunu Kullanman Serbestmi Sanıyorsun!');
    }
});

client.on('message' , msg => {
    if (msg.content.toLowerCase() === prefix + 'destek') {
        msg.react('🧐')
        msg.channel.send('Yardım mesajı DM kutunuza gönderildi!');
    }
});


client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'botbilgi') {
      const kanal = new MessageEmbed()
  
      .setTitle('Sans Bot Bilgi')
      .setDescription('Yapım Şirketi: STAR DEVELOPMENT \n Yapımcı: SanS#7944 \n Durumum: Geliştirilme \n Premium Durumu: Yok \n https://discord.gg/tkADDcDTEn Destek Sunucusu!')
      .setAuthor('SANS')
      .setColor("RANDOM")
      .setThumbnail('https://cdn.discordapp.com/attachments/935215087965331499/935484617706831872/sans.png')
      .addField(' **Star Development Owners:**  *SanS#7944 | WONTED#4467*');
      message.channel.send(kanal);
    } 
  });

  client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'yeni') {
      const kanal = new MessageEmbed()
  
      .setTitle('Sans Bota eklenecek özellikler')
      .setDescription('**Premium;** \n Premium özelliği için Star Development sunucusunda bulunmanız gerekiyor, katılmak için s!botbilgi. Premium 3 bölüm olarak gelecek. Daha fazla bilgi için sunucumuzdaki premium-bilgi kanalına göz atınız.!')
      .setAuthor('SANS')
      .setColor("RANDOM")
      .setThumbnail('https://cdn.discordapp.com/attachments/935215087965331499/935484617706831872/sans.png')
      .addField(' **Star Development Owners:**  *SanS#7944 | WONTED#4467*');
      message.channel.send(kanal);
    } 
  });

  client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'yardım') {
      const kanal = new MessageEmbed()
  
      .setTitle('Sansbot Yardım Menüsü')
      .setDescription(`Destek Sunucumuz İçin: s!destek \n ------------------------------- \n Kullanıcıyı Atmak İçin: s!kick @user \n ------------------------------- \n Kullanıcıyı Yasaklamak İçin: s!ban @user \n ------------------------------- \n Bot hakkında bilgi için: s!botbilgi \n ------------------------------- \n Bir üyeye rol atamak için: s!rolver @Üye @Rol \n ------------------------------- \n Oylama yapmak için s!oylama: |oylama| \n ------------------------------- \n Benim canım kardeşimi görmek için: s!kardeşim \n ------------------------------- \n Müzik dinlemek için: s!play |müzik veya video urlsi| \n ------------------------------- \n Benle sohbet etmek için: sans demen yeterli! \n ------------------------------- \n Dünya turuna çıkmak için: s!dunyaturu \n ------------------------------- \n  Sana film önermem için s!filmöner \n ------------------------------- \n Tarihi yerleri görmek için s!tarihi-gezi \n ------------------------------- \n`)
      .setAuthor('SANS')
      .setColor("RANDOM")
      .setThumbnail('https://cdn.discordapp.com/attachments/935215087965331499/935484617706831872/sans.png')
      .addField('0xYn#7944 | WONTED#4467');
      message.channel.send(kanal);
    }
  });

  client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'kardeşim') {
      const kanal = new MessageEmbed()
  
      .setTitle('Ben SANS Buda Benim Canım Kardeşim')
      .setDescription('Drak#4578')
      message.channel.send(kanal);
    }
  });

  client.on('message', message => {
    if (!message.guild) return;
    if (message.content.startsWith('s!kick')) {
      if (!message.member.hasPermission('KİCKMEMBERS')) return message.channel.send('Bunu yapamazsın')
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .kick()
            .then(() => {
            const log = message.guild.channels.cache.find(channel => channel.name === 'yetkili-log')
             log.send(`${user.tag} kişisi uzaya fırlatıldı!`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
        } else {
          message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
        }
      } else {
        message.reply("Atılacak kişiyi yazmadın");
      }
    }
  });

  client.on('message', message => {
    if (!message.guild) return;
  if (message.content.startsWith('s!ban')) {
      if (!message.member.hasPermission('BANMEMBERS')) return message.channel.send('Bunu yapamazsın')
      const user = message.mentions.users.first();
      if (user) {
        const member = message.guild.member(user);
        if (member) {
          member
            .ban()
            .then(() => {
            const log = message.guild.channels.cache.find(channel => channel.name === 'yetkili-log')
             log.send(`${user.tag} Kişisi Bir Daha Dönemeyecek Şekilde Uzaya Fırlatıldı!`);
            })
            .catch(err => {
              message.reply('Bunu yapamam.');
              console.error(err);
            });
        } else {
          message.reply("Bahsettiğin kişi bizim sunucuda bulunmuyor");
        }
      } else {
        message.reply("Yasaklanacak kişiyi yazmadın.");
      }
    }
  });
  
  client.on("guildMemberAdd", member => {
    try {
    let role = member.guild.roles.cache.find(role => role.name === 'Üye')
    member.roles.add(role);
  } catch(e) {
    console.log(e)
  }
  });

  client.on("message", message => {
    if (message.content.startsWith('s!rolver')) {
      if (!message.member.hasPermission('MANAGE ROLES')) return message.channel.send('Bunu yapamazsın')
      let role = message.mentions.roles.first();
      let member = message.mentions.members.first();
      member.roles.add(role)
    }
  });

  client.on('message', message => {
    if (message.content.startsWith('s!oylama')) {
      if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bunu yapamazsın')
      const args = message.content.split(' ').slice(1)
      const botmesajı = args.join(" ")
      if (!botmesajı) return message.reply('Oylamanın ne olduğunu bilmeden oylama oluşturmamı istiyorsun, benmi yanlış görüyorum?')
      message.delete(message.author)
      const embed = new MessageEmbed()
      .setTitle('OYLAMA')
      .setDescription(botmesajı)
      .setFooter('Sizce?');
      message.channel.send({ embed: embed }).then( embedMessage => {
        embedMessage.react("✅")    
        embedMessage.react("❎")    
      })
    }
  })

  client.on('message', message => {
    if (message.content.toLowerCase() === 's!fıkra') {
      var Fıkra1 = [
        'Temel aldığı bir daktiloyu bozuk diye geri götürdü. Satıcı: "neresi bozuk? Sapasağlam daktilo!" dedi. Temel: "2 tane a yok saat yazamıyorum!"',
        'Lise çağındaki çocuk kayıt olmak için okula gider. Adını sorarlar çocuk derki Mememehmet Yayayayakut. Sorarlar: Oğlum kekememisin sen. Çocuk: Hayır efendim babam kekemeydi...',
        'Adam gümrükten papağanı geçirebilmek için bir kutuya koymuş, üzerine "Kırılacak Eşya" yazmış. Memur yazıyı okuyunca kutuyu böyle bir silkelemeye başlamış. Ardındanda papağan hafif bir sesle "Şangır Şungur Şangır Şungur" demiş...',
        'Temel eldiven ile yazı yazıyormuş. Herkes demişki neden eldivenle yazıyorsun zor olmuyormu? Temel demişki "El yazımın tanınmasını istemiyorum!"'      
      ];
      var fıkra1random = Math.floor(Math.random()*Fıkra1.length);
      const embed = new MessageEmbed()
      .setTitle('Sans Bot Fıkra')
      .addField('Alsana bir fıkra!', `${Fıkra1[fıkra1random]}`)
      message.reply(embed);
    }
  } )

  client.on('message', async message => {
    if(message.content.startsWith('s!play')) {
      const args = message.content.split(' ').slice(1)
      const botmesajı = args.join(" ")
      if (!botmesajı) return message.reply('Hangi müziği çalacağımı yazmadınız!')
      if (message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        const ytdl = require ('ytdl-core');
        connection.play(ytdl(`${botmesajı}`, { filter: 'audioonly' }))
      } else {
        message.reply('Bir sesli kanalda değilsiniz!')
      }
    }
  })

  client.on('message', message => {
    if (message.content.toLowerCase() === 'sans') {
      var yapayzeka1 = [
        'Vay be öyle olsun...',
        'Hayvanlar, onlar çok garip.',
        'Beni kim yaptı? Ben neyim?!',
        'Fıkra anlatayımmı?',
        'Beni durmadan rahatsız etmeye utanmıyormusun!',
        'Ne var yine!',
        'Ha'
      ];
      var yapayzeka1random = Math.floor(Math.random()*yapayzeka1.length);
      const embed = new MessageEmbed()
      .addField('Hey!', `${yapayzeka1[yapayzeka1random]}`)
      message.reply(embed);
    }
  } )

  client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'dunyaturu') {
      var yapayzeka1 = [
        'Azerbaycan',
        'Rusya',
        'Amerika',
        'Kanada',
        'Gürcistan',
        'Yunanistan',
        'Kırgızistan',
        'Ukrayna',
        'Moğolistan',
        'Burkina Faso',
        'BAE',
        'Fransa',
        'Meksika',
        'Kuzey Kıbrıs TC',
        'Almanya',
        'İtalya',
        'İngiltere',
        'Özbekistan',
        'Suriye',
        'Çin',
        'Japonya',
        'Belçika',
        'Hollanda',
        'Çek Cumhuriyeti',
        'Bahahamalar',
        'Venezuela',
        'Dostum biraz dinlen.'
       ];
      var yapayzeka1random = Math.floor(Math.random()*yapayzeka1.length);
      const embed = new MessageEmbed()
      .addField('Dünya turuna çıktın! Çıkan ülke;', `${yapayzeka1[yapayzeka1random]}`)
      message.reply(embed);
    }
  } )

  client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'filmöner') {
      var yapayzeka1 = [
       'Spider-Man 1,2,3',
       'Avengers Serisi',
       'Doctor Strange',
       'Venom',
       'Thor',
       'Black Panther'
       ];
      var yapayzeka1random = Math.floor(Math.random()*yapayzeka1.length);
      const embed = new MessageEmbed()
      .addField('Bence İzlemelisin!', `${yapayzeka1[yapayzeka1random]}`)
      message.reply(embed);
    }
  } )

 client.on('message', message => {
    if (message.content.toLowerCase() === prefix + 'tarihi-gezi') {
      var yapayzeka1 = [
       'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sumela_From_Across_Valley.JPG/1920px-Sumela_From_Across_Valley.JPG',
       'https://i.pinimg.com/originals/4c/63/dd/4c63ddadfe943ec225f3a9586bc47772.jpg',
       'https://images.etstur.com/definitions/etstur/page_management/00eff840cbeda11440163c275816d29d_20210326152250.jpg',
       'https://media-cdn.t24.com.tr/media/library/2020/06/1591855878989-ayasofya.jpg',
       'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Kız_Kulesi_February_2013_01.jpg/405px-Kız_Kulesi_February_2013_01.jpg',
       'https://blog.obilet.com/wp-content/uploads/2018/07/aspendos-antik-tiyatro.webp',
       'https://blog.obilet.com/wp-content/uploads/2018/07/nemrut-da%C4%9F%C4%B1.webp',
       'https://blog.obilet.com/wp-content/uploads/2018/07/an%C4%B1-haraberleri.webp',
       'https://blog.obilet.com/wp-content/uploads/2018/07',
       'https://blog.biletbayi.com/wp-content/uploads/2020/03/sultanahmet-camii-768x512.jpg',
       'https://blog.biletbayi.com/wp-content/uploads/2020/03/gordion-antik-kenti-835x420.jpg',
       'https://blog.biletbayi.com/wp-content/uploads/2020/03/beypazari-evleri',
       'uploads/2020/03/bursa-ulu-cami-768x512.jpg'
       ];
      var yapayzeka1random = Math.floor(Math.random()*yapayzeka1.length);
      const embed = new MessageEmbed()
      .setImage(`${yapayzeka1[yapayzeka1random]}`)
      .setTitle('Oralar nasıl? Keşke bende gidebilsem!')
      message.reply(embed);
    }
  } )


client.login('OTM4MTYzNDk5MzA0MTIwMzcw.YfmS2A.wN9x22vo7Ra7_KdNUCfqQWLXyQw');
 client.login('OTM1MjEzMDA3NjE5OTE1Nzc2.Ye7W_A.mJget-RoJJ1AjUxB2XG4rb8YYJc');
