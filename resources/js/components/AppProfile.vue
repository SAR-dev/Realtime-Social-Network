<template>
  <v-container>
    <v-row class="justify-center">
      <v-card max-width="800" flat class="grey lighten-5">
        <v-row class="text-center">
          <v-col cols="12">
            <v-avatar size="150" color="grey darken-3" style="border-radius: 50%">
              <v-img
                src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
              ></v-img>
            </v-avatar>
          </v-col>
        </v-row>

        <v-row>
          <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <template v-slot:activator="{ on }">
              <v-btn color="cyan" depressed class="mx-auto" dark v-on="on">Change</v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
              </v-toolbar>
              <v-container>
                <v-row>
                  <v-col cols="4">
                    <div class="text-center sticky style-4">
                      <avataaar
                        :avatar-style="avatarStyle"
                        :accessories-type="accessoriesType"
                        :clothe-type="clotheType"
                        :clothe-color="clotheColor"
                        :eyebrow-type="eyebrowType"
                        :eye-type="eyeType"
                        :facial-hair-color="facialHairColor"
                        :facial-hair-type="facialHairType"
                        :graphic-type="graphicType"
                        :hair-color="hairColor"
                        :mouth-type="mouthType"
                        :skin-color="skinColor"
                        :top-type="topType"
                      ></avataaar>
                      <div>
                        <v-btn rounded class="cyan white--text px-10 mt-5" @click="saveSvg">Save</v-btn>
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="8">
                    <div>
                      <v-select
                        :items="avatar"
                        label="Avatar Style"
                        v-model="avatarStyle"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div>
                      <v-select :items="top" label="Top" v-model="topType" dense outlined></v-select>
                    </div>

                    <div>
                      <v-select
                        :items="accessories"
                        label="Accessories"
                        v-model="accessoriesType"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div>
                      <v-select :items="hair" label="Hair Color" v-model="hairColor" dense outlined></v-select>
                    </div>

                    <div>
                      <v-select
                        :items="facialHairT"
                        label="Facial Hair"
                        v-model="facialHairType"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div v-if="facialHairType && facialHairType != 'Blank'">
                      <v-select
                        :items="facialHairC"
                        label="Facial Hair Color"
                        v-model="facialHairColor"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div>
                      <v-select
                        :items="clotheT"
                        label="Clothes"
                        v-model="clotheType"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div
                      v-if="clotheType && clotheType != 'BlazerShirt' && clotheType != 'BlazerSweater'"
                    >
                      <v-select
                        :items="clotheC"
                        label="Clothes Color"
                        v-model="clotheColor"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div v-if="clotheType && clotheType == 'GraphicShirt'">
                      <v-select
                        :items="graphic"
                        label="Avatar Style"
                        v-model="graphicType"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div>
                      <v-select :items="eye" label="Eye" v-model="eyeType" dense outlined></v-select>
                    </div>

                    <div>
                      <v-select
                        :items="eyebrow"
                        label="Eyebrow"
                        v-model="eyebrowType"
                        dense
                        outlined
                      ></v-select>
                    </div>

                    <div>
                      <v-select :items="mouth" label="Mouth" v-model="mouthType" dense outlined></v-select>
                    </div>

                    <div>
                      <v-select :items="skin" label="Skin" v-model="skinColor" dense outlined></v-select>
                    </div>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-dialog>
        </v-row>

        <v-row justify="center" class="mt-5">
          <v-expansion-panels popout>
            <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
              <v-expansion-panel-header>
                <v-row align="center" class="spacer" no-gutters>
                  <v-col cols="4" sm="2" md="1">
                    <v-avatar size="36px">
                      <img
                        v-if="message.avatar"
                        alt="Avatar"
                        src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                      />
                      <v-icon v-else :color="message.color" v-text="message.icon"></v-icon>
                    </v-avatar>
                  </v-col>

                  <v-col class="hidden-xs-only" sm="5" md="3">
                    <strong v-html="message.name"></strong>
                  </v-col>

                  <v-col class="text-no-wrap" cols="5" sm="3">
                    <strong v-html="message.title"></strong>
                  </v-col>
                </v-row>
              </v-expansion-panel-header>

              <v-expansion-panel-content>
                <v-divider></v-divider>
                <v-card-text v-text="lorem"></v-card-text>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row>
      </v-card>
    </v-row>
  </v-container>
</template>


<script>
import Avataaar from "vue-avataaar";

