import { Box, Button, Text, TextField, Image } from "@skynexui/components";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import appConfig from "../config.json";
import image from "../wanted.png";

function GlobalStyle() {
  return (
    <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: "Open Sans", sans-serif;
      }
      /* App fit Height */
      html,
      body,
      #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */
    `}</style>
  );
}

function Title(props) {
  const Tag = props.tag || "h1";
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["000"]};
          }
        `}
      </style>
    </>
  );
}

// function HomePage() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Title tag="h2">Boas vindas de volta!</Title>
//       <h2>Discord - Alura Matrix</h2>
//     </div>
//   );
// }
//export default HomePage;

export default function PaginaInicial() {
  const username = "peas";

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary[500],
          backgroundImage:
            "url(https://c4.wallpaperflare.com/wallpaper/786/286/394/one-piece-strawhat-pirates-anime-sky-wallpaper-thumb.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            width: "100%",
            maxWidth: "700px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
            opacity: 0.91,
          }}
        >
          {/* Formulário */}
          <Box
            as="form"
            styleSheet={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              width: { xs: "100%", sm: "50%" },
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <Title tag="h2">Bem vindo de volta!</Title>
            <Text
              variant="body3"
              styleSheet={{
                marginBottom: "32px",
                color: appConfig.theme.colors.neutrals["000"],
              }}
            >
              {appConfig.name}
            </Text>

            <TextField
              fullWidth
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[200],
                  mainColor: appConfig.theme.colors.neutrals[900],
                  mainColorHighlight: appConfig.theme.colors.primary[500],
                  backgroundColor: appConfig.theme.colors.neutrals[800],
                },
              }}
            />
            <Button
              type="submit"
              label="To the Grand Line!"
              fullWidth
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[500],
                mainColorLight: appConfig.theme.colors.primary[400],
                mainColorStrong: appConfig.theme.colors.primary[600],
              }}
            />
          </Box>
          {/* Formulário */}

          {/* Photo Area */}
          <Box
            styleSheet={{
              display: "flex",
              position: "relative",
              flexDirection: "column",
              alignItems: "center",
              maxWidth: "200px",
              padding: "16px",
              // backgroundColor: appConfig.theme.colors.neutrals[800],
              backgroundColor: appConfig.theme.colors.primary[500],
              backgroundImage: "url(https://i.imgur.com/3ZJ2GHf.png)",
              border: "1px solid",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: "10px",
              flex: 1,
              minHeight: "240px",
              heigh: "702px",
            }}
          >
            <Image
              styleSheet={{
                // borderRadius: "50%",
                marginBottom: "16px",
                width: "166px",
                height: "130px",
                position: "absolute",
                top: "58px",
                left: "18px",
              }}
              src={`https://github.com/${username}.png`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[850],
                fontSize: "18px",
                textAlign: "center",
                padding: "3px 10px",
                position: "absolute",
                top: "212px",
              }}
            >
              {username}
            </Text>
          </Box>
          {/* Photo Area */}
        </Box>
      </Box>
    </>
  );
}