export default {
  components: {
    Avataaar
  },
  data() {
    return {
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'John Leider',
          title: 'Welcome to Vuetify.js!',
        },
        {
          color: 'red',
          icon: 'people',
          name: 'Social',
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'local_offer',
          name: 'About',
          title: 'About Me!',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet, at aliquam vivendum vel, everti delicatissimi cu eos. Dico iuvaret debitis mel an, et cum zril menandri. Eum in consul legimus accusam. Ea dico abhorreant duo, quo illum minimum incorrupte no, nostro voluptaria sea eu. Suas eligendi ius at, at nemore equidem est. Sed in error hendrerit, in consul constituam cum.',

      dialog: false,
      svgLink: null,
      avatarStyle: "Circle",
      avatar: ["Circle", "Transparent"],
      accessoriesType: "Kurt",
      accessories: [
        "Blank",
        "Kurt",
        "Prescription01",
        "Prescription02",
        "Round",
        "Sunglasses",
        "Wayfarers"
      ],
      clotheType: "GraphicShirt",
      clotheT: [
        "BlazerShirt",
        "BlazerSweater",
        "CollarSweater",
        "GraphicShirt",
        "Hoodie",
        "Overall",
        "ShirtCrewNeck",
        "ShirtScoopNeck",
        "ShirtVNeck"
      ],
      clotheColor: "PastelBlue",
      clotheC: [
        "Black",
        "Blue01",
        "Blue02",
        "Blue03",
        "Gray01",
        "Gray02",
        "Heather",
        "PastelBlue",
        "PastelGreen",
        "PastelOrange",
        "PastelRed",
        "PastelYellow",
        "Pink",
        "Red",
        "White"
      ],
      eyebrowType: "FlatNatural",
      eyebrow: [
        "Angry",
        "AngryNatural",
        "Default",
        "DefaultNatural",
        "FlatNatural",
        "RaisedExcited",
        "RaisedExcitedNatural",
        "SadConcerned",
        "SadConcernedNatural",
        "UnibrowNatural",
        "UpDown",
        "UpDownNatural"
      ],
      eyeType: "Happy",
      eye: [
        "Close",
        "Cry",
        "Default",
        "Dizzy",
        "EyeRoll",
        "Happy",
        "Hearts",
        "Side",
        "Squint",
        "Surprised",
        "Wink",
        "WinkWacky"
      ],
      facialHairColor: "Blonde",
      facialHairC: [
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "Brown",
        "BrownDark",
        "PastelPink",
        "Platinum",
        "Red",
        "SilverGray"
      ],
      facialHairType: "BeardLight",
      facialHairT: [
        "Blank",
        "BeardMedium",
        "BeardLight",
        "BeardMagestic",
        "MoustacheFancy",
        "MoustacheMagnum"
      ],
      graphicType: "Bat",
      graphic: [
        "Bat",
        "Cumbia",
        "Deer",
        "Diamond",
        "Hola",
        "Pizza",
        "Resist",
        "Selena",
        "Bear",
        "SkullOutline",
        "Skull"
      ],
      hairColor: "Black",
      hair: [
        "Auburn",
        "Black",
        "Blonde",
        "BlondeGolden",
        "Brown",
        "BrownDark",
        "PastelPink",
        "Platinum",
        "Red",
        "SilverGray"
      ],
      mouthType: "Smile",
      mouth: [
        "Concerned",
        "Default",
        "Disbelief",
        "Eating",
        "Grimace",
        "Sad",
        "ScreamOpen",
        "Serious",
        "Smile",
        "Tongue",
        "Twinkle",
        "Vomit"
      ],
      skinColor: "Light",
      skin: [
        "Tanned",
        "Yellow",
        "Pale",
        "Light",
        "Brown",
        "DarkBrown",
        "Black"
      ],
      topType: "Hat",
      top: [
        "NoHair",
        "Eyepatch",
        "Hat",
        "Hijab",
        "Turban",
        "WinterHat1",
        "WinterHat2",
        "WinterHat3",
        "WinterHat4",
        "LongHairBigHair",
        "LongHairBob",
        "LongHairBun",
        "LongHairCurly",
        "LongHairCurvy",
        "LongHairDreads",
        "LongHairFrida",
        "LongHairFro",
        "LongHairFroBand",
        "LongHairNotTooLong",
        "LongHairShavedSides",
        "LongHairMiaWallace",
        "LongHairStraight",
        "LongHairStraight2",
        "LongHairStraightStrand",
        "ShortHairDreads01",
        "ShortHairDreads02",
        "ShortHairFrizzle",
        "ShortHairShaggyMullet",
        "ShortHairShortCurly",
        "ShortHairShortFlat",
        "ShortHairShortRound",
        "ShortHairShortWaved",
        "ShortHairSides",
        "ShortHairTheCaesar",
        "ShortHairTheCaesarSidePart"
      ]
    };
  },
  methods: {
    saveSvg() {
      this.svgLink = `https://avataaars.io/?avatarStyle=${this.avatarStyle}&accessoriesType=${this.accessoriesType}&clotheType=${this.clotheType}&clotheColor=${this.clotheColor}&eyebrowType=${this.eyebrowType}&eyeType=${this.eyeType}&facialHairColor=${this.facialHairColor}&facialHairType=${this.facialHairType}&graphicType=${this.graphicType}&hairColor=${this.hairColor}&mouthType=${this.mouthType}&skinColor=${this.skinColor}&topType=${this.topType}`;
      console.log(this.svgLink);
    }
  }
};
</script>